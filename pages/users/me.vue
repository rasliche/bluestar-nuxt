<template>
  <div>
    <h1>My Dashboard</h1>
    {{ this.$auth.user }}
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  head() {
    return [
      {
        title: 'Dashboard'
      }
    ]
  }
}
</script>
