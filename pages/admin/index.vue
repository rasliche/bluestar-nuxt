<template>
  <div>
    {{ users }}
  </div>
</template>

<script>
export default {
  name: 'Admin',
  async asyncData({ $axios, error }) {
    try {
      const users = await $axios.$get('/api/users')
      return { users }
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Could not load users at this time.',
      })
    }
  },
  head() {
    return [
      {
        title: 'Admin Dashboard',
      },
    ]
  },
}
</script>
