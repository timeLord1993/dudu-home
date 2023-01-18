<template>
  <n-list-item>
    <n-thing>
      <template #avatar>
        <n-avatar :size="48" :src="avatarUrl" />
      </template>
      <template #header> 货币 </template>
      <template #header-extra>
        <n-button circle size="small">
          <template #icon>
            <cash-icon />
          </template>
        </n-button>
      </template>
      <template #description>
        <n-space size="small" style="margin-top: 4px">
          <n-tag :bordered="false" type="info" size="small"> 暑夜 </n-tag>
          <n-tag :bordered="false" type="info" size="small"> 晚春 </n-tag>
        </n-space>
      </template>
      <div>
        货币是为了提高交易效率而用于交换的中介商品。货币有多种形式，如贝壳粮食等自然物、金属纸张等加工品、银行卡信用卡等磁条卡、移动支付加密货币等APP。
      </div>
    </n-thing>
  </n-list-item>
</template>
<script lang="ts" setup>
import { NListItem, NSpace, NTag, NThing, NAvatar } from "naive-ui";

const avatarUrl = ref("https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg");
</script>
<style lang="scss" scoped></style>
