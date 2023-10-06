<template>
    <div>
        <canvas id="viewport" />
        <div v-if="state > 2" class="btnContainer d-flex flex-column">
            <h2 class="resultText" v-if="state == 3">You win !</h2>
            <h2 class="resultText" v-else>You lose...</h2>
            <v-btn class="gameBtn mb-2" rounded="sm" variant="outlined" @click="restart(true, 700, 10)">Restart</v-btn>
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
            finalSpeed: 10,
            gameAcceleration: 10,
            viewport: null,
            screenX: 0,
        }
    },
    watch: {
        isPlay: function (val) {
            this.SET_ISPLAY(val)
        },
        speed: function (val) {
            this.SET_FINALSPEED(val)
        },
        getState: function (val) {
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

        window.addEventListener('touchstart', (e) => {
            this.screenX = e.touches[0].screenX
            if (this.screenX < this.viewport.offsetWidth / 2) {
                this.GO_LEFT()
            } else {
                this.GO_RIGHT()
            }
        });

        window.addEventListener('touchend', () => {
            if (this.screenX < this.viewport.offsetWidth / 2) {
                this.STOP_LEFT()
            } else {
                this.STOP_RIGHT()
            }
        });
    },
    mounted() {
        this.viewport = document.getElementById("viewport")
        this.restart(this.isPlaying, this.finalSpeed)
    },
    computed: {
        getState() {
            return this.GET_STATE()
        }
    },
    methods: {
        ...mapGetters('starsBackgroundStore', ["GET_STATE"]),
        ...mapMutations('starsBackgroundStore', ["RESIZE", "GO_LEFT", "GO_RIGHT", "STOP_LEFT", "STOP_RIGHT", "SET_ISPLAY", "SET_FINALSPEED"]),
        ...mapActions('starsBackgroundStore', ["INIT", "ANIMATE"]),
        restart(isPlaying, finalSpeed) {
            this.INIT({
                width: this.viewport.offsetWidth,
                height: this.viewport.offsetHeight,
                el: this.viewport,
                isPlaying: isPlaying,
                finalSpeed: finalSpeed,
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
    width: 100vw !important;
    height: 100vh !important;
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

