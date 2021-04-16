<template>
  <main class="flex flex-col">
    <div class="news-grid w-8/12 bg-white bg-opacity-90 mt-4 mb-8 mx-auto p-4">
      <h2>Section Name</h2>
      <p>Section Content with Stories</p>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'acgov-home',
  asyncData({ params, store }) {
    const sections = store.site.content
    sections.forEach((section) => {
      if (params.section === section.slug) {
        return section
      }
      return undefined
    })
  },
}
</script>

<style>
.news-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: min-content;
  grid-auto-flow: row dense;
  column-gap: 1.25rem;
  row-gap: 0.75rem;
}
</style>
