<script>
export default {
  name: 'Paginate',
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
  data() {
    return {
      page: 1,
      pages: [],
    }
  },
  computed: {
    paginatedItems() {
      const from = this.page * this.perPage - this.perPage
      const to = this.page * this.perPage
      return this.list.slice(from, to)
    },
  },
  watch: {
    list: {
      immediate: true,
      handler: (value) => {
        this.setPages()
      },
    },
  },
  methods: {
    nextPage() {
      if (this.page < this.pages.length) {
        this.page++
      }
    },
    prevPage() {
      if (this.page > 1) {
        this.page--
      }
    },
    setPages() {
      const numberOfPages = Math.ceil(this.list.length / this.perPage)
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index)
      }
    },
  },
  render() {
    return this.$scopedSlots.default({
      page: this.page,
      pages: this.pages,
      paginatedItems: this.paginatedItems,
      nextPage: this.nextPage,
      prevPage: this.prevPage,
    })
  },
}
</script>
