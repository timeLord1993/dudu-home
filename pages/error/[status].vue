<script lang="ts">
export default defineComponent({
  name: "Error"
});
</script>
<script lang="ts" setup>
import { NResult } from "naive-ui";
definePageMeta({
  layout: "fullscreen"
});

const route = useRoute();
const status = route.params.status;

const errorState = reactive({
  title: {
    404: "404 资源不存在",
    403: "403 禁止访问",
    500: "500 服务器错误"
  },
  description: {
    404: "生活总归带点荒谬",
    403: "总有些门是对你关闭的",
    500: "服务器出错可能说明该雇更多程序员了"
  }
});
</script>

<template>
  <div class="page__404">
    <n-result :status="status" :title="errorState.title[status]" :description="errorState.description[status]">
      <template #footer> </template>
    </n-result>
  </div>
</template>

<style lang="scss" scoped>
.page__404 {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
