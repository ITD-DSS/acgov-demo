const previewUrl = () => {
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://acgov-demo.netlify.app";
}

export default function (document) {
  // TODO: Fix double if statement DRY
  const { displayed } = document;
  if(displayed){
    if (displayed._type === "page") {
      // console.log(process.env.NODE_ENV)
      return `${previewUrl()}/?preview=true`;
    } else if (displayed._type === "storySection") {
      return `${previewUrl()}/?preview=true&section=${displayed.slug.current}`;
    } else if (displayed._type === "story") {
      return `${previewUrl()}/?preview=true&story=${displayed.slug.current}`;
    } else {
      console.error("From getDocumentTypePreviewUrl()");
    }
  }

  if (document._type === "page") {
    // console.log(process.env.NODE_ENV)
    return `${previewUrl()}/?preview=true`;
  } else if (document._type === "storySection") {
    return `${previewUrl()}/government/news/?preview=true&section=${document.slug.current}`;
  } else if (document._type === "story") {
    return `${previewUrl()}/government/news/${document.slug.current}/?preview=true&story=${document.slug.current}`;
  } else {
    console.error("From getDocumentTypePreviewUrl()");
  }


}