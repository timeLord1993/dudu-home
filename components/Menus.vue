<template>
  <nav class="menu">
    <ol>
      <li class="menu-item menu-item__hover"><a href="#0">Blog</a></li>
      <li class="menu-item menu-item__hover"><a href="#0">About</a></li>
      <li class="menu-item menu-item__hover">
        <a href="#0">Widgets</a>
        <ol class="sub-menu">
          <li class="menu-item"><a href="#0">Big </a></li>
          <li class="menu-item"><a href="#0">Bigger </a></li>
          <li class="menu-item"><a href="#0">Huge </a></li>
        </ol>
      </li>
      <li class="menu-item menu-item__hover">
        <a href="#0">Kabobs</a>
        <ol class="sub-menu">
          <li class="menu-item"><a href="#0">Shishkabobs</a></li>
          <li class="menu-item"><a href="#0">BBQ kabobs</a></li>
          <li class="menu-item"><a href="#0">Summer kabobs</a></li>
        </ol>
      </li>
      <li class="menu-item menu-item__hover"><a href="#0">Contact</a></li>
    </ol>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Menus'
})
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
        content: '';
        display: block;
        height: 0;
        width: 0;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent rgba(255, 255, 255, 0.3) transparent;
        backdrop-filter: blur(4px);
        position: absolute;
        left: 20px;
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
