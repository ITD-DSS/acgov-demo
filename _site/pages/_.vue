<template>
  <main class="flex flex-col items-center">
    <template v-if="getSections !== undefined">
      <div v-for="section in getSections" :key="section._key">
        <component
          :is="getComponent(section)"
          v-bind="section"
          :section-data="section.section"
        >
          <template v-slot="{ content }">
            <Story
              v-for="story in content"
              :key="story._id"
              :story-data="story"
            />
          </template>
        </component>
      </div>
    </template>
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
    return page
  },
  computed: {
    getSections() {
      return this.page.content
    },
  },
  methods: {
    getComponent(section) {
      let componentType = ''
      switch (section._type) {
        case 'hero':
          componentType = 'PageHero'
          break
        case 'textSection':
          componentType = 'PageTextSection'
          break
        case 'imageSection':
          componentType = 'PageImageTextSection'
          break
        case 'reference':
          componentType = 'StorySection'
          break
        default:
          return console.error(`NO MATCHING COMPONENTS--->>> ${section._type}`)
      }
      return componentType
    },
  },
  head() {
    return {
      title: this.$route.params.pathMatch,
    }
  },
}
</script>

<style lang="scss" scoped></style>
