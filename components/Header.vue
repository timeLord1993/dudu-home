<template>
  <div class="header__wrapper">
    <div class="avatar">
      <img src="~@images/avatar.jpeg" alt="头像" srcset="" />
    </div>
    <div class="menus">
      <Menus />
    </div>
    <div class="login-register">
      <Button text="登陆/注册" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Menus from './Menus.vue'
export default defineComponent({
  name: 'Header',
  components: {
    Menus
  }
})
</script>
<script lang="ts" setup></script>

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
}
</style>
