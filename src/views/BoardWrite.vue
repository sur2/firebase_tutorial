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
      <h1 class="display-2 font-weight-bold mb-3">Board Write</h1>

      <v-text-field type='text' v-model='title'>
        <template v-slot:label>Title</template>
      </v-text-field>

      <v-text-field type='text' v-model='body'>
        <template v-slot:label>Body</template>
      </v-text-field>

      <v-btn v-on:click='input_borad'>Write</v-btn>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import FirebaseService from '../plugins/FirebaseService'
import firebase from 'firebase'
export default {
  data() {
    return {
      title : '',
      body : ''
    }
  },
  methods : {
    input_borad:function() {
      // alert('click')
      if (this.title && this.body) {
        FirebaseService.postPost(this.title, this.body)
        .then(res => {
          this.$router.replace('hello')
        })
      }
      else {
        alert('공백을 채우시오.')
      }
    }
  }
}
</script>
