import { groq, createClient } from '@nuxtjs/sanity'
import fetch from 'node-fetch'
import sanityBaseConfig from './sanityBaseConfig.js'

// eslint-disable-next-line no-undef
if (!globalThis.fetch) {
  // eslint-disable-next-line no-undef
  globalThis.fetch = fetch
}

const client = createClient(sanityBaseConfig)
const allOtherPageSlugs = groq`
  *[_type == "route" && slug_custom_format.current != "index"]{
    _id,
    routeLabel,
    "slug": slug_custom_format.current,
    ...page->{
      _createdAt,
      "pageId": _id,
      _type,
      _updatedAt,
    } 
  } | order(_updatedAt desc)
`
const sectionSlugs = groq`
  *[_type == 'storySection']{
      _id,
      _createdAt,
      _updatedAt,
      "label": sectionName,
      "slug": slug.current,
  } | order(_updatedAt desc)
  `

export default async function () {
  const resForPages = await client.fetch(allOtherPageSlugs)
  const resForSections = await client.fetch(sectionSlugs)

  const routesForPages = resForPages.map((page) => {
    return {
      route: `/${page.slug}`,
      payload: page,
    }
  })

  const routesForSections = resForSections.map((section) => {
    return {
      route: `/government/news/${section.slug}`,
      payload: section,
    }
  })

  const routes = routesForPages.concat(routesForSections)

  return routes
}
