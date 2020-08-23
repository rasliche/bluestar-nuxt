<template>
  <div>
    <PageHeading>
      All Blog Posts
    </PageHeading>
    <div class="flex flex-wrap space-x-2">
      <nuxt-link
        v-for="article in articles"
        :key="article.slug"
        :to="`/blog/${article.slug}`"
      >
        {{ article.title }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogIndex',
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
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
