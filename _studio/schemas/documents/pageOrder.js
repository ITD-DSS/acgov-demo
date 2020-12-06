export default {
  
    // Setup a 'document' type to house the page builder field
    
    name: "pageOrder",
    type: "document",
    title: "Page Order",
    fields: [
      {
        name: 'pageMover',
        type: 'array',
        title: 'Page Mover',
        of: [
            {
                type: 'reference',
                to: [
                  {type: 'storySection'}
                ]
            }
          ],
        options: {
            // layout: 'grid'
            // list: [{ value: 'sectionName' , title: 'Section'}]
        },
        validation: Rule => Rule.unique()
      }
    ]
  }