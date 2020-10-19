<template>
  <div
    class="quiz border border-blue-800 flex flex-col rounded-t-md rounded-b-md"
  >
    <p class="quiz-header">Quiz (0/1)</p>
    <p class="quiz-question block text-center">
      Which of these is NOT a programming language?
    </p>
    <hr />
    <button class="quiz-answer-choice block text-center btn">JavaScript</button>
    <button class="quiz-answer-choice block text-center btn">C++</button>
    <button class="quiz-answer-choice block text-center btn">HTML</button>
    <button class="quiz-answer-choice block text-center btn">Rust</button>
    <button class="quiz-submit block text-center btn btn-blue">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'Quiz',
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
