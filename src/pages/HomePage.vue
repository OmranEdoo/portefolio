<template>
  <v-app>
    <StarsBackground :isPlay="isPlay" :speed="speed" :acceleration="acceleration" />
    <MenuButton v-if="isPlay"></MenuButton>
    <div v-else id="textContainer">
      <h1 id="blaze" class="d-flex justify-content-start">Omran Edoo</h1>
      <TypeWriter :array="descriptions" />
      <router-link to="/projects">
        <v-btn variant="plain">
          <p class="redirectBtn text-overline">_projects</p>
        </v-btn>
      </router-link>
      <router-link to="/about">
        <v-btn variant="plain">
          <p class="redirectBtn text-overline">_about</p>
        </v-btn>
      </router-link>
      <v-btn variant="plain" @click="play">
        <p class="redirectBtn text-overline">_play</p>
      </v-btn>
    </div>
    <FooterBar />
  </v-app>
</template>

<script>
import TypeWriter from '@/components/TypeWriter.vue'
import FooterBar from '@/components/FooterBar.vue'
import StarsBackground from '@/components/StarsBackground.vue'
import MenuButton from '@/components/MenuButton.vue'

export default {
  name: 'HomePage',
  components: {
    TypeWriter,
    FooterBar,
    StarsBackground,
    MenuButton
  },
  data() {
    return {
      isPlay: false,
      speed: 10,
      descriptions: ["Développeur freelance...", "Diplomé d'école d'ingénieur...", "Joueur d'échecs (très) amateur..."],
    }
  },
  methods: {
    play() {
      this.speed = 500
      this.isPlay = true
    },
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
  text-transform: uppercase;
  font-family: title;
  font-size: calc(40px + 4vw);
  height: 6vw;
  width: max-content;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.redirectBtn {
  color: #a9a9a9;
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
