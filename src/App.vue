<template>
  <v-app id="appContainer">
    <div class="spotlight"></div>
    <v-container class="overflow-hidden">
      <v-row>
        <v-col xxl="9" xl="9" lg="8" md="12" sm="12" xs="12">
          <div id="presContainer">
            <h1 id="blaze" class="d-flex justify-content-start">Omran Edoo</h1>
            <TypeWriter :array="descriptions" />
          </div>
          <v-row justify="space-around" no-gutters>
            <v-col class="d-flex align-center" xxl="5" xl="5" lg="5" md="5" sm="12" xs="12">
              <div id="descriptionContainer" class="d-flex align-end overflow-y-auto v-navigation-drawer__content">
                <div class="d-flex flex-row justify-space-between" style="width: 100%; height: min-content;">
                  <v-btn density="compact" icon="mdi-plus" @click="changeIndex(1)">
                    <span class="arrow material-icons">
                      chevron_left
                    </span>
                  </v-btn>
                  <a :href="projects[index].url" target="_blank" id="link">
                    <h3 id="title" class="pb-2">
                      {{ projects[index].title }}
                      <v-icon id="icon" icon="north_east" size="x-small" class="ml-1" />
                    </h3>
                  </a>
                  <v-btn density="compact" icon="mdi-plus" @click="changeIndex(-1)">
                    <span class="arrow material-icons">
                      chevron_right
                    </span>
                  </v-btn>
                </div>
                <p v-for="text in projects[index].description" :key="text" class="text-body-2 mb-2"
                  style="text-align: justify;">
                  {{ text }}
                </p>
              </div>
            </v-col>
            <v-col offset-xxl="1" offset-xl="1" offset-lg="1" offset-md="1" xxl="6" xl="6" lg="6" md="6" sm="12" xs="12">
              <div id="projectsContainer">
                <ProjectCarousel />
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col>
          <div id="rightContainer">
            <CursusTimeline />
          </div>
        </v-col>
      </v-row>
    </v-container>
    <FooterBar id="footer" />
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
      index: 0,
      projects: [
        { index: 0, title: "TraiLove76200", description: ["Le projet TrailLove76200 vise à visualiser les trajectoires des participants à la course Oxfam Trailwalker 2021 et à fournir une analyse spatio- temporelle de ces trajectoires. Le contexte du projet est l’exploration des données collectées pendant la course pour identifier les difficultés rencontrées par les participants et fournir des analyses de performance détaillées.Le principal défi est de trouver un moyen efficace de visualiser ces données et d’offrir des outils d’analyse aux organisateurs de la course et aux chercheurs intéressés par les données collectées. Pour relever ce défi, le projet propose le développement d’une application web performante capable de représenter l’évolution de l’allure des participants en fonction de différents paramètres.", "L’application permet une visualisation 2D et 2D + 1 claires et précises des données, ainsi qu’une analyse spatio - temporelle des trajectoires.Elle permet une prise en main rapide par les utilisateurs grâce aux différents aides fournis."], url: "https://github.com/zumbalove974/oxfam-trailwalker" },
        { index: 1, title: "test2", description: ["Le projet TrailLove76200 vise à visualiser les trajectoires des participants à la course Oxfam Trailwalker 2021 et à fournir une analyse spatio- temporelle de ces trajectoires. Le contexte du projet est l’exploration des données collectées pendant la course pour identifier les difficultés rencontrées par les participants et fournir des analyses de performance détaillées.Le principal défi est de trouver un moyen efficace de visualiser ces données et d’offrir des outils d’analyse aux organisateurs de la course et aux chercheurs intéressés par les données collectées. Pour relever ce défi, le projet propose le développement d’une application web performante capable de représenter l’évolution de l’allure des participants en fonction de différents paramètres.", "L’application permet une visualisation 2D et 2D + 1 claires et précises des données, ainsi qu’une analyse spatio - temporelle des trajectoires.Elle permet une prise en main rapide par les utilisateurs grâce aux différents aides fournis."], url: "https://github.com/zumbalove974/oxfam-trailwalker" },
        { index: 2, title: "test3", description: ["Le projet TrailLove76200 vise à visualiser les trajectoires des participants à la course Oxfam Trailwalker 2021 et à fournir une analyse spatio- temporelle de ces trajectoires. Le contexte du projet est l’exploration des données collectées pendant la course pour identifier les difficultés rencontrées par les participants et fournir des analyses de performance détaillées.Le principal défi est de trouver un moyen efficace de visualiser ces données et d’offrir des outils d’analyse aux organisateurs de la course et aux chercheurs intéressés par les données collectées. Pour relever ce défi, le projet propose le développement d’une application web performante capable de représenter l’évolution de l’allure des participants en fonction de différents paramètres.", "L’application permet une visualisation 2D et 2D + 1 claires et précises des données, ainsi qu’une analyse spatio - temporelle des trajectoires.Elle permet une prise en main rapide par les utilisateurs grâce aux différents aides fournis."], url: "https://github.com/zumbalove974/oxfam-trailwalker" }
      ]
    }
  },
  mounted() {
    window.addEventListener("DOMContentLoaded", () => {
      const spotlight = document.querySelector('.spotlight');
      //let spotlightSize = 'transparent 50px, rgba(0, 0, 0, 0.5) 200px)';

      //spotlight.style.backgroundImage = `radial-gradient(circle at ${window.innerWidth / 2}px ${window.innerHeight / 2}px, ${spotlightSize}`;
      window.addEventListener('mousemove', e => updateSpotlight(e));

      function updateSpotlight(e) {
        spotlight.style.left = `${e.pageX - 300}px`
        spotlight.style.top = `${e.pageY - 300}px`
        //spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;
      }
    });
  },
  methods: {
    changeIndex(number) {
      if (this.index + number >= 0 && this.index + number <= this.projects.length)
        this.index += number
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
  background-color: #0b2a39;
  color: #e5e7eb
}

#presContainer {
  justify-content: start;
  display: flex;
  flex-direction: column;
}

#rightContainer {
  background: rgba(19, 15, 42, 0.5);
  width: auto;
  border-radius: 5px;
  padding: 5%
}

@media only screen and (min-width: 1280px) {
  #rightContainer {
    height: 90vh;
  }
}

#projectsContainer {
  display: block;
}

#descriptionContainer {
  display: flex !important;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

@media only screen and (min-width: 1280px) {
  #descriptionContainer {
    height: 50vh;
  }
}

@font-face {
  font-family: "title";
  src: url("./fonts/limo.ttf");
}

#blaze {
  padding-bottom: 100px;
  text-transform: uppercase;
  font-family: title;
  font-size: calc(40px + 4vw);
  height: 6vw;
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

.spotlight {
  position: absolute;
  pointer-events: none;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  pointer-events: none;
  background-image: radial-gradient(circle, rgba(120, 199, 198, 0.1) 50px, transparent 300px);
}

@media only screen and (min-width: 960px) {
  .spotlight {
    height: 0;
  }
}

#title:hover {
  color: #80cbc4;
}

#title:hover #icon,
#icon:hover {
  color: #80cbc4;
  bottom: 4px;
  left: 4px;
}

#link {
  text-decoration: none;
  color: #e5e7eb;
}

#footer {
  position: fixed;
  bottom: 0;
  width: 100vw;
  background: #E0FFFF;
  height: 3vh;
}

.arrow {
  color: #0b2a39
}

.arrow:hover {
  color: #80cbc4
}
</style>
