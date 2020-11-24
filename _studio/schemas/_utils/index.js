import dotenv from "dotenv";
import { findEnv } from "../../config/findEnv";
const sanityClient = require("@sanity/client");

dotenv.config({ path: findEnv() });

const clientOptions = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.NODE_ENV !== "production" ? "development" : "test",
  token: process.env.STUDIO_CLIENT_TOKEN,
  useCdn: false, // `false` if you want to ensure fresh data
};
const client = sanityClient(clientOptions);

// export const getSectionStoriesReferences = (id) => {
//   const query = `*[_type=="storySection"]{sectionName, _id, "sectionStories": *[_type=="story" && references(^._id)]{ "_ref": _id }}`; //?

//   client.fetch(query).then((result) => {
//       result
//     // sections.forEach((section) => {
//     //   section.sectionStories; //?
//     // });
//   });
// };

// export const getSectionStoriesReferences = () => {
//   const query = `*[_type=="storySection"]{sectionName,"sectionStories": *[_type=="story" && references(^._id)]{ "_ref": _id }}`;

//   client.fetch(query).then((result) => {
//     let sections = result;
//     sections.forEach((section) => {
//       section.sectionStories; //?
//     });
//   });
// };

const electionId = "drafts.3410cb33-b22a-4707-95b2-e51654296955";

// getSectionStoriesReferences(electionId);
