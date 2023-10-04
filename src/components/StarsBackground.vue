<template>
    <div style="display: flex !important;">
        <canvas id="canvas" />
    </div>
</template>
  
  
<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

var actualSpeed = 0.1
var finalSpeed = 0.1
var acceleration = 0.2
var isPlay = false

export default {
    name: 'StarsBackground',
    props: {
        isPlay: {
            type: Boolean,
            require: false
        },
        speed: {
            type: Number,
            require: false
        },
        acceleration: {
            type: Number,
            require: false
        }
    },
    watch: {
        isPlay: function (val) {
            isPlay = val
        },
        speed: function (val) {
            finalSpeed = val
        },
        acceleration: function (val) {
            acceleration = val
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
                map: sprite,
                transparent: true
            });

            const starVerticies = []
            for (let i = 0; i < 6000; i++) {
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

            const planeGeom = new THREE.PlaneGeometry(4000, 4000, 200, 200);
            const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0xccccc, wireframe: true, side: THREE.DoubleSide });
            const ground = new THREE.Mesh(planeGeom, wireframeMaterial);
            scene.add(ground)
            ground.position.z = -20
            ground.position.y = 2750


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
            jsonLoader.load('./mountain2.glb', function (gltf) {
                mountainMesh1 = gltf.scene;
                mountainMesh1.children[0].children[0].material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: false });
                mountainMesh1.scale.set(100, 100, 100);
                mountainMesh1.rotation.x = Math.PI / 2;
                mountainMesh2 = mountainMesh1.clone();
                mountainMesh4 = mountainMesh1.clone();
                mountainMesh5 = mountainMesh1.clone();
                mountainMesh3 = mountainMesh1.clone();
                mountainMesh6 = mountainMesh4.clone();

                mountainMesh2.rotation.y = Math.PI / 2;
                mountainMesh3.rotation.y = Math.PI / 4;
                mountainMesh4.rotation.y = Math.PI / 8;
                mountainMesh5.rotation.y = 3 * Math.PI / 4;

                mountainMesh1.position.set(100, 2000, -20);
                mountainMesh2.position.set(-100, 1900, -20);
                mountainMesh3.position.set(100, 1800, -20);
                mountainMesh4.position.set(-200, 1900, -20);
                mountainMesh5.position.set(200, 2100, -20);
                mountainMesh6.position.set(0, 1750, -20);

                mountainMesh1Black = mountainMesh1.clone();
                mountainMesh2Black = mountainMesh2.clone();
                mountainMesh3Black = mountainMesh3.clone();
                mountainMesh4Black = mountainMesh4.clone();
                mountainMesh5Black = mountainMesh5.clone();
                mountainMesh6Black = mountainMesh6.clone();

                mountainMesh1Black.children[0].children[0].material = new THREE.MeshBasicMaterial({ color: 0xccccc, wireframe: true });
                mountainMesh2Black.children[0].children[0].material = new THREE.MeshBasicMaterial({ color: 0xccccc, wireframe: true });
                mountainMesh3Black.children[0].children[0].material = new THREE.MeshBasicMaterial({ color: 0xccccc, wireframe: true });
                mountainMesh4Black.children[0].children[0].material = new THREE.MeshBasicMaterial({ color: 0xccccc, wireframe: true });
                mountainMesh5Black.children[0].children[0].material = new THREE.MeshBasicMaterial({ color: 0xccccc, wireframe: true });
                mountainMesh6Black.children[0].children[0].material = new THREE.MeshBasicMaterial({ color: 0xccccc, wireframe: true });

                window.addEventListener('resize', function () {
                    camera.aspect = window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(window.innerWidth, window.innerHeight)
                })

                animate();
            })

            //rendering loop
            function animate() {
                if (actualSpeed < finalSpeed) {
                    actualSpeed += acceleration
                } else if (actualSpeed > finalSpeed) {
                    actualSpeed -= acceleration
                }

                if (isPlay) {
                    scene.add(ground);

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

                    ground.position.y -= actualSpeed
                    mountainMesh1.position.y -= actualSpeed
                    mountainMesh2.position.y -= actualSpeed
                    mountainMesh3.position.y -= actualSpeed
                    mountainMesh4.position.y -= actualSpeed
                    mountainMesh5.position.y -= actualSpeed
                    mountainMesh6.position.y -= actualSpeed
                    mountainMesh1Black.position.y -= actualSpeed
                    mountainMesh2Black.position.y -= actualSpeed
                    mountainMesh3Black.position.y -= actualSpeed
                    mountainMesh4Black.position.y -= actualSpeed
                    mountainMesh5Black.position.y -= actualSpeed
                    mountainMesh6Black.position.y -= actualSpeed
                }

                stars.position.y -= actualSpeed
                stars2.position.y -= actualSpeed
                if (stars.position.y < -300) {
                    stars.position.y = 900
                } else if (stars2.position.y < -300) {
                    stars2.position.y = 900
                }

                renderer.render(scene, camera);
                requestAnimationFrame(animate);
            }
        }
    }
}
</script>


