export default {
  title: "Story",
  name: "story",
  type: "document",
  fields: [
    // REFERENCE NAME
    {
      title: "Reference Name",
      name: "refName",
      type: "string",
    },
    // STORY CATEGORIES
    {
      title: "Story Section",
      name: "storySectionRef",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "storySection" }],
        },
      ],
      validation: (Rule) => Rule.length(1),
    },
    // STORY TAGS
    {
      title: "Story Tag Set",
      name: "storyTagSet",
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
    // STORY LAYOUT
    {
      title: "Story Layout",
      name: "storyLayout",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
          { title: "Full Width", value: "full" },
        ], // <-- predefined values
        layout: "radio", // <-- defaults to 'dropdown'
      },
      validation: (Rule) => Rule.required(),
    },
    // STORY FORMAT
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
      validation: (Rule) => Rule.length(1),
    },
  ],
};
