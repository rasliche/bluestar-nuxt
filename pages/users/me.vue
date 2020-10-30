<template>
  <div>
    <PageHeading>My Dashboard</PageHeading>
    <div class="flex w-full text-center divide-x divide-blue-300">
      <div class="flex-1 text-lg">
        <p>{{ this.$auth.user.name }}</p>
      </div>
      <div class="flex-1 text-lg">
        <p>{{ this.$auth.user.email }}</p>
      </div>
    </div>
    <div>
      <h2 class="text-xl">Completed Lessons</h2>
      <div
        v-if="
          this.$auth.user.lessonScores &&
          this.$auth.user.lessonScores.length > 0
        "
      >
        <ul>
          <li></li>
        </ul>
      </div>
      <div v-else>
        <p>
          You haven't completed any quizzes yet! Head over to
          <nuxt-link to="/training">Training</nuxt-link> and get started.
        </p>
      </div>
    </div>
    {{ this.$auth.user }}
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  head() {
    return [
      {
        title: 'Dashboard',
      },
    ]
  },
}
</script>
