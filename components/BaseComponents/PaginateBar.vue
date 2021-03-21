<template>
  <Paginate :list="list" :per-page="perPage"> </Paginate>
</template>

<script>
import Paginate from './Paginate.vue'

export default {
  name: 'PaginateBar',
  components: {
    Paginate,
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
    perPage: {
      type: Number,
      default: 10,
    },
  },
}
</script>

<style></style>
