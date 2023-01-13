<template>
  <div>
    <n-list hoverable clickable bordered>
      <n-list-item v-for="i of 10" :key="i">
        <n-thing title="相见恨晚" content-style="margin-top: 10px;">
          <template #description>
            <n-space size="small" style="margin-top: 4px">
              <n-tag :bordered="false" type="info" size="small"> 暑夜 </n-tag>
              <n-tag :bordered="false" type="info" size="small"> 晚春 </n-tag>
            </n-space>
          </template>
          奋勇呀然后休息呀<br />
          完成你伟大的人生
        </n-thing>
      </n-list-item>
    </n-list>
  </div>
</template>

<script lang="ts" setup>
import { NList, NListItem, NSpace, NTag, NThing } from "naive-ui";
definePageMeta({
  layout: "default"
});
</script>

<style scoped></style>
