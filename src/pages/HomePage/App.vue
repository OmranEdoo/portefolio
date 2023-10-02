<template>
  <v-app>
    <div style="display: flex !important;">
      <canvas id="canvas"></canvas>
    </div>
    <div id="textContainer">
      <h1 id="blaze" class="d-flex justify-content-start">Omran Edoo</h1>
      <TypeWriter :array="descriptions" />
      <v-btn variant="plain" href="projects">
        <p class="text-overline">_projects</p>
      </v-btn>
      <v-btn variant="plain" href="about">
        <p class="text-overline">_about</p>
      </v-btn>
      <v-btn variant="plain" href="game">
        <p class="text-overline">_play</p>
      </v-btn>
    </div>
    <FooterBar id="footer" />
  </v-app>
</template>

<script>
import * as THREE from 'three';

import TypeWriter from '@/components/TypeWriter.vue'
import FooterBar from '@/components/FooterBar.vue'

export default {
  name: 'HomePage',
  components: {
    TypeWriter,
    FooterBar
  },
  data() {
    return {
      descriptions: ["Future ingénieur...", "Passionné de programmation...", "Joueur d'échecs (très) amateur..."],
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

body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  background: black;
  overflow: hidden;
}

#textContainer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  color: white;
}

@font-face {
  font-family: "title";
  src: url("@/fonts/limo.ttf");
}

#blaze {
  margin-bottom: 30px;
  text-transform: uppercase;
  font-family: title;
  font-size: calc(40px + 4vw);
  height: 6vw;
  width: max-content;
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

#canvas {
  width: 100vw;
  height: 100vh;
}
</style>
