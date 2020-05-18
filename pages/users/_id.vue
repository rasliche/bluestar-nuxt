<template>
  <div>
    <h1>{{ this.$route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  head() {
    return [
      {
        title: 'User Page'
      }
    ]
  }
}
</script>
