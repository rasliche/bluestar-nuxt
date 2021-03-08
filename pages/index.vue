<template>
  <div>
    <div>
      <PageHeading>
        For Those Who Go Beyond
        <span class="text-blue-700">Best Practices</span>
      </PageHeading>
    </div>
    <div
      class="mt-12 max-w-5xl w-1/2 mx-auto bg-green-100 text-blue-900 text-lg text-center rounded-lg border border-blue-900"
    >
      <p class="p-8">
        We are currently in the process of revamping the online training for a
        better, smoother experience. If you have feedback for the site so far,
        please email the Blue Star Coordinators.
      </p>
    </div>
  </div>
</template>

<script>
import PageHeading from '@/components/BaseUI/PageHeading.vue'

export default {
  name: 'Home',
  auth: false,
  components: {
    PageHeading,
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
}
</script>
