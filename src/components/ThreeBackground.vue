<template>
    <div id="background"></div>
</template>


<script>
import * as THREE from 'three';

export default {
  name: 'ThreeBackground',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  mounted () {
    this.initThree();
  },
  methods: {
    initThree() {////// il faut pas utiliser background mais le parent qui est "container" je pense mais pour y accéder jsp comment on fait
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

      this.renderer = new THREE.WebGLRenderer( { canvas: document.getElementById( "background" ), alpha: true, antialias: true } );
      this.renderer.setSize( window.innerWidth, window.innerHeight );

      let geometry = new THREE.BoxGeometry( 1, 1, 1 );
      let material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
      this.cube = new THREE.Mesh( geometry, material );
      this.scene.add( this.cube );

      this.camera.position.z = 5;
      this.animate()

    },

    animate() {

      this.cube.rotation.x += 0.01;
      this.renderer.render( this.scene, this.camera );
      requestAnimationFrame( this.animate() );

    }
  }
}
</script>


<style scoped>
  #background {
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 100;
  }
</style>