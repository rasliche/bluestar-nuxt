<template>
  <div>
    <form method="post" @submit.prevent="createContinuingEducationRecord()">
      <BaseInput v-model="newRecord.name" label="Name"></BaseInput>
      <BaseInput v-mode="newRecord.date" label="Date"></BaseInput>
      <BaseInput v-mode="newRecord.description" label="Description"></BaseInput>
      <!-- <BaseInput></BaseInput> -->
      <ButtonPrimary @click.prevent="createContinuingEducationRecord()"
        >Create Record</ButtonPrimary
      >
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newRecord: {
        name: null,
        date: null,
        description: null,
      },
    }
  },
  methods: {
    createContinuingEducationRecord() {
      console.log('Creating a new form...')
    },
  },
}
</script>
