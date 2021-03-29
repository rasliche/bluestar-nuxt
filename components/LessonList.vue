<template>
  <div class="flex flex-wrap">
    <nuxt-link
      v-for="lesson in lessons"
      :key="lesson.slug"
      class="border-black border-2 rounded py-3 px-4 m-4 font-semibold transition-colors ease-in-out duration-300 bg-blue-200 text-blue-900 hover:bg-black hover:text-blue-100"
      :to="`/training/${lesson.slug}`"
    >
      {{ lesson.title }}
    </nuxt-link>
    <!-- <nuxt-link
      class="border-black border-2 rounded py-3 px-4 m-4 font-semibold transition-colors ease-in-out duration-300 bg-blue-200 text-blue-900 hover:bg-black hover:text-blue-100"
      to="/training/lessons/about-blue-star"
    >
      About Blue Star
    </nuxt-link>
    <nuxt-link
      class="border-black border-2 rounded py-3 px-4 m-4 font-semibold transition-colors ease-in-out duration-300 bg-blue-200 text-blue-900 hover:bg-black hover:text-blue-100"
      to="/training/lessons/about-florida-keys-national-marine-sanctuary"
    >
      About Florida Keys National Marine Sanctuary
    </nuxt-link>
    <nuxt-link
      class="border-black border-2 rounded py-3 px-4 m-4 font-semibold transition-colors ease-in-out duration-300 bg-blue-200 text-blue-900 hover:bg-black hover:text-blue-100"
      to="/training/lessons/coral-reefs"
    >
      Coral Reefs
    </nuxt-link>
    <nuxt-link
      class="border-black border-2 rounded py-3 px-4 m-4 font-semibold transition-colors ease-in-out duration-300 bg-blue-200 text-blue-900 hover:bg-black hover:text-blue-100"
      to="/training/lessons/coral-disease"
    >
      Coral Disease
    </nuxt-link>
    <nuxt-link
      class="border-black border-2 rounded py-3 px-4 m-4 font-semibold transition-colors ease-in-out duration-300 bg-blue-200 text-blue-900 hover:bg-black hover:text-blue-100"
      to="/training/lessons/coral-threats"
    >
      Coral Threats
    </nuxt-link>
    <nuxt-link
      class="border-black border-2 rounded py-3 px-4 m-4 font-semibold transition-colors ease-in-out duration-300 bg-blue-200 text-blue-900 hover:bg-black hover:text-blue-100"
      to="/training/lessons/cultural-resources"
    >
      Cultural Resources
    </nuxt-link>
    <nuxt-link
      class="border-black border-2 rounded py-3 px-4 m-4 font-semibold transition-colors ease-in-out duration-300 bg-blue-200 text-blue-900 hover:bg-black hover:text-blue-100"
      to="/training/lessons/lionfish"
    >
      Lionfish
    </nuxt-link>
    <nuxt-link
      class="border-black border-2 rounded py-3 px-4 m-4 font-semibold transition-colors ease-in-out duration-300 bg-blue-200 text-blue-900 hover:bg-black hover:text-blue-100"
      to="/training/lessons/mangroves-and-seagrass"
    >
      Mangroves and Seagrass
    </nuxt-link>
    <nuxt-link
      class="border-black border-2 rounded py-3 px-4 m-4 font-semibold transition-colors ease-in-out duration-300 bg-blue-200 text-blue-900 hover:bg-black hover:text-blue-100"
      to="/training/lessons/marine-debris"
    >
      Marine Debris
    </nuxt-link>
    <nuxt-link
      class="border-black border-2 rounded py-3 px-4 m-4 font-semibold transition-colors ease-in-out duration-300 bg-blue-200 text-blue-900 hover:bg-black hover:text-blue-100"
      to="/training/lessons/reef-etiquette"
    >
      Reef Etiquette
    </nuxt-link>
    <nuxt-link
      class="border-black border-2 rounded py-3 px-4 m-4 font-semibold transition-colors ease-in-out duration-300 bg-blue-200 text-blue-900 hover:bg-black hover:text-blue-100"
      to="/training/lessons/sanctuary-regulations-and-zones"
    >
      Sanctuary Regulations and Zones
    </nuxt-link> -->
  </div>
</template>

<script>
export default {
  name: 'LessonList',
  data() {
    return {
      lessons: [],
    }
  },
  async created() {
    this.lessons = await this.$content('lessons')
      .only(['path', 'title', 'slug'])
      .fetch()
      .catch((error) => {
        error({ statusCode: 404, message: 'Lessons not found!' })
      })
  },
}
</script>
