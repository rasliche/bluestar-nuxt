<template>
  <div>
    <PageHeading>Upcoming Events</PageHeading>
  </div>
</template>

<script>
export default {
  name: 'Events',
  auth: false,
  head() {
    return {
      title: 'Events',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Calendar of upcoming events Blue Star participants can attend in order to further their professional development or coral reef ecosystem knowledge.',
        },
      ],
    }
  },
}
</script>
