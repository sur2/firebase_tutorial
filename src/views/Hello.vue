<template>
  <v-container>
    <v-layout
    text-xs-center
    wrap
    >
    <v-flex xs12>
      <v-img
      :src="require('../assets/logo.svg')"
      class="my-3"
      contain
      height="200"
      ></v-img>
    </v-flex>

    <v-flex mb-4>
      <h1 class="display-2 font-weight-bold mb-3">Hello My Page!</h1>

      <p class="subheading font-weight-regular">Wellcome~ <span v-html='userEmail'></span> </p>
      <v-btn v-on:click='logout'>Logout</v-btn>
      <v-btn v-on:click='toWrite'>Write</v-btn>
    </v-flex>
  </v-layout>
  <temp/>
</v-container>
</template>

<script>
import firebase from 'firebase'
import temp from '../components/MyCalender'

export default {
  components:{
    temp
  },
  data(){
    return {
      userEmail:''
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        console.log(user.email)
        this.userEmail = user.email
      } else {
        // No user is signed in.
        this.userEmail = 'Guest'
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
    toWrite:function(){
      this.$router.replace('boardWrite')
    }
  },
}
</script>

<style>
.v-text-field{
  margin: auto;
  width:50%;
}

</style>
