<template>
  <component :is="is" :class="`paragraphe__${type}`">
    <slot />
  </component>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  is: {
    type: String,
    default: "p",
  },
  type: {
    type: String,
    default: "normal",
  },
});
</script>

<style lang="scss" scoped>
p {
  font-size: 14px;
}
.paragraphe {
  &__bold {
    font-weight: bold;
  }
}
</style>
