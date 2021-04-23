<template>
  <section class="relative">
    <div class="absolute text-white text-2xl">
      <h2>{{ heading }}</h2>
      <SanityContent :blocks="tagline" />
    </div>

    <img class="w-full" :src="imgSrc" alt="" />
  </section>
</template>

<script>
export default {
  name: 'PageHero',
  computed: {
    imgSrc({ $urlFor }) {
      return $urlFor(this.$attrs.backgroundImage.asset._ref).width(1920).url()
    },
    heading() {
      const heading = this.$attrs.heading
      if (heading !== '') {
        return heading
      }
      return ''
    },
    tagline() {
      const tagline = this.$attrs.tagline
      if (tagline.length !== 0) {
        return tagline
      }
      return ''
    },
  },
}
</script>

<style></style>
