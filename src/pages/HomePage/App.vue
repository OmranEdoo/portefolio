<template>
  <v-app>
    <StarsBackground class="canvas" />
    <div id="textContainer">
      <h1 id="blaze" class="d-flex justify-content-start">Omran Edoo</h1>
      <TypeWriter :array="descriptions" />
      <v-btn variant="plain" href="projects">
        <p class="text-overline">_projects</p>
      </v-btn>
      <v-btn variant="plain" href="about">
        <p class="text-overline">_about</p>
      </v-btn>
      <v-btn variant="plain" href="game" disabled="">
        <p class="text-overline">_play</p>
      </v-btn>
    </div>
    <FooterBar id="footer" />
  </v-app>
</template>

<script>
import TypeWriter from '@/components/TypeWriter.vue'
import FooterBar from '@/components/FooterBar.vue'
import StarsBackground from '@/components/StarsBackground.vue'

export default {
  name: 'HomePage',
  components: {
    TypeWriter,
    FooterBar,
    StarsBackground
  },
  data() {
    return {
      descriptions: ["Développeur freelance...", "Diplomé d'école d'ingénieur...", "Joueur d'échecs (très) amateur..."],
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

body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  background: black;
  overflow: hidden;
}

#textContainer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  color: white;
}

@font-face {
  font-family: "title";
  src: url("@/fonts/limo.ttf");
}

#blaze {
  margin-bottom: 30px;
  text-transform: uppercase;
  font-family: title;
  font-size: calc(40px + 4vw);
  height: 6vw;
  width: max-content;
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

.canvas {
  width: 100vw;
  height: 100vh;
}
</style>
