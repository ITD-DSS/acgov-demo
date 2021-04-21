
export default function (document) {

  const previewUrl = process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://acgov-demo.netlify.app";

  // TODO: Fix double if statement DRY
  const { displayed } = document;

  if(displayed){
    if (displayed._type === "page") {
      // console.log(process.env.NODE_ENV)
      return `${previewUrl}/?preview=true`;
    } else if (displayed._type === "storySection") {
      return `${previewUrl}/government/news/${displayed.slug.current}`;
    } else if (displayed._type === "story") {
      return `${previewUrl}/government/news/#${displayed.slug.current}?preview=true`;
    } else {
      console.error("From getDocumentTypePreviewUrl()");
    }
  }

  if (document._type === "page") {
    // console.log(process.env.NODE_ENV)
    return `${previewUrl}/?preview=true`;
  } else if (document._type === "storySection") {
    return `${previewUrl}/government/news/${document.slug.current}`;
  } else if (document._type === "story") {
    return `${previewUrl}/government/news/#${document.slug.current}?preview=true`;
  } else {
    console.error("From getDocumentTypePreviewUrl()");
  }


}