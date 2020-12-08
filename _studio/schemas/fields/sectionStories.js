import sanityClient from '@sanity/client'

const sectionStories = {
  title: "Section Stories",
  name: "sectionStories",
  type: "array",
  of: [
    {
      type: "reference",
      to: [{ type: "story" }],
    },
  ],
//   of: [
//     {
//       type: "reference",
//       to: [{ type: "story" }],
//     },
//   ],
};

export default sectionStories

// const client = sanityClient({
//     projectId: 'your-project-id',
//     dataset: 'your-data-set-name',
//     token: process.env.SANITY_WRITE_TOKEN, // You need to have write permission
//   })