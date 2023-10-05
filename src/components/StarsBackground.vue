<template>
    <div style="display: flex !important;">
        <canvas id="viewport" />
        <v-btn v-if="state == 2" class="gameBtn" rounded="sm" variant="outlined">Restart</v-btn>
    </div>
</template>
  
  
<script>
import { mapMutations, mapActions } from "vuex";

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
    data() {
        return {
            state: 0,
            isPlaying: false,
            finalSpeed: 0.1,
            gameAcceleration: 0.1,
        }
    },
    watch: {
        isPlay: function (val) {
            this.SET_ISPLAY(val)
        },
        speed: function (val) {
            this.SET_FINALSPEED(val)
        },
        acceleration: function (val) {
            this.SET_GAMEACCELERATION(val)
        }
    },
    created() {
        window.addEventListener('keydown', (e) => {
            if (e.key == 'ArrowLeft') {
                this.GO_LEFT()
            } else if (e.key == 'ArrowRight') {
                this.GO_RIGHT()
            }
        });

        window.addEventListener('keyup', (e) => {
            if (e.key == 'ArrowLeft') {
                this.STOP_LEFT()
            } else if (e.key == 'ArrowRight') {
                this.STOP_RIGHT()
            }
        });
    },
    mounted() {
        const viewport = document.getElementById("viewport")
        this.INIT({
            width: viewport.offsetWidth,
            height: viewport.offsetHeight,
            el: viewport,
            isPlaying: this.isPlaying,
            finalSpeed: this.finalSpeed,
            gameAcceleration: this.gameAcceleration
        }).then(() => {
            this.ANIMATE();
            window.addEventListener("resize", () => {
                this.RESIZE({
                    width: viewport.offsetWidth,
                    height: viewport.offsetHeight
                });
            });
        });
    },
    methods: {
        ...mapMutations(["RESIZE", "GO_LEFT", "GO_RIGHT", "STOP_LEFT", "STOP_RIGHT", "SET_ISPLAY", "SET_FINALSPEED", "SET_GAMEACCELERATION"]),
        ...mapActions(["INIT", "ANIMATE"])
    }
}
</script>

<style>
#viewport {
    height: 100%;
    width: 100%;
}

.gameBtn {
    position: absolute;
    width: 100px;
    height: 50px;
}
</style>

