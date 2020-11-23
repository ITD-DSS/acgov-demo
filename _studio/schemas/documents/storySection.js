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
    {
      title: "Section Stories",
      name: "sectionStories",
      type: "reference",
      to: [{ type: "story" }],
      options: {
        filter: ({ document }) => {
          // Always make sure to check for document properties
          // before attempting to use them
          if (!document.storySectionRef) {
            return {
              filter: "role == $role",
              params: { role: "director" },
            };
          }

          return {
            filter: "role == $role && birthYear >= $minYear",
            params: {
              role: "director",
              minYear: document.releaseYear,
            },
          };
        },
      },
    },
  ],
};
