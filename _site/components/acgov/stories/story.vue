<template>
  <div class="" :class="storyType">
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
    // default is full length
    // full: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  data() {
    return {
      currentSlot: '',
      // storyType: {
      //   'w-1/2': this.left || this.right,
      //   'flex-row': this.left,
      //   'flex-row-reverse': this.right,
      //   'w-full': this.full,
      // },
    }
  },
  created() {
    this.getProps()
  },
  methods: {
    getProps() {
      if (this.left) {
        this.currentSlot = 'left'
        this.right = false
      } else if (this.right) {
        this.currentSlot = 'right'
        this.left = false
      } else {
        this.currentSlot = 'full'
      }
    },
  },
}
</script>

<style scoped></style>
