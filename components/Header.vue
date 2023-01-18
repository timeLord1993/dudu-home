<template>
  <div class="header__wrapper">
    <div class="avatar">
      <img src="~@images/logo.png" alt="头像" srcset="" />
    </div>
    <div class="menus">
      <Menus />
      <Search />
    </div>
    <div class="login-register">
      <Button text="登陆/注册" @click="onLogin" />
    </div>
  </div>
  <n-modal v-model:show="showLoginModal">
    <n-card style="width: 500px" title="登陆" role="dialog" aria-modal="true">
      <n-form
        ref="formRef"
        :model="model"
        :rules="rules"
        label-placement="left"
        label-width="auto"
        require-mark-placement="right-hanging"
        size="medium"
        :style="{
          maxWidth: '640px'
        }"
      >
        <n-form-item label="用户名" path="inputValue">
          <n-input v-model:value="model.userName" placeholder="用户名" />
        </n-form-item>
        <n-form-item label="密码" path="inputValue">
          <n-input v-model:value="model.password" placeholder="密码" />
        </n-form-item>
      </n-form>
      <template #footer></template>
      <div style="display: flex; justify-content: flex-end">
        <n-space>
          <n-button type="primary" strong secondary> 登陆 <n-icon :component="LogIn" /> </n-button>
          <n-button type="warning" strong secondary @click="onCancel"> 取消 <n-icon :component="CloseCircleOutline" /></n-button>
        </n-space>
      </div>
    </n-card>
  </n-modal>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header"
});
</script>
<script lang="ts" setup>
import { ref } from "vue";
import { NModal, NCard, NForm, NFormItem, NInput, NButton, NSpace, NIcon } from "naive-ui";
import { LogIn, CloseCircleOutline } from "@vicons/ionicons5";
import Menus from "./Menus.vue";
import Search from "./Search.vue";
import Button from "./Button.vue";

const showLoginModal = ref(false);
function onLogin() {
  showLoginModal.value = true;
}

function onCancel() {
  showLoginModal.value = false;
}

const { model, rules } = reactive({
  model: {
    userName: "",
    password: ""
  },
  rules: {
    userName: {
      required: true,
      trigger: ["blur", "input"],
      message: "请输入用户名称"
    },
    password: {
      required: true,
      trigger: ["blur", "input"],
      message: "请输入密码"
    }
  }
});
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
