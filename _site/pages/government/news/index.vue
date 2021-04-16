<template>
  <main class="flex flex-col">
    <story-section
      v-for="section in content"
      :key="section._id"
      :section-name="section.name"
      :stories-data="section.related"
    >
      <template #default="stories">
        <story-format-selector
          v-for="story in stories"
          :key="story._id"
          :component-data="story"
        />
      </template>
    </story-section>
  </main>
</template>

<script>
export default {
  layout: 'acgov-home',
  fetchKey: 'acgov-news-index',
  asyncData({ store }) {
    const site = store.state.site
    return site
  },
}
</script>

<style lang="scss" scoped></style>
