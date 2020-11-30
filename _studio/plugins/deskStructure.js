import S from '@sanity/desk-tool/structure-builder'

export default () => 
    S.list()
        .title('acgov Content')
        .items([
            S.listItem()
                .title('Site Settings')
                .schemaType('siteSettings'),
                
            S.divider(),
            S.listItem()
                    .title('News Sections')
                    .child(
                        S.documentList()
                            .title('Sections')
                            .schemaType('storySection')
                            .filter(`_type == "storySection"`)
                            .child(id => // Returns the id for the selected category document
                                S.documentList()
                                  .title('Stories In Section')
                                  .schemaType('story')
                                  .filter(`_type == "story" && references($id)`)
                                  .params({id}) // use the id in the filter to return sampleProjects that has a reference to the category
                              )
                    ),
            // S.listItem()
            //         .title('News Stories')
            //         .child(
            //             S.documentList()
            //                 .title('Story')
            //                 .schemaType('story')
            //                 .filter(`_type == "story"`)
            //         )
        
        ])