<template>
  <div class="quiz border border-blue-800 rounded-t-md rounded-b-md">
    <p class="bg-blue-800 text-white font-bold text-center py-2 px-4">
      Quiz ({{ questionIndex + 1 }}/{{ questionCount }}){{
        highScore * 100 >= quiz.minimumScore ? ': COMPLETED' : ''
      }}
    </p>
    <div v-if="!done" class="quiz-content flex flex-col">
      <p class="quiz-question block text-center">
        {{ quiz.questions[questionIndex].question }}
      </p>
      <hr />
      <button
        v-for="(answer, index) in quiz.questions[questionIndex].answers"
        :key="index"
        class="quiz-answer-choice block text-center btn hover:bg-blue-300"
        :style="{ color: currentAnswerChoice == index ? 'blue' : 'inherit' }"
        @click="answerChoicePressed(index)"
      >
        {{ answer.text }}
      </button>
      <button
        class="quiz-submit block text-center font-bold py-2 px-4 rounded-b-md bg-blue-800 text-white hover:bg-blue-300"
        :disabled="!readyForNextQuestion"
        @click="submitButtonPressed"
      >
        {{ lastQuestion ? 'Submit' : 'Next' }}
      </button>
    </div>
    <div v-if="done" class="quiz-result flex flex-col text-center">
      <p class="text-4xl">
        Your Score: {{ `${Math.round(finalGrade * 100)}%` }}
      </p>
      <p class="text-3xl">
        {{
          finalGrade >= quiz.minimumScore / 100
            ? 'Good Job!'
            : `You need ${Math.round(quiz.minimumScore)}% or higher to pass`
        }}
      </p>
      <p>
        <em>Your best score was {{ `${Math.round(highScore * 100)}%` }}</em>
      </p>
      <button
        class="retry-button font-bold py-2 px-4 rounded-b-md bg-blue-800 text-white"
        @click="reset"
      >
        Try Again
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Quiz',
  props: {
    uuid: {
      type: String,
      default: () => {
        return -1
      },
    },
    quiz: {
      type: Object,
      default: () => {
        return {
          minimumScore: 75,
          questions: [
            {
              question:
                '[SAMPLE QUESTION] Which of these is not a programming language?',
              answers: [
                { text: 'JavaScript' },
                { text: 'C++' },
                { text: 'HTML', correct: true },
                { text: 'Rust' },
              ],
              correct: 2,
            },
            {
              question:
                '[SAMPLE QUESTION] A 64-bit Intel processor can have, at most, 4 pebibytes of physical memory.',
              answers: [{ text: 'True', correct: true }, { text: 'False' }],
              correct: 0,
            },
            {
              question:
                '[SAMPLE QUESTION] The POSIX function for creating new processes is:',
              answers: [
                { text: 'pthread_init' },
                { text: 'fork', correct: true },
                { text: 'mmap' },
                { text: 'sem_init' },
              ],
            },
          ],
        }
      },
    },
  },
  data() {
    return {
      questionIndex: 0,
      correctAnswers: 0,
      currentAnswerChoice: -1,
      readyForNextQuestion: false,
      done: false,
      finalGrade: 0,
      highScore: 0,
    }
  },
  computed: {
    questionCount() {
      return this.quiz.questions.length
    },
    lastQuestion() {
      return this.questionIndex + 1 === this.questionCount
    },
  },
  // mounted() {
  //   this.$axios
  //     .$get(`/users/${this.$auth.user._id}/scores/${this.uuid}`)
  //     .then((data) => {
  //       console.log(data)
  //       if (data && data[0].score) {
  //         this.highScore = data[0].score
  //         this.finalGrade = data[0].score
  //         this.questionIndex = this.questionCount - 1
  //         this.done = true
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error.message)
  //     })
  // },
  methods: {
    submitButtonPressed() {
      // eslint-disable-next-line prettier/prettier
      if (this.quiz.questions[this.questionIndex].answers[this.currentAnswerChoice].correct) {
        this.correctAnswers++
      }
      if (!this.lastQuestion) {
        this.readyForNextQuestion = false
        this.currentAnswerChoice = -1
        this.questionIndex++
      } else {
        this.done = true
        this.finalGrade = this.correctAnswers / this.questionCount
        this.grade()
      }
    },
    answerChoicePressed(answerIndex) {
      this.currentAnswerChoice = answerIndex
      this.readyForNextQuestion = true
    },
    reset() {
      this.currentAnswerChoice = -1
      this.correctAnswers = 0
      this.readyForNextQuestion = false
      this.questionIndex = 0
      this.finalGrade = 0
      this.done = false
    },
    // grade() {
    //   try {
    //     this.$axios
    //       .$post(`/users/${this.$auth.user._id}/scores/${this.uuid}`, {
    //         // uuid: this.quiz.uuid,
    //         score: this.finalGrade,
    //       })
    //       .then((data) => {
    //         if (data && data.score) {
    //           this.highScore = data.score
    //         }
    //       })
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },
  },
}
</script>
