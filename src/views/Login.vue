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
      <h1 class="display-2 font-weight-bold mb-3">LogIn</h1>

      <v-text-field v-model='email'>
        <template v-slot:label>Email</template>
      </v-text-field>

      <v-text-field v-model='password'
      :append-icon="input_ps ? 'visibility' : 'visibility_off'"
      :type="input_ps ? 'text' : 'password'"
      @click:append="input_ps = !input_ps ">
      <template v-slot:label>Password</template>
    </v-text-field>

    <v-btn class='mb-4' v-on:click='login'>Connection</v-btn>
    <p class="subheading font-weight-regular">You don't hava an account? You can <router-link to='/sign_up'>create one.</router-link></p>
  </v-flex>
</v-layout>
</v-container>
</template>

<script>
import firebase from 'firebase'

export default {
  data: function() {
    return {
      input_ps:false,
      email:'',
      password:''
    }
  },
  methods:{
    login:function(){
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then((user) => {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        this.$router.replace('hello')
      },
      (err) => {
        alert('Oops. '+err.message)
      }
    );
  }
}
}
</script>

<style>
.v-text-field{
  margin: auto;
  width:50%;
}

</style>
