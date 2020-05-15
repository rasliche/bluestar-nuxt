<template>
  <div>
    <h1 class="max-w-6xl my-8 text-4xl border-b-2 border-blue-800">
      About Blue Star
    </h1>
    <h2 class="max-w-6xl my-4 text-2xl font-semibold">What is Blue Star?</h2>
    <p class="max-w-6xl my-2 italic">
      The Blue Star program, established by the Florida Keys National Marine
      Sanctuary, is a voluntary recognition program saluting charter boat
      operators who promote responsible and sustainable diving, snorkeling and
      fishing practices, helping keep Florida Keys ecosystems healthy for
      generations to come.
    </p>
    <p class="max-w-6xl my-2 italic">
      As a Blue Star partner, your business has voluntarily agreed to educate
      customers about the coral reef ecosystem, the sanctuary, diving and
      snorkeling etiquette, and/or sustainable fishing best practices. By
      passing this information on to visitors who recreate in the Florida Keys,
      you are playing an important role in helping to protect our reefs.
    </p>
    <div class="max-w-6xl rounded-md overflow-hidden">
      <img
        src="https://res.cloudinary.com/duzmgsio4/image/upload/f_auto,q_auto:eco/v1583011565/fknms-bluestar/dive-boat-mate-briefs-guests.jpg"
      />
    </div>

    <h2 class="max-w-6xl my-4 text-2xl font-semibold">Why Blue Star?</h2>
    <p class="max-w-6xl my-2">
      Florida Keys coral reefs are a main draw for your customers. The reefs of
      the Florida Keys are stressed. And when reef users are uninformed or
      irresponsible, they can, and often do, make these stresses even worse by
      damaging coral. That’s bad news.
    </p>
    <p class="max-w-6xl my-2">
      The good news is that, as a Blue Star partner, you have the opportunity to
      teach visitors about the reef and how to safely interact with it. The
      information that you provide could change visitors’ behaviors to be
      reef-aware.
    </p>

    <!-- <text-on-scroll>The Briefing</text-on-scroll> -->
    <h2 class="max-w-6xl my-4 text-2xl font-semibold">
      The Heart of Blue Star - The Briefing
    </h2>
    <p class="max-w-6xl my-2">
      From 2010 to 2012 two separate research studies were conducted in the
      Florida Keys to determine how a pre-dive education briefing can influence
      diver impacts on coral reefs. Research has shown that divers on NOAA Blue
      Star Certified charters “cause significantly less coral damage than do
      divers from other types of dive shops”
      <a
        href="#kc2012"
        class="border-b-2 border-blue-500 transition-colors duration-500 hover:bg-blue-500"
      >
        (Kreiger & Chadwick, 2012)
      </a>
      . Dive briefings administered by Blue Star Operators are likely the
      contributing factor which limits diver contact with the reefs.
    </p>
    <p class="max-w-6xl my-2">
      On average, recreational SCUBA divers come in contact with live coral
      eighteen times per dive
      <a href="#kc2012">
        (Kreiger & Chadwick, 2012)
      </a>
      . Many touches are caused by fin kicks or loose equipment dragging on the
      reef
      <a href="#cf2012">
        (Camp & Fraser, 2012)
      </a>
      . The incorporation of conservation education into onboard briefings
      improves customer understanding of environmental threats, and gives them a
      last minute reminder to be cautious of their behavior while underwater,
      limiting coral contact. According to
      <a href="#kc2012">
        (Kreiger & Chadwick, 2012)
      </a>
      , customers who received dive briefings that meet Blue Star requirements
      prior to entering the water caused considerably less reef damage than
      customers who did not.
    </p>
    <p class="max-w-6xl my-2">
      It is estimated that due to increasingly high rates of recreational diving
      on sites in Key Largo alone, over 80% of live coral colonies have been
      damaged and some heavily dived sites have seen a reduction in live coral
      to less than 11% of the total cover. Given that the proportion of damaged
      corals on each reef increases tremendously with estimated rates of
      recreational SCUBA diving on those sites, diver education with the goal of
      reducing reef contact is essential to ensuring tourism rates are both
      economically and environmentally sustainable. The effort of Blue Star
      Operators to train their staff and promote environmental stewardship is a
      monumental success in the conservation of the Florida Keys National Marine
      Sanctuary.
    </p>
    <p class="max-w-6xl my-2">
      The Blue Star program is one way that you can show customers – people who
      were drawn to the area because of the environment in the first place –
      that you, and the business that you work for, care about the ecosystem and
      are committed to doing your part to protect it. Please take the time to
      memorize each component of the Blue Star briefing. You can incorporate
      these components into your current briefing. Feel free to add your own
      style while making sure you include each required section. You are
      required to give the Blue Star briefing on every trip that you take.
    </p>

    <h2 class="max-w-6xl my-4 text-2xl font-semibold">
      Blue Star Requirements - Understanding the Framework
    </h2>
    <p class="max-w-6xl my-2">
      Blue Star operators have made a commitment to train their staff and
      customers to be better environmental stewards. As part of the program,
      staff who work at Blue Star recognized dive shops are required to complete
      this online training each year on issues affecting coral reefs, sanctuary
      regulations and coral reef etiquette. In turn, staff must educate their
      customers on these topics. This includes showing students a Blue Star
      video during training classes and conducting a Blue Star dive briefing on
      each trip that you take. Blue Star Diving Operators must offer
      conservation-related dive courses and participate in activities such as
      fish counts and reef clean-ups.
    </p>
    <p class="max-w-6xl my-2">
      Once a business has gone through the initial evaluation and is recognized
      as a Blue Star partner, they will be reevaluated each year, to ensure that
      the Blue Star criteria are still being followed.
    </p>
    <p class="max-w-6xl my-2">
      You should have a copy of the current year Blue Star Diving framework,
      which outlines the specifics of what each operator is required to do to be
      “Blue Star recognized.” As a staff member at a Blue Star operation, we are
      depending on you to be familiar with this framework and properly implement
      the Blue Star Diving program.
    </p>
    <details class="mx-auto">
      <summary>Citations</summary>
      <ul class="list-disc list-inside space-y-3">
        <li id="kc2012">
          Recreational diving impacts and the use of pre-dive briefings as a
          management strategy on Florida coral reefs (Joseph R. Krieger and
          Nanette E. Chadwick)
        </li>
        <li id="cf2012">
          Influence of conservation education dive briefings as a management
          tool on the timing and nature of recreational SCUBA diving impacts on
          coral reefs (Emma Camp and Douglas Fraser)
        </li>
      </ul>
    </details>
  </div>
</template>

<script>
// import TextOnScroll from '~/components/TextOnScroll.vue'

export default {
  name: 'AboutBlueStar',
  components: {
    // TextOnScroll
  },
  computed: {
    passOrFail() {
      return true
    }
  },
  head() {
    return [{ title: 'About Blue Star' }]
  }
}
</script>

<style></style>
