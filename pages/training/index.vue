<template>
  <div class="container mx-auto max-w-4xl px-4">
    <PageHeading>Choose a Lesson</PageHeading>
    <p>
      The lessons below have been hand crafted by experts to give you the
      need-to-know information about a specific topic.
    </p>
    <LessonList></LessonList>
  </div>
</template>

<script>
export default {
  name: 'TrainingIndex',
  head() {
    return [
      {
        title: 'Training',
      },
    ]
  },
}
</script>
