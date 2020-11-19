export default {
  title: "Story Section",
  name: "story-section",
  type: "array",
  of: [
    {
      type: "reference",
      to: [{ type: "story" }],
    },
  ],
};
