<template>
  <article class="container mx-auto max-w-4xl px-4">
    <section>
      <PageHeading>My Dashboard</PageHeading>
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
    </section>

    <section>
      <PageHeading>Training Record</PageHeading>
      <div class="flex flex-wrap">
        <nuxt-link
          v-for="lesson in lessonsWithScores"
          :key="lesson.slug"
          class="relative border-black border-2 rounded py-3 px-4 m-4 font-semibold transition-colors ease-in-out duration-300 bg-blue-200 text-blue-900 hover:bg-black hover:text-blue-100"
          :to="`/training/${lesson.slug}`"
        >
          {{ lesson.title }} -
          {{
            lesson.userRecord !== undefined
              ? formatScore(lesson.userRecord.score)
              : formatScore(0)
          }}
          <div class="mx-auto text-center text-sm italic font-normal">
            ({{
              lesson.userRecord !== undefined
                ? `last taken on ${formatDate(lesson.userRecord.dateCompleted)}`
                : 'not yet passed'
            }})
          </div>
        </nuxt-link>
      </div>
    </section>
    <section>
      <PageHeading>Where I Work</PageHeading>
      <ul>
        <li>here's a shop</li>
        <li>another shop</li>
        <li>wacky dive shop</li>
      </ul>
      <form>
        <BaseInput type="text" label="Shop Name"></BaseInput>
        <BaseInput type="text" label="Shop Access Code"></BaseInput>
        <ButtonPrimary>Join</ButtonPrimary>
      </form>
    </section>
    <!-- <section class="max-w-4xl">
      <PageHeading>Continuing Education</PageHeading>
      <div>
        <p></p>
      </div>
      <ContinuingEducationForm></ContinuingEducationForm>
    </section> -->
  </article>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      manager: false,
      admin: false,
      lessons: [],
      lessonScores: [],
    }
  },
  computed: {
    lessonsWithScores() {
      return this.lessons.map((lesson, index) => {
        lesson.userRecord = this.lessonScores.find((record) => {
          return record.quiz.uuid === lesson.uuid
        })
        return lesson
      })
    },
  },
  mounted() {
    this.$axios.$get(`users/${this.$auth.user._id}/scores`).then((response) => {
      this.lessonScores = response
    })

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
  async created() {
    this.lessons = await this.$content('lessons')
      .only(['path', 'title', 'slug', 'uuid', 'minimumScore'])
      .fetch()
      .catch((error) => {
        error({ statusCode: 404, message: 'Lessons not found!' })
      })
  },
  methods: {
    formatScore(score) {
      return `${Math.ceil(score * 100)}%`
    },
    formatDate(dateObject) {
      const options = {
        dateStyle: 'short',
      }
      return new Intl.DateTimeFormat([], options).format(new Date(dateObject))
      // return new Intl.DateTimeFormat([], options).format(dateObject)
    },
  },
  head() {
    return [
      {
        title: 'My Dashboard',
      },
    ]
  },
}
</script>
