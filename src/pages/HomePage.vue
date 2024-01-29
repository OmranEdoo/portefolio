<template>
  <v-app>
    <StarsBackground :isPlay="isPlay" :speed="speed" />
    <div>
      <LanguageBtn />
      <MenuButton v-if="isPlay"></MenuButton>
      <div v-else class="centerContainer">
        <h1 id="blaze" class="caviarFont d-flex justify-content-start">Omran Edoo</h1>
        <TypeWriter :array="descriptions" :key="typeWriterKey" />
        <router-link to="/projects">
          <v-btn class="redirectBtn" variant="plain">
            <p v-translate class="text-overline">_projects</p>
          </v-btn>
        </router-link>
        <router-link to="/about">
          <v-btn class="redirectBtn" variant="plain">
            <p v-translate class="text-overline">_about</p>
          </v-btn>
        </router-link>
        <v-btn class="redirectBtn" variant="plain" @click="play">
          <p v-translate class="text-overline">_play</p>
        </v-btn>
      </div>
    </div>
    <FooterBar />
  </v-app>
</template>

<script>
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
  computed: {
    descriptions() {
      return [
        this.$gettext("Computer engineer..."),
        this.$gettext("A (very) amateur chess player...")
      ]
    }
  },
  methods: {
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

#blaze {
  text-transform: uppercase;
  font-size: calc(40px + 3vw);
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
  cursor: none;
}
</style>
