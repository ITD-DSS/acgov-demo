import React from "react";
import S from "@sanity/desk-tool/structure-builder";
import getDocumentTypePreviewUrl from '../util/lib/previewUrl'

const WebPreview = ({ document }) => {

  const targetURL = getDocumentTypePreviewUrl(document);

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
