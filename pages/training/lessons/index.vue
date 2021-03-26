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
import PageHeading from '@/components/BaseUI/PageHeading'

export default {
  name: 'LessonIndex',
  components: { PageHeading },
  async asyncData({ $content }) {
    const lessons = await $content('lessons').only(['title', 'slug']).fetch()

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
