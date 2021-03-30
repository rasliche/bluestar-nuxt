<template>
  <div id="quiz-list">
    <PageHeading>All Quizzes</PageHeading>
    <ul>
      <!-- <li v-for="quiz in $quizzes" :key="quiz.uuid">
          <Quiz :quiz="quiz" class="list-item" />
        </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'QuizList',
}
</script>
