import S from '@sanity/desk-tool/structure-builder'

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
            .title('Section Order')
            .child(
              S.editor()
                .title('Section Mover')
                .schemaType('pageOrder')
                .documentId('pageOrder')
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