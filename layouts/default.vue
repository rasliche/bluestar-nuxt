<template>
  <client-only placeholder="Loading...">
    <div class="antialiased text-gray-800 bg-gray-100">
      <the-nav />
      <nuxt class="min-h-screen mx-2 mt-2" />
      <the-footer />
      <notification-container />
    </div>
  </client-only>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: '%s - FKNMS Blue Star Online',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Where you can find all the information about Florida Keys National Marine Sanctuary's Blue Star program and take online training.",
        },
      ],
    }
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
