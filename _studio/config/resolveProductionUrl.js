// import { findEnv } from "./findEnv";
// dotenv.config({ path: findEnv() });
import getDocumentTypePreviewUrl from '../util/lib/previewUrl'

/**
 * 
 * @param {sanityDocument} document 
 * @returns {String}
 */

export default function resolveProductionUrl(document) {
  return getDocumentTypePreviewUrl(document)
  // if (document._type === "page" ) {
  //   // console.log(process.env.NODE_ENV)
  //   return `${previewUrl()}/?preview=true`
  // }
  // else if (document._type === "storySection"){
  //   return `${previewUrl()}/government/news/?preview=true&section=${document.sectionSlug.current}`
  // }
  // else if (document._type === "story"){
  //   return `${previewUrl()}/government/news/${document.sectionSlug.current}/?preview=true&story=${document.storySlug.current}`
  // }
  // else {
  //   console.error('From resolveProductionUrl()')
  // }
}
