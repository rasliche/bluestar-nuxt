<template>
  <div class="w-full max-w-md mx-auto">
    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      method="POST"
      @submit.prevent="registerUser"
    >
      <h1 class="text-lg font-semibold text-blue-900 text-center pb-3">
        Register
      </h1>
      <BaseInput
        v-model="$v.formResponses.name.$model"
        label="Name"
        type="text"
        autocomplete="section-register name"
      >
        <p v-if="errors" class="absolute bottom-0 inset-x-0">
          <span v-if="!$v.formResponses.name.required" class="error">
            This field is required.
          </span>
        </p>
      </BaseInput>

      <BaseInput
        v-model="$v.formResponses.email.$model"
        label="Email"
        type="email"
        autocomplete="section-register email"
      >
        <p v-if="errors" class="absolute bottom-0 inset-x-0">
          <span v-if="!$v.formResponses.email.required" class="error"
            >This field is required.
          </span>
          <span v-if="!$v.formResponses.email.minLength" class="error"
            >Field must have at least
            {{ $v.formResponses.email.$params.minLength.min }} characters.</span
          >
        </p>
      </BaseInput>

      <BaseInput
        v-model="$v.formResponses.password.$model"
        label="Password"
        type="password"
        autocomplete="section-register new-password"
      >
        <p v-if="errors" class="absolute bottom-0 inset-x-0">
          <span v-if="!$v.formResponses.password.required" class="error"
            >This field is required.
          </span>
          <span v-if="!$v.formResponses.password.minLength" class="error"
            >Field must have at least
            {{ $v.formResponses.password.$params.minLength.min }}
            characters.</span
          >
        </p>
      </BaseInput>

      <BaseInput
        v-model="$v.formResponses.passwordCopy.$model"
        label="Re-type Password"
        type="password"
        autocomplete="section-register new-password"
      >
        <p v-if="errors" class="absolute bottom-0 inset-x-0">
          <span v-if="!$v.formResponses.passwordCopy.required" class="error">
            This field is required.
          </span>
          <span
            v-if="!$v.formResponses.passwordCopy.sameAsPassword"
            class="error"
          >
            Passwords must match.
          </span>
        </p>
      </BaseInput>
      <!-- SHOP SEARCH MULTI SELECT -->
      <!-- <section class="relative px-4 pb-8 flex">
        <label for="shopChoice" class="w-1/2 text-right pr-2">Choose a Shop to Join:</label>
        <select name="shopChoice" id="shopChoice" class="w-1/2" v-model="shopChoice">
            <option default>Choose a Shop:</option>
            <option v-for="operator in operators" :value="operator._id" :key="operator._id">{{ operator.name }}</option>
        </select>
        <label for="shopPassword" class="w-1/2 text-right pr-2">Shop Password:</label>
        <input type="text" name="shopPassword" id="shopPassword" v-model="shopPassword" class="w-1/2">
    </section> -->
      <section class="relative mb-3 pb-6">
        <div class="flex items-center justify-around">
          <ButtonPrimary type="submit" :disabled="uiState !== 'ready'">
            <SimpleSpinner v-if="uiState === 'waiting'"></SimpleSpinner>
            <template v-else> Register </template>
          </ButtonPrimary>
          <a
            href="#"
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 underline"
            >Forgot password?</a
          >
        </div>
        <p v-if="formFeedback" class="absolute bottom-0 inset-x-0">
          <span class="error">{{ formFeedback }}</span>
        </p>
      </section>
    </form>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
import {
  required,
  minLength,
  maxLength,
  sameAs,
} from 'vuelidate/lib/validators'

export default {
  name: 'Register',
  auth: 'guest',
  // auth: 'guest',
  data() {
    return {
      formFeedback: null,
      uiState: 'ready',
      errors: false,
      formTouched: true,
      formResponses: {
        name: null,
        email: null,
        password: null,
        passwordCopy: null,
        // shopChoice: null,
        // shopPassword: null,
        // operators: []
      },
    }
  },
  validations: {
    formResponses: {
      name: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(255),
      },
      email: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(255),
      },
      password: {
        required,
        minLength: minLength(6),
      },
      passwordCopy: {
        required,
        sameAsPassword: sameAs('password'),
      },
    },
  },
  methods: {
    // ...mapActions('notification', ['add']),
    async registerUser() {
      this.formTouched = !this.$v.formResponses.$anyDirty
      this.errors = this.$v.formResponses.$anyError
      if (
        this.errors === false &&
        this.formTouched === false &&
        this.uiState !== 'waiting'
      ) {
        this.spinnerTimer = setTimeout(function () {
          this.uiState = 'waiting'
        }, 750)
        try {
          // const { token, ...userData } =
          await this.$axios.post('/user/register', this.formResponses)
          await this.$auth.loginWith('local', {
            data: this.formResponses,
          })
          clearTimeout(this.spinnerTimer)
          // this.add({
          //   type: 'success',
          //   text: 'You have been logged in.'
          // })
          this.$router.push('/')
        } catch (e) {
          clearTimeout(this.spinnerTimer)
          this.uiState = 'ready'
          this.formFeedback = e.response.data
        }
      }
    },
  },
  head() {
    return [
      {
        title: 'Register',
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
