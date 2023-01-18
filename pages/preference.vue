<template>
  <n-tabs type="bar" animated>
    <n-tab-pane name="oasis" tab="Oasis"> Wonderwall </n-tab-pane>
    <n-tab-pane name="the beatles" tab="the Beatles"> Hey Jude </n-tab-pane>
    <n-tab-pane name="jay chou" tab="周杰伦"> 七里香 </n-tab-pane>
  </n-tabs>
</template>
<script lang="ts">
export default defineComponent({
  name: "Preference"
});
</script>
<script lang="ts" setup>
import { NTabs, NTabPane } from "naive-ui";
definePageMeta({
  layout: "default",
  pageTransition: {
    name: "rotate"
  }
});
</script>

<style scoped></style>
