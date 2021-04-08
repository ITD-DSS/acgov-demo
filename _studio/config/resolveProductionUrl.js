// import { findEnv } from "./findEnv";
// dotenv.config({ path: findEnv() });

const PREVIEW_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.BASE_URL;

export default function resolveProductionUrl(document) {
  if (document._type === "page" ) {
    // console.log(process.env.NODE_ENV)
    return `${PREVIEW_URL}/?preview=true`
  }
  else if (document._type === "storySection"){
    return `${PREVIEW_URL}/${document.sectionSlug.current}?preview=true`
  }
  else if (document._type === "story"){
    return `${PREVIEW_URL}/${document.storySlug.current}?preview=true`
  }
  else {
    console.error('From resolveProductionUrl()')
  }
}
