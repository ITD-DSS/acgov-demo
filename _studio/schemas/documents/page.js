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
      {
        title: 'Page Slug',
        name: 'pageSlug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      },
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
    },
  };
  