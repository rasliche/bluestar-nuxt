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
export default {
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
    createShop() {
      const { name, accessCode, programs } = this.newShop
      console.log('Creating a new business...', { name, accessCode, programs })
    },
  },
}
</script>
