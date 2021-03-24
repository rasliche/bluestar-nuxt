export const state = () => ({
  operators: [],
})

export const mutations = {
  add(state, newShop) {
    state.operators.push(newShop)
  },
  async get(state) {
    state.operators = await this.$axios.$get('/operators')
  },
}
