import React from "react";
import S from '@sanity/desk-tool/structure-builder'
import getDocumentTypePreviewUrl from '../util/lib/getDocumentTypePreviewUrl'

  export const getDefaultDocumentNode = ({ schemaType, documentId }) => {
    // Conditionally return a different configuration based on the schema type
    switch (schemaType) {
      case "route":
        return S.document().views([
          S.view.form(),
          // S.view.editor(),
          S.view.component(WebPreview).title("Web Preview"),
        ])
        break;
      case "page":
        return S.document().views([
          S.view.form(),
          // S.view.editor(),
          S.view.component(PagePreview).title("Web Preview"),
        ])
        break;
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
  };

  // const PagePreview({document}) => {

  // }
  
  const WebPreview = ({ document }) => {
    // const { displayed } = document
    // console.log('doc:', document)
    
    const targetURL = getDocumentTypePreviewUrl(document);
    
    console.log('PREVIEW URL: =>',targetURL)
  
    return <iframe src={targetURL} frameBorder={0} width="100%" height="100%" />;
    // return null
  };

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
                    .child( docId =>
                      // S.documentList()
                      //   .title('Page')
                      //   .filter('_type == "page" && references($docId)')
                      //   .params({ docId })
                      S.editor()              
                        .title('Page Settings')
                        .schemaType('route')
                        .documentId(docId)
                        .views([
                          S.view.form(),
                          // S.view.form(docId),
                          S.view
                          .component(WebPreview)
                          .title('Web Preview'),
                        ])
                    )
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
                      .title('Page Settings')
                      .schemaType('page')
                      .documentId(docId)
                      .views([
                        S.view.form(),
                        // S.view
                        // .component(WebPreview)
                        // .title('Web Preview'),
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