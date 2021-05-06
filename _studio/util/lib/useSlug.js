import { useState, useEffect } from 'react';
import sanityClient from 'part:@sanity/base/client'
const client = sanityClient.withConfig({apiVersion: '2021-03-25', withCredentials: true })

export default function (document) {
  const BasePreviewUrl = process.env.NODE_ENV === "development"
  ? "http://localhost:3000"
  : "https://acgov-demo.netlify.app";

  const previewQuery = '?preview=true'

  const [previewUrl, setPreviewUrl] = useState('');
  
  // HANDLE document State
  const { draft , displayed } = document
  const documentState = draft !== null ? draft : displayed;
  const documentType = documentState._type

  console.log('1. GET DOCUMENT TYPE PREVIEW URL', documentState)
  
  console.log('2. DOCUMENT STATE:\n', documentState)
  
  useEffect(() => {

    switch (documentType) {
      case 'route':
        const routeSlug = documentState.slug_custom_format.current
        console.log('ROUTE SLUG:', routeSlug)
        if(routeSlug === 'index'){
          setPreviewUrl(`${BasePreviewUrl}${previewQuery}`)
        }
        setPreviewUrl(`${BasePreviewUrl}/${routeSlug}${previewQuery}`)
        
        break;
      case 'page':
        const pageSlug = fetchRoute(documentState)
        setPreviewUrl(pageSlug)
        break;
      case 'storySection':
        const sectionSlug = `${documentState.slug.current}`
        console.log('SECTION SLUG =>',sectionSlug)
        setPreviewUrl(`${BasePreviewUrl}/government/news/${sectionSlug}${previewQuery}`)
        
        break;
      case 'story':
        
        // console.log("STORY =>", documentState)
        const storySlug = fetchStorySlug(documentState)
        setPreviewUrl(storySlug)
        break;
    
      default:
        setPreviewUrl(null)
        break;
    }   
  })

  return previewUrl

}

async function fetchRoute(documentState){
  console.log("PAGE-ROUTE ==> :", documentState)
  // if document Id begins with drafts return strippedId
  // else return id
  const isDraft = documentState._id.startsWith('draft.')
  debugger
  // const trimmedPageId = 

  const query = `*[references($pageId)][0]{"slug": slug_custom_format.current}`
  const params = {pageId: documentState.page._ref}
  try {
    const pageSlugResult = await client.fetch(query, params)
    
    console.log('ROUTE SLUG FOR PAGE =>', pageSlugResult?.slug)
    if(pageSlug.slug === 'index'){
      setPreviewUrl(`${BasePreviewUrl}${previewQuery}`)
    } else {
      setPreviewUrl(`${BasePreviewUrl}/${pageSlugResult.slug}${previewQuery}`)
    }
  } catch (error) {
    console.error(error)
  }
}
async function fetchStorySlug(documentState){
  try {
    const storySlug = `${documentState.slug.current}`
    const query = `*[_type == 'storySection' && _id == $sectionId ][0]{"slug": slug.current}`
    const params = {sectionId: documentState.storySectionRef._ref}
    const section = await client.fetch(query, params)

    console.log('SECTION SLUG =>', section)
    setPreviewUrl(`${BasePreviewUrl}/government/news/${section.slug}#${storySlug}${previewQuery}`)
  } catch (error) {
    console.error(error)
  }
}