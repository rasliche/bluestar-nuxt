<template>
  <div>
    <PageHeading>Dashboard for {{ operator.name }}</PageHeading>

    <div class="max-w-4xl">
      <!-- <p class="">
        You are viewing the user info for
        <span class="font-semibold">{{ user.name }}</span> who logs in using the
        <span class="font-mono bg-blue-100 rounded px-1">{{
          this.user.email
        }}</span>
        email address.
      </p> -->
      <!-- <nuxt-link
        v-if="user.roles && user.roles.admin"
        to="/admin"
        class="mt-4 p-3 bg-yellow-200 rounded text-yellow-800 inline-block"
      >
        🌟 {{ user.name }} is an Admin.
      </nuxt-link> -->
    </div>

    <!-- <div class="max-w-4xl">
      <PageHeading>Training Record</PageHeading>
      <LessonList></LessonList>
    </div> -->

    <!-- <div class="max-w-4xl">
      <PageHeading>Continuing Education</PageHeading>
      <div>
        <p></p>
      </div>
      <ContinuingEducationForm></ContinuingEducationForm>
    </div> -->
    <div v-if="this.$auth.user.admin" class="max-w-4xl">
      <PageHeading>Danger Zone</PageHeading>
      <p>
        This is where you can do perform dangerous- potentially irreversible-
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
import PageHeading from '@/components/BaseUI/PageHeading.vue'

export default {
  components: {
    PageHeading,
  },
  data() {
    return {
      operator: {
        name: null,
      },
    }
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
