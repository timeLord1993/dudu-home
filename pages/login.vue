<template>
  <div>登陆</div>
</template>

<script lang="ts" setup>
import { useDefaultStore } from '~/store'

definePageMeta({
  layout: 'default'
})

const defaultStore = useDefaultStore()
const userInfo = await defaultStore.getUser()
</script>

<style scoped></style>
