<template>
  <v-app>
    <StarsBackground class="canvas" />
    <div id="appContainer" class="d-flex justify-center align-center">
      <MenuButton />
      <div class="mainContainer d-flex flex-column">
        <b class="titleText d-flex flex-column align-start">ABOUT</b>
        <div class="horizontalLine mb-4" />
        <p v-for="text in texts" :key="text" class="normalText d-flex flex-column align-start"
          style="text-align: justify;">{{ text }}
        </p>
        <a href="CV_V4.pdf" target="_blank" class="d-flex justify-start mt-10 normalText link">
          <v-icon icon="mdi-subdirectory-arrow-right" class="d-flex justify-end mr-2" size="small" />
          Resume
        </a>
      </div>
    </div>
    <FooterBar />
  </v-app>
</template>

<script>
import FooterBar from '@/components/FooterBar.vue'
import StarsBackground from '@/components/StarsBackground.vue'
import MenuButton from '@/components/MenuButton.vue'

export default {
  name: 'AboutPage',
  components: {
    FooterBar,
    StarsBackground,
    MenuButton
  },
  data() {
    return {
      texts: ["Hi! I'm a passionate developer with a background in geomatics engineering. A creator at heart, I'm always looking for new ways to solve problems through programming. ", "When I'm not coding, I like playing soccer, climbing, running or playing chess. "]
    }
  }
}
</script>

<style scoped>
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
  color: #e5e7eb;
  position: absolute;
  width: 100vw;
  height: 100%;
  z-index: 10;
}

.canvas {
  width: 100vw;
  height: 100vh;
}

.mainContainer {
  width: 60vw;
}

.titleText {
  font-size: 2rem
}

.normalText {
  font-size: 1.25rem
}

.horizontalLine {
  width: 60vw;
  height: 2px;
  background-color: #E0FFFF;
}

.link {
  color: #E0FFFF;
  text-decoration: none
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
</style>
