import Vue from 'vue'
import devQuiz from '../content/quizzes/devQuiz.yaml'

/* function importAll(r) {
  r.keys().forEach(r)
} */

Vue.use((Vue, options) => {
  /* const quizzes = importAll(
    require.context('../content/quizzes/', true, /\.yaml$/)
  ) */
  Vue.prototype.$quizzes = devQuiz
})
