import SlugInput from 'sanity-plugin-better-slug'
export default {
  name: "route",
  type: "document",
  title: "Route",
//   icon: MdLink,
  fields: [
    {
      name: 'routeLabel',
      title: 'Route Label',
      type: 'string',
    },
    {
      // If you want to customize how slugs are formatted
      name: 'slug_custom_format',
      type: 'slug',
      inputComponent: SlugInput,
      options: {
        source: ( doc ) => doc.routeLabel ? doc.routeLabel : 'slug_custom_format.current',
        // maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => (
          input.toLowerCase().match("index")
          ? 'index'
          :input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
          ),
        basePath: 'https://acgov.org',
      },
    },
    // {
    //   name: "slug",
    //   type: "slug",
    //   title: "Slug",
    //   options: {
    //     source: 'route',
    //     maxLength: 200, // will be ignored if slugify is set
    //     slugify: input => input
    //                          .toLowerCase()
    //                          .replace(/\s+/g, '-')
    //                          .slice(0, 200)
    //   }
    // },
    // createSlugField({ source: "route" }),
    {
      name: "page",
      type: "reference",
      weak: true,
      description: "Select the page that this route should point to",
      to: [
        {
          type: "page",
        },
      ],
    },
    {
      name: "includeInSitemap",
      type: "boolean",
      title: "Include page in sitemap",
      description: "For search engines. Will be added to /sitemap.xml",
    },
    {
      name: "disallowRobots",
      type: "boolean",
      title: "Disallow in robots.txt",
      description: "Hide this route for search engines",
    },
  ],
  preview: {
    select: {
      slug: "slug_custom_format.current",
      routeLabel: "routeLabel",
    },
    prepare({ slug, routeLabel }) {
      return {
        title: routeLabel,
        subtitle: `slug: ${slug}`,
      };
    },
  },
};
