// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import siteSettings from "./documents/siteSettings";
import storySection from "./documents/storySection";
// import pageOrder from "./documents/pageOrder";
import page from "./documents/page";
import route from "./documents/route";
import story from "./documents/story";

import hero from "./objects/hero";
import simplePortableText from "./objects/simplePortableText";
import portableText from "./objects/portableText";
import imageSection from "./objects/imageSection";
import textSection from "./objects/textSection";
import textStory from "./objects/textStory";
import imageLink from "./objects/imageLink";
import videoStory from "./objects/videoStory";
import cta from "./objects/cta";
import figure from "./objects/figure";
import blockContent from "./objects/blockContent";
import link from "./objects/link";
import internalLink from "./objects/internalLink";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* DOCUMENTS */
    siteSettings,
    storySection,
    // TODO: Deprecate: replace with PAGE paradigm
    // pageOrder,
    page,
    route,
    story,
    /* OBJECTS */
    link,
    internalLink,
    hero,
    simplePortableText,
    portableText,
    imageSection,
    textSection,
    textStory,
    imageLink,
    videoStory,
    cta,
    figure,
    blockContent,
  ]),
});
