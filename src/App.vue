<template>
  <v-app id="appContainer">
    <div class="spotlight"></div>
    <div class="fullPad">
      <div id="presContainer">
        <h1 id="blaze">Omran Edoo</h1>
        <TypeWriter :array="descriptions" />
      </div>
      <div id="projectsContainer">
        <ProjectCarousel />
      </div>
      <div id="descriptionContainer" class="overflow-y-auto v-navigation-drawer__content">
        <h3 class="pb-4">{{ title }}</h3>
        <p v-for="text in projectText" :key="text" class="text-body-2" style="text-align: justify">
          {{ text }}
        </p>
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
      title: "TraiLove76200",
      projectText: ["Le projet TrailLove76200 vise à visualiser les trajectoires des participants à la course Oxfam Trailwalker 2021 et à fournir une analyse spatio- temporelle de ces trajectoires. Le contexte du projet est l’exploration des données collectées pendant la course pour identifier les difficultés rencontrées par les participants et fournir des analyses de performance détaillées.Le principal défi est de trouver un moyen efficace de visualiser ces données et d’offrir des outils d’analyse aux organisateurs de la course et aux chercheurs intéressés par les données collectées. Pour relever ce défi, le projet propose le développement d’une application web performante capable de représenter l’évolution de l’allure des participants en fonction de différents paramètres.", "L’application permet une visualisation 2D et 2D + 1 claires et précises des données, ainsi qu’une analyse spatio - temporelle des trajectoires.Elle permet une prise en main rapide par les utilisateurs grâce aux différents aides fournis."]
    }
  },
  mounted() {
    window.addEventListener("DOMContentLoaded", () => {
      const spotlight = document.querySelector('.spotlight');
      //let spotlightSize = 'transparent 50px, rgba(0, 0, 0, 0.5) 200px)';

      //spotlight.style.backgroundImage = `radial-gradient(circle at ${window.innerWidth / 2}px ${window.innerHeight / 2}px, ${spotlightSize}`;
      window.addEventListener('mousemove', e => updateSpotlight(e));

      function updateSpotlight(e) {
        console.log(e.pageX)
        spotlight.style.left = `${e.pageX - 250}px`
        spotlight.style.top = `${e.pageY - 250}px`
        //spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;
      }
    });
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
  background-color: #191918;
  height: 100vh;
}

#appContainer {
  background-color: #191918;
  color: #f2f2f2;
}

.fullPad {
  padding: 10vh 6vw 10vh 6vw;
  display: grid;
  grid-template: minmax(200px, 18vh) 58vh / 29vw 27vw 26vw;
  row-gap: 4vh;
  column-gap: 3vw;
}

#presContainer {
  grid-area: 1/1/1/2;
  justify-content: start;
  display: flex;
  flex-direction: column;
}

#presContainer * {
  width: fit-content;
}

#cursusContainer {
  grid-area: 1/3/2/3;
  height: 80vh;
}

#projectsContainer {
  grid-area: 2/1/2/1;
  display: block;
}

#descriptionContainer {
  grid-area: 2/2/2/2;
}

@font-face {
  font-family: "title";
  src: url("./fonts/MontserratBlack.ttf");
}

#blaze {
  text-transform: uppercase;
  font-family: title;
  font-size: 50px;
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
  width: 500px;
  height: 500px;
  border-radius: 50%;
  pointer-events: none;
  background-image: radial-gradient(circle, rgba(120, 120, 120, 0.5) 50px, transparent 200px);
}
</style>
