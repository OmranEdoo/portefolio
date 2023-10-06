import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { toRaw } from 'vue';

export default {
    namespaced: true,
    state: {
        width: 0,
        height: 0,
        camera: null,
        scene: null,
        renderer: null,
        stars: null,
        stars2: null,
        ground: null,
        mountains: null,
        black_mountains: null,
        mountains_mesh: null,
        raycaster: null,
        state: 0,
        clock: null,
        delta: 0,
        spaceship: null,
        numberMountains: 100,
        zGround: -60,
        yGround: 2750,
        actualSpeed: 10,
        finalSpeed: 10,
        rotation: 0.05,
        limitRotation: 15,
        countRotation: 0,
        gameAcceleration: 10,
        shipAcceleration: 10,
        spaceshipRotation: 200,
        spaceshipInitXRotation: 5 * Math.PI / 9,
        isPlay: false,
        finalLeftSpeed: 0,
        finalRightSpeed: 0,
        actualLeftSpeed: 0,
        actualRightSpeed: 0,
        gameSpeed: 40,
        ultraSpeedEnd: 1700,
        speedIncrease: 20,
        animateIncreaseSpeedCount: 100,
        yStop: null,
        collisionBack: 50,
    },
    mutations: {
        SET_VIEWPORT_SIZE(state, { width, height }) {
            state.width = width;
            state.height = height;
        },
        INITIALIZE_RENDERER(state, el) {
            state.renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
            state.renderer.setPixelRatio(window.devicePixelRatio);
            state.renderer.setSize(state.width, state.height);
        },
        INITIALIZE_CAMERA(state) {
            state.camera = new THREE.PerspectiveCamera(
                60,
                state.width / state.height,
                1,
                600
            );
            state.camera.position.set(0, 0, 0)
            state.camera.rotation.x = Math.PI / 2;
        },
        INITIALIZE_SCENE(state) {
            state.scene = new THREE.Scene();
            state.scene.background = new THREE.Color('#000000');

            state.state = 0
            state.clock = new THREE.Clock()

            const light = new THREE.DirectionalLight(0xffffff, 1);
            // Where we want to place our light relative to the center of the scene. z value of 1 moves it towards us. Has big effect on shading
            light.position.set(0, 1, 1);
            state.scene.add(light);

            const backLight = new THREE.DirectionalLight(0xffffff, 1);
            backLight.position.set(0, 0, -1);
            state.scene.add(backLight);

            const starGeometry = new THREE.BufferGeometry()

            const sprite = new THREE.TextureLoader().load('img/flash.png');
            const starMaterial = new THREE.PointsMaterial({
                map: sprite,
                transparent: true
            });

            const starVerticies = []
            for (let i = 0; i < 12000; i++) {
                const x = Math.random() * 1200 - 600
                const y = Math.random() * 600 - 300
                const z = Math.random() * 600 - 300
                starVerticies.push(x, y, z)
            }

            starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVerticies, 3))

            state.stars = new THREE.Points(starGeometry, starMaterial)
            state.scene.add(toRaw(state.stars))

            state.stars2 = state.stars.clone()
            state.stars2.position.y = 600
            state.scene.add(toRaw(state.stars2))

            const planeGeom = new THREE.PlaneGeometry(1000, 4000, 200, 200);
            const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0xccccc, wireframe: true, side: THREE.DoubleSide });
            state.ground = new THREE.Mesh(planeGeom, wireframeMaterial);
            state.scene.add(state.ground)
            state.ground.position.set(0, state.yGround, state.zGround)

            state.mountains = new THREE.Group()
            state.black_mountains = new THREE.Group()
            state.mountains_mesh = new THREE.Group()
            state.spaceship = new THREE.Mesh()

            var jsonLoader = new GLTFLoader();
            jsonLoader.load('./mountain2.glb', function (gltf) {
                const first_mountain = gltf.scene
                first_mountain.children[0].children[0].material = new THREE.MeshBasicMaterial({ color: 0xccccc, wireframe: false });
                first_mountain.scale.set(100, 100, 100)
                first_mountain.rotation.x = Math.PI / 2

                const first_black_mountain = first_mountain.clone()
                first_black_mountain.children[0].children[0].material = new THREE.MeshBasicMaterial({ color: 0xccccc, wireframe: true })

                const geom = first_mountain.children[0].children[0].geometry
                const mountain_mesh = new THREE.Mesh(geom, new THREE.MeshLambertMaterial({ color: 0xccccc, transparent: true }))
                mountain_mesh.rotation.x = Math.PI / 2

                let x, y, angle

                for (let i = 0; i < state.numberMountains; i++) {
                    state.mountains.add(first_mountain.clone())
                    state.black_mountains.add(first_black_mountain.clone())
                    state.mountains_mesh.add(mountain_mesh.clone())

                    x = Math.round(Math.random() * 1000) - 500
                    y = 1700 + Math.round(Math.random() * 3000)
                    angle = Math.random() * 2 * Math.PI

                    state.mountains.children[i].position.set(x, y, state.zGround)
                    state.mountains.children[i].rotation.y = angle
                    state.black_mountains.children[i].position.set(x, y, state.zGround)
                    state.black_mountains.children[i].rotation.y = angle
                    state.mountains_mesh.children[i].position.set(x, y, state.zGround)
                    state.mountains_mesh.children[i].rotation.y = angle
                }

                state.mountains.position.set(0, 0, 0)
                state.black_mountains.position.set(0, 0, 0)
                state.mountains_mesh.position.set(0, 0, 0)
            })

            jsonLoader.load('./spaceship.glb', function (gltf) {
                state.spaceship = gltf.scene
                state.spaceship.scale.set(0.5, 0.5, 0.5)
                state.spaceship.position.set(0, 100, -20)
                state.spaceship.rotation.set(state.spaceshipInitXRotation, Math.PI / 2, 0)
                state.spaceship.children[0].children[0].material = new THREE.MeshBasicMaterial({ color: 0xccccc, wireframe: false });

                state.raycaster = new THREE.Raycaster(state.spaceship.position, new THREE.Vector3(0, 1, 0), 0, 10);
            })
        },
        RESIZE(state, { width, height }) {
            state.width = width;
            state.height = height;
            state.camera.aspect = width / height;
            state.camera.updateProjectionMatrix();
            state.renderer.setSize(width, height);
            state.renderer.render(toRaw(state.scene), toRaw(state.camera));
        },
        GO_LEFT(state) {
            state.finalLeftSpeed = 150
        },
        GO_RIGHT(state) {
            state.finalRightSpeed = 150
        },
        STOP_LEFT(state) {
            state.finalLeftSpeed = 0
        },
        STOP_RIGHT(state) {
            state.finalRightSpeed = 0
        },
        SET_ISPLAY(state, value) {
            state.isPlay = value
        },
        SET_FINALSPEED(state, value) {
            state.finalSpeed = value
        }
    },
    actions: {
        INIT({ state, commit }, { width, height, el, isPlaying, finalSpeed }) {
            state.isPlay = isPlaying;
            state.finalSpeed = finalSpeed;

            return new Promise(resolve => {
                commit("SET_VIEWPORT_SIZE", { width, height });
                commit("INITIALIZE_RENDERER", el);
                commit("INITIALIZE_CAMERA");
                commit("INITIALIZE_SCENE");
                // Initial scene rendering
                state.renderer.render(toRaw(state.scene), toRaw(state.camera));
                resolve();
            });
        },
        ANIMATE({ state, dispatch }) {
            state.camera.position.set(state.spaceship.position.x, state.spaceship.position.y - 100, state.spaceship.position.z + 20)

            state.delta = state.clock.getDelta()
            if (state.actualSpeed < 0) {
                state.actualSpeed = 0
                state.state = 4
                state.countRotation = 0
            } else if (state.actualSpeed < state.finalSpeed) {
                state.actualSpeed += state.gameAcceleration
            } else if (state.actualSpeed > state.finalSpeed) {
                state.actualSpeed -= state.gameAcceleration
            }

            if (state.isPlay) {
                if (state.ground.position.y > -2000) {
                    if (!state.scene.getObjectByName('ground'))
                        state.scene.add(toRaw(state.ground))
                    if (!state.scene.getObjectByName('mountains'))
                        state.scene.add(toRaw(state.mountains))
                    if (!state.scene.getObjectByName('black_mountains'))
                        state.scene.add(toRaw(state.black_mountains))
                    if (!state.scene.getObjectByName('mountains_mesh'))
                        state.scene.add(toRaw(state.mountains_mesh))
                    if (!state.scene.getObjectByName('spaceship'))
                        state.scene.add(toRaw(state.spaceship))

                    if (state.state == 2) {
                        if (state.ground.position.y < state.yStop + state.collisionBack) {
                            state.ground.position.y += 2 * state.actualSpeed * state.delta
                            state.mountains.position.y += 2 * state.actualSpeed * state.delta
                            state.black_mountains.position.y += 2 * state.actualSpeed * state.delta
                            state.mountains_mesh.position.y += 2 * state.actualSpeed * state.delta
                        } else {
                            state.finalSpeed = 0
                            state.state = 4
                            state.countRotation = 0
                        }
                    } else if (state.state == 4) {
                        state.ground.position.y += state.actualSpeed * state.delta
                        state.mountains.position.y += state.actualSpeed * state.delta
                        state.black_mountains.position.y += state.actualSpeed * state.delta
                        state.mountains_mesh.position.y += state.actualSpeed * state.delta
                    } else {
                        state.ground.position.y -= state.actualSpeed * state.delta
                        state.mountains.position.y -= state.actualSpeed * state.delta
                        state.black_mountains.position.y -= state.actualSpeed * state.delta
                        state.mountains_mesh.position.y -= state.actualSpeed * state.delta
                    }

                    if (state.actualLeftSpeed < state.finalLeftSpeed) {
                        state.actualLeftSpeed += state.shipAcceleration
                    } else if (state.actualLeftSpeed > state.finalLeftSpeed) {
                        state.actualLeftSpeed -= state.shipAcceleration
                    }

                    if (state.actualRightSpeed < state.finalRightSpeed) {
                        state.actualRightSpeed += state.shipAcceleration
                    } else if (state.actualRightSpeed > state.finalRightSpeed) {
                        state.actualRightSpeed -= state.shipAcceleration
                    }

                    if (state.state < 3) {
                        if (state.spaceship.position.x > 490) {
                            state.spaceship.position.x -= state.actualLeftSpeed * state.delta
                        } else if (state.spaceship.position.x < -490) {
                            state.spaceship.position.x += state.actualRightSpeed * state.delta
                        } else {
                            state.spaceship.position.x -= state.actualLeftSpeed * state.delta
                            state.spaceship.position.x += state.actualRightSpeed * state.delta
                            if (Math.abs(state.actualLeftSpeed - state.actualRightSpeed) > 0.1) {
                                if (Math.abs(state.countRotation) < state.limitRotation) {
                                    if (state.actualLeftSpeed - state.actualRightSpeed > 0.1) {
                                        state.spaceship.rotateX(-state.rotation)
                                        state.countRotation -= 1
                                    } else if (state.actualRightSpeed - state.actualLeftSpeed > 0.1) {
                                        state.spaceship.rotateX(state.rotation)
                                        state.countRotation += 1
                                    }
                                }
                            } else if (Math.abs(state.spaceship.rotation.z) > 0.1) {
                                if (state.spaceship.rotation.x > 0) {
                                    state.spaceship.rotateX(state.rotation)
                                    state.countRotation += 1
                                } else if (state.spaceship.rotation.x < 0) {
                                    state.spaceship.rotateX(-state.rotation)
                                    state.countRotation -= 1
                                }
                            }
                        }
                    }

                    if (state.ground.position.y < state.ultraSpeedEnd) {
                        if (state.state == 0) {
                            state.state = 1
                            state.finalSpeed = state.gameSpeed
                        } else if (state.state == 1) {
                            if (state.raycaster.intersectObjects(state.mountains_mesh.children).length) {
                                state.state = 2
                                state.yStop = state.ground.position.y
                            } else {
                                state.finalSpeed = state.gameSpeed + state.speedIncrease * (state.ultraSpeedEnd - state.ground.position.y) / state.animateIncreaseSpeedCount
                            }
                        }
                    }
                } else {
                    state.state = 3
                    state.finalSpeed = 10
                    state.countRotation = 0

                    if (Math.abs(state.spaceship.rotation.z) > 0.1) {
                        if (state.spaceship.rotation.x > 0) {
                            state.spaceship.rotateX(state.rotation)
                            state.countRotation += 1
                        } else if (state.spaceship.rotation.x < 0) {
                            state.spaceship.rotateX(-state.rotation)
                            state.countRotation -= 1
                        }
                    }
                }

                if (state.state == 4) {
                    if (Math.abs(state.spaceship.rotation.z) > 0.1) {
                        if (state.spaceship.rotation.x > 0) {
                            state.spaceship.rotateX(state.rotation)
                            state.countRotation += 1
                        } else if (state.spaceship.rotation.x < 0) {
                            state.spaceship.rotateX(-state.rotation)
                            state.countRotation -= 1
                        }
                    }
                }
            }

            state.stars.position.y -= state.actualSpeed * state.delta
            state.stars2.position.y -= state.actualSpeed * state.delta
            if (state.stars.position.y < -300) {
                state.stars.position.y = 900
            } else if (state.stars2.position.y < -300) {
                state.stars2.position.y = 900
            }

            window.requestAnimationFrame(() => {
                state.renderer.render(toRaw(state.scene), toRaw(state.camera));
                dispatch("ANIMATE");
            });
        }
    },
    getters: {
        GET_STATE(state) {
            return state.state
        }
    },
}
