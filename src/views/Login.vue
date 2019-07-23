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
      <h1 class="display-2 font-weight-bold mb-3">Sign In</h1>

      <v-text-field>
        <template v-slot:label>Email</template>
      </v-text-field>

      <v-text-field type='password'>
        <template v-slot:label>Password</template>
      </v-text-field>

      <v-btn>Connection</v-btn>
      <p class="subheading font-weight-regular">You don't hava an account ? You can create one</p>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {

}
</script>

<style>
.v-text-field{
  margin: auto;
  width:50%;
}
</style>
