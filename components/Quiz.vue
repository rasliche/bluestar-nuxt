<template>
  <div
    class="quiz border border-blue-800 flex flex-col rounded-t-md rounded-b-md"
  >
    <p class="quiz-header">
      Quiz ({{ questionIndex + 1 }}/{{ questionCount }})
    </p>
    <p class="quiz-question block text-center">
      {{ questions[questionIndex].question }}
    </p>
    <hr />
    <button
      v-for="(answer, index) in questions[questionIndex].answers"
      :key="index"
      class="quiz-answer-choice block text-center btn"
    >
      {{ answer }}
    </button>
    <button
      class="quiz-submit block text-center btn btn-blue"
      @click="submitButtonPressed"
    >
      {{ lastQuestion ? 'Submit' : 'Next' }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Quiz',
  props: {
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
      if (!this.lastQuestion) {
        this.questionIndex++
      }
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
.btn-blue:hover {
  @apply bg-blue-900;
}
.quiz-header {
  @apply bg-blue-800 text-white font-bold text-center py-2 px-4;
}
</style>
