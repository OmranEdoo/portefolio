<template>
    <div style="display: flex !important;">
        <canvas id="canvasInfinity">
            <video id="video" playsinline webkit-playsinline loop autoplay width="1290" height="1040" :src="videoPath"
                style="display: none;"></video>
        </canvas>
    </div>
</template>
  
  
<script>
import { mapMutations, mapActions, mapGetters } from "vuex";

export default {
    name: 'ProjectCube',
    data() {
        return {
            angle: 0,
            video: null,
            phone: false,
            viewport: null,
            videoPath: './video/portefolio.mp4'
        }
    },
    watch: {
        getVideo: function (val) {
            this.videoPath = val
        }
    },
    mounted() {
        window.addEventListener('mousemove', e => {
            this.SET_MOUSEX(e.pageX)
            this.SET_MOUSEY(e.pageY)
        });
        this.viewport = document.getElementById("canvasInfinity")
        this.video = document.getElementById("video");
        this.SET_BOUNDINGCANVAS(this.viewport.getBoundingClientRect())

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
                this.SET_BOUNDINGCANVAS(this.viewport.getBoundingClientRect())
                this.SET_CUBE_COORDS()
            });
        });
    },
    computed: {
        getVideo() {
            return this.GET_VIDEO()
        }
    },
    methods: {
        ...mapGetters('projectsCubeStore', ["GET_VIDEO"]),
        ...mapMutations('projectsCubeStore', ["RESIZE", "SET_MOUSEX", "SET_MOUSEY", "SET_CUBE_COORDS", "SET_BOUNDINGCANVAS"]),
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