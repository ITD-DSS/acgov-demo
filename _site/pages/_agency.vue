<template></template>

<script>
export default {
  validate({ params, store }) {
    return store.dispatch('validateSlug', params)
  },
}
</script>

<style></style>
