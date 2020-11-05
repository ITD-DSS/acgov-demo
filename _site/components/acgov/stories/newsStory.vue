<template>
  <p class="news-stories">
    <span class="category">{{ category }}</span>
    <br />
    <span class="headline">{{ headline }}</span>
    <br />
    <span class="story">
      <slot />
    </span>
  </p>
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
