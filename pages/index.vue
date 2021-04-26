<template>
  <article>
    <section>
      <PageHeading>
        For Those Who Go Beyond
        <span class="text-blue-700">Best Practices</span>
      </PageHeading>
    </section>
    <section
      class="mt-12 max-w-5xl w-3/4 mx-auto bg-green-100 text-blue-900 text-lg text-center rounded-lg shadow-sm border-blue-900"
    >
      <p class="p-8">
        Thanks for making a choice to be part of the Blue Star program in
        Florida Keys National Marine Sanctuary. On this site are a number of
        topics for you to explore and gain the knowledge you need in order to be
        the best informed guide to visitors of our sanctuary.
      </p>
    </section>
  </article>
</template>

<script>
export default {
  name: 'Home',
  auth: false,
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
}
</script>
