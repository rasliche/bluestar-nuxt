<template>
  <div class="quiz border border-blue-800 rounded-t-md rounded-b-md">
    <p class="quiz-header">
      Quiz ({{ questionIndex + 1 }}/{{ questionCount }})
    </p>
    <div v-if="!done" class="quiz-content flex flex-col">
      <p class="quiz-question block text-center">
        {{ questions[questionIndex].question }}
      </p>
      <hr />
      <button
        v-for="(answer, index) in questions[questionIndex].answers"
        :key="index"
        class="quiz-answer-choice block text-center btn"
        :style="{ color: currentAnswerChoice == index ? 'blue' : 'inherit' }"
        @click="answerChoicePressed(index)"
      >
        {{ answer }}
      </button>
      <button
        class="quiz-submit block text-center btn btn-blue"
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
          finalGrade >= minimumScore
            ? 'Good Job!'
            : `You need ${Math.round(minimumScore * 100)}% or higher to pass`
        }}
      </p>
      <button
        v-if="finalGrade < minimumScore"
        class="retry-button btn btn-blue"
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
    quizID: {
      type: Number,
      default: -1,
    },
    questions: {
      type: Array,
      default: () => {
        return [
          {
            question:
              '[SAMPLE QUESTION] Which of these is not a programming language?',
            answers: ['JavaScript', 'C++', 'HTML', 'Rust'],
            correct: 2,
          },
          {
            question:
              '[SAMPLE QUESTION] A 64-bit Intel processor can have, at most, 4 pebibytes of physical memory.',
            answers: ['True', 'False'],
            correct: 0,
          },
          {
            question:
              '[SAMPLE QUESTION] The POSIX function for creating new processes is:',
            answers: ['pthread_init', 'fork', 'mmap', 'sem_init'],
            correct: 1,
          },
        ]
      },
    },
    minimumScore: {
      type: Number,
      default: 0.75,
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
    }
  },
  computed: {
    questionCount() {
      return this.questions.length
    },
    lastQuestion() {
      return this.questionIndex + 1 === this.questionCount
    },
  },
  methods: {
    submitButtonPressed() {
      // eslint-disable-next-line prettier/prettier
      if (this.currentAnswerChoice === this.questions[this.questionIndex].correct) {
        this.correctAnswers++
      }
      if (!this.lastQuestion) {
        this.readyForNextQuestion = false
        this.currentAnswerChoice = -1
        this.questionIndex++
      } else {
        this.done = true
        this.finalGrade = this.correctAnswers / this.questionCount
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
  },
}
</script>

<style lang="postcss">
.btn {
  @apply font-bold py-2 px-4 rounded-b-md;
}
.btn-blue {
  @apply bg-blue-800 text-white;
}
.btn:hover {
  @apply bg-blue-300;
}
.quiz-header {
  @apply bg-blue-800 text-white font-bold text-center py-2 px-4;
}
</style>
