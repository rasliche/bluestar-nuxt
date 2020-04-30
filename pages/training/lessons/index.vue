<template>
  <div>
    <h1>Lessons Index</h1>
    <div class="flex flex-wrap">
      <nuxt-link to="/training/lessons/about-blue-star">
        About Blue Star
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LessonIndex',
  head() {
    return [
      {
        title: 'Training Paths'
      }
    ]
  }
}
</script>

<style></style>
