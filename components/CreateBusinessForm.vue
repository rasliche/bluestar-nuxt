<template>
  <div class="w-full max-w-md mx-auto">
    <form method="post" @submit.prevent="createShop">
      <h1 class="text-lg font-semibold text-blue-900 text-center pb-3">
        Create a New Business Account
      </h1>
      <BaseInput v-model="$v.newShop.name.$model" type="text" label="Name">
        <p v-if="errors" class="absolute ml-2 bottom-0 inset-x-0">
          <span v-if="!$v.newShop.name.required" class="error">
            This field is required.
          </span>
        </p>
      </BaseInput>
      <BaseInput
        v-model="$v.newShop.accessCode.$model"
        type="text"
        label="Access Code"
      >
        <p v-if="errors" class="absolute ml-2 bottom-0 inset-x-0">
          <span v-if="!$v.newShop.accessCode.required" class="error">
            This field is required.
          </span>
        </p>
      </BaseInput>
      <!-- <BaseInput></BaseInput> -->
      <section class="relative mb-3 pb-6">
        <div class="flex items-center justify-around">
          <ButtonPrimary type="submit" :disabled="uiState !== 'idle'">
            <SimpleSpinner v-if="uiState === 'pending'"></SimpleSpinner>
            <template v-else> Create </template>
          </ButtonPrimary>
        </div>
        <p v-if="formFeedback" class="absolute bottom-0 inset-x-0 text-center">
          <span class="error">{{ formFeedback }}</span>
        </p>
      </section>
    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import BaseInput from '@/components/BaseUI/inputs/BaseInput'
import ButtonPrimary from '@/components/BaseUI/buttons/ButtonPrimary'
import SimpleSpinner from '@/components/BaseUI/loaders/SimpleSpinner'

export default {
  name: 'CreateBusinessForm',
  components: {
    BaseInput,
    ButtonPrimary,
    SimpleSpinner,
  },
  data() {
    return {
      formFeedback: null,
      errors: false,
      uiState: 'idle',
      formTouched: true,
      newShop: {
        name: null,
        accessCode: null,
        programs: null,
      },
    }
  },
  validations: {
    newShop: {
      name: {
        required,
      },
      accessCode: {
        required,
      },
    },
  },
  methods: {
    resetNewShop() {
      this.newShop = {
        name: null,
        accessCode: null,
        programs: null,
      }
    },
    async createShop() {
      this.formTouched = !this.$v.newShop.$anyDirty
      this.errors = this.$v.newShop.$anyError
      if (
        this.errors === false &&
        this.formTouched === false &&
        this.uiState !== 'pending'
      ) {
        this.spinnerTimer = setTimeout(() => {
          this.uiState = 'pending'
        }, 750)
        const { name, accessCode, programs } = this.newShop
        try {
          const createdShop = await this.$axios.$post('/operators/', {
            name,
            accessCode,
            programs,
          })
          clearTimeout(this.spinnerTimer)
          this.$store.commit('operators/add', createdShop)
          this.$store.dispatch('notification/add', {
            type: 'success',
            text: `Created ${name}.`,
          })
          this.formFeedback = null
        } catch (error) {
          clearTimeout(this.spinnerTimer)
          this.formFeedback = error.response.data.message
          this.uiState = 'idle'
        }
      }
    },
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
