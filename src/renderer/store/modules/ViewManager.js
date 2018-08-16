const state = {
  SignInUp: 'SignUp'
}

const mutations = {
  changeToSignIn (state) {
    state.SignInUp = 'SignIn'
  },
  changeToSignUp (state) {
    state.SignInUp = 'SignUp'
  }
}

const computed = {
  getSignInUp (state) {
    return state.SignInUp
  }
}

const actions = {
  changeSignInUp (state) {
    if (state.SignInUp === 'SignUp') {
      state.SignInUp = 'SignIn'
    } else {
      state.SignInUp = 'SignUp'
    }
  }
}

export default {
  state,
  actions,
  mutations,
  computed
}
