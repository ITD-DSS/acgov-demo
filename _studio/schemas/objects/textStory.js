export default // TEXT STORY
{
  title: "Text Story",
  name: "textStory",
  type: "object",
  //   fieldsets: [{ name: "textFields", title: "News Story Text" }],
  fields: [
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
