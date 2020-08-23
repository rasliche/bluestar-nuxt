<template>
  <div>
    <h1 class="max-w-6xl my-8 text-4xl border-b-2 border-blue-800">
      Sanctuary Regulations and Zones
    </h1>
    <p class="max-w-6xl my-2 italic">
      Florida Keys National Marine Sanctuary visitors are invited to dive, swim,
      snorkel, or fish; however, rules and regulations are in place to make sure
      that these activities only happen in ways - and at places - that are
      compatible with conserving sanctuary resources.
    </p>

    <iframe
      width="100%"
      height="800px"
      src="https://noaa.maps.arcgis.com/apps/MapJournal/index.html?appid=5d5868f80cdb4b4c80e54ac47a0bf069"
      frameborder="0"
      scrolling="no"
    >
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'SanctuaryRegulationsAndZones',
  computed: {
    passOrFail() {
      return true
    },
  },
  head() {
    return [
      { title: 'Sanctuary Regulations and Zones' },
      {
        hid: 'description',
        name: 'description',
        content:
          'All the regulations and zoning a Blue Star participant should know.',
      },
    ]
  },
}
</script>

<style></style>
