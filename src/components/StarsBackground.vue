<template>
    <div style="display: flex !important;">
        <canvas id="canvas" />
    </div>
</template>
  
  
<script>
import * as THREE from 'three';

export default {
    name: 'StarsBackground',
    props: {
        isAnimationFast: {
            type: Boolean,
            require: false
        }
    },
    watch: {
        isAnimationFast: function (val) {
            this.isFast = val
        }
    },
    data() {
        return {
            isFast: false
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


