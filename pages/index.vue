<template>
  <div>
    <n-list hoverable clickable bordered>
      <list-item v-for="i of 20" :key="i" />
    </n-list>
  </div>
</template>

<script lang="ts" setup>
import { NList } from "naive-ui";
import ListItem from "@components/ListItem.vue";
definePageMeta({
  layout: "default",
  pageTransition: {
    name: "rotate"
  }
});
</script>

<style scoped></style>
