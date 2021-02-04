<template>
  <div>
    <form method="post" @submit.prevent="createContinuingEducationRecord()">
      <BaseInput
        v-model="newRecord.title"
        type="text"
        label="Title"
      ></BaseInput>
      <BaseInput v-model="newRecord.date" type="date" label="Date"></BaseInput>
      <BaseInput
        v-model="newRecord.description"
        type="text"
        label="Description"
      ></BaseInput>
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
        title: null,
        date: null,
        description: null,
      },
    }
  },
  methods: {
    resetForm() {
      this.newRecord = {
        title: null,
        date: null,
        description: null,
      }
    },
    createContinuingEducationRecord() {
      const { title, date, description } = this.newRecord
      console.log('Creating a new continuing education record...', {
        title,
        date,
        description,
      })
      this.resetForm()
    },
  },
}
</script>
