<template>
  <div>
    <PageHeading v-if="error.statusCode === 404">Page Not Found</PageHeading>
    <PageHeading v-else>An Error Occurred</PageHeading>
    <div>
      {{ error.message }}
    </div>
    <nuxt-link to="/"> Return to Homepage </nuxt-link>
  </div>
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
