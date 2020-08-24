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
    return [
      { title: this.article.title },
      {
        hid: 'description',
        name: 'description',
        content: this.article.description,
      },
    ]
  },
}
</script>
