<template>
  <div>
    <h1>My Dashboard</h1>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  asyncData() {
    const message = 'reached your user dashboard page'
    return { message }
  },
  head() {
    return [
      {
        title: 'Dashboard'
      }
    ]
  }
}
</script>
