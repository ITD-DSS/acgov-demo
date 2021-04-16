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
    {
      title: 'Story Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'refName',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
                             .toLowerCase()
                             .replace(/\s+/g, '-')
                             .slice(0, 200)
      }
    },
    // STORY CATEGORIES
    {
      title: "Story Section",
      name: "storySectionRef",
      type: "reference",
      to: [{ type: "storySection" }],
    },
    // STORY TAGS
    {
      title: "Story Tag",
      name: "storyTag",
      type: "string",
      options: {
        list: [
          { title: "Donations", value: "Donations" },
          { title: "Election", value: "Election" },
          { title: "Interactive Map", value: "Interactive Map" },
          { title: "Local", value: "Local" },
          { title: "Newsletter", value: "Newsletter" },
          { title: "Official Announcements", value: "Official Announcements" },
          { title: "Public Assistance", value: "Public Assistance" },
          { title: "Public Safety", value: "Public Safety" },
          { title: "Video", value: "Video" },
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
        direction: "horizontal",
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
    {
      title: 'Publish Date',
      name: 'publishedAt',
      type: 'datetime',
      options: {
        dateFormat: 'DD-MM-YYYY',
        timeFormat: 'HH:mm',
        calendarTodayLabel: 'Today'
      },
      validation: Rule => Rule.min(Date.now())
    }
  ],
};
