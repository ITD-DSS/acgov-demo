<template>
  <section
    class="flex w-10/12 bg-white bg-opacity-90 mt-4 mb-8 mx-auto p-4 justify-evenly"
  >
    <div class="px-9">
      <h3 class="text-4xl font-medium pb-2">{{ heading }}</h3>

      <p class="text-lg mb-3">
        <SanityContent :blocks="blocks" />
      </p>
    </div>
    <div class="ml-10">
      <figure>
        <img :src="imageUrl" />
        <figcaption></figcaption>
      </figure>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    // imageTextData: {
    //   type: Object,
    //   default: () => {},
    // },
  },
  computed: {
    heading() {
      const heading = this.$attrs.heading
      if (!heading) {
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
    imageUrl({ $urlFor }) {
      const image = this.$attrs.image.asset._ref
      if (!image) {
        return 'https://via.placeholder.com/600'
      }
      return $urlFor(image).width(600).url()
    },
    imageAlt({ $urlFor }) {
      const imageText = this.$attrs.image.alt || this.$attrs.image.caption
      if (!imageText) {
        return 'default alternative/captiton'
      }
      return imageText
    },
  },
}
</script>

<style lang="scss" scoped></style>
