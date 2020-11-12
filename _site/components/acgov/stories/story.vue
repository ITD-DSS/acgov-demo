<template>
  <div class="flex" :class="storyType">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Story',
  props: {
    left: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
    full: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      storyType: {
        'w-1/2': this.left || this.right,
        'flex-row': this.left,
        'flex-row-reverse': this.right,
        'w-full': this.full,
      },
    }
  },
}
</script>

<style scoped></style>
