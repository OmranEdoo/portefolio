<template>
  <v-app>
    <div style="display: flex !important;">
      <canvas id="canvas"></canvas>
    </div>
    <div id="appContainer">
      <a href="home">
        <div id="menu" class="d-flex flex-column justify-center align-center">
          <div class="menuBar" />
          <div class="menuBar" />
          <div class="menuBar" />
          <div class="menuBar" />
        </div>
      </a>
      <div id="projectsContainer"
        class="d-flex flex-row align-start justify-end overflow-y-auto v-navigation-drawer__content">
        <div id="padContainer" class="pb-10 pl-10 pt-10">
          <div id="textContainer" class="d-flex flex-column align-end">
            <b class="titleText align-self-start pb-2">Projects</b>
            <div class="horizontalLine" />
            <a v-for="project in projects" :key="project.index" class="project d-flex flex-column"
              @click="updateDescription(project.index)">
              <div class="d-flex flex-row justify-space-between align-center">
                <p class="projectTitleText">{{ project.technology }}</p>
                <h3 class="projectTitleText d-flex justify-end pt-4 pb-4">
                  {{ project.title }}
                  <a :href="project.url" target="_blank" class="pl-4 link">
                    <v-icon id="icon" icon="north_east" size="x-small" class="ml-1" />
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
    <FooterBar id="footer" />
  </v-app>
</template>

<script>
import * as THREE from 'three';

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
      seeDescription: false,
      projects: [
        { index: 0, title: "TraiLove76200", technology: "WEB", description: ["Le projet TrailLove76200 vise à visualiser les trajectoires des participants à la course Oxfam Trailwalker 2021 et à fournir une analyse spatio- temporelle de ces trajectoires. Le contexte du projet est l’exploration des données collectées pendant la course pour identifier les difficultés rencontrées par les participants et fournir des analyses de performance détaillées.Le principal défi est de trouver un moyen efficace de visualiser ces données et d’offrir des outils d’analyse aux organisateurs de la course et aux chercheurs intéressés par les données collectées. Pour relever ce défi, le projet propose le développement d’une application web performante capable de représenter l’évolution de l’allure des participants en fonction de différents paramètres.", "L’application permet une visualisation 2D et 2D + 1 claires et précises des données, ainsi qu’une analyse spatio - temporelle des trajectoires.Elle permet une prise en main rapide par les utilisateurs grâce aux différents aides fournis."], url: "https://github.com/zumbalove974/oxfam-trailwalker" },
        { index: 1, title: "test2", technology: "Java", description: ["Le projet TrailLove76200 vise à visualiser les trajectoires des participants à la course Oxfam Trailwalker 2021 et à fournir une analyse spatio- temporelle de ces trajectoires. Le contexte du projet est l’exploration des données collectées pendant la course pour identifier les difficultés rencontrées par les participants et fournir des analyses de performance détaillées.Le principal défi est de trouver un moyen efficace de visualiser ces données et d’offrir des outils d’analyse aux organisateurs de la course et aux chercheurs intéressés par les données collectées. Pour relever ce défi, le projet propose le développement d’une application web performante capable de représenter l’évolution de l’allure des participants en fonction de différents paramètres.", "L’application permet une visualisation 2D et 2D + 1 claires et précises des données, ainsi qu’une analyse spatio - temporelle des trajectoires.Elle permet une prise en main rapide par les utilisateurs grâce aux différents aides fournis."], url: "https://github.com/zumbalove974/oxfam-trailwalker" },
        { index: 2, title: "test3", technology: "C++", description: ["Le projet TrailLove76200 vise à visualiser les trajectoires des participants à la course Oxfam Trailwalker 2021 et à fournir une analyse spatio- temporelle de ces trajectoires. Le contexte du projet est l’exploration des données collectées pendant la course pour identifier les difficultés rencontrées par les participants et fournir des analyses de performance détaillées.Le principal défi est de trouver un moyen efficace de visualiser ces données et d’offrir des outils d’analyse aux organisateurs de la course et aux chercheurs intéressés par les données collectées. Pour relever ce défi, le projet propose le développement d’une application web performante capable de représenter l’évolution de l’allure des participants en fonction de différents paramètres.", "L’application permet une visualisation 2D et 2D + 1 claires et précises des données, ainsi qu’une analyse spatio - temporelle des trajectoires.Elle permet une prise en main rapide par les utilisateurs grâce aux différents aides fournis."], url: "https://github.com/zumbalove974/oxfam-trailwalker" }
      ]
    }
  },
  mounted() {
    this.initThree();
  },
  methods: {
    initThree() {
      //create scene object
      const scene = new THREE.Scene();
      scene.background = new THREE.Color('#000000');

      //setup camera with facing upward
      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 600);
      camera.position.y = 0;
      camera.rotation.x = Math.PI / 2;

      const can = document.getElementById("canvas");

      //setup renderer
      const renderer = new THREE.WebGLRenderer({ canvas: can, antialiasing: true });
      renderer.setSize(window.innerWidth, window.innerHeight);

      const light = new THREE.DirectionalLight(0xffffff, 1);
      // Where we want to place our light relative to the center of the scene. z value of 1 moves it towards us. Has big effect on shading
      light.position.set(0, 1, 1);
      scene.add(light);

      const backLight = new THREE.DirectionalLight(0xffffff, 1);
      backLight.position.set(0, 0, -1);
      scene.add(backLight);

      const starGeometry = new THREE.BufferGeometry()

      const sprite = new THREE.TextureLoader().load('img/flash.png');
      const starMaterial = new THREE.PointsMaterial({
        map: sprite
      });

      const starVerticies = []
      for (let i = 0; i < 3000; i++) {
        const x = Math.random() * 600 - 300
        const y = Math.random() * 600 - 300
        const z = Math.random() * 600 - 300
        starVerticies.push(x, y, z)
      }

      starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVerticies, 3))

      const stars = new THREE.Points(starGeometry, starMaterial)
      scene.add(stars)

      const stars2 = stars.clone()
      stars2.position.y = 600
      scene.add(stars2)

      window.addEventListener('resize', function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight)
      })

      animate();

      //rendering loop
      function animate() {
        renderer.render(scene, camera);
        requestAnimationFrame(animate);

        stars.position.y -= 0.1
        stars2.position.y -= 0.1
        if (stars.position.y < -300) {
          stars.position.y = 900
        } else if (stars2.position.y < -300) {
          stars2.position.y = 900
        }
      }
    },
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
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: rgba(80, 80, 80, 0.5);
  position: fixed;
  top: 50px;
  right: 50px;
  z-index: 10;
  transition: transform .2s ease-in-out;
}

#menu:hover {
  transform: rotate(90deg);
  background-color: rgba(149, 152, 180, 0.5);
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

#canvas {
  width: 100vw;
  height: 100vh;
}

#projectsContainer {
  width: 50vw;
  height: 50vw;
}

#textContainer {
  width: 40vw;
}

.project:hover {
  background-color: #818098;
}

.titleText {
  font-size: 2rem
}

.projectTitleText {
  font-size: 1.25rem
}

.descriptionText {
  font-size: 1.25rem !important
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
  color: cyan;
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

.menuBar {
  margin-bottom: 3px;
  margin-top: 3px;
  width: 30px;
  height: 2px;
  background-color: #E0FFFF;
}

#footer {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 3vh;
}
</style>
