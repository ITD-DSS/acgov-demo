<template>
  <main class="flex flex-col">
    <story-section
      v-for="section in getSections"
      :key="section._id"
      :stories-data="section"
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
  validate({ params, store }) {
    return store.dispatch('validateSlug', params.slug)
  },
}
</script>

<style></style>
