<template>
  <div>学习 {{ route.query.type }}</div>
</template>

<script lang="ts" setup>
import { useDefaultStore } from '~/store'
import { useRoute } from '#app'

definePageMeta({
  layout: 'default'
})
const route = useRoute()
const defaultStore = useDefaultStore()
const userInfo = await defaultStore.getUser()
</script>

<style scoped></style>
