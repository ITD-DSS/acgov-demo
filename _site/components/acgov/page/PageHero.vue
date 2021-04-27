<template>
  <section class="relative">
    <div class="absolute text-white text-4xl m-40">
      <h2>{{ heading }}</h2>
      <SanityContent class="text-lg" :blocks="tagline" />
      <NuxtLink :to="ctaSlug">
        <button class="bg-green-400">
          <span>{{ ctaTitle }}</span>
        </button>
      </NuxtLink>
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
    ctaTitle() {
      const cta = this.$attrs.cta
      if (cta.title) {
        return cta.title
      }
      return ''
    },
    ctaSlug() {
      const slug = this.$attrs.cta.route.slug
      if (slug === 'index') {
        return '/'
      } else if (slug === '') {
        return '/'
      }
      return slug
    },
  },
}
</script>

<style></style>
