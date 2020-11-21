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
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "story" }],
        },
      ],
    },
  ],
};
