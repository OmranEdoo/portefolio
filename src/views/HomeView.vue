<template>
    <div class="home">
      <div id="text">
        <h1>OMRAN EDOO</h1>
        <TypeWriter :array="descriptions"></TypeWriter>
      </div>
      <div id="canvas"></div>
    </div>
</template>


<script>
import Canvas3D from '../classes/Canvas3D.js'
import TypeWriter from '../components/TypeWriter.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      descriptions: ["Future ingénieur...", "Passionné de programmation...", "Joueur d'échec (très) amateur..."]
    }
  },
  components: {
    TypeWriter
  },
  mounted() {
    const canvas = new Canvas3D();

    const container = document.getElementById("canvas");
    canvas.renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(canvas.renderer.domElement);
  }
}
</script>


<style scoped>
#text {
  position: absolute;
  top: 100px;
  left: 100px;
  text-align: start;
}

#canvas {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  display: block;
  min-height: 350px;
  background-color: rgb(76, 127, 127);
}
</style>