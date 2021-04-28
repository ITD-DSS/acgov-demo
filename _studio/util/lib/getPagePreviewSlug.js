import client from 'part:@sanity/base/client'
export default (document) => {
    if(document._type === 'page') {
        try {
            const slug = fetchPageSlug(document)
            return slug
        } catch (error) {
            console.error('FROM getPagePreviewSlug', error)
        }
    }
    else if(document._type === 'route') {
        return document.slug_custom_format.current
    }
    console.error(`Not a page document\n ACTUAL: ${document._type}`)

}

function fetchPageSlug(document){
        const query = `*[_type == 'route' && references($pageId)][0]{"slug": slug_custom_format.current}`
        const params = {pageId: document._id}
        const slug = Promise.all(client.fetch(query, params))

        return slug
}