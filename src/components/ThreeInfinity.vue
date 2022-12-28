<template>
    <div id="backgroundInfinity">
      <canvas id="canvasInfinity"></canvas>
    </div>
</template>
  
  
<script>
  import * as THREE from 'three';
  import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
  import typeFaceFont from "three/examples/fonts/helvetiker_bold.typeface.json"
  import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

  export default {
    name: 'ThreeInfinity',
    data() {
      return {
        langages: ["C++", "Python", "Web", "OCaml", "Java"],
        ringColors: ["blue", "purple", "red", "orange", "cyan"],
        angle: 0
      }
    },
    mounted () {
        console.log("0");
        console.log(typeFaceFont);
        this.initThree();
    },
    methods: {
      initThree() {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0.3, 0.5, 0.5);
        
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        var can = document.getElementById( "canvasInfinity" );

        var renderer = new THREE.WebGLRenderer({ canvas: can, alpha: true, antialias: true });
        renderer.setSize( window.innerWidth, window.innerHeight );

        const sphereGeometry = new THREE.SphereGeometry(250, 50, 50);
        const sphereMaterial = new THREE.MeshBasicMaterial( { color: 0xccccc, wireframe: true } );
        const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
        sphere.position.set(0, 20, 500);
        sphere.rotation.x = Math.PI/8;
        scene.add( sphere );

        const axisSphere = new THREE.Vector3(0, 1, 0);
        const axisRing = new THREE.Vector3(0, 0, 1);

        var rings = [];
        var texts = [];
        var angle = this.angle;

        const langages = this.langages;
        const longueurMorceau = 2*Math.PI/langages.length;

        const ringColors = this.ringColors;

        const ambientLight = new THREE.AmbientLight( 0xffffff, 0.4 );
        scene.add( ambientLight );

        const dirLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
        dirLight.position.set( 0, 0, 1000 );
        scene.add( dirLight );

        const fontLoader = new FontLoader();
        fontLoader.load('/fonts/helvetiker_bold.typeface.json',
        function (font) {      
          let textGeometry = new TextGeometry( "Langages de programmation", {
            font: font,
            size: 10,
            height: 2,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 1,
            bevelSize: 0.5,
            bevelOffset: 0,
            bevelSegments: 15
          });

          let textMaterial = new THREE.MeshNormalMaterial();
          let text = new THREE.Mesh( textGeometry, textMaterial );
          text.position.set(-95, 30, 900);
          scene.add( text );
          for (let i = 0; i < langages.length; i ++) {
            let ringGeometry = new THREE.RingGeometry( 280, 320, 50, 10, i*longueurMorceau, longueurMorceau );
            let ringMaterial = new THREE.MeshBasicMaterial( { color: ringColors[i], wireframe: true, side: THREE.DoubleSide } );
            let ring = new THREE.Mesh( ringGeometry, ringMaterial );
            ring.position.set(0, 20, 500);
            ring.rotation.x = 5*Math.PI/8;
            rings.push(ring);

            scene.add( ring );

            let textGeometry = new TextGeometry( langages[i], {
              font: font,
              size: 20,
              height: 5,
              curveSegments: 12,
              bevelEnabled: true,
              bevelThickness: 2,
              bevelSize: 2,
              bevelOffset: 0,
              bevelSegments: 5
            });

            let textMaterial = new THREE.MeshPhongMaterial( { color: ringColors[i], flatShading: true, } );
            let text = new THREE.Mesh( textGeometry, textMaterial );
            text.position.set(300*Math.cos(angle+i*1.2), 25-100*Math.sin(angle+i*longueurMorceau), 300*Math.sin(angle+i*1.2)+500);
            text.rotation.set(0, 1, 0);
            text.rotateOnAxis( axisSphere, -i*longueurMorceau );
            texts.push(text);
            scene.add( text );
          }
    
          camera.position.z = 1000;
      
          window.addEventListener( 'resize', function() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight )
          })

          animate();
        })

        function animate() {            
          sphere.rotateOnAxis( axisSphere, 0.005 );
          for (let i = 0; i < rings.length; i++) {
            rings[i].rotateOnAxis( axisRing, -0.005 );
            angle = rings[i].rotation.z+0.7;
            //angle = angle%(2*Math.PI);
            texts[i].position.set(300*Math.cos(angle+i*longueurMorceau), 40-120*Math.sin(angle+i*longueurMorceau), 300*Math.sin(angle+i*longueurMorceau)+500);
            texts[i].rotateOnAxis( axisSphere, 0.005 );
          }
          
          renderer.render( scene, camera );
          renderer.setSize( window.innerWidth, window.innerHeight );
          requestAnimationFrame( animate );
        }
        
        var raycaster = new THREE.Raycaster();
        var mouse = new THREE.Vector2();

        function onDocumentMouseDown(event) {
          event.preventDefault();
  
          mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
          mouse.y =  - (event.clientY / renderer.domElement.clientHeight) * 2 + 1;
  
          raycaster.setFromCamera(mouse, camera);
          ////////loop on rings to identify index that is clicked 
          var intersects = raycaster.intersectObjects(rings);
  
          if (intersects.length != 0) {
            console.log(intersects[0]);  
            //intersects[0].object.callback();
          }
    
        }

        document.addEventListener('mousedown', onDocumentMouseDown, false);
      }
    }
  }
  </script>
  
  
  <style scoped>
    #backgroundInfinity {
      width: 100vw;
      height: auto;
      min-height: 350px;
      position: block;
      background-color: rgb(83, 122, 124);
    }
  
    #canvasInfinity {
      width: 100vw;
      height: auto;
      overflow-x: hidden;
      padding: 0;
      margin: 0;
      display: block;
      min-height: 350px;
      background-color: rgb(83, 122, 124);
    }
  </style>