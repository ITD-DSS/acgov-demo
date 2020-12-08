export default // TEXT STORY
{
  title: "Text Story",
  name: "textStory",
  type: "object",
  //   fieldsets: [{ name: "textFields", title: "News Story Text" }],
  fields: [
    // {
    //   title: "Story Layout",
    //   name: "storyLayout",
    //   type: "string",
    //   options: {
    //     list: [
    //       { title: "Left", value: "left" },
    //       { title: "Right", value: "right" },
    //       { title: "Full Width", value: "full" },
    //     ], // <-- predefined values
    //     layout: "radio", // <-- defaults to 'dropdown'
    //   },
    //   validation: (Rule) => Rule.required(),
    // },
    {
      title: "Headline",
      name: "headline",
      type: "string",
    },
    {
      title: "Story Body Text",
      name: "storyBody",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
