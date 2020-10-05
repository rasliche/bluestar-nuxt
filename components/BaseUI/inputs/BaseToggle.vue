<template>
  <span
    class="inline-block relative cursor-pointer h-8 w-16 rounded-full"
    @click="toggle"
    @keydown.space.prevent="toggle"
  >
    <span
      class="inline-block rounded-full h-full w-full shadow-inner transition-colors duration-200 ease-linear"
      :class="backgroundStyles"
    ></span>
    <span
      class="absolute top-1 left-1 h-6 w-6 bg-white rounded-full shadow-inner transition-transform transform duration-200 ease-linear"
      :class="toggleIndicatorStyles"
    ></span>
  </span>
</template>

<script>
export default {
  name: 'BaseToggle',
  props: {
    value: {
      type: Boolean,
    },
  },
  computed: {
    backgroundStyles() {
      return {
        'bg-green-500': this.value,
        'bg-red-500': !this.value,
      }
    },
    toggleIndicatorStyles() {
      return {
        'translate-x-8': this.value,
        'translate-x-0': !this.value,
      }
    },
  },
  methods: {
    toggle() {
      this.$emit('input', !this.value)
    },
  },
}
</script>
