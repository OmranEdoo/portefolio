<template>
    <div :class="['g-cursor', { 'g-cursor_hover': hover }, { 'g-cursor_hide': hideCursor }]">
        <div v-for="index in 4" :key="index" :style="cursorCircle[index]" class="g-cursor__circle" />
        <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>
    </div>
</template>

<script>
//import { toRaw } from 'vue';

export default {
    name: "RoundCursor",
    data() {
        return {
            xChild: 0,
            yChild: 0,
            xParents: [0, 0, 0, 0, 0],
            yParents: [0, 0, 0, 0, 0],
            hover: false,
            hideCursor: true,
            delayTreshhold: 30
        }
    },
    computed: {
        cursorPoint() {
            return `transform: translateX(${this.xChild}px) translateY(${this.yChild}px) translateZ(0) translate3d(0, 0, 0);`
        },
        cursorCircle() {
            return [
                `transform: translateX(${this.xParents[0]}px) translateY(${this.yParents[0]}px) translateZ(0) translate3d(0, 0, 0); width: 5px; height: 5px;`,
                `transform: translateX(${this.xParents[1]}px) translateY(${this.yParents[1]}px) translateZ(0) translate3d(0, 0, 0); width: 4px; height: 4px;`,
                `transform: translateX(${this.xParents[2]}px) translateY(${this.yParents[2]}px) translateZ(0) translate3d(0, 0, 0); width: 3px; height: 3px;`,
                `transform: translateX(${this.xParents[3]}px) translateY(${this.yParents[3]}px) translateZ(0) translate3d(0, 0, 0); width: 2px; height: 2px;`,
                `transform: translateX(${this.xParents[4]}px) translateY(${this.yParents[4]}px) translateZ(0) translate3d(0, 0, 0); width: 1px; height: 1px;`
            ]
        },
    },
    methods: {
        moveCursor(e, index) {
            this.xChild = e.clientX;
            this.yChild = e.clientY;
            setTimeout(() => {
                this.xParents[index] = e.clientX;
                this.yParents[index] = e.clientY;
            }, (index + 1) * this.delayTreshhold);
        },
    },
    mounted() {
        for (let i = 0; i < 5; i++) {
            document.addEventListener("mousemove", (e) => this.moveCursor(e, i))
        }
        document.addEventListener('mouseleave', () => {
            this.hideCursor = true;
        });
        document.addEventListener('mouseenter', () => {
            this.hideCursor = false;
        });
    }
}
</script>

<style lang="scss">
.g-cursor {
    &_hide {
        opacity: 0;
        width: 60px;
        height: 60px;
        transition: width .6s ease,
            height .6s ease,
            opacity .6s ease;
    }

    &__circle {
        pointer-events: none;
        user-select: none;
        top: 2px;
        left: 2px;
        position: fixed;
        background-color: #fff;
        border-radius: 100%;
        z-index: 5555;
        backface-visibility: hidden;
        transition: opacity .6s ease;
    }

    &__point {
        top: 0;
        left: 0;
        position: fixed;
        width: 10px;
        height: 10px;
        pointer-events: none;
        user-select: none;
        border-radius: 100%;
        background: #fff;
        z-index: 55555555;
        backface-visibility: hidden;
        will-change: transform;
    }

    &_hover {
        .g-cursor__circle {
            opacity: 0;
            width: 60px;
            height: 60px;
            transition: width .6s ease,
                height .6s ease,
                opacity .6s ease;
        }
    }
}
</style>