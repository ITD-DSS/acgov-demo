<template>
  <div :class="storyType">
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
        'col-sm-6': this.left || this.right,
        'primary-stories': this.left,
        'secondary-stories': this.right,
        'col-sm-12': this.full,
      },
    }
  },
}
</script>

<style scoped></style>
