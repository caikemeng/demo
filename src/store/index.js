import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    addM (state, a) {
      const { a1, b1 } = a
      state.count += a1 + b1
    }
  },
  actions: {},
  modules: {}
})
