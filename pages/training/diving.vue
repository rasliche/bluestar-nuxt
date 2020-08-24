<template>
  <div>
    <PageHeading>
      Diving Topics
    </PageHeading>
    <div class="flex flex-wrap space-x-2">
      <div class="w-1/4 h-64 bg-green-200">
        Diving
      </div>
      <div class="w-1/4 h-64 bg-green-200">
        Fishing
      </div>
      <div class="w-1/4 h-64 bg-green-200">
        Volunteering
      </div>
    </div>
    <nuxt-link to="/training/lessons">All lessons</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'DivingIndex',
  head() {
    return [
      {
        title: 'Diving Topics',
      },
    ]
  },
}
</script>
