export default {
    name: "page",
    type: "document",
    title: "Page",
    fieldsets: [
      {
        title: "SEO & metadata",
        name: "metadata",
      },
    ],
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
      },
      // {
      //   name: 'refRoute',
      //   title: 'Route',
      //   type: 'object',
      //   fields: [
      //     {
      //       name: 'routeGetter',
      //       title: 'title',
      //       type: 'reference',
      //       to: [{type: 'route'}],
      //       options:{
      //         filter: ({document}) => {                
      //           return {
      //             filter: '_type == $type && references($id)',
      //             params: {
      //               type: 'route',
      //               id: document._id
      //             }
      //           }
      //         } 
      //       }
      //     },
      //     {
      //       name: 'assignedSlug',
      //       title: 'Assigned Slug',
      //       type: 'slug',
      //       source: (doc, opts) => (console.log('doc:', doc, '\noptions:', opts))
      //     },
      //   ],
      // },
      {
        name: "content",
        type: "array",
        title: "Page sections",
        of: [
          { type: "hero" }, 
          { type: "imageSection" }, 
          { type: "textSection" }, 
          // {type: "storySection"},
          {
          type: 'reference',
          to: [
              {type: 'storySection', title: 'Story Sections'},
            ]
          }
        ],
      },
      {
        name: "description",
        type: "text",
        title: "Description",
        description: "This description populates meta-tags on the webpage",
        fieldset: "metadata",
      },
      {
        name: "openGraphImage",
        type: "image",
        title: "Open Graph Image",
        description: "Image for sharing previews on Facebook, Twitter etc.",
        fieldset: "metadata",
        options: { hotspot: true },
      },
    ],
  
    preview: {
      select: {
        title: "title",
        media: "openGraphImage",
      },
      // select: {
      //   slug: "slug_custom_format.current",
      //   routeLabel: "routeLabel",
      // },
      prepare({ title, media }) {
        return {
          title,
          // subtitle: `slug: not ready`,
          media
        };
      },
    },
  };
  