<template>
    <div id="backgroundInfinity" class="horizontally center">
      <div id="description" class="center">
        <p id="descriptionText"></p>
        <button id="retour" @click="retourner"></button>
      </div>
      <div class="vertically center">
        <div class="space"></div>
        <canvas id="canvasInfinity"></canvas>
        <div class="space"></div>
      </div>
    </div>
</template>
  
  
<script>
  import * as THREE from 'three';
  import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
  import typeFaceFont from "three/examples/fonts/helvetiker_bold.typeface.json"
  import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
//////put a v-if on descriptiona la place de ce que jai fait la
  export default {
    name: 'ThreeInfinity',
    data() {
      return {
        langages: ["C++", "Python", "Web", "OCaml", "Java"],
        ringColors: ["blue", "purple", "red", "orange", "cyan"],
        descriptions: [
          "J'ai appris le <a href='https://fr.wikipedia.org/wiki/C%2B%2B'>C++</a> en dernière année d'école d'ingénieurs, j'ai pu l'utiliser dans des projets impliquant de la 3D notamment avec la spécification <a href='https://fr.wikipedia.org/wiki/OpenGL'>OpenGL</a> et les librairies <a href='https://fr.wikipedia.org/wiki/GDAL'>GDal/Ogr</a>.",
          "<a href='https://fr.wikipedia.org/wiki/Python_(langage)'>Python</a> est le premier langage de programmation que j'ai appris au lycée et c'est celui dont j'ai le plus pratiqué.",
          "<a href='https://fr.wikipedia.org/wiki/Hypertext_Markup_Language'>Html</a>, <a href='https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade'>Css</a>, <a href='https://fr.wikipedia.org/wiki/JavaScript'>Javascript</a> et <a href='https://fr.wikipedia.org/wiki/PHP'>Php</a> sont les langages de programmations Web. J'ai appris à les utiliser en école d'ingénieurs et j'ai tout de suite aimé cette programmation. J'utilise également le framework Vue.js pour mes projets ainsi que Three.js pour la 3D.",
          "<a href='https://fr.wikipedia.org/wiki/OCamlOCaml'>OCaml</a> est un langage utilisant la récursivité comme principe de base. Apprendre OCaml m'a permit de comprendre les notions de complexités de code. C'est le langage qui m'est le moins familier car je n'ai pas pratiqué depuis la prepa (CPGE).",
          "J'ai appris <a href='https://fr.wikipedia.org/wiki/Java_(langage)'>Java</a> en école d'ingénieurs et j'ai pu l'utiliser dans divers projet notamment en programmation mobile."
        ],
        angle: 0
      }
    },
    mounted () {
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
        const descriptions = this.descriptions;
        const longueurMorceau = 2*Math.PI/langages.length;

        const ringColors = this.ringColors;

        const ambientLight = new THREE.AmbientLight( 0xffffff, 0.4 );
        scene.add( ambientLight );

        const dirLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
        dirLight.position.set( 0, 0, 1000 );
        scene.add( dirLight );

        function displayDescription(i) {
          let div = document.getElementById("description");
          let canvas = document.getElementById("canvasInfinity");
          let spaces = document.getElementsByClassName("space");
          let retour = document.getElementById("retour");

          if (window.innerWidth < 800) {
            //div.style.gridTemplateColumns = "90%";
            div.style.width = "90vw";
            div.style.padding = "0 5vw 0 5vw";
            canvas.style.width = "0vw";
          } else {
            //div.style.gridTemplateColumns = "25%";
            div.style.width = "25vw";
            div.style.padding = "0 0 0 5vw";
            canvas.style.width = "70vw";          
          }

          retour.style.display = "block";

          let w = div.offsetWidth;
          let h = (window.innerHeight*w/window.innerWidth)/2;
          spaces[0].style.height = h+"px";
          spaces[1].style.height = h+"px";
          document.getElementById("descriptionText").innerHTML = descriptions[i];
        }
        
        var raycaster = new THREE.Raycaster();
        var mouse = new THREE.Vector2();

        function onDocumentMouseDown(event) {
          event.preventDefault();

          let w = document.getElementById("description").offsetWidth;
          let h = document.getElementsByClassName("space")[0].offsetHeight;
  
          mouse.x = ((event.clientX-w) / renderer.domElement.clientWidth) * 2 - 1;
          mouse.y =  - ((event.clientY-h) / renderer.domElement.clientHeight) * 2 + 1;
          raycaster.setFromCamera(mouse, camera);
          
          var intersectsRing;
          var intersectsText;

          for (let i = 0; i < rings.length; i++) {
            intersectsRing = raycaster.intersectObjects([rings[i]]);
            intersectsText = raycaster.intersectObjects([texts[i]]);

            if (intersectsRing.length + intersectsText.length != 0 ) {
              displayDescription(i);
            }
          }
        }

        document.addEventListener('mousedown', onDocumentMouseDown, false);

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

          if (window.innerWidth < 800) {
            text.position.set(-95, 30, 1100);
          } else {
            text.position.set(-95, 30, 900);
          }
          
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
    
          if (window.innerWidth < 800) {
            camera.position.z = 1500;
          } else {
            camera.position.z = 1000;
          }
      
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
            
            texts[i].position.set(300*Math.cos(angle+i*longueurMorceau), 40-120*Math.sin(angle+i*longueurMorceau), 300*Math.sin(angle+i*longueurMorceau)+500);
            texts[i].rotateOnAxis( axisSphere, 0.005 );
          }
          
          let w = document.getElementById("description").offsetWidth;

          renderer.render( scene, camera );
          renderer.setSize( window.innerWidth - w, window.innerHeight*(1-(w/window.innerWidth)));
          requestAnimationFrame( animate );
        }
      },
      retourner() {
        let div = document.getElementById("description");
        let text = document.getElementById("descriptionText");
        let canvas = document.getElementById("canvasInfinity");
        let retour = document.getElementById("retour");
        let spaces = document.getElementsByClassName("space");

        text.innerHTML = "";
        div.style.width = "0";
        div.style.padding = "0 0 0 0";
        canvas.style.width = "100%";
        retour.style.display = "none";
        spaces[0].style.height = "0";
        spaces[1].style.height = "0";
      }
    }
  }
  </script>
  
  
  <style>
    #backgroundInfinity {
      width: 100vw;
      height: auto;
      min-height: 350px;
      position: block;
      background-color: rgb(76, 127, 127);
    }
  
    #canvasInfinity {
      width: 100vw;
      height: auto;
      overflow-x: hidden;
      padding: 0;
      margin: 0;
      display: block;
      min-height: 350px;
      background-color: rgb(76, 127, 127);
    }

    #description {
      max-height: 100vh;
      height: auto;
      background-color:rgb(76, 127, 127);
      font-size: large;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
    }

    .center {
      display: flex;
      align-items: center;
    }

    .space {
      width: 100%;
    }

    #retour {
      grid-area: 2/1/2/1;
      width: 48px;
      height: 48px;
      background-color: rgb(76, 127, 127);
      background-image: url('./../assets/retour.png');
      z-index: 100;
      display: none;
      border-radius: 5px;
      border: 0ch;
    }

    #retour:hover {
      background-color: rgb(105, 105, 105);
    }

    #descriptionText {
      grid-area: 3/1/3/1;
    }
</style>