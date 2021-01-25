<template>
  <div class="container mx-auto px-4">
    <PageHeading>{{ lesson.title }}</PageHeading>
    <nuxt-content :document="lesson" />
    <Quiz
      :quiz="$quizzes[lesson.quiz]"
      class="my-8 mx-auto md:mx-8 lg:mx-12 xl:mx-32"
    />
  </div>
</template>

<script>
import Quiz from '../../../components/Quiz.vue'
import PageHeading from '../../../components/BaseUI/PageHeading.vue'
export default {
  components: {
    Quiz,
    PageHeading,
  },
  async asyncData({ $content, params, error }) {
    let lesson
    try {
      lesson = await $content('training/lessons', params.slug).fetch()
    } catch (e) {
      error({ message: 'Lesson not found' })
    }

    return {
      lesson,
    }
  },
}
</script>

<style lang="postcss">
.nuxt-content p {
  @apply leading-relaxed my-2;
}

.nuxt-content h2 {
  @apply mt-4 mb-1 text-2xl text-blue-800 font-semibold;
}

.nuxt-content img {
  @apply my-8 rounded-md overflow-hidden mx-auto;
}
</style>
