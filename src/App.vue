<template>
  <v-app id="appContainer">
    <div class="rowContainer">
      <div class="columnContainer">
        <div id="presContainer">
          <h1>Omran Edoo</h1>
          <TypeWriter :array="descriptions" />
        </div>
        <div class="rowContainer">
          <div id="projectsContainer">
            <ProjectCarousel />
          </div>
          <p>{{ projectText }}</p>
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
      projectText: "Ce projet etieshbsdjhbvk ndvhbjsd kj dvhkdjhb  bj jbj bjbjhvj"
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
  width: 40vw;
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
