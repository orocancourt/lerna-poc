<template>
  <div id="header">
    <v-toolbar
      app
      height="70"
      color="white">
      <img
        id="logo"
        src="../../../static/logo.png"
        alt="Logo">
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    name: 'AppHeader',
  }
</script>

<style lang="scss" scoped>
  #logo {
    margin-left: 44px;
  }
</style>
