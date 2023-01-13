<template>
  <nav class="menu">
    <ol>
      <li v-for="item of _store.menusList" class="menu-item menu-item__hover">
        <template v-if="item.link">
          <nuxt-link :to="item.link">
            {{ item.name }}
          </nuxt-link>
        </template>
        <template v-if="hasChildren(item)">
          <span>{{ item.name }}</span>
          <ol class="sub-menu">
            <li v-for="childItem of item.children" class="menu-item">
              <template v-if="childItem?.link">
                <nuxt-link :to="childItem.link">
                  <a :href="childItem.outLink">{{ childItem.name }} </a>
                </nuxt-link>
              </template>
              <template v-else-if="childItem?.outLink">
                <a :href="childItem.outLink" target="_blank">{{ childItem.name }} </a>
              </template>
            </li>
          </ol>
        </template>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Menus"
});
</script>
<script lang="ts" setup>
import { reactive } from "vue";

type MenusType = {
  name: string;
  link?: string;
  children?: MenuItemType[];
};
type MenuItemType = {
  name: string;
  link?: string;
  outLink?: string;
};
type MenuStoreType = {
  menusList?: MenusType[];
};

const _store = reactive<MenuStoreType>({
  menusList: [
    {
      name: "主页",
      link: "/"
    },
    {
      name: "博客",
      link: "/blog"
    },
    {
      name: "学习",
      children: [
        {
          name: "svelte",
          outLink: "https://www.sveltejs.cn/"
        },
        {
          name: "vue",
          outLink: "https://cn.vuejs.org/"
        },
        {
          name: "react",
          outLink: "https://react.docschina.org/"
        },
        {
          name: "nextJs",
          outLink: "https://www.nextjs.cn/"
        },
        {
          name: "nuxtJs",
          outLink: "https://nuxt.com/"
        },
        {
          name: "sapperJs",
          outLink: "https://www.sapperjs.com/"
        }
      ]
    },
    {
      name: "资源",
      children: [
        {
          name: "github",
          outLink: "https://github.com/"
        },
        {
          name: "知乎",
          outLink: "https://www.zhihu.com/"
        },
        {
          name: "掘金",
          outLink: "https://juejin.cn/"
        }
      ]
    },
    {
      name: "关于",
      link: "/about"
    }
  ]
});

function hasChildren(data: Record<string, any>): boolean {
  return data.hasOwnProperty("children") && data.children.length;
}
</script>

<style scoped lang="scss">
.menu > ol {
  height: 100%;
  display: flex;
  align-items: flex-end;
  .menu-item {
    position: relative;
    .sub-menu {
      display: none;
      width: auto;
      position: absolute;
      &::before {
        content: "";
        display: block;
        height: 0;
        width: 0;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent rgba(255, 255, 255, 0.3) transparent;
        backdrop-filter: blur(4px);
        position: absolute;
        left: 12px;
        top: -10px;
      }
    }
    &:hover > .sub-menu {
      animation: subMenuShow 0.3s linear;
      display: block;
      background: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(4px);
      padding: 10px 15px;
      border-radius: 10px;
    }
  }
}
.menu > ol > .menu-item {
  margin: 10px;
  font-size: 20px;
}
.sub-menu > .menu-item {
  font-size: 16px;
  margin-bottom: 8px;
  &:hover {
    transform: scale(1.15);
    animation: subMenuItemsHover 0.3 ease-in;
  }
}

.menu-item__hover:hover > a {
  animation: menuItemHover 0.3s linear;
  color: $c-09f1a3;
  text-shadow: $c-09f1a3 1.5px 1.5px 3px;
}

@keyframes menuItemHover {
  from {
    color: $c-ffffff;
  }
  to {
    color: $c-09f1a3;
    text-shadow: $c-09f1a3 1.5px 1.5px 3px;
  }
}

@keyframes subMenuShow {
  from {
    display: none;
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }
  to {
    display: block;
    opacity: 1;
    transform: translate(0, 0) scale(1);
  }
}

@keyframes subMenuItemsHover {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.15);
  }
}
</style>
