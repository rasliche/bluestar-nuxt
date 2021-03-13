<template>
  <div>
    <form method="post" @submit.prevent="createShop()">
      <BaseInput v-model="newShop.name" type="text" label="Name"></BaseInput>
      <BaseInput
        v-model="newShop.accessCode"
        type="text"
        label="Access Code"
      ></BaseInput>
      <!-- <BaseInput></BaseInput> -->
      <ButtonPrimary @click.prevent="createShop()">Create</ButtonPrimary>
    </form>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseUI/inputs/BaseInput.vue'
import ButtonPrimary from '@/components/BaseUI/buttons/ButtonPrimary.vue'

export default {
  components: {
    BaseInput,
    ButtonPrimary,
  },
  data() {
    return {
      newShop: {
        name: null,
        accessCode: null,
        programs: null,
      },
    }
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
      const { name, accessCode, programs } = this.newShop
      await this.$axios.$post('/operators/', {
        name,
        accessCode,
      })
      this.$store.dispatch('notification/add', {
        type: 'success',
        text: `Created ${name}.`,
      })
      console.log('Creating a new business...', { name, accessCode, programs })
    },
  },
}
</script>
