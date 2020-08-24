<template>
  <div>
    <span
      class="inline-flex pr-2 cursor-pointer hover:bg-green-200 rounded transition-colors duration-500"
      @click="toggleOpen"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        :class="{ '-rotate-90': !open }"
        class="w-6 icon-cheveron-down transform transition-transform duration-500"
      >
        <path
          class="text-current"
          fill-rule="evenodd"
          d="M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
        ></path>
      </svg>
      <p>
        {{ summary }}
      </p>
    </span>
    <transition name="drawer">
      <ul v-show="open" class="list-disc list-outside space-y-3">
        <slot></slot>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Citations',
  props: {
    summary: {
      type: String,
      default: 'Details',
    },
  },
  data() {
    return {
      open: true,
    }
  },
  methods: {
    toggleOpen() {
      this.open = !this.open
    },
  },
}
</script>

<style>
.drawer-enter-active,
.drawer-leave-active {
  transition: all 0.5s ease;
}

.drawer-enter,
.drawer-leave-to {
  opacity: 0;
  /* transform: translateY(-50px); */
}

.drawer-enter-to,
.drawer-leave {
  opacity: 1;
}
</style>
