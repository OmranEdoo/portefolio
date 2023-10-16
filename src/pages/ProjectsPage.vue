<template>
  <v-app>
    <LanguageBtn />
    <StarsBackground class="canvas" />
    <div id="appContainer">
      <MenuButton />
      <div id="projectsContainer"
        class="d-flex flex-row align-start justify-end overflow-y-auto v-navigation-drawer__content">
        <div id="padContainer" class="pb-10 pl-10 pt-10">
          <div id="textContainer" class="d-flex flex-column align-end">
            <b v-translate class="titleText align-self-start pb-2">Projects</b>
            <div class="horizontalLine" />
            <a v-for="project in projects" :key="project.index" class="project d-flex flex-column"
              @click="updateDescription(project.index)">
              <div class="d-flex flex-row justify-space-between align-center">
                <p class="technologyText ml-1">{{ project.technology }}</p>
                <h3 class="projectTitleText d-flex justify-end pt-4 pb-4">
                  {{ project.title }}
                  <a :href="project.url" target="_blank" class="d-flex align-center pl-2 link">
                    <v-icon icon="mdi-arrow-top-right" size="x-small" class="ml-1" />
                  </a>
                </h3>
              </div>
              <div v-if="index == project.index && seeDescription" class="pl-8 pr-8">
                <p v-for="text in displayDescriptions" :key="text" class="descriptionText mb-2"
                  style="text-align: justify;">
                  {{ text }}
                </p>
              </div>
              <div class="horizontalThinLine" />
            </a>
          </div>
        </div>
      </div>
      <ProjectCube id="canvasCarousel"></ProjectCube>
    </div>
    <FooterBar />
  </v-app>
</template>

<script>
import FooterBar from '@/components/FooterBar.vue'
import ProjectCube from '@/components/ProjectCube.vue'
import StarsBackground from '@/components/StarsBackground.vue'
import MenuButton from '@/components/MenuButton.vue'
import { mapMutations } from "vuex"
import LanguageBtn from '@/components/LanguageBtn.vue'


export default {
  name: 'ProjectsPage',
  components: {
    FooterBar,
    ProjectCube,
    StarsBackground,
    MenuButton,
    LanguageBtn
  },
  data() {
    return {
      index: 0,
      seeDescription: false,
      projects: [
        {
          index: 0,
          title: "Portefolio",
          technology: "WEB",
          url: "https://omranedoo.vercel.app",
          video: "./video/portefolio.mp4"
        },
        {
          index: 1,
          title: "TraiLove76200",
          technology: "WEB",
          url: "https://github.com/zumbalove974/oxfam-trailwalker",
          video: "./video/trail.mp4"
        },
        {
          index: 2,
          title: "RuGIS",
          technology: "C++",
          url: "https://gitlab.com/Jackgeo/MiniGIS",
          video: "./video/RuGIS.mp4"
        },
      ]
    }
  },
  mounted() {
    this.UPDATE_PAGE("projects")
  },
  computed: {
    displayDescriptions() {
      if (this.index == 0) {
        return [
          this.$gettext(
            "This Website is a brief presentation of wy work. It was made with the frameworks Vue3 and Vuex."
          ),
          this.$gettext(
            "I learned 3D programmation in engineering school with OpenGL and WebGL. " +
            "For the project, i've used the library ThreeJs."
          )
        ]
      } else if (this.index == 1) {
        return [
          this.$gettext(
            "The TrailLove76200 project aims to visualise the trajectories of " +
            "participants in the Oxfam Trailwalker 2021 race and to provide a " +
            "spatio-temporal analysis of these trajectories."
          ),
          this.$gettext(
            "The main challenge is to " +
            "find an effective way of visualising this data and providing analysis " +
            "tools for race organisers and researchers interested in the data " +
            "collected. To meet this challenge, the project proposes the development " +
            "of a high-performance web application capable of representing the " +
            "evolution of participant's pace as a function of different parameters."
          ),
          this.$gettext(
            "The application provides clear, accurate 2D and 2D + 1 visualisation of " +
            "data, as well as spatio-temporal analysis of trajectories. It is easy " +
            "for users to learn, thanks to the various aids provided."
          )
        ]
      } else if (this.index == 2) {
        return [
          this.$gettext(
            "This project was a school project made with the 17 ENSG students. It " +
            "consists of developing a 2D/3D GIS using C++, Qt and OpenGL. "
          ),
          this.$gettext(
            "MiniGIS is a GIS Desktop application capable of displaying, manipulating, " +
            "and analyzing the various forms of spatial data. MiniGIS supports Vector " +
            "and Raster data format. The data represented in the application will come " +
            "from web feeds, existing databases, or files from local or remote " +
            "repositories."
          ),
          this.$gettext(
            "For this project, we experiment the AGILE ans SCRUM methodologie. We were " +
            "divided in two teams : the backend and the frontend. I was part of the " +
            "backend teams, I've work with a lot of subjects including 3D data import " +
            "and processing."
          )
        ]
      }
      return ''
    }
  },
  methods: {
    ...mapMutations(["UPDATE_PAGE"]),
    ...mapMutations('projectsCubeStore', ["SET_VIDEO", "ROTATE"]),
    updateDescription(index) {
      this.ROTATE()
      let videoPath
      this.projects.forEach(project => {
        if (project.index == index) {
          videoPath = project.video
        }
      })

      this.SET_VIDEO(videoPath)
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
  min-height: 100%;
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
  height: 100%;
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
  font-size: 1rem !important;
  font-family: LGC
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
  color: white;
  text-decoration: unset;
  cursor: none;
}

.link:hover {
  color: #fb00ff;
  transform: translate(2px, -2px);
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
