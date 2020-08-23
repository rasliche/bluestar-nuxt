<template>
  <div class="w-full">
    <div class="flex flex-wrap w-full justify-around">
      <nuxt-link to="/training/lessons/about-blue-star">
        About Blue Star
      </nuxt-link>
      <nuxt-link
        to="/training/lessons/about-florida-keys-national-marine-sanctuary"
      >
        About Florida Keys National Marine Sanctuary
      </nuxt-link>
      <nuxt-link to="/training/lessons/sanctuary-regulations-and-zones">
        Sanctuary Regulations and Zones
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LessonIndex',
  head() {
    return [
      {
        title: 'All Lessons',
      },
    ]
  },
}
</script>
