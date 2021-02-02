<template>
  <div>
    <form method="post" @submit.prevent="createShop()">
      <BaseInput v-model="newShop.name" label="Name"></BaseInput>
      <BaseInput v-mode="newShop.access_code" label="Access Code"></BaseInput>
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
        access_code: null,
        programs: null,
      },
    }
  },
  methods: {
    createShop() {
      console.log('Creating a new form...')
    },
  },
}
</script>

<style></style>
