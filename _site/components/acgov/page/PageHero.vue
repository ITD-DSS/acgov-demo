<template>
  <section class="relative">
    <div class="absolute text-white text-4xl m-40">
      <h2>{{ heading }}</h2>
      <SanityContent class="text-lg" :blocks="tagline" />

      <div v-if="hasCta">
        <NuxtLink v-if="ctaSlug" :to="ctaSlug">
          <button class="bg-green-400">
            <span>{{ ctaTitle }}</span>
          </button>
        </NuxtLink>
        <div v-else-if="ctaLink">
          <button class="bg-green-400">
            <span>
              <a :href="ctaLink">{{ ctaTitle }}</a>
            </span>
          </button>
        </div>
        <span v-else></span>
      </div>
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
      if (tagline) {
        return tagline
      }
      return ''
    },
    ctaTitle() {
      const title = this.$attrs.cta?.title
      if (title) {
        return title
      }
      return 'DEFAULT TITLE'
    },
    ctaSlug() {
      const slug = this.$attrs.cta.route?.slug
      if (slug) {
        return slug === 'index' ? '/' : slug
      }
      return ''
    },
    ctaLink() {
      const link = this.$attrs.cta.link
      if (link) {
        return link.startsWith('https://') ? link : '#'
      }
      return ''
    },
    hasCta() {
      const CTA = this.$attrs.cta
      if (CTA) {
        return true
      }
      return false
    },
  },
}
</script>

<style></style>
