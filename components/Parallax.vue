<template>
  <!-- Must give an explicit height on this component where it's used in a template -->
  <div class="prlx">
    <slot>
      <div
        class="
          prlx-layer prlx-back prlx-offset-50
          bg-transparent
          opacity-50
          text-center
        "
      >
        <!-- This scrolls slower -->
        Background
      </div>
      <div
        class="
          prlx-layer prlx-base prlx-offset-50
          bg-transparent
          opacity-50
          text-center
        "
      >
        <!-- This scrolls normally -->
        Base
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'Parallax',
}
</script>
