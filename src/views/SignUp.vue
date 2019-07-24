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
      <h1 class="display-2 font-weight-bold mb-3">Sign Up</h1>

      <v-text-field v-model='email'>
        <template v-slot:label>Email</template>
      </v-text-field>

      <v-text-field v-model='password'
      :append-icon="input_ps ? 'visibility' : 'visibility_off'"
      :type="input_ps ? 'text' : 'password'"
      @click:append="input_ps = !input_ps ">
      <template v-slot:label>Password</template>
    </v-text-field>

    <v-btn class='mb-4' v-on:click='signUp'>Create Account</v-btn>
    <p class="subheading font-weight-regular">Thank you.</p>
  </v-flex>
</v-layout>
</v-container>
</template>

<script>
import firebase from 'firebase'

export default{
  data: function() {
    return {
      input_ps:false,
      email:'',
      password:''
    }
  },
  methods:{
    signUp:function() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then((user) => {
        alert('Your account has been created !')
        this.$router.replace('/hello')
      },
      (err) => {
        alert('Oops. '+error.message)
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
