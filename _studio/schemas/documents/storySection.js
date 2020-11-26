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
      title: "Section Stories",
      name: "sectionStories",
      type: "reference",
      to: [{ type: "story" }],
      options: {},
    },
  ],
  // preview: {
  //   select: {
  //     section: "sectionName",
  //     story: "story.sectionRef",
  //   },
  //   prepare() {},
  // },
};
