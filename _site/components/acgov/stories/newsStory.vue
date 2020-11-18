<template>
  <article class="text-black my-4 pt-2">
    <h3 class="text-sm font-medium pb-2">{{ category }}</h3>
    <h4 class="text-2xl pb-2">{{ headline }}</h4>
    <p class="text">
      <slot />
    </p>
  </article>
</template>

<script>
export default {
  name: 'NewsStory',
  props: {
    category: {
      type: String,
      default: '',
    },
    headline: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
