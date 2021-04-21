<template>
  <main class="flex flex-col">
    <AcgovNews :news="newsData" home-slug="government/news/" />
  </main>
  <!--PAGEWATCH CODE="CAALAME_1_20080723_151631_en"-->
</template>

<script>
export default {
  layout: 'acgov-home',
  fetchKey: 'acgov-index',
  fetchOnServer: true,
  async asyncData({ store }) {
    const newsData = await store.getters.newsContent
    return { newsData }
  },
  head() {
    return {
      title: '',
      meta: [
        // {
        //   name: 'google-site-verification',
        //   content: 'IbsI4I84KNfBVhGugciXGiu2v2wBwKB_Kju-x9j6uYI',
        // },
        {
          hid: 'description',
          name: 'Description',
          content:
            "Homepage for Alameda County's government website. Portal for all government information.",
        },
        {
          hid: 'keywords',
          name: 'Keywords',
          content:
            'Alameda County, government, local government, Bay Area, California, county government, county services, news',
        },
        {
          hid: 'location',
          name: 'Location',
          content: 'Alameda County, Bay Area, California, United States',
        },
      ],
      link: [
        // {
        //   rel: 'stylesheet',
        //   href: 'acgov-css/bootstrap.min.css',
        // },
        // {
        //   rel: 'stylesheet',
        //   href: 'acgov-css/ie10-viewport-bug-workaround.css',
        // },
        // {
        //   rel: 'stylesheet',
        //   href: 'acgov-css/custom.css',
        // },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
      ],
    }
  },
  // TODO: Implement Validation for Preview mode
  validate({ route, query, store }) {
    // check that store.state.site.frontpage.slug === route
    if (
      route.fullPath === '/' &&
      store.state.urlValidationMap.mainIndex.slug === 'index'
    ) {
      return (
        query.preview === 'true' || store.state.urlValidationMap.mainIndex.slug
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
