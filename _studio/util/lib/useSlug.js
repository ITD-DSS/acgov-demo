import { useState, useEffect } from 'react';
import sanityClient from 'part:@sanity/base/client'
const client = sanityClient.withConfig({apiVersion: '2021-03-25', withCredentials: true })

export default function (document) {
  const [previewUrl, setPreviewUrl] = useState('');

  const BasePreviewUrl = process.env.NODE_ENV === "development"
  ? "http://localhost:3000"
  : "https://acgov-demo.netlify.app";

  const previewQuery = '?preview=true'

  
  // HANDLE document State
  const { draft , displayed } = document
  const documentState = draft !== null ? draft : displayed;
  const documentType = documentState._type

  console.log('1. GET DOCUMENT TYPE PREVIEW URL', documentState)
  
  console.log('2. DOCUMENT STATE:\n', documentState)
  
  useEffect(() => {

    switch (documentType) {
      case 'route':
        const routeSlug = documentState.slug_custom_format?.current
        console.log('ROUTE SLUG:', routeSlug)
       
        if(routeSlug === 'index' || routeSlug === undefined){
          setPreviewUrl(`${BasePreviewUrl}${previewQuery}`)
          break;
        } else {
          setPreviewUrl(`${BasePreviewUrl}/${routeSlug}${previewQuery}`)
          break;
        }
      case 'page':
        async function fetchRoute(documentState){
          console.log("PAGE-ROUTE ==> :", documentState)
          /**
           * Since draft docs don't have access to parent references
           * this checks for drafts and returns parent reference with a strippedId
           */
          // if document Id begins with "drafts" return strippedId
          // else return id
          const isDraft = documentState["_id"].startsWith('drafts.')
          const trimmedPageId = isDraft ? documentState._id.replace('drafts.', '') : documentState._id
          // debugger
        
          const query = `*[references($pageId)][0]{"slug": slug_custom_format.current}`
          const params = { pageId: trimmedPageId }
          try {
            const pageSlugResult = await client.fetch(query, params)
            
            console.log('ROUTE SLUG FOR PAGE =>', pageSlugResult)
            if(pageSlugResult.slug === 'index'){
              setPreviewUrl(`${BasePreviewUrl}${previewQuery}`)
            } else {
              setPreviewUrl(`${BasePreviewUrl}/${pageSlugResult.slug}${previewQuery}`)
            }
          } catch (error) {
            console.error(error)
          }
        }
        const pageSlug = fetchRoute(documentState)
        setPreviewUrl(pageSlug)
        break;
      case 'storySection':
        const sectionSlug = `${documentState.slug.current}`
        console.log('SECTION SLUG =>',sectionSlug)
        setPreviewUrl(`${BasePreviewUrl}/government/news/${sectionSlug}${previewQuery}`)
        
        break;
      case 'story':
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
        // console.log("STORY =>", documentState)
        const storySlug = fetchStorySlug(documentState)
        setPreviewUrl(storySlug)
        break;
    
      default:
        setPreviewUrl(null)
        break;
    }   
  }, [document._id, documentType])

  return previewUrl

}