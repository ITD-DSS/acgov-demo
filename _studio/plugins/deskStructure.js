import S from '@sanity/desk-tool/structure-builder'

export default () => 
    S.list()
        .title('acgov Content')
        .items([
            S.documentTypeListItem('siteSettings'),
            S.divider(),
            S.listItem()
                .schemaType('storySection')
                .title('News Sections')
                .child(
                    S.documentList()
                        .title('Section')
                        .schemaType('storySection')
                        .filter(`_type == "storySection"`)
                )
        
        ])