<template>
    <button @click="playVideo">test</button>
    <div style="display: flex !important;">
        <canvas id="canvasInfinity">
            <video id="video" playsinline webkit-playsinline loop autoplay width="1290" height="1040" src="./video.mp4"
                style="display: none;"></video>
        </canvas>
    </div>
</template>
  
  
<script>
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

export default {
    name: 'ProjectCarousel',
    data() {
        return {
            angle: 0,
            video: null
        }
    },
    mounted() {
        this.initThree();
    },
    methods: {
        initThree() {
            var scene = new THREE.Scene();
            scene.background = new THREE.Color('#191918');

            var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 500);

            var can = document.getElementById("canvasInfinity");

            var renderer = new THREE.WebGLRenderer({ canvas: can, antialiasing: true });
            renderer.setSize(window.innerWidth, window.innerHeight);

            const cubeGeometry = new THREE.BoxGeometry(270, 270, 270);

            this.video = document.getElementById('video');

            let videoTexture = new THREE.VideoTexture(this.video);

            const cubeMaterial = [
                new THREE.MeshStandardMaterial({
                    color: '#F0FFFF',
                }),
                new THREE.MeshStandardMaterial({
                    color: '#F0FFFF',
                }),
                new THREE.MeshStandardMaterial({
                    color: '#F0FFFF',
                }),
                new THREE.MeshStandardMaterial({
                    color: '#F0FFFF',
                }),
                new THREE.MeshBasicMaterial({
                    map: videoTexture//texture.load('./test.jpg')
                }),
                new THREE.MeshStandardMaterial({
                    color: '#F0FFFF',
                })
            ];
            const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            scene.add(cube);

            cube.position.set(0, 0, 500);
            cube.rotation.y = Math.PI / 8;
            cube.rotation.x = Math.PI / 8;

            const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
            dirLight.position.set(0, 100, 1000);
            scene.add(dirLight);

            var raycaster = new THREE.Raycaster();
            var mouse = new THREE.Vector2();

            function onDocumentMouseDown(event) {
                event.preventDefault();

                raycaster.setFromCamera(mouse, camera);
            }

            document.addEventListener('mousedown', onDocumentMouseDown, false);

            const fontLoader = new FontLoader();
            fontLoader.load('/fonts/helvetiker_bold.typeface.json',
                function (font) {
                    let textGeometry = new TextGeometry("Projets", {
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
                    let text = new THREE.Mesh(textGeometry, textMaterial);

                    if (window.innerWidth < 800) {
                        text.position.set(-95, 30, 1100);
                    } else {
                        text.position.set(-95, 30, 900);
                    }

                    scene.add(text);

                    if (window.innerWidth < 800) {
                        camera.position.z = 1500;
                    } else {
                        camera.position.z = 1000;
                    }

                    window.addEventListener('resize', function () {
                        camera.aspect = window.innerWidth / window.innerHeight;
                        camera.updateProjectionMatrix();
                        renderer.setSize(window.innerWidth, window.innerHeight)
                    })

                    animate();
                })

            function animate() {
                //cube.rotateOnAxis(axisSphere, 0.005);

                renderer.render(scene, camera);
                requestAnimationFrame(animate);
            }
        },
        playVideo() {
            console.log(this.video)
            this.video.play();
        }
    }
}
</script>
  
  
<style>
#canvasInfinity {
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    height: 65vh !important;
}

.center {
    display: flex;
    align-items: center;
}
</style>