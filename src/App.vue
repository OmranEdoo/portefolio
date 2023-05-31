<template>
  <v-app id="appContainer">
    <div class="rowContainer">
      <div class="columnContainer">
        <div id="presContainer">
          <h1>Omran Edoo</h1>
          <TypeWriter :array="descriptions" />
          <div v-for="summary in summaries" :key="summary">
            {{ summary }}
          </div>
        </div>
        <div id="projectsContainer">
          <ProjectCarousel />
        </div>
      </div>
      <div id="cursusContainer">
        <CursusTimeline />
      </div>
    </div>
    <FooterBar />
  </v-app>
</template>

<script>
import TypeWriter from './components/TypeWriter.vue'
import CursusTimeline from './components/CursusTimeline.vue'
import ProjectCarousel from './components/ProjectCarousel.vue'
import FooterBar from './components/FooterBar.vue'

export default {
  name: 'App',
  components: {
    TypeWriter,
    CursusTimeline,
    ProjectCarousel,
    FooterBar
  },
  data() {
    return {
      descriptions: ["Future ingénieur...", "Passionné de programmation...", "Joueur d'échecs (très) amateur..."],
      summaries: [
        "iodsjfgiofdgodfnhoifdkjio fdkgiodfgiofgg iodfjgoidsgiodsjfgoi",
        "iodsjfgiofdgodfnhoifdkjio fdkgiodfgiofgg iodfjgoidsgiodsjfgoi",
        "iodsjfgiofdgodfnhoifdkjio fdkgiodfgiofgg iodfjgoidsgiodsjfgoi"
      ]
    }
  },
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
  background-color: #191918;
}

#appContainer {
  background-color: #191918;
  color: #f2f2f2;
}

#presContainer {
  width: 60vw;
  height: 35vh;
  justify-content: start;
  display: flex;
  flex-direction: column;
  padding: 5vh;
}

#presContainer * {
  width: fit-content;
}

#cursusContainer {
  width: 40vw;
  height: 100vh;
  padding: 30px;
}

#projectsContainer {
  width: 55vw;
  height: 65vh;
}

.rowContainer {
  display: flex;
  flex-direction: row;
}

.columnContainer {
  display: flex;
  flex-direction: column;
}
</style>
