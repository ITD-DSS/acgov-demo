<template>
  <section
    class="grid grid-cols-2 w-8/12 bg-white bg-opacity-90 mt-4 mb-8 mx-auto p-4 gap-x-12"
  >
    <header class="sr-only">
      <h2>{{ sectionName }}</h2>
    </header>
    <div>
      <!-- <story
        v-for="story in stories"
        :key="story._id"
        :story-format="story.storyFormat[0]"
        :story-layout="story.storyLayout"
        :story-category="story.storyTag"
      ></story> -->
      <!-- <slot v-bind="storyLayout" /> -->
      <!-- <slot v-bind="stories"> -->
      <div class="col-span-full">
        <slot name="full" v-bind="full" />
      </div>
      <div class="col-start-1 col-end-2">
        <slot name="left" v-bind="left" />
      </div>
      <div class="col-start-2 col-end-3">
        <slot name="right" v-bind="right" />
      </div>
      <!-- </slot> -->
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
    storiesData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      full: [],
      left: [],
      right: [],
    }
  },
  created() {
    this.bindToSlot()
  },
  methods: {
    bindToSlot() {
      const stories = this.storiesData
      stories.forEach((story) => {
        switch (story.storyLayout) {
          case 'full':
            this.full.push(story)
            break
          case 'left':
            this.left.push(story)
            break
          case 'right':
            this.right.push(story)
            break

          default:
            console.error('No recognized story layouts')
            break
        }
      })
    },
  },
}
</script>

<style></style>
