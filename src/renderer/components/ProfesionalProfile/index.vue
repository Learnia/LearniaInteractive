<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark color="primary">
          <h4 v-lang.profesional_profile class="display-1"></h4>
        </v-card>
        <v-card dark color="secundary">
          <h5 class="headline" v-text="this.$FireUser.displayName"></h5> 
        </v-card>
      </v-flex>

      <v-flex xs4>
        <v-avatar size="160px">
          <img v-if="this.$FireUser.photoURL != null" :src="this.$FireUser.photoURL" :alt="this.$FireUser.displayName">
          <img v-else src="https://randomuser.me/api/portraits/women/10.jpg" />
        </v-avatar>
      </v-flex>
      <v-flex xs4 class="vertical-centered-text">
        <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quia vitae porro amet voluptatum quidem rerum earum iure eos accusantium repudiandae, quaerat natus enim numquam doloremque cumque voluptate nostrum id.</blockquote>
      </v-flex>
      <v-flex xs4>
        <v-chip label color="purple" text-color="white">
          <v-icon left>label</v-icon>C#
        </v-chip>
        <v-chip label color="purple" text-color="white">
          <v-icon left>label</v-icon>Linux
        </v-chip>
        <v-chip label color="purple" text-color="white">
          <v-icon left>label</v-icon>JavaScript
        </v-chip>
        <v-chip label color="purple" text-color="white">
          <v-icon left>label</v-icon>Godot
        </v-chip>
        <v-chip label color="purple" text-color="white">
          <v-icon left>label</v-icon>Git
        </v-chip>
        <v-chip label color="purple" text-color="white">
          <v-icon left>label</v-icon>Java
        </v-chip>
        <v-chip label color="purple" text-color="white">
          <v-icon left>label</v-icon>GameDevelop
        </v-chip>
      </v-flex>

      <v-flex xs12>
        <h2>Medals</h2>
        <v-btn flat icon color="purple">
          <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn flat icon color="purple">
          <v-icon>star</v-icon>
        </v-btn>
        <v-btn flat icon color="purple">
          <v-icon>thumb_up</v-icon>
        </v-btn>
        <v-btn flat icon color="purple">
          <v-icon>favorite</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    text: 'holax'
  }),
  mounted: () => {
    // console.log('Hola')
  }
}
</script>
