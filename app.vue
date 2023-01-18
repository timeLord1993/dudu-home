<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="darkThemeOverrides">
    <NuxtLayout>
      <NuxtPage
        :transition="{
          name: 'bounce',
          mode: 'out-in'
        }"
      />
    </NuxtLayout>
  </n-config-provider>
</template>
<script lang="ts">
import { NConfigProvider, darkTheme } from "naive-ui";
export default defineComponent({
  name: "App",
  components: {
    NConfigProvider
  },
  setup() {
    const darkThemeOverrides = {
      common: {
        // primaryColor: "#01082F" // 设置主题颜色
      }
    };
    return {
      darkTheme,
      darkThemeOverrides
    };
  }
});
</script>
<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
