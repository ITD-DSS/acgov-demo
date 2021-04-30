import { useState, useEffect } from 'react';
import sanityClient from 'part:@sanity/base/client'
const client = sanityClient.withConfig({apiVersion: '2021-03-25'})

export default function (document) {
  const BasePreviewUrl = process.env.NODE_ENV === "development"
  ? "http://localhost:3000"
  : "https://acgov-demo.netlify.app";

  const previewQuery = '?preview=true'

  const [slug, setSlug] = useState('');

  console.log('1. GET DOCUMENT TYPE PREVIEW URL', document)
  
  const { draft , displayed } = document
  
  // HANDLE document State
  const documentState = draft === null ? displayed : draft;
  const documentType = documentState._type
  console.log('2. DOCUMENT:\n', documentState)
  
  // debugger
  useEffect(() => {   
      if(documentType === 'route') {
        const routeSlug = `${documentState.slug_custom_format.current}`
        console.log('ROUTE SLUG =>',routeSlug)
        const docSlug = `${BasePreviewUrl}/${routeSlug}${previewQuery}`
        setSlug(docSlug)
      }      
  })
  useEffect(() => {   
      if(documentType === 'page') {
        async function fetchRoute(){
          const query = `*[_type == 'route' && references($pageId)][0]{"slug": slug_custom_format.current}`
          const params = {pageId: documentState._id}
          const routeSlug = await client.fetch(query, params)
          console.log('ROUTE SLUG =>', routeSlug)
          const docSlug = `${BasePreviewUrl}/${routeSlug.slug}${previewQuery}`
          setSlug(docSlug)
        }
        fetchRoute()
      }      
  })

  // console.log('2. GET DOCUMENT STATES\nDRAFT: ', draft, '\nDISPLAYED', displayed )
  
  // if(document.type === 'route') {
  //   const routeSlug = document.slug_custom_format.current
  //   return console.log('ROUTE SLUG', routeSlug)
  //   // return `${BasePreviewUrl}/${routeSlug}`
  // }
  
  //  check for document displayed and draft types
  // const { displayed, draft } = document
  
  // console.log('2. GET DISPLAYED TYPE DOCUMENT', displayed)
  // console.log('3. GET DRAFT TYPE DOCUMENT', draft)
  
  // // handle draft documents documents
  return slug

}