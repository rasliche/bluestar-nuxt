<template>
  <Parallax class="h-screen">
    <main class="news">
      <ParallaxGroup>
        <ParallaxLayer class="prlx-back-4 prlx-offset-50 bg-green-700">
          prlx-back-4 prlx-offset-50
        </ParallaxLayer>
        <ParallaxLayer
          class="prlx-back-2 prlx-offset-50 bg-green-400 opacity-50"
        >
          prlx-back-2 prlx-offset-50
        </ParallaxLayer>
        <ParallaxLayer class="prlx-back prlx-offset-50 bg-green-200 opacity-25">
          prlx-back prlx-offset-50
        </ParallaxLayer>
        <ParallaxLayer class="prlx-base prlx-offset-50 bg-transparent">
          TOP prlx-base prlx-offset-50
        </ParallaxLayer>
        <ParallaxLayer class="prlx-base">
          <PageHeading>News</PageHeading>
        </ParallaxLayer>
      </ParallaxGroup>

      <ParallaxGroup>
        <ParallaxLayer
          class="prlx-back-8 prlx-offset-100 bg-red-300 opacity-50"
        >
          prlx-back-8 prlx-offset-50
        </ParallaxLayer>
        <ParallaxLayer class="prlx-base prlx-offset-100 bg-transparent">
          Bottom prlx-base prlx-offset-50
        </ParallaxLayer>
      </ParallaxGroup>
    </main>
  </Parallax>
</template>

<script>
import {
  PageHeading,
  Parallax,
  ParallaxGroup,
  ParallaxLayer,
} from '@/components/BaseUI'

export default {
  name: 'Example',
  components: {
    PageHeading,
    Parallax,
    ParallaxGroup,
    ParallaxLayer,
  },
}
</script>
