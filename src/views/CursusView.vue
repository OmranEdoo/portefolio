<template>
    <div id="container">
        <div class="row">
            <div id="displayContainer">
                <div id="canvas"></div>
                <div id="mapContainer"></div>
            </div>
            <div class="row" id="textContainer">
                <p>test</p>
            </div>
        </div>
    </div>
</template>


<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import Canvas3D from '../classes/Canvas3D.js'


export default {
    name: 'CursusView',
    data() {
        return {
            center: [37.7749, -122.4194]
        }
    },
    methods: {
        setupLeafletMap: function () {
            const mapDiv = L.map("mapContainer").setView(this.center, 13);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(mapDiv);
        },
    },
    mounted() {
        this.setupLeafletMap();

        const canvas = new Canvas3D();

        const container = document.getElementById("canvas");
        canvas.renderer.setSize(container.offsetWidth, container.offsetHeight);
        container.appendChild(canvas.renderer.domElement);
    },
}
</script>


<style scoped>
#container {
    width: 100%;
    height: 100%;
}

#displayContainer {
    width: 50vw;
    height: 100vh;
    max-height: 100vh;
}

#mapContainer {
    width: 50vw;
    height: 100vh;
    z-index: 1;
}

#canvas {
    position: absolute;
    top: 50%;
    left: 25%;
    width: 50px;
    height: 50px;
    z-index: 2;
}

.row {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
}

#textContainer {
    width: fit-content;
}
</style>