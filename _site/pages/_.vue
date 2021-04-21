<template>
  <main class="flex flex-col items-center">
    <div class="w-1/2 mt-10 text-lg">
      <h1>
        <strong>{{ page.routeLabel }}</strong>
      </h1>
      <p>
        <strong> {{ JSON.stringify(page, undefined, 2) }}</strong>
      </p>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'acgov-news',
  validate({ route, query, params }) {
    if (route.name === 'all') {
      return query.preview === 'true' || params.pathMatch
    }
  },
  asyncData({ store, params }) {
    const page = store.state.urlValidationMap.pages.find(
      (page) => page.slug === params.pathMatch
    )
    return { page }
  },
}
</script>

<style lang="scss" scoped></style>
