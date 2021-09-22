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
          class="
            relative
            border-black border-2
            rounded
            py-3
            px-4
            m-4
            font-semibold
            transition-colors
            ease-in-out
            duration-300
            bg-blue-200
            text-blue-900
            hover:bg-black hover:text-blue-100
          "
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
        <SearchSelect
          v-model="selectedOperator"
          :options="operatorNames"
          label="Shop Name"
        ></SearchSelect>
        <BaseInput type="text" label="Shop Access Code"></BaseInput>
        <ButtonPrimary @click="joinOperator">Join</ButtonPrimary>
      </form>
    </section>
    <section>
      <PageHeading>Continuing Education</PageHeading>
      <div>
        <p>
          Coming soon! Submit your continuing education documentation directly
          online. Your shop's manager and the Blue Star Coordinators will be
          able to see that you've completed this yearly requirement.
        </p>
      </div>
      <!-- <ContinuingEducationForm></ContinuingEducationForm> -->
    </section>
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
      operators: [],
      selectedOperator: null,
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
    operatorNames() {
      return this.$store.state.operators.operators.map((operator) => {
        return operator.name
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

    this.$store.commit('operators/get')
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
    joinOperator() {
      this.$store.dispatch('notification/add', {
        type: 'success',
        text: 'Trying to join shop...',
      })
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
