<template>
  <article>
    <section class="max-w-4xl">
      <PageHeading>User Dashboard for {{ user.name }}</PageHeading>
      <p class="">
        You are viewing the user info for
        <span class="font-semibold">{{ user.name }}</span> who logs in using the
        <span class="font-mono bg-blue-100 rounded px-1">{{ user.email }}</span>
        email address.
      </p>
      <nuxt-link
        v-if="user.roles && user.roles.admin"
        to="/admin"
        class="mt-4 p-3 bg-yellow-200 rounded text-yellow-800 inline-block"
      >
        🌟 {{ user.name }} is an Admin.
      </nuxt-link>
    </section>

    <section class="max-w-4xl">
      <PageHeading>Training Record</PageHeading>
      <LessonList></LessonList>
    </section>

    <section class="max-w-4xl">
      <PageHeading>Continuing Education</PageHeading>
      <div>
        <p></p>
      </div>
      <ContinuingEducationForm></ContinuingEducationForm>
    </section>
    <section class="max-w-4xl">
      <LazyPageHeading>Danger Zone</LazyPageHeading>
      <p>
        This is where you can do perform dangerous- potentially irreversible-
        operations on a user account.
      </p>
      <div class="flex">
        <ButtonDanger @click="deleteUser">Delete User</ButtonDanger>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      user: {
        roles: {
          admin: false,
        },
      },
    }
  },
  async created() {
    try {
      this.user = await this.$axios.$get(`/users/${this.$route.params.id}`)
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    deleteUser() {
      this.$store.dispatch('notification/add', {
        type: 'error',
        text: 'User will be deleted.',
      })
      setTimeout(() => {
        this.$router.push('/admin')
      }, 3000)
      console.log('user deleted')
    },
  },
  head() {
    return [
      {
        title: 'User Info Page',
      },
    ]
  },
}
</script>
