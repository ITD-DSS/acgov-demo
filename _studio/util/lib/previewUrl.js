const previewUrl = () => {
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://acgov-demo.netlify.app";
}

export default function (document) {
  const { displayed } = document;
  if (displayed._type === "page") {
    // console.log(process.env.NODE_ENV)
    return `${previewUrl()}/?preview=true`;
  } else if (displayed._type === "storySection") {
    return `${previewUrl()}/government/news/?preview=true&section=${displayed.sectionSlug.current}`;
  } else if (displayed._type === "story") {
    return `${previewUrl()}/government/news/${displayed.sectionSlug.current}/?preview=true&story=${displayed.storySlug.current}`;
  } else {
    console.error("From getDocumentTypePreviewUrl()");
  }
}