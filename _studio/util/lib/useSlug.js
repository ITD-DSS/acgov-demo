import { useState, useEffect } from 'react';
import sanityClient from 'part:@sanity/base/client'
const client = sanityClient.withConfig({apiVersion: '2021-03-25'})

export default function (document) {
  const BasePreviewUrl = process.env.NODE_ENV === "development"
  ? "http://localhost:3000"
  : "https://acgov-demo.netlify.app";

  const previewQuery = '?preview=true'

  const [previewUrl, setPreviewUrl] = useState('');

  // console.log('1. GET DOCUMENT TYPE PREVIEW URL', document)
  
  const { draft , displayed } = document
  
  // HANDLE document State
  const documentState = draft === null ? displayed : draft;
  const documentType = documentState._type
  // console.log('2. DOCUMENT:\n', documentState)
  
  // debugger
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
        async function fetchRoute(){
          const query = `*[_type == 'route' && references($pageId)][0]{"slug": slug_custom_format.current}`
          const params = {pageId: documentState._id}
          try {
            const pageSlug = await client.fetch(query, params)
            console.log('ROUTE SLUG FOR PAGE =>', pageSlug)
            if(pageSlug.slug === 'index'){
              setPreviewUrl(`${BasePreviewUrl}${previewQuery}`)
            } else {
              setPreviewUrl(`${BasePreviewUrl}/${pageSlug.slug}${previewQuery}`)
            }
          } catch (error) {
            console.error(error)
          }
        }
        fetchRoute()
        break;
      case 'storySection':
        const sectionSlug = `${documentState.slug.current}`
        console.log('SECTION SLUG =>',sectionSlug)
        setPreviewUrl(`${BasePreviewUrl}/government/news/${sectionSlug}${previewQuery}`)
        
        break;
      case 'story':
        console.log("STORY =>", documentState)
        async function fetchStorySlug(){
          try {
            const storySlug = `${documentState.slug.current}`
            const query = `*[_type == 'storySection' && _id == $sectionId ][0]{"slug": slug.current}`
            const params = {sectionId: documentState.storySectionRef._ref}
            const section = await client.fetch(query, params)
            console.log('SECTION SLUG =>', section)
            URL = `${BasePreviewUrl}/government/news/${section.slug}#${storySlug}${previewQuery}`
            setPreviewUrl(URL) 
          } catch (error) {
            console.error(error)
          }
        }
        fetchStorySlug()
        break;
    
      default:
        setPreviewUrl(null)
        break;
    }   
  })

  return previewUrl

}