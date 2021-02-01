<template>
  <div>
    <PageHeading> All Lessons </PageHeading>
    <ol class="list-decimal list-inside" reversed>
      <li v-for="lesson in lessons" :key="lesson.slug">
        <nuxt-link :to="`/training/lessons/${lesson.slug}`">{{
          lesson.title
        }}</nuxt-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'LessonIndex',
  async asyncData({ $content }) {
    const lessons = await $content('training/lessons')
      .only(['title', 'slug'])
      .fetch()

    return {
      lessons,
    }
  },
  head() {
    return [
      {
        title: 'Lessons',
      },
    ]
  },
}
</script>
