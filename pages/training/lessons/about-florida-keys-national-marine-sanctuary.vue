<template>
  <div>
    <h1
      class="max-w-3xl my-8 text-6xl border-b-2 text-blue-800 border-blue-800"
    >
      About Florida Keys National Marine Sanctuary
    </h1>
    <h2 class="max-w-3xl mt-4 mb-1 text-2xl text-blue-800 font-semibold">
      Introduction
    </h2>
    <p class="max-w-3xl leading-relaxed my-2">
      The Florida Keys National Marine Sanctuary protects the world’s third
      largest barrier reef--and North America’s only living coral barrier reef.
      From coral reefs, seagrass beds, historical artifacts, and diverse species
      of marine life, the sanctuary preserves an extensive ecosystem that
      contains some of our nation’s most unique resources.
    </p>
    <p class="max-w-3xl leading-relaxed my-2">
      In this section, you will learn about the National Marine Sanctuary
      System, the history of Florida Keys National Marine Sanctuary, and about
      the areas and resources that the sanctuary protects.
    </p>

    <div class="max-w-3xl my-8 rounded-md overflow-hidden">
      <video controls class="w-auto h-auto">
        <source
          src="https://nmssanctuaries.blob.core.windows.net/sanctuaries-prod/media/archive/earthisblue/wk108-fkreef.mp4"
          type="video/mp4"
        />
      </video>
      <p class="text-sm">
        Start your week off right with a tour of Florida Keys National Marine
        Sanctuary.
        <span class="font-semibold">
          Video Credit: ONMS/Earth Is Blue
        </span>
      </p>
    </div>

    <h2 class="max-w-3xl mt-4 mb-1 text-2xl text-blue-800 font-semibold">
      The National Marine Sanctuary System
    </h2>

    <div class="max-w-3xl my-8 rounded-md overflow-hidden">
      <img
        src="https://res.cloudinary.com/duzmgsio4/image/upload/f_auto,q_auto:eco/v1583011565/fknms-bluestar/dive-boat-mate-briefs-guests.jpg"
      />
      <p class="text-sm">
        This photo needs to be changed
        <span class="font-semibold">
          Photo Credit: FKNMS/Marlies Tumolo
        </span>
      </p>
    </div>

    <p class="max-w-3xl leading-relaxed my-2">
      First established in 1972, the National Marine Sanctuary System has grown
      to include 14 national marine sanctuaries and Papahānaumokuākea and Rose
      Atoll marine national monuments. Managed by the National Oceanic and
      Atmospheric Administration (or “NOAA”), the mission of these marine
      protected areas cover more than 600,000 square miles of marine and Great
      Lakes waters from Washington State to the Gulf of Mexico, and from Lake
      Huron to American Samoa. Ranging in size from less than one square mile to
      582,000 square miles, each sanctuary site is a special place, managed to
      conserve, protect, and enhance biodiversity, ecological integrity and
      cultural legacy.
    </p>

    <h2 class="max-w-3xl mt-4 mb-1 text-2xl text-blue-800 font-semibold">
      Florida Keys National Marine Sanctuary
    </h2>
    <p class="max-w-3xl leading-relaxed my-2">
      Warning signs about the fragile and finite nature of marine resources in
      the Florida Keys were present long before the Florida Keys National Marine
      Sanctuary was established. In 1960, John Pennekamp Coral Reef State Park
      became the world’s first underwater park as a first step in protecting the
      coral reefs in the Keys. Continued environmental degradation prompted the
      designation of Key Largo National Marine Sanctuary in 1975 and Looe Key
      National Marine Sanctuary in 1981.
    </p>
    <p class="max-w-3xl leading-relaxed my-2">
      Throughout the 1980s, the health of the coral reef ecosystem in the Keys
      continued to decline. Threats such as deteriorating water quality, vessel
      groundings, and oil drilling spurred Congress to act. In 1990, the Florida
      Keys National Marine Sanctuary was established, combining the preexisting
      Key Largo and Looe Key sanctuaries to protect 2,800 square nautical miles
      of Florida Keys waters.
    </p>
    <p class="max-w-3xl leading-relaxed my-2">
      With the designation of the Florida Keys National Marine Sanctuary,
      several protective measures were immediately put into place, such as
      prohibiting oil exploration, mining, or any type of activity that would
      alter the seafloor. Anchoring on, touching, and collecting coral were all
      restricted within sanctuary waters.
    </p>
    <p class="max-w-3xl leading-relaxed my-2">
      Today, the sanctuary protects 2,900 square nautical miles of waters
      surrounding the Florida Keys, from south of Miami and extending westward
      to encompass the Dry Tortugas, but excluding the Dry Tortugas National
      Park. The shoreward boundary of the sanctuary is the mean high-water mark,
      meaning that once you set foot in Keys waters, you have entered the
      sanctuary.
    </p>
    <p class="max-w-3xl leading-relaxed my-2">
      As you have already learned, the sanctuary protects spectacular, unique,
      and nationally significant marine environments. As a Blue Star partner,
      you are playing an important role in protecting these valuable sanctuary
      resources. Through educating yourselves and your customers you can help
      ensure our sanctuary is healthy and vibrant for future generations of
      divers.
    </p>

    <Citations :summary="'Citations'" class="max-w-3xl mt-8">
      <CitationsSource :anchor="'onms'">
        <a
          href="sanctuaries.noaa.gov"
          class="border-b-2 border-blue-500 transition-colors duration-500 hover:bg-blue-500"
        >
          Office of National Marine Sanctuaries Website
        </a>
      </CitationsSource>
      <CitationsSource :anchor="'fknms'">
        <a
          href="floridakeys.noaa.gov"
          class="border-b-2 border-blue-500 transition-colors duration-500 hover:bg-blue-500"
        >
          Florida Keys National Marine Sanctuary Website
        </a>
      </CitationsSource>
    </Citations>
  </div>
</template>

<script>
import Citations from '~/components/Citations.vue'
import CitationsSource from '~/components/CitationsSource.vue'

export default {
  name: 'AboutFloridaKeysNationalMarineSanctuary',
  components: {
    Citations,
    CitationsSource,
  },
  computed: {
    passOrFail() {
      return true
    },
  },
  head() {
    return [
      { title: 'About Florida Keys National Marine Sanctuary' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Everything you need to know about Florida Keys National Marine Sanctuary to be recognized as a Blue Star operator.',
      },
    ]
  },
}
</script>
