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
    {
      title: "Section Stories",
      name: "sectionStories",
      type: "reference",
      to: [{ type: "story" }],
      // options: {
      //   filter: ({ document, parent }) => {
      //     console.log("document\n", document);

      //     const { _id, sectionName } = document;

      //     // console.log("parent\n", parent);
      //     // Always make sure to check for document properties
      //     // before attempting to use them
      //     // if (document.sectionName) {
      //     //   return {
      //     //     filter: "role == $role",
      //     //     params: { section: document.sectionName },
      //     //   };
      //     // }

      //     // return {
      //     //   filter: "role == $role && birthYear >= $minYear",
      //     //   params: {
      //     //     role: "director",
      //     //     minYear: document.releaseYear,
      //     //   },
      //     // };
      //   },
      // },
    },

    // {
    //   title: "Section Stories",
    //   name: "sectionStories",
    //   type: "object",
    //   fields: [
    //     {
    //       title: "Stories In Section",
    //       name: "sectionStory",
    //       type: "reference",
    //       weak: true,
    //       // of: getSectionStoriesReferences(),
    //       to: [{ type: "story" }],
    //       options: {
    //         filter: ({ document, parent }) => {
    //           console.log("document\n", document.sectionStories);
    //           // console.log("parent\n", parent);
    //           // Always make sure to check for document properties
    //           // before attempting to use them
    //           // if (document.sectionName) {
    //           //   return {
    //           //     filter: "role == $role",
    //           //     params: { section: document.sectionName },
    //           //   };
    //           // }

    //           // return {
    //           //   filter: "role == $role && birthYear >= $minYear",
    //           //   params: {
    //           //     role: "director",
    //           //     minYear: document.releaseYear,
    //           //   },
    //           // };
    //         },
    //       },
    //     },
    //   ],
    // },
  ],
};
