<template>
  <main class="flex flex-col">
    <story-section
      v-for="section in storySections"
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
    <!--PAGEWATCH CODE="CAALAME_1_20080723_151631_en"-->
  </main>
</template>

<script>
// TODO: Integrate Google Translate

//  TODO: Implement interactions stylings

//   <!-- UserSnap Code -->
// TODO: Implement User Snap
//
// '//api.usersnap.com/load/' + '4331c1dc-9b6c-418d-ac74-3574f46db338.js'
//
//   Siteimprove Analytics Code
//  TODO: implement SiteImprove analytics
//
// sz.src = '//siteimproveanalytics.com/js/siteanalyze_10984.js'
//
// TODO: BOS AGENDA JS
//   src="/js/bos-agenda-update.js"
// TODO: Implement Chatbot
//   Chatbot Code
//   <div id="togglebutton" style="display: none">
//     <button id="beginwebchat" onclick="toggleWebChat()">
//       <img
//         src="/img/covid-chat.png"
//         alt="Click this chat icon to open a chat window about COCID-19."
//       />
//     </button>
//   </div>
//
//     crossorigin="anonymous"
//     src="https://cdn.botframework.com/botframework-webchat/latest/webchat-es5.js"
//
//    src="/chatbot/wchat.js?v=18"
//   <link href="/chatbot/wchat.css?v=18" rel="stylesheet" />
//   Chatbot Code End

import { groq } from '@nuxtjs/sanity'

const query = groq`
    *[_type=="storySection"]{
      _createdAt,
      _id,
      "name": sectionName,
      "related": *[_type=="story" && references(^._id)]{
        _createdAt,
        _id,
        _updatedAt,
        "tag": storyTag,
        "layout": storyLayout,
        "format": storyFormat[0]{
            _key,
            _type,
            _type == "textStory" => {
                headline,
                "body": storyBody[]
            },
            _type == "imageLink" => {
                linkTo,
                "alt": linkImage.altText,
                "imgSrc": linkImage.asset._ref
            },
            _type == "videoStory" => {
                "headline": videoText.headline,
								"body": videoText.storyBody,
                "alt": altText,
                "url": youtubeUrl
            },
        }
    } | order(_createdAt asc)
} | order(_createdAt asc)
    `

export default {
  layout: 'acgov-home',
  async fetch() {
    const sections = await this.$sanity.fetch(query)
    this.storySections = sections
  },
  data() {
    return {
      storySections: [],
    }
  },
  head() {
    return {
      title: 'ACGOV.org | Alameda County Government',
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
  // validate({ params, store, query }) {
  //   // If FALSE redirect to 404 page
  //   return (
  //     query.preview === 'true' || store.state.moviesSlugs.includes(params.slug)
  //   )
  // },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
