import React from "react";
import S from '@sanity/desk-tool/structure-builder'

  export const getDefaultDocumentNode = ({ schemaType, documentId }) => {
    // Conditionally return a different configuration based on the schema type
    switch (schemaType || documentId) {
      // case "page":
      //   return S.document().views([
      //     S.view.form(),
      //     // S.view.editor(),
      //     S.view.component(WebPreview).title("Web Preview"),
      //   ])
        // break;
      case "story":
        return S.document().views([
          S.view.form(),
          // S.view.editor(),
          S.view.component(WebPreview).title("Web Preview"),
        ])
        // break;
      case "storySection":
        return S.document().views([
          S.view.form(),
          // S.view.editor(),
          S.view.component(WebPreview).title("Web Preview"),
        ])
    
      default:
        break;
    }
    // if (
    //   documentId == "page" ||
    //   schemaType == "page" ||
    //   schemaType == "story" ||
    //   schemaType == "storySection"
    // ) {
    //   return S.document().views([
    //     S.view.form(),
    //     // S.view.editor(),
    //     S.view.component(WebPreview).title("Web Preview"),
    //   ]);
    // }
  };
  const PREVIEW_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.BASE_URL;
  
  const WebPreview = ({ document }) => {

    const { displayed } = document;
  
  
    const targetURL = `${PREVIEW_URL}/?preview=true`;
  
    return <iframe src={targetURL} frameBorder={0} width="100%" height="100%" />;
  };

  // function getDocumentType(document) {
  //   const { displayed } = document;
  //   if (document._type === "page") {
  //     // console.log(process.env.NODE_ENV)
  //     return `${PREVIEW_URL}/?preview=true`;
  //   } else if (document._type === "storySection") {
  //     return `${PREVIEW_URL}/${displayed.sectionSlug.current}?preview=true`;
  //   } else if (document._type === "story") {
  //     return `${PREVIEW_URL}/${displayed.storySlug.current}?preview=true`;
  //   } else {
  //     console.error("From getDocumentType()");
  //   }
  // }

export default () => 
    S.list()
        .title('acgov content')
        .items([
          S.listItem()
          .title('Site Settings')
          .child(
            S.editor()
              .title('Basic Site Settings')
              .schemaType('siteSettings')
              // .documentId('siteSettings')
              .documentId('acgov')
          )
            // S.documentTypeListItem('siteSettings'),
           ,
            S.divider(),
            S.listItem()
              .schemaType('route')
              .title('Page Routes')
              .child(
                S.documentList()
                    .title('Routes')
                    .schemaType('route')
                    .defaultOrdering([{ field: '_createdAt', direction: 'asc' }])
                    .filter(`_type == "route"`)
            ),
              ,
            S.listItem()
            .title('Pages')
            .child(
                S.documentList()
                  .title('Pages')
                  .schemaType('page')
                  .defaultOrdering([{ field: '_createdAt', direction: 'asc' }])
                  .filter(`_type == "page"`)
                  .child( docId =>
                    S.editor()              
                      .title('Frontpage Settings')
                      .schemaType('page')
                      .documentId(docId)
                      .views([
                        S.view.form(),
                        S.view
                        .component(WebPreview)
                        .title('Web Preview'),
                      ])
                  )
            ),

            S.listItem()
                .schemaType('storySection')
                .title('Section Settings')
                .child(
                    S.documentList()
                        .title('Section')
                        .schemaType('storySection')
                        .defaultOrdering([{ field: '_createdAt', direction: 'asc' }])
                        .filter(`_type == "storySection"`)
                ),
            S.divider(),
            S.listItem()
                .schemaType('storySection')
                .title('News by Section')
                .child(
                    S.documentList()
                        .title('Section')
                        .schemaType('storySection')
                        .defaultOrdering([{ field: '_createdAt', direction: 'asc' }])
                        .filter(`_type == "storySection"`)
                        .child( secId =>

                            S.documentList()
                                .schemaType('story')
                                .defaultOrdering([{ field: '_createdAt', direction: 'asc' }])
                                .title('Section Stories')
                                .filter( `_type == 'story' && references($secId)`)
                                .params({secId}),
                            )

                        ),

             S.listItem()
                .schemaType('story')
                .title('News Stories')
                .child(
                    S.documentList()
                        .title('Stories')
                        .schemaType('story')
                        .defaultOrdering([{ field: '_createdAt', direction: 'asc' }])
                        .filter(`_type == "story"`)
                ),
                    
            
        
        ])