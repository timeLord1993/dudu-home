<template>
  <md-editor v-model="state.text" :theme="state.theme" :page-fullscreen="state.fullscreen" :toolbars="state.toolbars" />
</template>
<script lang="ts">
export default defineComponent({
  name: "Editor"
});
</script>
<script setup lang="ts">
import { reactive } from "vue";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";

definePageMeta({
  layout: "fullscreen"
});

const state = reactive({
  text: "hello world",
  theme: "dark",
  fullscreen: true,
  toolbars: [
    "bold",
    "underline",
    "italic",
    "-",
    "title",
    "strikeThrough",
    "sub",
    "sup",
    "quote",
    "unorderedList",
    "orderedList",
    "task",
    "-",
    "codeRow",
    "code",
    "link",
    "image",
    "table",
    "mermaid",
    "katex",
    "-",
    "revoke",
    "next",
    "save",
    "=",
    "preview",
    "htmlPreview",
    "catalog"
  ]
});
</script>
<style lang="scss"></style>
