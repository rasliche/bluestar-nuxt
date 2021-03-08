<template>
  <portal v-if="show" to="modals">
    <div
      v-show="show"
      class="fixed inset-0 p-8"
      style="background-color: rgba(0, 0, 0, 0.6)"
    >
      <div class="mx-auto mt-8 p-2 rounded-lg bg-white max-w-xl shadow-2xl">
        <div class="pb-3 bg-blue-100 text-center">
          <slot name="heading"></slot>
        </div>

        <slot name="default"></slot>

        <div v-if="closeButton" class="flex justify-between text-center">
          <slot name="buttons"></slot>
          <ButtonSecondary @click="cancel"> Close </ButtonSecondary>
        </div>
      </div>
    </div>
  </portal>
</template>

<script>
import ButtonSecondary from './buttons/ButtonSecondary.vue'

export default {
  name: 'ModalBase',
  components: { ButtonSecondary },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    preventBackgroundScrolling: {
      type: Boolean,
      default: true,
    },
    closeButton: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    show: {
      immediate: true,
      handler(show) {
        if (show) {
          this.preventBackgroundScrolling &&
            document.body.style.setProperty('overflow', 'hidden')
        } else {
          this.preventBackgroundScrolling &&
            document.body.style.removeProperty('overflow')
        }
      },
    },
  },
  mounted() {
    // should change this back to created if errors
    const escapeHandler = (e) => {
      if (e.key === 'Escape' && this.show) {
        this.cancel()
      }
    }
    document.addEventListener('keydown', escapeHandler)
    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', escapeHandler)
    })
  },
  methods: {
    cancel() {
      this.$emit('close')
    },
  },
}
</script>
