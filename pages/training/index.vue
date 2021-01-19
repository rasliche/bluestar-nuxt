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
    <div class="flex flex-wrap">
      <nuxt-link
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
      </nuxt-link>
    </div>
    <!-- <nuxt-link to="/training/lessons">All lessons</nuxt-link> -->
  </div>
</template>

<script>
export default {
  name: 'TrainingIndex',
  head() {
    return [
      {
        title: 'Training',
      },
    ]
  },
}
</script>
