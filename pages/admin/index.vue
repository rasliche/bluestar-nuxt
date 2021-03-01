<template>
  <div class="container mx-auto max-w-4xl px-4">
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
    <user-table />
    <br />

    <div class="border-t-4 border-gray-300">
      <div class="max-w-xl px-8">
        <span class="font-bold text-sm text-blue-800">
          New Business Account
        </span>
        <CreateBusinessForm></CreateBusinessForm>
      </div>
    </div>
  </div>
</template>

<script>
import UserTable from '../../components/UserTable.vue'
import authAdmin from '../../middleware/authAdmin'
export default {
  name: 'Admin',
  components: {
    UserTable,
  },
  middleware: [authAdmin],
  data() {
    return {
      users: [],
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
    } catch (e) {
      // error({
      //   statusCode: 503,
      //   message: 'Could not load users at this time.',
      // })
    }
  },
  methods: {
    createShop() {},
    // searchNames(x, y) {
    //   return x.map((y) => y.includes(x))
    // },
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
