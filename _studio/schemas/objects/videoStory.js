export default // VIDEO STORIES
{
  title: "Video Story",
  name: "videoStory",
  type: "object",
  fields: [
    {
      title: "Youtube URL",
      name: "youtubeUrl",
      type: "url",
    },
    {
      // Editing this field will be hidden behind an "Edit"-button
      name: "altText",
      type: "string",
      title: "Alt Text",
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
  ],
};
