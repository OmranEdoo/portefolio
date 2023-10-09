<template>
  <v-app>
    <StarsBackground :isPlay="isPlay" :speed="speed" />
    <div>
      <LanguageBtn />
      <div v-if="isLoading" />
      <div v-else>
        <MenuButton v-if="isPlay"></MenuButton>
        <div v-else id="textContainer">
          <h1 id="blaze" class="d-flex justify-content-start">Omran Edoo</h1>
          <TypeWriter :array="descriptions" :key="typeWriterKey" />
          <router-link to="/projects">
            <v-btn variant="plain">
              <p v-translate class="redirectBtn text-overline">_projects</p>
            </v-btn>
          </router-link>
          <router-link to="/about">
            <v-btn variant="plain">
              <p v-translate class="redirectBtn text-overline">_about</p>
            </v-btn>
          </router-link>
          <v-btn variant="plain" @click="play">
            <p v-translate class="redirectBtn text-overline">_play</p>
          </v-btn>
        </div>
      </div>
    </div>
    <FooterBar />
  </v-app>
</template>

<script>
import { mapState, mapMutations } from "vuex"

import TypeWriter from '@/components/TypeWriter.vue'
import FooterBar from '@/components/FooterBar.vue'
import StarsBackground from '@/components/StarsBackground.vue'
import MenuButton from '@/components/MenuButton.vue'
import LanguageBtn from '@/components/LanguageBtn.vue'

export default {
  name: 'HomePage',
  components: {
    TypeWriter,
    FooterBar,
    StarsBackground,
    MenuButton,
    LanguageBtn,
  },
  data() {
    return {
      isPlay: false,
      speed: 10,
      typeWriterKey: 0
    }
  },
  watch: {
    '$language.current': function () {
      this.typeWriterKey += 1
    }
  },
  mounted() {
    setTimeout(() => {
      this.END_LOADING()
    }, 0)
  },
  computed: {
    ...mapState(["isLoading"]),
    descriptions() {
      return [
        this.$gettext("Freelance developer..."),
        this.$gettext("Engineering school graduate..."),
        this.$gettext("A (very) amateur chess player...")
      ]
    }
  },
  methods: {
    ...mapMutations(["END_LOADING"]),
    play() {
      this.speed = 700
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
  height: 100%;
  margin: 0;
  background: black;
  overflow: hidden;
  cursor: none;
}

html {
  cursor: none;
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
