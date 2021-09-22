<template>
  <article class="container mx-auto max-w-4xl px-4">
    <PageHeading>Admin Dashboard</PageHeading>
    <!-- <div>
      <div class="max-w-xl px-8">
        <ul class="h-64 overflow-x-hidden overflow-y-scroll shadow-inner">
          <li v-for="user in users" :key="user._id">
            <nuxt-link :to="`/users/${user._id}`">{{ user.name }}</nuxt-link>
          </li>
        </ul>
        <SearchSelect v-model="user" label="All Users" :options="userNames" />
        <ButtonPrimary>Show</ButtonPrimary>
      </div>
    </div> -->
    <UserTable></UserTable>
    <br />

    <div class="border-t-4 border-gray-300">
      <div class="max-w-xl px-8">
        <ul class="h-64 overflow-x-hidden overflow-y-scroll shadow-inner">
          <li v-for="operator in operators" :key="operator._id">
            <nuxt-link
              :to="`/operators/${operator._id}`"
              class="
                text-blue-600
                hover:text-blue-800
                visited:text-purple-600
                underline
              "
              >{{ operator.name }}</nuxt-link
            >
          </li>
        </ul>
        <CreateBusinessForm></CreateBusinessForm>
      </div>
    </div>
  </article>
</template>

<script>
import authAdmin from '../../middleware/authAdmin'

export default {
  name: 'Admin',
  middleware: [authAdmin],
  data() {
    return {
      users: [],
    }
  },
  computed: {
    operators() {
      return this.$store.state.operators.operators
    },
    userNames() {
      return this.users.map((u) => u.name)
    },
  },
  async created() {
    try {
      this.users = await this.$axios.$get('/users')
      this.$store.commit('operators/get')
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
