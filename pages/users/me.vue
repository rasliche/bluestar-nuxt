<template>
  <div>
    <PageHeading>My Dashboard</PageHeading>
    <div class="flex w-full text-center divide-x divide-blue-300">
      <p class="flex-1 text-lg">{{ this.$auth.user.name }}</p>
      <p class="flex-1 text-lg">{{ this.$auth.user.email }}</p>
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
