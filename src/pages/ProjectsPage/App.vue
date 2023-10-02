<template>
  <v-app>
    <div id="appContainer">
      <v-btn id="menu" icon="menu" variant="tonal" elevation="24" size="x-large" href="home" />
      <div class="container d-flex flex-column align-end overflow-y-auto v-navigation-drawer__content">
        <div class="pr-10 pl-10 pt-10">
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
      </div>
      <ProjectCarousel class="container"></ProjectCarousel>
    </div>
    <FooterBar id="footer" />
  </v-app>
</template>

<script>
import FooterBar from '@/components/FooterBar.vue'
import ProjectCarousel from '@/components/ProjectCarousel.vue'

export default {
  name: 'ProjectsPage',
  components: {
    FooterBar,
    ProjectCarousel
  },
  data() {
    return {
      index: 0,
      projects: [
        { index: 0, title: "TraiLove76200", description: ["Le projet TrailLove76200 vise à visualiser les trajectoires des participants à la course Oxfam Trailwalker 2021 et à fournir une analyse spatio- temporelle de ces trajectoires. Le contexte du projet est l’exploration des données collectées pendant la course pour identifier les difficultés rencontrées par les participants et fournir des analyses de performance détaillées.Le principal défi est de trouver un moyen efficace de visualiser ces données et d’offrir des outils d’analyse aux organisateurs de la course et aux chercheurs intéressés par les données collectées. Pour relever ce défi, le projet propose le développement d’une application web performante capable de représenter l’évolution de l’allure des participants en fonction de différents paramètres.", "L’application permet une visualisation 2D et 2D + 1 claires et précises des données, ainsi qu’une analyse spatio - temporelle des trajectoires.Elle permet une prise en main rapide par les utilisateurs grâce aux différents aides fournis."], url: "https://github.com/zumbalove974/oxfam-trailwalker" },
        { index: 1, title: "test2", description: ["Le projet TrailLove76200 vise à visualiser les trajectoires des participants à la course Oxfam Trailwalker 2021 et à fournir une analyse spatio- temporelle de ces trajectoires. Le contexte du projet est l’exploration des données collectées pendant la course pour identifier les difficultés rencontrées par les participants et fournir des analyses de performance détaillées.Le principal défi est de trouver un moyen efficace de visualiser ces données et d’offrir des outils d’analyse aux organisateurs de la course et aux chercheurs intéressés par les données collectées. Pour relever ce défi, le projet propose le développement d’une application web performante capable de représenter l’évolution de l’allure des participants en fonction de différents paramètres.", "L’application permet une visualisation 2D et 2D + 1 claires et précises des données, ainsi qu’une analyse spatio - temporelle des trajectoires.Elle permet une prise en main rapide par les utilisateurs grâce aux différents aides fournis."], url: "https://github.com/zumbalove974/oxfam-trailwalker" },
        { index: 2, title: "test3", description: ["Le projet TrailLove76200 vise à visualiser les trajectoires des participants à la course Oxfam Trailwalker 2021 et à fournir une analyse spatio- temporelle de ces trajectoires. Le contexte du projet est l’exploration des données collectées pendant la course pour identifier les difficultés rencontrées par les participants et fournir des analyses de performance détaillées.Le principal défi est de trouver un moyen efficace de visualiser ces données et d’offrir des outils d’analyse aux organisateurs de la course et aux chercheurs intéressés par les données collectées. Pour relever ce défi, le projet propose le développement d’une application web performante capable de représenter l’évolution de l’allure des participants en fonction de différents paramètres.", "L’application permet une visualisation 2D et 2D + 1 claires et précises des données, ainsi qu’une analyse spatio - temporelle des trajectoires.Elle permet une prise en main rapide par les utilisateurs grâce aux différents aides fournis."], url: "https://github.com/zumbalove974/oxfam-trailwalker" }
      ]
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
  overflow: hidden;
}

#menu {
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 10;
}

#appContainer {
  background-color: #000000;
  color: #e5e7eb;
  display: flex;
  width: 100vw;
  flex-direction: column;
}

.container {
  margin: 0;
  padding: 0;
  width: 100vw;
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

#footer {
  position: fixed;
  bottom: 0;
  width: 100vw;
  background: #E0FFFF;
  height: 3vh;
}
</style>
