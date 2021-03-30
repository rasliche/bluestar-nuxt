<template>
  <div>
    <PageHeading>Choose a Lesson</PageHeading>
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
