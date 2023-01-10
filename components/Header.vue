<template>
  <div class="header__wrapper">
    <div class="avatar">
      <img src="~@images/avatar.jpeg" alt="头像" srcset="" />
    </div>
    <div class="menus">
      <Menus />
      <Search />
    </div>
    <div class="login-register">
      <Button text="登陆/注册" @click="onLogin" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Menus from './Menus.vue'
import Search from './Search.vue'
export default defineComponent({
  name: 'Header',
  components: {
    Menus
  }
})
</script>
<script lang="ts" setup>
import { useRouter } from '#app'

const router = useRouter()
function onLogin() {
  router.push('/login')
}
</script>

<style scoped lang="scss">
.header__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.avatar {
  width: 64px;
  height: 64px;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
  &:hover {
    box-shadow: 0 0 20px 5px $c-09f1a3;
    animation: avatarHover 1s linear infinite alternate;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
.menus {
  flex: 1;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@keyframes avatarHover {
  from {
    box-shadow: 0 0 0px 0 transparent;
  }
  to {
    box-shadow: 0 0 20px 5px $c-09f1a3;
  }
}
</style>
