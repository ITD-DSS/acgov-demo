export default // IMAGE LINK
{
  title: "Image Link",
  name: "imageLink",
  type: "object",
  //   fieldsets: [{ name: "imageLinkFields", title: "Image Link" }],
  fields: [
    {
      title: "Link To URL",
      name: "linkTo",
      type: "url",
    },
    {
      title: "Linked Image",
      name: "linkImage",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
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
    },
  ],
};
