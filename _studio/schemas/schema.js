// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import pageOrder from "./documents/pageOrder";
import siteSettings from "./documents/siteSettings";
import storySection from "./documents/storySection";
// import storySection from "./documents/frontPage";
import story from "./documents/story";

import textStory from "./objects/textStory";
import videoStory from "./objects/videoStory";
import imageLink from "./objects/imageLink";
import bgImage from "./objects/bgImage";
import linkImage from "./objects/linkImage";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    pageOrder,
    siteSettings,
    storySection,
    story,
    textStory,
    videoStory,
    imageLink,
    bgImage,
    linkImage
  ]),
});
