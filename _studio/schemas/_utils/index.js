// import dotenv from "dotenv";
// import { findEnv } from "../../config/findEnv";

// dotenv.config({ path: findEnv() });

// const sanityClient = require("@sanity/client");
// const client = sanityClient({
//   projectId: process.env.SANITY_PROJECT_ID,
//   dataset: process.env.NODE_ENV !== "production" ? "development" : "test",
//   token: process.env.STUDIO_CLIENT_TOKEN,
//   useCdn: false, // `false` if you want to ensure fresh data
// });
// export const getSectionStoriesReferences = () => {
//   const query = `*[_type=="storySection"]{sectionName,"sectionStories": *[_type=="story" && references(^._id)]{ "_ref": _id }}`;

//   client.fetch(query).then((result) => {
//     let sections = result;
//     sections.forEach((section) => {
//       section.sectionStories; //?
//     });
//   });
// };

// getSectionStoriesReferences();
