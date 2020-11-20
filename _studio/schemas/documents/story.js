export default {
  title: "Story",
  name: "story",
  type: "document",
  fields: [
    // STORY CATEGORIES
    {
      title: "Category Set",
      name: "categorySet",
      type: "string",
      options: {
        list: [
          { title: "Donations", value: "donations" },
          { title: "Elections", value: "elections" },
          { title: "Interactive Map", value: "interactiveMap" },
          { title: "Local", value: "local" },
          { title: "Newsletter", value: "newsletter" },
          { title: "Official Announcements", value: "officialAnnouncements" },
          { title: "Public Assistance", value: "publicAssistance" },
          { title: "Public Safety", value: "publicSafety" },
          { title: "Video", value: "video" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    },
    // STORY TYPE
    // {
    //   title: "Story Type Format",
    //   name: "storyTypeFormat",
    //   type: "string",
    //   options: {
    //     list: [
    //       { title: "Text", value: "text" },
    //       { title: "Image Link", value: "imageLink" },
    //       { title: "Video", value: "video" },
    //     ], // <-- predefined values
    //     layout: "radio", // <-- defaults to 'dropdown'
    //   },
    //   validation: (Rule) => Rule.required(),
    // },
    {
      title: "Story Format",
      name: "storyFormat",
      type: "array",
      of: [
        { type: "textStory" },
        { type: "imageLink" },
        { type: "videoStory" },
      ],
      options: {
        editModal: "fullscreen",
      },
      validation: (Rule) => Rule.unique(),
    },
  ],
};
