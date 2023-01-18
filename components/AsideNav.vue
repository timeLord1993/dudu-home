<template>
  <Teleport to="body">
    <aside class="aside-wrapper md:w-2/12 h-5/6" :style="positionStyle">
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="content">
        <slot></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </aside>
  </Teleport>
</template>
<script lang="ts" setup>
const props = defineProps({
  position: {
    type: String,
    default: "left",
    validator: function (val: string): boolean {
      return ["left", "right"].includes(val);
    }
  }
});

const positionStyle = computed(() => {
  if (props.position === "left") {
    return { left: "20px" };
  } else if (props.position === "right") {
    return { right: "20px" };
  }
});
</script>
<style lang="scss" scoped>
.aside-wrapper {
  position: fixed;
  top: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  padding: 10px 15px;
  border-radius: 10px;
}
</style>
