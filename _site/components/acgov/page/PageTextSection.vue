<template>
  <section class="w-full bg-white bg-opacity-90 mt-4 mb-8 mx-auto p-4">
    <div>
      <h3 class="text-4xl font-medium pb-2">{{ heading }}</h3>

      <p class="text-lg mb-3">
        <SanityContent :blocks="blocks" />
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    // textData: {
    //   type: Object,
    //   default: () => {},
    // },
  },
  computed: {
    heading() {
      const heading = this.$attrs.heading
      if (heading === undefined) {
        return 'DEFAULT HEADING'
      }
      return heading
    },
    blocks() {
      const text = this.$attrs.text
      if (text.length === 0) {
        return []
      }
      return text
    },
  },
}
</script>

<style lang="scss" scoped></style>
