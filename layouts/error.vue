<template>
  <article
    class="
      antialiased
      text-gray-800
      bg-gray-100 bg-gradient-to-b
      from-gray-100
      via-blue-100
      to-blue-200
    "
  >
    <PageHeading v-if="error.statusCode === 404">Page Not Found</PageHeading>
    <PageHeading v-else>An Error Occurred</PageHeading>
    <section class="space-y-4 w-full text-center">
      <p>
        {{ error.message }}
      </p>
      <nuxt-link to="/" class="mt-5 text-blue-500 underline">
        Return Home
      </nuxt-link>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    return {
      title: this.error.statusCode,
    }
  },
}
</script>

<style></style>
