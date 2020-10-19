<template>
  <div>
    <div>
      <SearchSelect v-model="user" label="All Users" :options="userNames" />
    </div>
    {{ users }}
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data() {
    return {
      users: [],
      user: null,
    }
  },
  computed: {
    userNames() {
      return this.users.map((u) => u.name)
    },
  },
  async created() {
    try {
      this.users = await this.$axios.$get('/users')
    } catch (e) {
      // error({
      //   statusCode: 503,
      //   message: 'Could not load users at this time.',
      // })
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
