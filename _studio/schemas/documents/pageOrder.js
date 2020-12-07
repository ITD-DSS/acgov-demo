export default {
  
    // Setup a 'document' type to house the page builder field
    
    name: "pageOrder",
    type: "document",
    title: "Page Order",
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
      {
        name: 'sectionMover',
        type: 'array',
        title: 'Section Mover',
        of: [
          
                
            { type: 'storySection', title: 'New Section'},
            {
                type: 'reference',
                to: [
                  {type: 'storySection', title: 'Existing Sections'},
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