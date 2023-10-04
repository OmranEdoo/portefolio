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
var finalLeftSpeed = 0
var finalRightSpeed = 0
var actualLeftSpeed = 0
var actualRightSpeed = 0
var gameSpeed = 0.4
var animateCallTime = 150
var indexAnimate = 0

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
    created() {
        window.addEventListener('keydown', (e) => {
            if (e.key == 'ArrowLeft') {
                this.goLeft()
            } else if (e.key == 'ArrowRight') {
                this.goRight()
            }
        });
    },
    mounted() {
        this.initThree();
    },
    methods: {
        goLeft() {
            finalLeftSpeed += 0.2
        },
        goRight() {
            finalRightSpeed += 0.2
        },
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

            const planeGeom = new THREE.PlaneGeometry(1000, 4000, 200, 200);
            const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0xccccc, wireframe: true, side: THREE.DoubleSide });
            const ground = new THREE.Mesh(planeGeom, wireframeMaterial);
            scene.add(ground)
            ground.position.z = -20
            ground.position.y = 2750

            const mountains = new THREE.Group()
            const black_mountains = new THREE.Group()

            var jsonLoader = new GLTFLoader();
            jsonLoader.load('./mountain2.glb', function (gltf) {
                const first_mountain = gltf.scene;
                first_mountain.children[0].children[0].material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: false });
                first_mountain.scale.set(100, 100, 100);
                first_mountain.rotation.x = Math.PI / 2;
                const first_black_mountain = first_mountain.clone()
                first_black_mountain.children[0].children[0].material = new THREE.MeshBasicMaterial({ color: 0xccccc, wireframe: true })

                let x, y, angle;

                for (let i = 0; i < 100; i++) {
                    mountains.add(first_mountain.clone())
                    black_mountains.add(first_black_mountain.clone())

                    x = Math.round(Math.random() * 1000) - 500
                    y = 1700 + Math.round(Math.random() * 2000)
                    angle = Math.random() * 2 * Math.PI

                    mountains.children[i].position.set(x, y, -20)
                    mountains.children[i].rotation.y = angle
                    black_mountains.children[i].position.set(x, y, -20)
                    black_mountains.children[i].rotation.y = angle
                }

                mountains.position.set(0, 0, 0)
                black_mountains.position.set(0, 0, 0)

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
                    scene.add(ground)
                    scene.add(mountains)
                    scene.add(black_mountains)

                    ground.position.y -= actualSpeed
                    mountains.position.y -= actualSpeed
                    black_mountains.position.y -= actualSpeed

                    if (actualLeftSpeed < finalLeftSpeed) {
                        actualLeftSpeed += 0.1
                    } else if (actualLeftSpeed > finalLeftSpeed) {
                        actualLeftSpeed -= 0.5
                        finalLeftSpeed = 0
                    } else if (actualLeftSpeed <= 0.5) {
                        actualLeftSpeed = 0
                    }

                    if (actualRightSpeed < finalRightSpeed) {
                        actualRightSpeed += 0.1
                    } else if (actualRightSpeed > finalRightSpeed) {
                        actualRightSpeed -= 0.5
                        finalRightSpeed = 0
                    } else if (actualRightSpeed <= 0.5) {
                        actualRightSpeed = 0
                    }

                    camera.position.x -= actualLeftSpeed
                    camera.position.x += actualRightSpeed

                    if (indexAnimate < animateCallTime) {
                        indexAnimate += 1
                    } else {
                        finalSpeed = gameSpeed
                    }
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


