<template>
  <div>
    <PageHeading>
      All Articles
    </PageHeading>
    <ol class="list-decimal list-inside" reversed>
      <li v-for="article in articles" :key="article.slug">
        <nuxt-link :to="`/blog/${article.slug}`">{{ article.title }}</nuxt-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'BlogIndex',
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'slug', 'author'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      articles,
    }
  },
  head() {
    return [
      {
        title: 'Blog',
      },
    ]
  },
}
</script>
