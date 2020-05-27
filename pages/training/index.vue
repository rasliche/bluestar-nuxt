<template>
  <div>
    <h1
      class="max-w-3xl my-8 text-6xl border-b-2 text-blue-800 border-blue-800"
    >
      Choose a Learning Path
    </h1>
    <div class="flex flex-wrap space-x-2">
      <div class="w-1/4 h-64 bg-green-200">
        Diving
      </div>
      <div class="w-1/4 h-64 bg-green-200">
        Fishing
      </div>
      <div class="w-1/4 h-64 bg-green-200">
        Volunteering
      </div>
    </div>
    <nuxt-link to="/training/lessons">All lessons</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'TrainingIndex',
  // middleware: 'auth',
  head() {
    return [
      {
        title: 'Training'
      }
    ]
  }
}
</script>
