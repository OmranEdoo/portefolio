<template>
  <ProjectCarousel></ProjectCarousel>
  <v-app id="appContainer">
    <FooterBar id="footer" />
  </v-app>
</template>

<script>
import FooterBar from '@/components/FooterBar.vue'

export default {
  name: 'GamePage',
  components: {
    FooterBar,
  },
  data() {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

html,
body,
#app {
  margin: 0;
  min-height: 100vh;
  overflow-x: hidden;
}

@media only screen and (min-width: 1280px) {

  html,
  body,
  #app {
    overflow-y: hidden;
  }
}

#appContainer {
  background-color: #0b2a39;
  color: #e5e7eb
}

.v-navigation-drawer__content::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px #5d5d5d;
  background-color: #5d5d5d;
}

.v-navigation-drawer__content::-webkit-scrollbar {
  width: 0px;
}

.v-navigation-drawer__content::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px #424242;
  background-color: #424242;
}

#footer {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 3vh;
}
</style>
