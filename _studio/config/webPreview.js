import React from "react";
import S from "@sanity/desk-tool/structure-builder";
import previewUrl from '../util/lib/previewUrl'

const WebPreview = ({ document }) => {
  function getDocumentType(document) {
    const { displayed } = document;
    if (document._type === "page") {
      // console.log(process.env.NODE_ENV)
      return `${previewUrl()}/?preview=true`;
    } else if (document._type === "storySection") {
      return `${previewUrl()}/${displayed.sectionSlug.current}?preview=true`;
    } else if (document._type === "story") {
      return `${previewUrl()}/${displayed.storySlug.current}?preview=true`;
    } else {
      console.error("From getDocumentType()");
    }
  }

  const targetURL = getDocumentType(document);

  return <iframe src={targetURL} frameBorder={0} width="100%" height="100%" />;
};

export const getDefaultDocumentNode = ({ schemaType, documentId }) => {
  // Conditionally return a different configuration based on the schema type
  if (
    documentId == "page" ||
    schemaType == "story" ||
    schemaType == "storySection"
  ) {
    return S.document().views([
      S.view.form(),
      // S.view.editor(),
      S.view.component(WebPreview).title("Web Preview"),
    ]);
  }
};

export default S.defaults();
