<template>
  <div id="homepage">
    <v-container
      fluid
      fill-height
      pa-0>
      <v-layout
        row
        pa-0>
        <v-flex xs1>
          <nav/>
        </v-flex>
        <v-flex>
          <calendar/>
        </v-flex>
        <v-flex xs3>
          <aside/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Calendar from '../Calendar/Calendar.vue'

export default {
  name: 'Homepage',
  components: { Calendar },
}
</script>

<style lang="scss" scoped>
  #homepage {
    width: 100%;
    height: 100%;
  }

  nav {
    height: 100%;
    background-color: white;
  }

  aside {
    height: 100%;
    background-color: $lightBlue;
  }
</style>
