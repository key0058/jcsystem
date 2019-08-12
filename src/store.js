import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthority: false
  },
  mutations: {
    authorityAccess(state, access) {
      state.isAuthority = access;
    }
  },
  actions: {

  }
})
