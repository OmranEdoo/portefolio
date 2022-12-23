<template>
  <div id="background">
    <canvas id="canvas"></canvas>
  </div>
</template>


<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default {
  name: 'ThreeBackground',
  data() {
    return {
    }
  },
  mounted () {
    this.initThree();
  },
  methods: {
    initThree() {////// il faut pas utiliser background mais le parent qui est "container" je pense mais pour y accéder jsp comment on fait
      var scene = new THREE.Scene();
      scene.background = new THREE.Color(0, 0, 0);
      var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

      var can = document.getElementById( "canvas" );

      var renderer = new THREE.WebGLRenderer({ canvas: can, alpha: true, antialias: true });
      renderer.setSize( window.innerWidth, window.innerHeight );

      var cubeGeometry = new THREE.BoxGeometry(70, 70, 70, 1, 1, 1);
      var cubeMaterial = new THREE.MeshBasicMaterial( { color: 0xccccc, wireframe: true } );
      var cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
      cube.position.set(-500, 20, -100);
      //scene.add( cube );

      var geo = new THREE.BoxGeometry(4000, 1, 4000, 100, 1, 100);

      var mesh = new THREE.Mesh(geo, cubeMaterial);
      mesh.position.y -= 200;
      scene.add(mesh);

      camera.position.z = 1000;

      var mountainMesh1;
      var mountainMesh2;
      var mountainMesh3;
      var mountainMesh4;
      var mountainMesh5;
      var mountainMesh6;

      var mountainMesh1Black;
      var mountainMesh2Black;
      var mountainMesh3Black;
      var mountainMesh4Black;
      var mountainMesh5Black;
      var mountainMesh6Black;

      var jsonLoader = new GLTFLoader();
      jsonLoader.load('./mountain2.glb', function(gltf){
        mountainMesh1 = gltf.scene;

        console.log(gltf);

        mountainMesh1.children[0].children[0].material = new THREE.MeshBasicMaterial( { color: 0x000000, wireframe : false  }  );

        mountainMesh1.scale.set(200, 200, 200);

        mountainMesh2 = mountainMesh1.clone();
        mountainMesh4 = mountainMesh1.clone();
        mountainMesh5 = mountainMesh1.clone();

        mountainMesh1.rotation.y = Math.PI/8;
        mountainMesh4.rotation.y = Math.PI/2;
        mountainMesh5.rotation.y = Math.PI;

        mountainMesh3 = mountainMesh1.clone();
        mountainMesh6 = mountainMesh4.clone();

        mountainMesh1.position.set(500, -200, 500);
        mountainMesh2.position.set(-500, -200, -100);
        mountainMesh3.position.set(500, -200, -500);
        mountainMesh4.position.set(-1000, -200, 300);
        mountainMesh5.position.set(1000, -200, -300);
        mountainMesh6.position.set(-1000, -200, -700);

        mountainMesh1Black = mountainMesh1.clone();
        mountainMesh2Black = mountainMesh2.clone();
        mountainMesh3Black = mountainMesh3.clone();
        mountainMesh4Black = mountainMesh4.clone();
        mountainMesh5Black = mountainMesh5.clone();
        mountainMesh6Black = mountainMesh6.clone();

        mountainMesh1Black.children[0].children[0].material = new THREE.MeshBasicMaterial( { color: 0xccccc, wireframe : true  }  );
        mountainMesh2Black.children[0].children[0].material = new THREE.MeshBasicMaterial( { color: 0xccccc, wireframe : true  }  );
        mountainMesh3Black.children[0].children[0].material = new THREE.MeshBasicMaterial( { color: 0xccccc, wireframe : true  }  );
        mountainMesh4Black.children[0].children[0].material = new THREE.MeshBasicMaterial( { color: 0xccccc, wireframe : true  }  );
        mountainMesh5Black.children[0].children[0].material = new THREE.MeshBasicMaterial( { color: 0xccccc, wireframe : true  }  );
        mountainMesh6Black.children[0].children[0].material = new THREE.MeshBasicMaterial( { color: 0xccccc, wireframe : true  }  );

        scene.add(mountainMesh1);
        scene.add(mountainMesh2);
        scene.add(mountainMesh3);
        scene.add(mountainMesh4);
        scene.add(mountainMesh5);
        scene.add(mountainMesh6);

        scene.add(mountainMesh1Black);
        scene.add(mountainMesh2Black);
        scene.add(mountainMesh3Black);
        scene.add(mountainMesh4Black);
        scene.add(mountainMesh5Black);
        scene.add(mountainMesh6Black);

        animate();
      });  

      function animate() {
        if (parseInt(camera.position.z) == 0) {
          camera.position.z = 1000;
        }
        //console.log(this.camera.position.z);
        camera.position.z -= 0.5;
        //cube.rotation.x += 0.01;
        //cube.rotation.y += 0.01;
        renderer.render( scene, camera );
        renderer.setSize( window.innerWidth, window.innerHeight );
        requestAnimationFrame( animate );
      }      
    }
  }
}
</script>


<style scoped>
    #canvas {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        padding: 0;
        margin: 0;
    }
</style>