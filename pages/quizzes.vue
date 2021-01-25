<template>
  <div id="quiz-list" class="grid md:grid-cols-3">
    <div></div>
    <div>
      <h1 class="text-center text-4xl">All Quizzes</h1>
      <hr />
      <ul>
        <li v-for="quiz in $quizzes" :key="quiz.uuid">
          <Quiz :quiz="quiz" class="list-item" />
        </li>
      </ul>
    </div>
    <div></div>
  </div>
</template>

<script>
import Quiz from '../components/Quiz.vue'
export default {
  name: 'QuizList',
  components: {
    Quiz,
  },
}
</script>

<style scoped>
.list-item {
  /* max-width: 33vw; */
  margin: 0 auto;
  margin-bottom: 8px;
}

hr {
  margin-bottom: 8px;
}
</style>
