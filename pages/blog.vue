<template>
  <div>博客</div>
  <md-editor v-model="state.text" :theme="state.theme" />
</template>
<script lang="ts">
export default defineComponent({
  name: "Blog"
});
</script>
<script lang="ts" setup>
import { reactive } from "vue";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";

const state = reactive({
  text: "hello world",
  theme: "dark"
});
</script>

<style scoped></style>
