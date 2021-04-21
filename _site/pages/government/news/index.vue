<template>
  <main class="flex flex-col">
    <AcgovNews :news="newsData" />
  </main>
  <!--PAGEWATCH CODE="CAALAME_1_20080723_151631_en"-->
</template>

<script>
export default {
  layout: 'acgov-news',
  fetchKey: 'acgov-news',
  fetchOnServer: true,
  // validate({ params, store, query }) {
  //   return query.preview === 'true' || store.state.site.slug === params.slug
  // },
  async asyncData({ store }) {
    const newsData = await store.getters.newsContent
    return { newsData }
  },
  // TODO: Implement Validation for Preview mode
  validate({ route, query, store }) {
    // check that store.state.site.frontpage.slug === route
    if (
      route.path === '/government/news' &&
      store.state.urlValidationMap.mainIndex.slug === 'index'
    ) {
      // If FALSE redirect to 404 page
      // return true
      return (
        query.preview === 'true' ||
        store.state.urlValidationMap.mainIndex.slug === 'index'
      )
    }
    return false
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
