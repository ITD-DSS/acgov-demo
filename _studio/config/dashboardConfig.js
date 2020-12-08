export default {
  widgets: [
    {
      name: "sanity-tutorials",
    },
    {
      name: "project-info",
    },
    {
      name: "project-users",
    },
    {
      name: "netlify",
      options: {
        title: "My Netlify deploys",
        sites: [
          {
            title: "AcGov Sanity Studio",
            apiId: "2d8f3231-fca2-49bb-a175-ff5f8d7aad81",
            buildHookId: "5fcef7b745a30d20207a8730",
            name: "acgov-demo-studio",
          },
          {
            title: "AcGov Demo",
            apiId: "c13ca1c9-fef3-49b0-93f8-89bba7bbf0fe",
            buildHookId: "5fcef64e15b8ad2115e3104a",
            name: "acgov-demo",
          },
        ],
      },
    },
    {
      name: 'google-analytics',
      layout: {
        width: 'large'
      },
      options: {
        title: 'Last 30 days',
        gaConfig: {
          reportType: 'ga',
          query: {
            dimensions: 'ga:date',
            metrics: 'ga:users, ga:sessions, ga:newUsers',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
          },
          chart: {
            type: 'LINE',
            options: {
              width: '100%',
            }
          }
        }
      }
    },
  ],
};
