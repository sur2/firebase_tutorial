<template>
  <v-container>
    <v-layout
    wrap
    >
    <HelloWorld />
    <PublicCalender />

  </v-layout>

</v-container>
</template>

<script>
import HelloWorld from '../components/HelloWorld'
import PublicCalender from '../components/PublicCalender'

export default {
  components: {
    HelloWorld,
    PublicCalender
  }
}
</script>
