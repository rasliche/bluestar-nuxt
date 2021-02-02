<template>
  <div>
    <PageHeading>My Dashboard</PageHeading>

    <div class="max-w-4xl">
      <p>
        You are logged in as
        <span class="font-semibold">{{ this.$auth.user.name }}</span> using the
        <span class="font-mono bg-blue-100 rounded px-1">{{
          this.$auth.user.email
        }}</span>
        email address.
      </p>
    </div>

    <div class="max-w-4xl">
      <PageHeading>Training Record</PageHeading>
      <LessonList></LessonList>
    </div>

    <div class="max-w-4xl">
      <PageHeading>Continuing Education</PageHeading>
      <div>
        <p></p>
      </div>
      <ContinuingEducationForm></ContinuingEducationForm>
    </div>
    <div class="bg-gray-700 text-gray-100 rounded max-w-lg p-2 mt-24">
      <p class="text-lg">Raw User Data</p>
      {{ this.$auth.user }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  head() {
    return [
      {
        title: 'Dashboard',
      },
    ]
  },
}
</script>
