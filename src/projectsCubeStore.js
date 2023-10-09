import * as THREE from 'three';
import { toRaw } from 'vue';

export default {
    namespaced: true,
    state: {
        camera: null,
        cube: null,
        height: 0,
        isRotate: false,
        mouseX: null,
        mouseY: null,
        renderer: null,
        rotateInitY: null,
        scene: null,
        video: null,
        width: 0,
    },
    mutations: {
        ROTATE(state) {
            state.rotateInitY = state.cube.rotation.y
            state.isRotate = true
        },
        SET_VIEWPORT_SIZE(state, { width, height }) {
            state.width = width;
            state.height = height;
        },
        SET_VIDEO(state, video) {
            state.video = video
        },
        INITIALIZE_RENDERER(state, el) {
            state.renderer = new THREE.WebGLRenderer({ antialiasing: true, alpha: true, canvas: el });
            state.renderer.setPixelRatio(window.devicePixelRatio);
            state.renderer.setSize(state.width, state.height);
        },
        INITIALIZE_CAMERA(state) {
            state.camera = new THREE.PerspectiveCamera(
                25,
                state.width / state.height,
                0.1,
                1400
            );
            state.camera.position.z = 400
        },
        INITIALIZE_SCENE(state, video) {
            state.scene = new THREE.Scene();
            state.scene.background = null;

            const cubeGeometry = new THREE.BoxGeometry(120, 75, 60);
            const videoTexture = new THREE.VideoTexture(video);

            const cubeMaterial = [
                new THREE.MeshPhongMaterial({
                    color: '0x111155',
                    opacity: 0.5,
                    transparent: true,
                    side: THREE.DoubleSide,
                }),
                new THREE.MeshPhongMaterial({
                    color: '0x111144',
                    opacity: 0.5,
                    transparent: true,
                    side: THREE.DoubleSide,
                }),
                new THREE.MeshPhongMaterial({
                    color: new THREE.Color('0x111166'),
                    opacity: 0.5,
                    transparent: true,
                    side: THREE.DoubleSide,
                }),
                new THREE.MeshPhongMaterial({
                    color: new THREE.Color('0x111122'),
                    opacity: 0.5,
                    transparent: true,
                    side: THREE.DoubleSide,
                }),
                new THREE.MeshBasicMaterial({
                    map: videoTexture
                }),
                new THREE.MeshPhongMaterial({
                    color: new THREE.Color('0x111122'),
                    opacity: 0.5,
                    transparent: true,
                    side: THREE.DoubleSide,
                })
            ];
            state.cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            state.cube.position.set(0, 0, 0);
            state.scene.add(state.cube);

            const dirLight = new THREE.DirectionalLight(0xffffff, 0.1);
            dirLight.position.set(0, 0, 200);
            state.scene.add(dirLight);
        },
        RESIZE(state, { width, height }) {
            state.width = width;
            state.height = height;
            state.camera.aspect = width / height;
            state.camera.updateProjectionMatrix();
            state.renderer.setSize(width, height);
            state.renderer.render(toRaw(state.scene), toRaw(state.camera));
        },
        SET_MOUSEX(state, value) {
            state.mouseX = value
        },
        SET_MOUSEY(state, value) {
            state.mouseY = value
        }
    },
    actions: {
        INIT({ state, commit }, { width, height, el, video }) {
            return new Promise(resolve => {
                commit("SET_VIEWPORT_SIZE", { width, height });
                commit("INITIALIZE_RENDERER", el);
                commit("INITIALIZE_CAMERA");
                commit("INITIALIZE_SCENE", video);
                // Initial scene rendering
                state.renderer.render(toRaw(state.scene), toRaw(state.camera));
                resolve();
            });
        },
        ANIMATE({ state, dispatch }) {
            if (window.innerWidth > window.innerHeight) {
                state.camera.position.z = 400
            } else {
                state.camera.position.z = 800
            }

            if (state.isRotate) {
                state.cube.rotateY(Math.PI / 10)
            } else {
                if (state.mouseX > window.innerWidth / 2 && state.cube.rotation.y < Math.PI / 12)
                    state.cube.rotation.y += (Math.PI / 12 - state.cube.rotation.y) / 20;
                else if (state.mouseX < window.innerWidth / 2 && -Math.PI / 12 < state.cube.rotation.y)
                    state.cube.rotation.y -= (state.cube.rotation.y + Math.PI / 12) / 20;

                if (state.mouseY > window.innerHeight / 2 && state.cube.rotation.x < Math.PI / 12)
                    state.cube.rotation.x += (Math.PI / 12 - state.cube.rotation.x) / 20;
                else if (state.mouseY < window.innerHeight / 2 && -Math.PI / 12 < state.cube.rotation.x)
                    state.cube.rotation.x -= (state.cube.rotation.x + Math.PI / 12) / 20;
            }

            if (Math.abs(state.cube.rotation.y - state.rotateInitY) <= Math.PI / 10) {
                state.isRotate = false
                state.cube.rotation.y = state.rotateInitY
            }

            window.requestAnimationFrame(() => {
                state.renderer.render(toRaw(state.scene), toRaw(state.camera));
                dispatch("ANIMATE");
            });
        }
    },
    getters: {
        GET_VIDEO(state) {
            return state.video
        }
    }
}