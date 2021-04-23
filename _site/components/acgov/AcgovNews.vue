<template>
  <div id="acgov-news">
    <StorySection
      v-for="section in news"
      :key="section._id"
      :section-data="section"
      :section-slug="basePageSlug"
    >
      <template v-slot="{ content }">
        <Story v-for="story in content" :key="story._id" :story-data="story" />
      </template>
    </StorySection>
  </div>
</template>

<script>
// TODO: Make a Functional Component
export default {
  name: 'AcgovNews',
  props: {
    news: {
      type: Array,
      default: () => [],
    },
    newsIndex: {
      type: String,
      default: '/',
    },
  },
  data() {
    return {
      basePageSlug: this.newsIndex,
    }
  },
}
</script>

<style></style>
