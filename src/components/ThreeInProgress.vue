<template>
    <div id="backgroundInProgress" class="vertically center">
        <canvas id="canvasInProgress"></canvas>
    </div>
</template>
  
  
<script>
    import * as THREE from 'three';

    export default {
        name: 'ThreeInProgress',
        data() {
            return {
                
            }
        },
        mounted () {
            console.log("0");
            this.initThree();
        },
        methods: {
        initThree() {
            var scene = new THREE.Scene();
            scene.background = new THREE.Color(0, 0, 0);
            var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

            var can = document.getElementById( "canvasInProgress" );
            var renderer = new THREE.WebGLRenderer({ canvas: can, alpha: true, antialias: true });
            renderer.setSize( window.innerWidth, window.innerHeight );
            
            const sphereGeometry = new THREE.SphereGeometry(125, 25, 25);
            const sphereMaterial = new THREE.MeshBasicMaterial( { color: 0xccccc, wireframe: true } );
            
            var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
            sphere.position.set(0, 20, 500);
            sphere.rotation.x = Math.PI/8;
            sphere.rotation.z = Math.PI/8;
            scene.add( sphere );

            const ringGeometry = new THREE.RingGeometry( 140, 160, 50, 10 );
            const ringMaterial = new THREE.MeshBasicMaterial( { color: 0xccccc, wireframe: true, side: THREE.DoubleSide } );
            
            var ring = new THREE.Mesh( ringGeometry, ringMaterial );
            ring.position.set(0, 20, 500);
            ring.rotation.x = 9*Math.PI/16;
            ring.rotation.y = Math.PI/8;
            scene.add( ring );

            camera.position.z = 1000;
            
            window.addEventListener( 'resize', function() {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize( window.innerWidth, window.innerHeight )
            })

            const axisSphere = new THREE.Vector3(0, 1, 0);
            const axisRing = new THREE.Vector3(0, 0, 1);

            function animate() {            
                sphere.rotateOnAxis( axisSphere, 0.005 );
                ring.rotateOnAxis( axisRing, -0.005 );
                renderer.render( scene, camera );
                renderer.setSize( window.innerWidth, window.innerHeight );
                requestAnimationFrame( animate );
            }

            animate();
        }
    }
}
  </script>
  
  
  <style>
    #backgroundInProgress {
      width: 100vw;
      height: auto;
      min-height: 350px;
      position: block;
      background-color: rgb(0, 0, 0);
    }
  
    #canvasInProgress {
      width: 500px;
      height: auto;
      overflow-x: hidden;
      padding: 0;
      margin: 0;
      display: block;
      min-height: 350px;
      background-color: rgb(0, 0, 0);
    }

    .center {
      display: flex;
      align-items: center;
    }
</style>