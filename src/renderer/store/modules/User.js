
const state = {
  user: null
}

const getters = {
  getHola (state) {
    console.log('hola vuex')
  },
  getUser (state) {
    return state.user
  }
}

/*
const computed = {
  getUser (state) {
    return state.user
  }
}
*/

const mutations = {
  setUser (state, pUser) {
    state.user = pUser
    console.log('setUser')
  }
}

export default {
  state,
  mutations,
  getters
}
