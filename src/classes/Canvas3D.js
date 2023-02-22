import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


export default class Canvas3D {
    constructor() {
        this.camera;
        this.scene;
        this.renderer;

        this.init();
    }

    modelLoader(fileName) {
        return new Promise((resolve, reject) => {
            this.loader.load(fileName, data => resolve(data), null, reject);
        });
    }

    async loadData(fileName, coord, scale, index) {
        const gltf = await this.modelLoader(fileName);
        let objet = gltf.scene.children[index];
        objet.matrixAutoUpdate = true;
        objet.position.set(coord.x, coord.y, coord.z);
        objet.scale.set(scale.x, scale.y, scale.z);

        this.scene.add(objet);

        return objet;
    }

    async loadFullData(fileName, coord, scale) {
        const gltf = await this.modelLoader(fileName);

        let objet = gltf.scene;
        objet.matrixAutoUpdate = true;
        objet.position.set(coord.x, coord.y, coord.z);
        objet.scale.set(scale.x, scale.y, scale.z);

        this.scene.add(objet);

        return objet;
    }


    init() {
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
        this.camera.position.set(0, 10, 0);

        this.scene = new THREE.Scene();
        //this.scene.background = new THREE.Color(0xa0a0a0);

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true});
        this.renderer.setClearColor(0x000000, 0); // the default
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;

        const controls = new OrbitControls(this.camera, this.renderer.domElement);
        controls.listenToKeyEvents(window); // optional

        const size = 100;
        const divisions = 100;

        const gridHelper = new THREE.GridHelper(size, divisions);
        this.scene.add(gridHelper);

        window.addEventListener('resize', function () { this.onWindowResize(); }, false);

        this.animate();
    }

    animate() {
        const game = this;

        requestAnimationFrame(function () { game.animate(); });

        this.renderer.render(this.scene, this.camera);
    }
}