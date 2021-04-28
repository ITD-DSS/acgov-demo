import getPagePreviewSlug from './getPagePreviewSlug'
export default function (document) {
  const BasePreviewUrl = process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://acgov-demo.netlify.app";

  const previewQuery = '?preview=true'
  // console.log('1. GET DOCUMENT TYPE PREVIEW URL', document)
  
  // HANDLE document Types
  const { draft , displayed } = document

  console.log('2. GET DOCUMENT STATES\nDRAFT: ', draft, '\nDISPLAYED', displayed )

  if(draft !== undefined && displayed !== undefined) {
    let routeSlug = ''
    if(draft !== null) {
        routeSlug = draft.slug_custom_format.current
        return `${BasePreviewUrl}/${routeSlug}${previewQuery}`
    }
    routeSlug = displayed.slug_custom_format.current
    return `${BasePreviewUrl}/${routeSlug}${previewQuery}`
  }
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
  
  // const isDraft = draft === null ? false : true
  
  // console.log('3. CHECK IF DRAFT DOC', isDraft)


  // if (!draft){

  // }
        
  // if (document._type === 'page') {
  //   const pageSlug = async() => await getPagePreviewSlug(document)
    
  //     if( pageSlug === 'index' || pageSlug === undefined){
  //       return `${BasePreviewUrl}/?preview=true`;
  //     }
  //     return `${BasePreviewUrl}/${pageSlug}?preview=true`;
  //   } else if (document._type === "storySection") {
  //     return `${BasePreviewUrl}/government/news/${document.slug.current}?preview=true`;
  //   } else if (document._type === "story") {
  //     return `${BasePreviewUrl}/government/news/#${document.slug.current}?preview=true`;
  //   } else {
  //     console.error("From getDocumentTypePreviewUrl()");
  //   }
  // }

  // if (document._type === "page") {
  //   // console.log(process.env.NODE_ENV)
  //   return `${previewUrl}/?preview=true`;
  // } else if (document._type === "storySection") {
  //   return `${previewUrl}/government/news/${document.slug.current}`;
  // } else if (document._type === "story") {
  //   return `${previewUrl}/government/news/#${document.slug.current}?preview=true`;
  // } else {
  //   console.error("From getDocumentTypePreviewUrl()");
  // }
}