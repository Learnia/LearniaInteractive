<template>
  <v-card dark>
    <v-card-title>
      <h2>Connect</h2>
    </v-card-title>
    <v-card-text>
      <form v-if="!isWeb">
        <v-text-field
          label="E-mail"
          v-model="email"
          :rules="emailRules"
          required
        ></v-text-field>
        
        <v-text-field
          label="Enter your password"
          hint="At least 8 characters"
          v-model="password"
          min="8"
          :append-icon="e1 ? 'visibility' : 'visibility_off'"
          :append-icon-cb="() => (e1 = !e1)"
          :type="e1 ? 'password' : 'text'"
          counter
        ></v-text-field>

        <!-- se puede pedir que acepte los terminos cuando este dentro del sistema o hacer
        un paso intermedio
        <v-checkbox
          label="Do you agree?"
          v-model="checkbox"
          @change="$v.checkbox.$touch()"
          @blur="$v.checkbox.$touch()"
          required
        ></v-checkbox> -->
        <div class="elevation-1 mb-2">
          <v-btn @click="connect()" color="primary">Connect</v-btn>
          <v-btn @click="register()" color="primary">Register</v-btn>
        </div>
        <div class="elevation-1">
          <v-btn @click="googleSignIn()" color="primary">Sign In Google</v-btn>
          <v-btn @click="facebookSignIn()" color="primary">Sign In Facebook</v-btn>
          <v-btn @click="githubSignIn()" color="primary">Sign In Github</v-btn>
        </div>
      </form>
      <div v-else class="elevation-1">
        <div id="firebaseui-auth-container"></div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import swal from 'sweetalert'

const {
  authEmailCreateUser,
  authEmailLogin,
  authSignInWithGoogle,
  authSignInWithGithub,
  authSignInWithFacebook,
  authUI,
  authUIConfig
} = require('../../js/auth')

if (process.env.IS_WEB) {
  console.log('Inicio en web exitoso')
  authUI.start('#firebaseui-auth-container', authUIConfig)
}

export default {
  data: () => ({
    valid: true,
    e1: true,
    password: '',
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /^\w+([\u002E-]?\w+)*@\w+([\u002E-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    select: null,
    isWeb: process.env.IS_WEB
  }),
  methods: {
    register () {
      console.log('comenzando el registro')
      let isCreated = authEmailCreateUser(this.email, this.password)

      if (isCreated) {
        // TODO: Arreglar, cuando hay problemas de internet no sale este mensaje
        swal('Registrado correctamente!!')
        this.$router.push('/inside')
      }
    },
    connect () {
      authEmailLogin(this.email, this.password)
    },
    googleSignIn () {
      authSignInWithGoogle()
    },
    githubSignIn () {
      authSignInWithGithub()
    },
    facebookSignIn () {
      authSignInWithFacebook()
    }
  }
}
</script>
