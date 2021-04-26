<template>
  <div class="w-full max-w-md mx-auto">
    <form
      v-if="!this.$auth.user"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      method="POST"
      @submit.prevent="loginUser"
    >
      <h1 class="text-lg font-semibold text-blue-900 text-center pb-3">
        Login
      </h1>
      <BaseInput
        v-model="$v.formResponses.email.$model"
        label="Email"
        type="text"
        autocomplete="section-login email"
      >
        <!-- :class="{ 'error-border': !$v.formResponses.email.required }" -->
        <p v-if="errors" class="absolute ml-2 bottom-0 inset-x-0">
          <span v-if="!$v.formResponses.email.required" class="error">
            This field is required.
          </span>
        </p>
      </BaseInput>

      <BaseInput
        v-model="$v.formResponses.password.$model"
        label="Password"
        type="password"
        autocomplete="section-login password"
      >
        <p v-if="errors" class="absolute bottom-0 inset-x-0">
          <span v-if="!$v.formResponses.password.required" class="error"
            >This field is required.</span
          >
        </p>
      </BaseInput>

      <section class="relative mb-3 pb-6">
        <div class="flex items-center justify-around">
          <ButtonPrimary type="submit" :disabled="uiState !== 'idle'">
            <SimpleSpinner v-if="uiState === 'pending'"></SimpleSpinner>
            <template v-else> Login </template>
          </ButtonPrimary>
          <!-- <a
            href="#"
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 underline"
            >Forgot password?</a
          > -->
        </div>
        <p v-if="formFeedback" class="absolute bottom-0 inset-x-0 text-center">
          <span class="error">{{ formFeedback }}</span>
        </p>
      </section>
    </form>
    <div v-else>
      You're logged in! Why don't you head to
      <nuxt-link to="/users/me" class="text-blue-800 underline">
        your profile
      </nuxt-link>
      and see where you left off?
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'Login',
  auth: 'guest',
  data() {
    return {
      formFeedback: null,
      uiState: 'idle',
      errors: false,
      formTouched: true,
      formResponses: {
        email: null,
        password: null,
      },
    }
  },
  validations: {
    formResponses: {
      email: {
        required,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    async loginUser() {
      this.formTouched = !this.$v.formResponses.$anyDirty
      this.errors = this.$v.formResponses.$anyError
      if (
        this.errors === false &&
        this.formTouched === false &&
        this.uiState !== 'pending'
      ) {
        this.spinnerTimer = setTimeout(() => {
          this.uiState = 'pending'
        }, 750)
        try {
          await this.$auth.loginWith('local', {
            data: this.formResponses,
          })
          clearTimeout(this.spinnerTimer)
          this.$store.dispatch('notification/add', {
            type: 'success',
            text: 'You have been logged in.',
          })
        } catch (e) {
          const notification = {
            type: 'error',
          }
          if (e.message === 'Network Error') {
            notification.text = `There was an error logging in. Are you online?`
            this.$store.dispatch('notification/add', notification)
          }
          clearTimeout(this.spinnerTimer)
          this.uiState = 'idle'
          this.formFeedback = e.response.data
        }
      }
    },
  },
  head() {
    return [
      {
        title: 'Login',
      },
    ]
  },
}
</script>

<style lang="postcss" scoped>
.error {
  @apply text-red-500 text-sm;
}

.error-border {
  @apply px-2 border border-red-500 rounded;
}
</style>
