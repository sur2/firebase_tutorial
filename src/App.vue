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
      >
      <!-- v-btn 클릭 시 새 창 띄우기 : target="_blank" -->
        <span class="mr-2">Login</span>
      </v-btn>

    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      //
    }
  }
}
</script>
