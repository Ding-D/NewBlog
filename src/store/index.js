import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    elStepIndex: 1,
    elStepClass: ''
  },
  mutations: {
    getElStepInfo(state, arr) {
      state.elStepIndex = arr[1]
      state.elStepClass = arr[0]
    }
  },
  actions: {},
  modules: {}
})
