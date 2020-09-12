<template>
  <article class="prose">
    <PageHeading>{{ article.title }}</PageHeading>
    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  name: 'BlogPost',
  async asyncData({ $content, params }) {
    // fetch article here
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },
  head() {
    return {
      title: 'A Blog Post',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A Blog post here.',
        },
      ],
    }
  },
}
</script>
