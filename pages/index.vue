<template>
  <div>
    <n-list hoverable clickable :show-divider="false">
      <list-item v-for="i of 20" :key="i" />
    </n-list>
    <AsideNav />
  </div>
</template>

<script lang="ts" setup>
import { NList } from "naive-ui";
import ListItem from "@components/ListItem.vue";
import AsideNav from "@components/AsideNav.vue";
definePageMeta({
  layout: "default",
  pageTransition: {
    name: "rotate"
  }
});
</script>

<style scoped></style>
