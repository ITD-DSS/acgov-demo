<template>
  <section class="relative">
    <h2 class="absolute left-15 text-white text-2xl">{{ heading }}</h2>

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
  },
}
</script>

<style></style>
