export default // IMAGE LINK
{
  title: "Image Link",
  name: "imageLink",
  type: "object",
  //   fieldsets: [{ name: "imageLinkFields", title: "Image Link" }],
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
      title: "Link To URL",
      name: "linkTo",
      type: "url",
    },
    {
      name:  'linkImage',
      type: 'linkImage',
      title: 'Linked Image',
    }
  ],
};
