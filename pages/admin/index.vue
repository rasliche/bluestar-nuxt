<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'Admin',
  async asyncData({ app }) {
    const message = await app.$axios.$get('/api/users')
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
        title: 'Admin Dashboard'
      }
    ]
  }
}
</script>
