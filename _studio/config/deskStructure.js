import S from '@sanity/desk-tool/structure-builder'

// const WebPreview = ({ document }) => {
//     const PREVIEW_URL =
//     process.env.NODE_ENV === "development"
//       ? "http://localhost:3000"
//       : process.env.BASE_URL;

//     function getDocumentType(document) {
//       const { displayed } = document;
//       if (document._type === "page") {
//         // console.log(process.env.NODE_ENV)
//         return `${PREVIEW_URL}/?preview=true`;
//       } else if (document._type === "storySection") {
//         return `${PREVIEW_URL}/${displayed.sectionSlug.current}?preview=true`;
//       } else if (document._type === "story") {
//         return `${PREVIEW_URL}/${displayed.storySlug.current}?preview=true`;
//       } else {
//         console.error("From getDocumentType()");
//       }
//     }

//     const targetURL = getDocumentType(document);
  
//     return <iframe src={targetURL} frameBorder={0} width="100%" height="100%" />;
//   };

  export const getDefaultDocumentNode = ({ schemaType, documentId }) => {
    // Conditionally return a different configuration based on the schema type
    if (
      documentId == "page" ||
      schemaType == "story" ||
      schemaType == "storySection"
    ) {
      return S.document().views([
        S.view.form(),
        S.view.editor(),
        S.view.component(WebPreview).title("Web Preview"),
      ]);
    }
  };

export default () => 
    S.list()
        .title('ACgov Content')
        .items([
            // S.documentTypeListItem('siteSettings'),
            S.listItem()
            .title('Site Settings')
            .child(
              S.editor()
                .title('Basic Site Settings')
                .schemaType('siteSettings')
                .documentId('siteSettings')
            ),
            S.divider(),
            S.listItem()
            .title('Page Settings')
            .child(
                S.editor()              
                .title('Frontpage Settings')
                .schemaType('page')
                .documentId('page'),
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