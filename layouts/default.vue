<template>
  <div class="container mx-auto max-w-screen-lg min-h-screen">
    <div class="border-streamer mb-1.5">
      <Header />
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@components/Header.vue";

export default defineComponent({
  name: "Default",
  components: { Header }
});
</script>

<style lang="scss" scoped>
.border-streamer {
  border-bottom: 1px solid $c-ffffff;
  margin-bottom: 10px;
}
</style>
