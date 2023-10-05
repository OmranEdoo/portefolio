<template>
    <div style="display: flex !important;">
        <canvas id="canvasInfinity">
            <video id="video" playsinline webkit-playsinline loop autoplay width="1290" height="1040" src="./video.mp4"
                style="display: none;"></video>
        </canvas>
    </div>
</template>
  
  
<script>
import { mapMutations, mapActions } from "vuex";

export default {
    name: 'ProjectCarousel',
    data() {
        return {
            angle: 0,
            video: null,
            phone: false,
            viewport: null,
        }
    },
    mounted() {
        window.addEventListener('mousemove', e => {
            this.SET_MOUSEX(e.pageX)
            this.SET_MOUSEY(e.pageY)
        });
        this.viewport = document.getElementById("canvasInfinity")
        this.video = document.getElementById("video");
        console.log(this.video)
        this.INIT({
            width: this.viewport.offsetWidth,
            height: this.viewport.offsetHeight,
            el: this.viewport,
            video: this.video
        }).then(() => {
            this.ANIMATE();
            window.addEventListener("resize", () => {
                this.RESIZE({
                    width: this.viewport.offsetWidth,
                    height: this.viewport.offsetHeight
                });
            });
        });
    },
    methods: {
        ...mapMutations('projectsCubeStore', ["RESIZE", "SET_MOUSEX", "SET_MOUSEY"]),
        ...mapActions('projectsCubeStore', ["INIT", "ANIMATE"]),
    }
}
</script>
  
  
<style>
#canvasInfinity {
    padding: 0;
    margin: 0;
}

@media screen and (orientation: landscape) {
    #canvasInfinity {
        width: 50vw !important;
        height: 50vw !important;
    }
}

@media screen and (orientation: portrait) {
    #canvasInfinity {
        width: 100vw !important;
        height: 100vw !important;
    }
}

.center {
    display: flex;
    align-items: center;
}
</style>