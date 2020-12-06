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
          
                
            { type: 'storySection', title: 'News Section'},
            {
                type: 'reference',
                to: [
                  {type: 'storySection'},
                ]
            }
           
          ],
        options: {
            // layout: 'grid'
            // list: [{ title: 'sectionName' }]
        },
        validation: Rule => Rule.unique()
      }
    ]
  }