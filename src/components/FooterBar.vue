<template>
    <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
        <div class="hwrap">
            <div class="hmove">
                <div class="hslide">
                    <h3>Omran Edoo</h3>
                    <p>The episode orbits? The panic overwhelms a fuse.</p>
                </div>
                <div class="hslide">
                    <h3>See more</h3>
                    <p>The lasting astronomer balances the counter reminder.</p>
                </div>
                <div class="hslide">
                    <h3>Contact me</h3>
                    <p>Her birthday calculates past a juice!</p>
                </div>
            </div>
        </div>
    </v-footer>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "FooterBar",
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
    }),
})
</script>

<style>
/* (A) FORCE SLIDES INTO SINGLE ROW */
.hmove {
    display: flex;
}

.hslide {
    width: 100%;
    flex-shrink: 0;
}

/* (B) OUTER WRAPPER HIDE SCROLLBAR */
.hwrap {
    overflow: hidden;
}

/* (C) SHIFT SLIDES WITH CSS ANIMATION */
/* (C1) SLIDES POSITION */
.hmove {
    position: relative;
    top: 0;
    right: 0;
}

@keyframes slideh {
    0% {
        right: 0;
    }

    100% {
        right: 200%;
    }
}

/* (C2) MOVE SLIDES */
.hmove {
    animation: slideh linear 15s infinite;
}

.hmove:hover {
    animation-play-state: paused;
}
</style>