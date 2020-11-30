<template>
  <section
    class="grid grid-cols-2 w-8/12 bg-white bg-opacity-90 mt-4 mb-8 mx-auto p-4 gap-x-12"
  >
    <header class="sr-only">
      <h2>{{ sectionName }}</h2>
    </header>
    <div>
      <story
        v-for="story in section.related"
        :key="story._id"
        :story-format="story.storyFormat[0]"
        :story-layout="story.storyLayout"
        :story-category="story.storyTag"
      ></story>
      <!-- <slot v-bind="storyLayout" /> -->
      <!-- <div class="col-span-full">
        <slot name="full" />
      </div>
      <div class="col-start-1 col-end-2">
        <slot name="left" />
      </div>
      <div class="col-start-2 col-end-3">
        <slot name="right" />
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'StorySection',
  props: {
    sectionName: {
      type: String,
      default: 'Story section name',
    },
    storyLayout: {
      type: String,
      default: 'Story layout',
    },
    stories: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {},
  // data() {
  //   return {
  //     isFull: false,
  //     isLeft: false,
  //     isRight: false,
  //   }
  // },
  methods: {
    storyGridClass(layout) {
      switch (layout) {
        case 'full':
          return 'full-width'

        case 'left':
          return 'left'

        case 'right':
          return 'right'

        default:
          console.error('Not a known format!')
          break
      }
    },
  },
}
</script>

<style>
.full-width {
  @apply col-span-full;
}
.left {
  @apply col-start-1 col-end-2;
}
.right {
  @apply col-start-2 col-end-3;
}
</style>
