<template>
  <div>
    <PageHeading> Choose a Learning Path </PageHeading>
    <div class="flex justify-around">
      <nuxt-link
        to="/training/diving"
        class="w-1/4 h-64 bg-green-200 border border-black rounded"
      >
        <img
          class="object-center object-contain"
          src="https://res.cloudinary.com/duzmgsio4/image/upload/v1610567835/blue-star/bluestar-diving-logo.jpg"
        />
      </nuxt-link>
      <nuxt-link
        to="/training/fishing"
        class="w-1/4 h-64 bg-green-200 border border-black rounded"
      >
        <img
          class="object-center object-contain"
          src="https://res.cloudinary.com/duzmgsio4/image/upload/v1610567841/blue-star/bluestar-fishing-logo.jpg"
        />
      </nuxt-link>
      <!-- <nuxt-link to="/training/volunteering" class="w-1/4 h-64 bg-green-200">
        Volunteering
      </nuxt-link> -->
    </div>
    <LessonList></LessonList>
    <!-- <nuxt-link to="/training/lessons">All lessons</nuxt-link> -->
  </div>
</template>

<script>
import PageHeading from '@/components/BaseUI/PageHeading'

export default {
  name: 'TrainingIndex',
  components: { PageHeading },
  head() {
    return [
      {
        title: 'Training',
      },
    ]
  },
}
</script>
