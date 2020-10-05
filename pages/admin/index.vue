<template>
  <div>
    {{ users }}
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data() {
    return {
      users: []
    }
  },
  async created() {
    try {
      this.users = 'hello'
      // this.users = await $axios.$get('/user')
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
