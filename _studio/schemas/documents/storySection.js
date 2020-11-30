// *[_type=="storySection"]{
//   _id,
//   "related": *[_type=="story" && references(^._id)]
// }

export default {
  title: "Story Section",
  name: "storySection",
  type: "document",
  fields: [
    {
      title: "Section Name",
      name: "sectionName",
      type: "string",
    },
    {
      title: "Section Slug",
      name: "sectionSlug",
      type: "slug",
      options: {
        source: (doc) => `${doc.sectionName}`,
        maxLength: 25, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 25),
      },
    },
    {
      title: "Section Stories",
      name: "sectionStories",
      type: "reference",
      to: [{ type: "story" }],
      options: {},
    },
    // {
    //   title: "Section Stories",
    //   name: "sectionStories",
    //   type: "array",
    //   of: [
    //     {
    //       type: "reference",
    //       to: [{ type: "story" }],
    //     },
    //   ],
    // },
  ],
};
