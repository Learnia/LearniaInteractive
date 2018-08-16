<!-- Landing para usuarios NO Logeados-->
<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title v-text="title">Learnia</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn @click="selected = 'ConnectOrRegister'" flat>Connect</v-btn>
        <v-btn v-if="!isWeb" flat>RESET</v-btn>
        <v-btn to="Inside">test</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-container grid-list-xl text-xs-center>
        <v-layout row wrap>
          <v-flex xs10 offset-xs1>
            <component :is="selected"></component>
          </v-flex>
        </v-layout>
      </v-container>
    </main>
    <v-footer app>
      <v-spacer></v-spacer>
      <span>Learnia (&copy; 2017)</span>
    </v-footer>
  </v-app>
</template>

<style>

</style>

<script>
import ConnectOrRegister from '@/components/ConnectOrRegister'

import Firebase from 'firebase'

let otOnAuth = true

export default {
  components: {
    ConnectOrRegister
  },
  data: () => ({
    name: 'LandingPage',
    title: 'LearniaInteractive',
    selected: 'ConnectOrRegister',
    isWeb: process.env.IS_WEB
  }),
  mounted: function () {
    const self = this
    this.language = 'es'

    Firebase.auth().onAuthStateChanged(function (user) {
      if (user && otOnAuth) {
        otOnAuth = false
        self.$router.push('/inside')
      }

      if (user != null) {
        console.log(user.email)
      }
    })
  }
}
</script>