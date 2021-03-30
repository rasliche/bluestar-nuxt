<template>
  <div>
    <PageHeading>Choose a Lesson</PageHeading>
    <LessonList></LessonList>
  </div>
</template>

<script>
import PageHeading from '@/components/BaseUI/PageHeading'

export default {
  name: 'TrainingIndex',
  components: { PageHeading },
  head() {
    return [
      {
        title: 'Training',
      },
    ]
  },
}
</script>
