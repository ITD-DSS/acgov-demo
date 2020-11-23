const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "your-project-id",
  dataset: "bikeshop",
  token: "sanity-auth-token", // or leave blank to be anonymous user
  useCdn: true, // `false` if you want to ensure fresh data
});
export const getSectionStoriesReferences = (params) => {};
