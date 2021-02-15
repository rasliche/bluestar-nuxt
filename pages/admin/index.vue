<template>
  <div>
    <PageHeading class="border-none">Admin Dashboard</PageHeading>
    <div>
      <div class="max-w-xl px-8">
        <ul class="h-64 shadow-inner">
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
        <span class="font-bold text-sm text-blue-800">
          New Business Account
        </span>
        <CreateBusinessForm></CreateBusinessForm>
      </div>
    </div>
    <!-- <div class="space-y-3">
      <div v-for="user in users" :key="user.id">
        {{ user }}
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Admin',
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
