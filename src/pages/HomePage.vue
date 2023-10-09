<template>
  <v-app>
    <StarsBackground :isPlay="isPlay" :speed="speed" />
    <div>
      <LanguageBtn />
      <div class="centerContainer" v-if="isLoading">
        <p class="caviarFont" v-translate>Welcome on my portefolio website !</p>
        <p class="caviarFont" v-translate>loading</p>
        <div class="waviy">
          <span style="--i:1">.</span>
          <span style="--i:2">.</span>
          <span style="--i:3">.</span>
        </div>
      </div>
      <div v-else>
        <MenuButton v-if="isPlay"></MenuButton>
        <div v-else class="centerContainer">
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
    }, 3000)
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

.centerContainer {
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

.caviarFont {
  font-family: caviardreams;
}

.redirectBtn {
  color: #a9a9a9;
}

.waviy {
  position: relative;
  -webkit-box-reflect: below -5px linear-gradient(transparent, rgba(0, 0, 0, .2));
}

.waviy span {
  font-family: ASO_reg, cursive;
  position: relative;
  display: inline-block;
  color: #fff;
  animation: waviy 1s infinite;
  animation-delay: calc(.1s * var(--i));

}

@keyframes waviy {

  0%,
  40%,
  100% {
    transform: translateY(0)
  }

  20% {
    transform: translateY(-5px)
  }
}
</style>
