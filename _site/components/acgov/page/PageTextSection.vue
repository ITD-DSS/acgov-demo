<template>
  <section class="text-black box-content my-4 pt-2">
    <h3 class="text-sm font-medium pb-2">TextSection HEADING</h3>

    <p class="text mb-3">
      <!-- BODY -->
    </p>
  </section>
</template>

<script>
export default {
  props: {
    textData: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped></style>
