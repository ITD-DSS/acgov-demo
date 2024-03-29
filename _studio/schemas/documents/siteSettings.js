export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  fieldsets: [{ name: "footer", title: "Footer" }],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Site title",
    },
    {
      title: "URL",
      name: "url",
      type: "url",
      description: "The main site url. Used to create canonical url",
      validation: Rule => Rule.uri({
        // scheme: ['http', 'https', 'mailto', 'tel']
        allowRelative: true,
        // relativeOnly: true
      })
    },
    {
      name: "frontpage",
      title: "Frontpage",
      type: "reference",
      weak: true,
      description: "Choose a route to be the frontpage",
      to: [{ type: "route" }],
    },
    {
      title: "Site language",
      name: "lang",
      type: "string",
    },
    {
      title: "Brand logo",
      description:
        "Best choice is to use an SVG where the color are set with currentColor",
      name: "logo",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    // {
    //   title: "Main navigation",
    //   name: "mainNavigation",
    //   description: "Select pages for the top menu",
    //   validation: (Rule) => [
    //     Rule.max(5).warning("Are you sure you want more than 5 items?"),
    //     Rule.unique().error("You have duplicate menu items"),
    //   ],
    //   type: "array",
    //   of: [
    //     {
    //       type: "reference",
    //       to: [{ type: "route" }],
    //     },
    //   ],
    // },
    // {
    //   title: "Footer navigation items",
    //   name: "footerNavigation",
    //   type: "array",
    //   validation: (Rule) => [
    //     Rule.max(10).warning("Are you sure you want more than 10 items?"),
    //     Rule.unique().error("You have duplicate menu items"),
    //   ],
    //   fieldset: "footer",
    //   of: [
    //     {
    //       type: "reference",
    //       to: [{ type: "route" }],
    //     },
    //   ],
    // },
    // {
    //   name: "footerText",
    //   type: "simplePortableText",
    //   fieldset: "footer",
    // },
  ],
};
