<template>
  <div class="container mx-auto max-w-4xl px-4">
    <PageHeading>Dashboard for {{ operator.name }}</PageHeading>

    <div v-if="operator.users">
      <h2>Managers:</h2>
      <table class="table-auto border w-full">
        <thead>
          <tr>
            <th class="border">Name</th>
            <th class="border">Email</th>
            <th class="border">Profile</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in managers" :key="user._id">
            <td class="border">{{ user.name }}</td>
            <td class="border">
              <a
                :href="`mailto:${user.email}`"
                class="
                  underline
                  text-blue-600
                  hover:text-blue-800
                  visited:text-purple-600
                "
                >{{ user.email }}</a
              >
            </td>
            <td class="border">
              <nuxt-link
                :to="`/users/${user._id}`"
                class="
                  underline
                  text-blue-600
                  hover:text-blue-800
                  visited:text-purple-600
                "
                >View Profile</nuxt-link
              >
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Users:</h2>
      <table class="table-auto border w-full">
        <thead>
          <tr>
            <th class="border">Name</th>
            <th class="border">Email</th>
            <th class="border">Profile</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user._id">
            <td class="border">{{ user.name }}</td>
            <td class="border">
              <a
                :href="`mailto:${user.email}`"
                class="
                  underline
                  text-blue-600
                  hover:text-blue-800
                  visited:text-purple-600
                "
                >{{ user.email }}</a
              >
            </td>
            <td class="border">
              <nuxt-link
                :to="`/users/${user._id}`"
                class="
                  underline
                  text-blue-600
                  hover:text-blue-800
                  visited:text-purple-600
                "
                >View Profile</nuxt-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="this.$auth.hasScope('admin')" class="max-w-4xl">
      <PageHeading>Danger Zone</PageHeading>
      <p>
        This is where you can perform dangerous- potentially irreversible-
        operations on a Operator listing.
      </p>
      <div class="flex">
        <ButtonDanger @click="deleteOperator">Delete Operator</ButtonDanger>
      </div>
    </div>
    <div class="bg-gray-700 text-gray-100 rounded max-w-lg p-2 mt-24">
      <p class="text-lg">Raw User Data</p>
      {{ operator }}
    </div>
  </div>
</template>

<script>
import PageHeading from '@/components/BaseUI/PageHeading'
import ButtonDanger from '@/components/BaseUI/buttons/ButtonDanger'

export default {
  components: {
    PageHeading,
    ButtonDanger,
  },
  data() {
    return {
      operator: {
        name: null,
      },
    }
  },
  computed: {
    allUsers() {
      const users = []
      this.operator.users.forEach((user) => users.push(user.userID))
      return users
    },
    managers() {
      return this.allUsers.filter((user) =>
        ['Manager', 'Admin'].includes(this.getRole(user.roles))
      )
    },
    users() {
      return this.allUsers.filter(
        (user) => !['Manager', 'Admin'].includes(this.getRole(user.roles))
      )
    },
  },
  async created() {
    try {
      this.operator = await this.$axios.$get(
        `/operators/${this.$route.params.id}`
      )
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    deleteOperator() {
      this.$store.dispatch('notification/add', {
        type: 'error',
        text: 'Operator will be deleted.',
      })
      setTimeout(() => {
        this.$router.push('/admin')
      }, 3000)
      console.log('operator deleted')
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
  },
  head() {
    return [
      {
        title: 'Operator Info Page',
      },
    ]
  },
}
</script>

<style scoped>
th,
td {
  padding: 2px 5px;
  text-align: center;
}
</style>
