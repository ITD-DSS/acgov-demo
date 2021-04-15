// import { findEnv } from "./findEnv";
// dotenv.config({ path: findEnv() });
import previewUrl from '../util/lib/previewUrl'


export default function resolveProductionUrl(document) {
  if (document._type === "page" ) {
    // console.log(process.env.NODE_ENV)
    return `${previewUrl()}/?preview=true`
  }
  else if (document._type === "storySection"){
    return `${previewUrl()}/${document.sectionSlug.current}?preview=true`
  }
  else if (document._type === "story"){
    return `${previewUrl()}/${document.storySlug.current}?preview=true`
  }
  else {
    console.error('From resolveProductionUrl()')
  }
}
