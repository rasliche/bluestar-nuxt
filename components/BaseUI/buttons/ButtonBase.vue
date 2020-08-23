<template>
  <button
    type="button"
    class="px-2 py-1 rounded-md focus:outline-none focus:shadow-outline"
    v-on="$listeners"
  >
    <slot>Click Me!</slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonBase',
}
</script>
