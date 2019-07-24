<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light" onclick="location.href='/'">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>


      <v-btn
        flat
        href="/login"
        v-if='!logState'
      >
      <!-- v-btn 클릭 시 새 창 띄우기 : target="_blank" -->
        <span class="mr-2">Login</span>
      </v-btn>

      <v-btn flat v-else v-on:click='logout'>{{userEmail}} LogOut</v-btn>

    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      userEmail:'',
      logState:false
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        console.log(user.email);
        this.logState = true
        this.userEmail = user.email
      } else {
        // No user is signed in.
        this.logState = false
      }
    });
  },
  methods:{
    logout:function(){
      firebase.auth().signOut().then(() => {
        // this.$router.replace('login')
        location.href='/login'
      })
    },
  }
}
</script>
