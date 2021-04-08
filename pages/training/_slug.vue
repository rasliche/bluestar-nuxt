<template>
  <article class="container mx-auto max-w-4xl px-4">
    <PageHeading>{{ lesson.title }}</PageHeading>
    <nuxt-content :document="lesson" />
    <Quiz
      :quiz="lesson.quiz"
      :uuid="lesson.uuid"
      class="my-8 mx-auto md:mx-8 lg:mx-12 xl:mx-32"
    />
  </article>
</template>

<script>
export default {
  name: 'LessonSlug',
  async asyncData({ $content, params, error }) {
    let lesson
    try {
      lesson = await $content('lessons', params.slug).fetch()
    } catch (e) {
      error({ statusCode: 404, message: 'Lesson not found' })
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

.nuxt-content h3 {
  @apply mt-4 mb-1 text-xl text-blue-800 font-semibold;
}

.nuxt-content img {
  @apply rounded-md overflow-hidden mx-auto;
}
</style>
