<template>
    <div style="display: flex !important;">
        <canvas id="canvasInfinity">
            <video id="video" playsinline webkit-playsinline loop autoplay width="1290" height="1040" src="./video.mp4"
                style="display: none;"></video>
        </canvas>
    </div>
</template>
  
  
<script>
import * as THREE from 'three';

var mouseX
var mouseY

export default {
    name: 'ProjectCarousel',
    data() {
        return {
            angle: 0,
            video: null,
        }
    },
    mounted() {
        this.initThree();
    },
    methods: {
        initThree() {
            var scene = new THREE.Scene();
            scene.background = new THREE.Color('#0b2a39');

            var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 600;

            var can = document.getElementById("canvasInfinity");

            var renderer = new THREE.WebGLRenderer({ canvas: can, antialiasing: true });
            renderer.setSize(window.innerWidth, window.innerHeight);

            const cubeGeometry = new THREE.BoxGeometry(750, 300, 170);

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
                    map: videoTexture
                }),
                new THREE.MeshStandardMaterial({
                    color: '#F0FFFF',
                })
            ];
            const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

            scene.add(cube);

            cube.position.set(0, 0, 0);

            const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
            dirLight.position.set(0, 0, 100);
            scene.add(dirLight);

            var raycaster = new THREE.Raycaster();
            var mouse = new THREE.Vector2();

            function onDocumentMouseDown(event) {
                event.preventDefault();

                raycaster.setFromCamera(mouse, camera);
            }

            document.addEventListener('mousemove', e => {
                mouseX = e.pageX
                mouseY = e.pageY
            });

            document.addEventListener('mousedown', onDocumentMouseDown, false);

            window.addEventListener('resize', function () {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight)
            })

            animate();

            function animate() {
                if (mouseX > 300 && cube.rotation.y < Math.PI / 8)
                    cube.rotation.y += 0.05;
                else if (mouseX < 300 && -Math.PI / 8 < cube.rotation.y)
                    cube.rotation.y -= 0.05;

                if (mouseY > 300 && cube.rotation.x < Math.PI / 12)
                    cube.rotation.x += 0.05;
                else if (mouseY < 300 && -Math.PI / 12 < cube.rotation.x)
                    cube.rotation.x -= 0.05;

                renderer.render(scene, camera);
                requestAnimationFrame(animate);
            }
        },

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