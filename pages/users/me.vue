<template>
  <div>
    <PageHeading>My Dashboard</PageHeading>
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
