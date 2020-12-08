import React from "react";
import S from "@sanity/desk-tool/structure-builder";

const url = "http://localhost:3000/";

const WebPreview = ({ document }) => {
  const { displayed } = document;
  const targetURL = url + displayed.slug.current + `/?preview=true`;

  return <iframe src={targetURL} frameBorder={0} width="100%" height="100%" />;
};

export const getDefaultDocumentNode = ({ schemaType }) => {
  // Conditionally return a different configuration based on the schema type
  if (schemaType === "storySection" || schemaType === "story") {
    return S.document().views([
      S.view.form(),
      S.view.editor(),
      S.view.component(WebPreview).title("Web Preview"),
    ]);
  }
};

export default S.defaults();