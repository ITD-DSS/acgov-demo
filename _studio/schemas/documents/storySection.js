// import getSectionStoriesReferences from "../_utils/index";

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
      // of: getSectionStoriesReferences(),
      to: [{ type: "story" }],
      options: {
        filter: ({ document, parent }) => {
          // Always make sure to check for document properties
          // before attempting to use them
          if (!document._ref) {
            return {
              filter: "$parentName == $storySection",
              params: {
                storySection: document.storySectionRef,
                parentName: parent.sectionName,
              },
            };
          }

          return {
            filter: "$parentId == $refId",
            params: {
              parentId: parent.id,
              refId: document._ref,
            },
          };
        },
      },
    },
  ],
};
