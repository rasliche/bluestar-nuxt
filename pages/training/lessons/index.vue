<template>
  <div class="w-full">
    <h1>Lessons Index</h1>
    <div class="flex flex-wrap space-around">
      <nuxt-link to="/training/lessons/about-blue-star">
        About Blue Star
      </nuxt-link>
      <nuxt-link to="/training/lessons/sanctuary-regulations-and-zones">
        Sanctuary Regulations and Zones
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
