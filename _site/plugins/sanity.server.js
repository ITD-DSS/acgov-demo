export default async ({ $sanity, $config }) => {
  const token = await $config.SanityNuxtToken
  $sanity.setToken(token)
}
