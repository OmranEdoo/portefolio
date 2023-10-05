<template>
    <div style="display: flex !important;">
        <canvas id="viewport" />
        <div v-if="state > 2" class="btnContainer d-flex flex-column">
            <h2 class="resultText" v-if="state == 3">You win !</h2>
            <h2 class="resultText" v-else>You lose...</h2>
            <v-btn class="gameBtn mb-2" rounded="sm" variant="outlined" @click="restart(true, 10, 0.4)">Restart</v-btn>
            <v-btn class="gameBtn" rounded="sm" variant="outlined" href="/">Menu</v-btn>
        </div>
    </div>
</template>
  
  
<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

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
            viewport: null
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
        },
        getState: function (val) {
            console.log(val)
            this.state = val
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
        this.viewport = document.getElementById("viewport")
        this.restart(this.isPlaying, this.finalSpeed, this.gameAcceleration)
    },
    computed: {
        getState() {
            return this.GET_STATE()
        }
    },
    methods: {
        ...mapGetters(["GET_STATE"]),
        ...mapMutations(["RESIZE", "GO_LEFT", "GO_RIGHT", "STOP_LEFT", "STOP_RIGHT", "SET_ISPLAY", "SET_FINALSPEED", "SET_GAMEACCELERATION"]),
        ...mapActions(["INIT", "ANIMATE"]),
        restart(isPlaying, finalSpeed, gameAcceleration) {
            this.INIT({
                width: this.viewport.offsetWidth,
                height: this.viewport.offsetHeight,
                el: this.viewport,
                isPlaying: isPlaying,
                finalSpeed: finalSpeed,
                gameAcceleration: gameAcceleration
            }).then(() => {
                this.ANIMATE();
                window.addEventListener("resize", () => {
                    this.RESIZE({
                        width: this.viewport.offsetWidth,
                        height: this.viewport.offsetHeight
                    });
                });
            });
        }
    }
}
</script>

<style>
#viewport {
    height: 100%;
    width: 100%;
}

.btnContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.gameBtn {
    width: 150px;
    height: 50px;
    color: white;
}

.resultText {
    color: white;
}
</style>

