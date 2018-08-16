<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark color="secundary">
          <marquee class="headline">
            <a href="#"> Nueva versión de LearniaInteractive</a> | 
            <a href="#"> Curso de C#</a> | 
            <a href="#"> Curso de inglés técnico</a> |
            <a href="#"> Curso de Ruby on Rails</a>
          </marquee> 
        </v-card>
      </v-flex>

      <v-flex xs6>
        <v-layout colum>
          <v-flex xs6>
            <v-card class="secundary">
              <h6 v-lang.your_courses class="title pt-2 pb-2"></h6>
              <v-carousel>
                <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
              </v-carousel>
            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card class="secundary">
              <h6 v-lang.sugg_courses class="title pt-2 pb-2"></h6>
              <v-carousel>
                <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
              </v-carousel>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout colum>
          <v-flex xs6>
            <v-card class="secundary">
              <h6 v-lang.sugg_activities class="title pt-2 pb-2"></h6>
              <v-carousel>
                <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
              </v-carousel>
            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card id="li-points-block" class="primary">
              <h6 class="title pt-1 pb-1">Today Points</h6>
              <h6 class="title pt-1 pb-1">1533</h6>
              <hr />
              <h6 class="title pt-1 pb-1">Total Points</h6>
              <h6 class="title pt-1 pb-1">10293</h6>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex xs6>
        <v-card id="li-avatar-block" class="secundary">
          <h6 v-if="this.$FireUser != null" class="title pt-2" v-text="this.$FireUser.displayName"></h6>
          <h6 v-else class="title pt-2">Test Test Test (@test123)</h6>
          <hr />
          <v-avatar id="li-avatar" class="mb-2 mt-2" size="160px">
            <img v-if="this.$FireUser != null" :src="this.$FireUser.photoURL" :alt="this.$FireUser.displayName">
            <img v-else src="https://randomuser.me/api/portraits/women/10.jpg" />
          </v-avatar>
          <p class="subheading li-subtitle"><b>Account Progress</b></h>
          <v-progress-linear v-model="progress"></v-progress-linear>
          <p class="subheading li-subtitle"><b>Medals</b></p>
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
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="scss" scoped>
// li: Significa LearniaInteractive

.carousel {
  max-height: 200px;
}

.li-subtitle {
  margin: 0;
  padding: 0;
}

#li-avatar-block {
  height: 100% !important;
}

#li-avatar {
  margin-top: 5%;
}

#li-points-block {
  height: 100% !important;
}
</style>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://img00.deviantart.net/d6dc/i/2009/350/a/7/moment_in_space_cxiii_by_funerium.jpg'
        },
        {
          src: 'https://wallpapercave.com/wp/8ehyc2F.jpg'
        },
        {
          src: 'https://f4.bcbits.com/img/a0200769317_10.jpg'
        },
        {
          src: 'https://ampaenriquealonso.files.wordpress.com/2016/09/satelite-y-la-tierra.jpg'
        }
      ],
      progress: 60
    }
  }
}
</script>