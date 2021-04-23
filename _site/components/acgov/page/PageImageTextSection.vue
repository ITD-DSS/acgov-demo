<template>
  <section class="text-black box-content my-4 pt-2">
    <div>
      <h3 class="text-sm font-medium pb-2">PageImageTextSection HEADING</h3>

      <p class="text mb-3">
        <!-- BODY -->
      </p>
    </div>
    <div>
      <img src="" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    imageTextData: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped></style>
