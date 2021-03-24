<template>
  <div>
    <table class="table-auto border w-full">
      <thead>
        <tr>
          <th class="border">Name</th>
          <th class="border">Email</th>
          <th class="border">Role</th>
          <th class="border">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user._id">
          <td class="border">
            <nuxt-link
              :to="`/users/${user._id}`"
              class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              >{{ user.name }}</nuxt-link
            >
          </td>
          <td class="border">{{ user.email }}</td>
          <td class="border">{{ getRole(user.roles) }}</td>
          <td class="border">
            <div
              v-if="$auth.user._id != user._id"
              class="flex flex-row justify-around"
            >
              <button
                v-if="getRole(user.roles) == 'User'"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-2"
                @click="changeRole(user._id, 'manager')"
              >
                Promote to Manager
              </button>
              <button
                v-if="getRole(user.roles) == 'Manager'"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-2"
                @click="changeRole(user._id, 'admin')"
              >
                Promote To Admin
              </button>
              <button
                v-if="getRole(user.roles) == 'Admin'"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-2"
                @click="changeRole(user._id, 'manager')"
              >
                Demote to Manager
              </button>
              <button
                v-if="getRole(user.roles) == 'Manager'"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-2"
                @click="changeRole(user._id, 'user')"
              >
                Demote to User
              </button>
            </div>
            <div v-else class="flex flex-row justify-around">
              <p>You can't change your own role!</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'UserTable',
  data() {
    return {
      users: [],
    }
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    async getUsers() {
      const users = await this.$axios.$get('/users')
      this.users = users
    },
    getRole(role) {
      if (role.admin) {
        return 'Admin'
      } else if (role.manager) {
        return 'Manager'
      } else {
        return 'User'
      }
    },
    changeRole(user, role) {
      this.$axios
        .put('/users/change-role', {
          user,
          role,
        })
        .then(() => this.getUsers())
        .catch(console.error)
    },
  },
}
</script>

<style scoped lang="postcss">
th,
td {
  padding: 2px 5px;
}
</style>
