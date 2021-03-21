<template>
  <div>
    <PageHeading>My Dashboard</PageHeading>

    <div class="max-w-4xl">
      <p class="">
        You are logged in as
        <span class="font-semibold">{{ this.$auth.user.name }}</span> using the
        <span class="font-mono bg-blue-100 rounded px-1">{{
          this.$auth.user.email
        }}</span>
        email address.
      </p>
      <nuxt-link
        v-if="this.$auth.user.roles.admin"
        to="/admin"
        class="mt-4 p-3 bg-yellow-200 rounded text-yellow-800 inline-block"
      >
        🌟 You are an Admin.
      </nuxt-link>
    </div>

    <div class="max-w-4xl">
      <PageHeading>Training Record</PageHeading>
      <LessonList></LessonList>
    </div>

    <div class="max-w-4xl">
      <PageHeading>Continuing Education</PageHeading>
      <div>
        <p></p>
      </div>
      <ContinuingEducationForm></ContinuingEducationForm>
    </div>
    <div class="bg-gray-700 text-gray-100 rounded max-w-lg p-2 mt-24">
      <p class="text-lg">Raw User Data</p>
      {{ this.$auth.user }}
    </div>
    <div>
      <p>User Roles:</p>
      <p>Manager: {{ manager }}</p>
      <p>Admin: {{ admin }}</p>
    </div>
  </div>
</template>

<script>
import PageHeading from '@/components/BaseUI/PageHeading'
import LessonList from '@/components/LessonList'
import ContinuingEducationForm from '@/components/ContinuingEducationForm'

export default {
  name: 'Dashboard',
  components: { PageHeading, LessonList, ContinuingEducationForm },
  data() {
    return {
      manager: false,
      admin: false,
    }
  },
  mounted() {
    this.$axios
      .get('users/is-manager')
      .then((response) => {
        if (response.data === 'OK') this.manager = true
      })
      .catch(console.error)

    this.$axios
      .get('users/is-admin')
      .then((response) => {
        if (response.data === 'OK') this.admin = true
      })
      .catch(console.error)
  },
  head() {
    return [
      {
        title: 'Dashboard',
      },
    ]
  },
}
</script>
