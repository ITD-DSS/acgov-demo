export default // STORY POSITION / PAGE LAYOUT
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
};
