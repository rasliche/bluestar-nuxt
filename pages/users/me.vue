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
  data() {
    return {
      message: 'default'
    }
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
