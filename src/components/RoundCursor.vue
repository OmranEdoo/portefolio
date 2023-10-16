<template>
    <div :class="['g-cursor', { 'g-cursor_hover': hover }, { 'g-cursor_hide': hideCursor }]">
        <div class="g-cursor__point" ref="point" :style="cursorPoint">
            <div id="diamond-shield"></div>
        </div>
    </div>
</template>

<script>
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
    },
    methods: {
        moveCursor(e) {
            this.xChild = e.clientX;
            this.yChild = e.clientY;
        },
    },
    mounted() {
        document.addEventListener("mousemove", (e) => this.moveCursor(e))
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
#diamond-shield {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top: 2px solid #fb00ffa4;
    position: relative;
    bottom: -11px;
    left: 0px;
}

#diamond-shield:after {
    content: '';
    position: absolute;
    left: -5px;
    bottom: 2px;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom: 7px solid #fb00ffa4;
}

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
        background-color: #fb00ff;
        border-radius: 100%;
        z-index: 5555;
        backface-visibility: hidden;
        transition: opacity .6s ease;
    }

    &__point {
        top: 0;
        left: 0;
        position: fixed;
        width: 0;
        height: 0;
        pointer-events: none;
        user-select: none;
        border-radius: 100%;
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