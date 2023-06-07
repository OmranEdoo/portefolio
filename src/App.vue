<template>
  <v-app id="appContainer">
    <div class="spotlight"></div>
    <div class="fullPad">
      <div id="presContainer">
        <h1 id="blaze" class="d-flex justify-content-start">Omran Edoo</h1>
        <TypeWriter :array="descriptions" />
      </div>
      <div id="projectsContainer">
        <ProjectCarousel />
      </div>
      <div id="descriptionContainer" class="overflow-y-auto v-navigation-drawer__content">
        <div class="d-flex flex-row justify-space-between">
          <v-btn density="compact" icon="mdi-plus" @click="changeIndex(1)">{{ projects[index].before }}</v-btn>
          <a :href="projects[index].url" target="_blank" id="link">
            <h3 id="title" class="pb-4">
              {{ projects[index].title }}
              <v-icon id="icon" icon="north_east" size="x-small" class="ml-1" />
            </h3>
          </a>
          <v-btn density="compact" icon="mdi-plus" @click="changeIndex(-1)">{{ projects[index].after }}</v-btn>
        </div>
        <p v-for="text in projects[index].description" :key="text" class="text-body-2 mb-4" style="text-align: justify">
          {{ text }}
        </p>
      </div>
      <div id="rightContainer">
        <div id="cursusContainer">
          <CursusTimeline />
        </div>
      </div>
      <FooterBar id="footer" />
    </div>
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
        { index: 0, title: "TraiLove76200", description: ["Le projet TrailLove76200 vise à visualiser les trajectoires des participants à la course Oxfam Trailwalker 2021 et à fournir une analyse spatio- temporelle de ces trajectoires. Le contexte du projet est l’exploration des données collectées pendant la course pour identifier les difficultés rencontrées par les participants et fournir des analyses de performance détaillées.Le principal défi est de trouver un moyen efficace de visualiser ces données et d’offrir des outils d’analyse aux organisateurs de la course et aux chercheurs intéressés par les données collectées. Pour relever ce défi, le projet propose le développement d’une application web performante capable de représenter l’évolution de l’allure des participants en fonction de différents paramètres.", "L’application permet une visualisation 2D et 2D + 1 claires et précises des données, ainsi qu’une analyse spatio - temporelle des trajectoires.Elle permet une prise en main rapide par les utilisateurs grâce aux différents aides fournis."], url: "https://github.com/zumbalove974/oxfam-trailwalker", before: 2, after: 1 },
        { index: 1, title: "test2", description: ["Le projet TrailLove76200 vise à visualiser les trajectoires des participants à la course Oxfam Trailwalker 2021 et à fournir une analyse spatio- temporelle de ces trajectoires. Le contexte du projet est l’exploration des données collectées pendant la course pour identifier les difficultés rencontrées par les participants et fournir des analyses de performance détaillées.Le principal défi est de trouver un moyen efficace de visualiser ces données et d’offrir des outils d’analyse aux organisateurs de la course et aux chercheurs intéressés par les données collectées. Pour relever ce défi, le projet propose le développement d’une application web performante capable de représenter l’évolution de l’allure des participants en fonction de différents paramètres.", "L’application permet une visualisation 2D et 2D + 1 claires et précises des données, ainsi qu’une analyse spatio - temporelle des trajectoires.Elle permet une prise en main rapide par les utilisateurs grâce aux différents aides fournis."], url: "https://github.com/zumbalove974/oxfam-trailwalker", before: 0, after: 2 },
        { index: 2, title: "test3", description: ["Le projet TrailLove76200 vise à visualiser les trajectoires des participants à la course Oxfam Trailwalker 2021 et à fournir une analyse spatio- temporelle de ces trajectoires. Le contexte du projet est l’exploration des données collectées pendant la course pour identifier les difficultés rencontrées par les participants et fournir des analyses de performance détaillées.Le principal défi est de trouver un moyen efficace de visualiser ces données et d’offrir des outils d’analyse aux organisateurs de la course et aux chercheurs intéressés par les données collectées. Pour relever ce défi, le projet propose le développement d’une application web performante capable de représenter l’évolution de l’allure des participants en fonction de différents paramètres.", "L’application permet une visualisation 2D et 2D + 1 claires et précises des données, ainsi qu’une analyse spatio - temporelle des trajectoires.Elle permet une prise en main rapide par les utilisateurs grâce aux différents aides fournis."], url: "https://github.com/zumbalove974/oxfam-trailwalker", before: 1, after: 0 }
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
        spotlight.style.left = `${e.pageX - 400}px`
        spotlight.style.top = `${e.pageY - 400}px`
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
}

#appContainer {
  background-color: #0b2a39;
  /* #0b2a39;*/
  color: #e5e7eb
    /*#b8d8ba;*/
}

.fullPad {
  display: grid;
  grid-template: 6vh 16vh 68vh 6vh 4vh / 3vw 29vw 27vw 26vw 3vw;
  column-gap: 3vw;
}

#presContainer {
  grid-area: 2/2/2/3;
  justify-content: start;
  display: flex;
  flex-direction: column;
}

#presContainer * {
  width: 59vw;
}

#cursusContainer {
  grid-area: 2/4/3/4;
  height: 82vh;
  width: 22vw;
}

#rightContainer {
  background: rgba(19, 15, 42, 0.5);
  /*rgb(52, 59, 59);*/
  grid-area: 2/4/3/4;
  height: 84vh;
  width: 26vw;
  border-radius: 5px;
  padding-left: 2vw;
  padding-right: 2vw;
}

#projectsContainer {
  grid-area: 3/3/3/3;
  display: block;
}

#descriptionContainer {
  grid-area: 3/2/3/2;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@font-face {
  font-family: "title";
  src: url("./fonts/limo.ttf");
}

#blaze {
  text-transform: uppercase;
  font-family: title;
  font-size: 80px;
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
  width: 800px;
  height: 800px;
  border-radius: 50%;
  pointer-events: none;
  background-image: radial-gradient(circle, rgba(120, 199, 198, 0.1) 50px, transparent 400px);
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
  grid-area: 5/1/5/3;
  width: 100vw;
  background: #E0FFFF;
}
</style>
