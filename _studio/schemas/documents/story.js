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
    },
    // STORY POSITION / PAGE LAYOUT
    {
      title: "Story Position",
      name: "storyPosition",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
          { title: "Full Width", value: "full" },
        ], // <-- predefined values
        layout: "radio", // <-- defaults to 'dropdown'
      },
    },
    // TEXT STORY
    {
      title: "Text Story",
      name: "textStory",
      type: "object",
      fieldsets: [{ name: "textFields", title: "News Story Text" }],
      fields: [
        {
          title: "Headline",
          name: "headline",
          type: "string",
        },
        {
          title: "Story Body Text",
          name: "storyBody",
          type: "text",
        },
      ],
    },
    // IMAGE LINK
    {
      title: "Image Link",
      name: "imageLink",
      type: "object",
      fieldsets: [{ name: "imageLinkFields", title: "Image Link" }],
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
    },
    // VIDEO STORIES
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
    },
  ],
};
