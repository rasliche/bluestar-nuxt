<template>
  <div
    class="flex justify-between rounded-sm shadow-md p-2 opacity-75 transition-opacity ease-in-out duration-300 hover:opacity-100"
    :class="[
      { 'bg-green-200 text-green-900': notification.type === 'success' },
      { 'bg-yellow-200 text-yellow-900': notification.type === 'warn' },
      { 'bg-red-200 text-red-900': notification.type === 'error' },
    ]"
  >
    <button
      class="cursor-pointer m-2 text-sm border border-transparent rounded-sm"
      :class="[
        { 'hover:border-green-600': notification.type === 'success' },
        { 'hover:border-green-600': notification.type === 'warn' },
        { 'hover:border-green-600': notification.type === 'error' },
      ]"
      @click="remove(notification)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="h-8 w-8 fill-current"
      >
        <title>Dismiss</title>
        <path
          fill-rule="evenodd"
          d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"
        ></path>
      </svg>
    </button>
    <div class="mr-2">
      {{ notification.text }}
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Notification',
  props: {
    notification: {
      type: {
        type: String,
        required: true,
        validator(t) {
          return ['success', 'warn', 'error'].includes(t)
        },
      },
      text: {
        type: String,
        required: true,
      },
    },
    autoDismiss: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      timer: null,
    }
  },
  mounted() {
    if (this.autoDismiss) {
      this.timer = setTimeout(() => {
        this.remove(this.notification)
      }, 4000)
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer)
  },
  methods: {
    ...mapActions('notification', ['remove']),
  },
}
</script>
