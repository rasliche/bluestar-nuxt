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
      <h2>Completed Lessons</h2>
      <ul>
        <li></li>
      </ul>
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
