export default {
  projectId: process.env.SANITY_PROJECT_ID,
  apiVersion: '2021-03-25',
  dataset:
    process.env.NODE_ENV !== 'production' ? 'development' : 'development',
}
