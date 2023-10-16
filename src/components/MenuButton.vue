<template>
    <router-link v-if="GET_PAGE() != 'home'" to="/">
        <a>
            <div id="menu" class="d-flex flex-column justify-center align-center">
                <div class="menuBar" />
                <div class="menuBar" />
                <div class="menuBar" />
                <div class="menuBar" />
            </div>
        </a>
    </router-link>
    <a v-else href="/">
        <div id="menu" class="d-flex flex-column justify-center align-center">
            <div class="menuBar" />
            <div class="menuBar" />
            <div class="menuBar" />
            <div class="menuBar" />
        </div>
    </a>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'MenuButton',
    methods: {
        ...mapGetters(["GET_PAGE"]),
    }
}
</script>

<style>
#menu {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: rgba(80, 80, 80, 0.5);
    position: fixed;
    top: 50px;
    right: 50px;
    z-index: 10;
    transition: transform .2s ease-in-out;
    cursor: none;
}

#menu:hover {
    transform: rotate(90deg);
    background-color: rgba(149, 152, 180, 0.5);
}

.menuBar {
    margin-bottom: 3px;
    margin-top: 3px;
    width: 30px;
    height: 2px;
    background-color: #E0FFFF;
}
</style>