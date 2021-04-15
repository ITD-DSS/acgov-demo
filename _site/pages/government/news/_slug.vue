<template>
  <main class="flex flex-col">
    <div class="news-grid w-8/12 bg-white bg-opacity-90 mt-4 mb-8 mx-auto p-4">
      <h2>Section Name</h2>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'acgov-home',
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
