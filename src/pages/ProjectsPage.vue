<template>
  <v-app>
    <StarsBackground class="canvas" />
    <div id="appContainer">
      <MenuButton />
      <div id="projectsContainer"
        class="d-flex flex-row align-start justify-end overflow-y-auto v-navigation-drawer__content">
        <div id="padContainer" class="pb-10 pl-10 pt-10">
          <div id="textContainer" class="d-flex flex-column align-end">
            <b class="titleText align-self-start pb-2">Projects</b>
            <div class="horizontalLine" />
            <a v-for="project in projects" :key="project.index" class="project d-flex flex-column"
              @click="updateDescription(project.index)">
              <div class="d-flex flex-row justify-space-between align-center">
                <p class="technologyText ml-1">{{ project.technology }}</p>
                <h3 class="projectTitleText d-flex justify-end pt-4 pb-4">
                  {{ project.title }}
                  <a :href="project.url" target="_blank" class="pl-4 link">
                    <v-icon icon="north_east" size="x-small" class="ml-1" />
                  </a>
                </h3>
              </div>
              <div v-if="index == project.index && seeDescription" class="pl-8 pr-8">
                <p v-for="text in project.description" :key="text" class="descriptionText mb-2"
                  style="text-align: justify;">
                  {{ text }}
                </p>
              </div>
              <div class="horizontalThinLine" />
            </a>
          </div>
        </div>
      </div>
      <ProjectCarousel id="canvasCarousel"></ProjectCarousel>
    </div>
    <FooterBar />
  </v-app>
</template>

<script>
import FooterBar from '@/components/FooterBar.vue'
import ProjectCarousel from '@/components/ProjectCarousel.vue'
import StarsBackground from '@/components/StarsBackground.vue'
import MenuButton from '@/components/MenuButton.vue'
import { mapMutations } from "vuex"

export default {
  name: 'ProjectsPage',
  components: {
    FooterBar,
    ProjectCarousel,
    StarsBackground,
    MenuButton
  },
  data() {
    return {
      index: 0,
      seeDescription: false,
      projects: [
        { index: 0, title: "Portefolio", technology: "WEB", description: ["This Website was made with the frameworks Vue3 and Vuex. The 3D  was created with the library ThreeJs."], url: "https://omranedoo.vercel.app" },
        { index: 1, title: "TraiLove76200", technology: "WEB", description: ["The TrailLove76200 project aims to visualise the trajectories of participants in the Oxfam Trailwalker 2021 race and to provide a spatio-temporal analysis of these trajectories. The main challenge is to find an effective way of visualising this data and providing analysis tools for race organisers and researchers interested in the data collected.To meet this challenge, the project proposes the development of a high-performance web application capable of representing the evolution of participants' pace as a function of different parameters.", "The application provides clear, accurate 2D and 2D + 1 visualisation of data, as well as spatio-temporal analysis of trajectories. It is easy for users to learn, thanks to the various aids provided."], url: "https://github.com/zumbalove974/oxfam-trailwalker" },
      ]
    }
  },
  mounted() {
    this.UPDATE_PAGE("projects")
  },
  methods: {
    ...mapMutations(["UPDATE_PAGE"]),
    updateDescription(index) {
      if (this.seeDescription) {
        if (this.index == index) {
          this.seeDescription = false
        }
      } else {
        this.seeDescription = true
      }
      this.index = index
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
  overflow: hidden;
}

#appContainer {
  position: absolute;
  color: #e5e7eb;
  display: flex;
  width: 100vw;
  flex-direction: row;
  width: 100vw;
  height: 100%;
  align-items: end;
}

@media screen and (orientation: landscape) {
  #appContainer {
    flex-direction: row;
    justify-content: end !important;
  }

  #canvasCarousel {
    width: 50vw !important;
    height: 50vw !important;
  }
}

@media screen and (orientation: portrait) {
  #appContainer {
    flex-direction: column-reverse;
    justify-content: start !important;
  }

  #padContainer {
    padding-left: 0 !important;
    padding-top: 0 !important;
  }

  #canvasCarousel {
    width: 100vw !important;
    height: 100vw !important;
  }

  #projectsContainer {
    width: 100vw !important;
    justify-content: center !important;
  }

  #textContainer {
    width: 80vw !important;
  }

  .horizontalLine {
    width: 80vw !important;
  }

  .horizontalThinLine {
    width: 80vw !important;
  }
}

.canvas {
  width: 100vw;
  height: 100vh;
}

#projectsContainer {
  width: 50vw;
  height: 100%;
  padding-top: 20vh;
  margin-bottom: 50px;
  align-items: start !important;
}

@media screen and (orientation: portrait) {
  #projectsContainer {
    padding-top: 0%;
  }
}

#textContainer {
  width: 40vw;
}

.project:hover {
  background-color: #3e3e4c;
}

.titleText {
  font-size: 2rem
}

.technologyText {
  font-size: 1.2rem;
  color: #818098;
}

.projectTitleText {
  font-size: 1.25rem
}

.descriptionText {
  font-size: 1rem !important
}

.horizontalLine {
  width: 40vw;
  height: 2px;
  background-color: #E0FFFF;
}

.horizontalThinLine {
  width: 40vw;
  height: 1px;
  background-color: #5e5e5e;
}

.link {
  color: white
}

.link:hover {
  color: rgb(202, 151, 246);
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
