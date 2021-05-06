<template>
  <div class="w-screen">
    <client-only>
      <aside
        v-if="$nuxt.isPreview"
        class="sticky top-0 py-2 text-center bg-blue-500 bg-opacity-50"
      >
        <p class="font-semibold">
          Draft Preview.
          <button class="font-semibold underline" @click="$nuxt.refresh()">
            Click here to refresh
          </button>
        </p>
      </aside>
    </client-only>
    <acgov-header />

    <Nuxt />
    <!-- <modal-govdelivery /> -->
    <!-- <translate-button /> -->
    <!-- County Administrator's Office --------------------------------->
    <!-- <modal-cao /> -->
    <!-- <modal-bos /> -->
    <acgov-footer />
  </div>
</template>

<script>
export default {
  fetchKey: 'acgov-layout',
  fetchOnServer: true,
}
</script>

<style></style>
