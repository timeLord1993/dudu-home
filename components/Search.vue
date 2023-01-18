<template>
  <div class="input-wrapper">
    <input v-model="keywords" />
    <n-icon :size="20" :component="SearchOutline" @click="onSearch"></n-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Search"
});
</script>
<script lang="ts" setup>
import { ref } from "vue";
import { NIcon } from "naive-ui";
import { SearchOutline } from "@vicons/ionicons5";

const keywords = ref<string>("");

const emit = defineEmits(["find"]);
function onSearch() {
  console.log("搜索条件", keywords);

  emit("find", keywords);
}
</script>

<style scoped lang="scss">
.input-wrapper {
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px);
  border-radius: 20px;
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    height: 36px;
    background: transparent;
    border: none;
    outline: none;
    text-indent: 5px;
    font-size: 18px;
  }
}
</style>
