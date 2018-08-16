<template>
  <v-app dark>
    <v-navigation-drawer
      permanent
      clipped
      fixed
      app
      :mini-variant="mini"
      >
      <v-list dense>
        <v-tooltip right>
          <v-list-tile class="mb-3 mt-3" avatar @click="currentPage = 'Profile'" slot="activator">
            <v-list-tile-avatar>
              <img v-if="this.$FireUser != null" :src="this.$FireUser.photoURL" :alt="this.$FireUser.displayName"/>
              <img v-else src="https://randomuser.me/api/portraits/women/10.jpg" />
            </v-list-tile-avatar>
          </v-list-tile>
          <span v-lang.profile></span>
        </v-tooltip>
        <v-tooltip right>
          <v-list-tile @click="currentPage = 'Explore'" slot="activator">
            <v-list-tile-action>
              <v-icon>explore</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <span v-lang.explore></span>
        </v-tooltip>
        <v-tooltip right>
          <v-list-tile @click="currentPage = 'Dashboard'" slot="activator">
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <span v-lang.dashboard></span>
        </v-tooltip>
        <v-tooltip right>
          <v-list-tile @click="currentPage = 'CreatorZone'" slot="activator">
            <v-list-tile-action>
              <v-icon>create</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <span v-lang.creator_zone></span>
        </v-tooltip>
        <v-tooltip right>
          <v-list-tile @click="currentPage = 'ProfesionalProfile'" slot="activator">
            <v-list-tile-action>
              <v-icon>account_box</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <span v-lang.profesional_profile></span>
        </v-tooltip>
        <v-tooltip right>
          <v-list-tile @click="currentPage = 'Stats'" slot="activator">
            <v-list-tile-action>
              <v-icon>trending_up</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <span  v-lang.stats></span>
        </v-tooltip>
        <v-tooltip right>
          <v-list-tile @click="currentPage = 'Configuration'" slot="activator">
            <v-list-tile-action>
              <v-icon>settings</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <span  v-lang.configuration></span>
        </v-tooltip>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat icon>
        <v-badge overlay right color="purple" overlap>
          <v-icon slot="badge">2</v-icon>
          <v-tooltip bottom>
            <v-icon
              large
              color="grey lighten-1"
              slot="activator"
            >
              star
            </v-icon>
            <span v-lang.achievements></span>
          </v-tooltip>
        </v-badge>
      </v-btn>
      <v-btn flat icon>
        <v-badge overlay right color="purple" overlap>
          <v-icon slot="badge">4</v-icon>
          <v-tooltip bottom>
            <v-icon
              large
              color="grey lighten-1"
              slot="activator"
            >
              local_grocery_store
            </v-icon>
            <span v-lang.shopping_cart></span>
          </v-tooltip>
        </v-badge>
      </v-btn>
      <v-btn flat icon>
        <v-badge overlay right color="purple" overlap>
          <v-icon slot="badge" dark>2</v-icon>
          <v-tooltip bottom>
            <v-icon
              large
              color="grey lighten-1"
              slot="activator"
            >
              notifications
            </v-icon>
            <span v-lang.notifications></span>
          </v-tooltip>
        </v-badge>
      </v-btn>
      <v-btn flat icon @click="logout()">
        <v-tooltip bottom>
          <v-icon
            large
            color="grey lighten-1"
            slot="activator"
          >
            exit_to_app
          </v-icon>
          <span v-lang.exit></span>
        </v-tooltip>
      </v-btn>
    </v-toolbar>
    <main>
      <v-container grid-list-xl text-xs-center>
        <component :is="currentPage" id="comp"></component>
      </v-container>
    </main>
  </v-app>
</template>

<style>
#comp {
  margin-left: 40px;
}
</style>


<script>
// Components
import Profile from '@/components/Profile'
import Explore from '@/components/Explore'
import Dashboard from '@/components/Dashboard'
import CreatorZone from '@/components/CreatorZone'
import ProfesionalProfile from '@/components/ProfesionalProfile'
import Stats from '@/components/Stats'
import Configuration from '@/components/Configuration'

import { authLogout } from '../js/auth'

export default {
  data: () => ({
    name: 'Inside',
    title: 'LearniaInteractive',
    mini: true,
    currentPage: 'Dashboard'
  }),
  components: {
    Profile,
    Explore,
    Dashboard,
    CreatorZone,
    ProfesionalProfile,
    Stats,
    Configuration
  },
  methods: {
    logout () {
      authLogout()
      this.$router.push('/')
    },
    test () {
      // console.log(Vuex.Store)
      // console.log(this.$store.state)
      // console.log(this.$store.getters.getHola) // funcial :D
      // console.log(this.$FireAuth.currentUser.photoURL)
      // this.userIMG = this.$FireUser.photoURL
    }
  },
  mounted: () => {
    // this.language = 'es'
    // this.userIMG = this.$store.getters.getUser.photoURL
    // console.log(this.$store.getters.getUser.photoURL)
  }
}
</script>
