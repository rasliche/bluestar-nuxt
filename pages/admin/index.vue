<template>
  <div>
    <PageHeading>Admin Dashboard</PageHeading>
    <div>
      <div class="max-w-xl px-8">
        <ul class="h-64 overflow-x-hidden overflow-y-scroll shadow-inner">
          <li v-for="user in users" :key="user._id">
            <nuxt-link :to="`/users/${user._id}`">{{ user.name }}</nuxt-link>
          </li>
        </ul>
        <!-- <SearchSelect v-model="user" label="All Users" :options="userNames" /> -->
        <!-- <ButtonPrimary>Show</ButtonPrimary> -->
      </div>
    </div>

    <div class="border-t-4 border-gray-300">
      <div class="max-w-xl px-8">
        <ul class="h-64 overflow-x-hidden overflow-y-scroll shadow-inner">
          <li v-for="operator in operators" :key="operator._id">
            <nuxt-link :to="`/operators/${operator._id}`">{{
              operator.name
            }}</nuxt-link>
          </li>
        </ul>
        <span class="font-bold text-sm text-blue-800">
          New Business Account
        </span>
        <CreateBusinessForm></CreateBusinessForm>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data() {
    return {
      users: [],
      operators: [],
      // user: null,
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
      this.operators = await this.$axios.$get('/operators')
    } catch (e) {
      // error({
      //   statusCode: 503,
      //   message: 'Could not load users at this time.',
      // })
    }
  },
  methods: {},
  head() {
    return [
      {
        title: 'Admin Dashboard',
      },
    ]
  },
}
</script>
