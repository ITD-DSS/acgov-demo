<template>
  <div id="acgov-news">
    <StorySection
      v-for="section in news"
      :key="section._key"
      :stories-data="section"
      :section-slug="homeSlug"
    >
      <template v-slot:default="stories">
        <Story
          v-for="story in stories.content"
          :key="story._id"
          :story-data="story"
          :section-slug="stories.storySlug"
        ></Story>
      </template>
    </StorySection>
  </div>
</template>

<script>
export default {
  name: 'AcgovNews',
  props: {
    news: {
      type: Array,
      default: () => [],
    },
    homeSlug: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
