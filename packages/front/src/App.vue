<template>
  <div id="app">
    <v-app>
      <v-content>
        <app-header/>
        <router-view/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader/AppHeader.vue'

export default {
  name: 'App',
  components: { AppHeader },
}
</script>

<style lang="scss">
  #app {
    font-family: Tahoma, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100%;
  }

  html, body {
    padding: 0;
    margin: 0;
    height: 100%;
    font-size: 1em;
  }
</style>
