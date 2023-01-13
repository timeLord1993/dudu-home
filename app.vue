<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="darkThemeOverrides">
    <NuxtLayout>
      <NuxtPage />
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
        primaryColor: "#01082F"
      }
    };
    return {
      darkTheme,
      darkThemeOverrides
    };
  }
});
</script>
<style scoped></style>
