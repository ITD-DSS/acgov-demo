export default async ({ $sanity, $config }) => {
  const token = $config.SanityNuxtToken
  $sanity.setToken(token)
}
