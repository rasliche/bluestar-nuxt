<template>
  <div class="container mx-auto max-w-4xl px-4">
    <page-heading>Operators</page-heading>
    <table class="table-auto border w-full">
      <thead>
        <tr>
          <th class="border">Name</th>
          <th class="border">User Count</th>
          <th class="border">More Info</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="operator in operators" :key="operator._id">
          <td class="border">{{ operator.name }}</td>
          <td class="border">
            {{ operator.users ? operator.users.length : 0 }}
          </td>
          <td class="border">
            <nuxt-link
              :to="`/operators/${operator._id}`"
              class="
                underline
                text-blue-600
                hover:text-blue-800
                visited:text-purple-600
              "
              >More Info</nuxt-link
            >
            <!-- Prettier is dumb -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import PageHeading from '../../components/BaseUI/PageHeading'
import authManager from '../../middleware/authManager'
export default {
  name: 'OperatorIndex',
  components: {
    PageHeading,
  },
  middleware: [authManager],
  data() {
    return {
      operators: [],
    }
  },
  mounted() {
    this.getOperators()
  },
  methods: {
    async getOperators() {
      this.operators = (await this.$axios.get('/operators')).data
    },
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
