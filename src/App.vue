<template>
    <router-view></router-view>
    <RoundCursor />
</template>

<script>
import RoundCursor from '@/components/RoundCursor.vue'

export default {
    name: 'App',
    components: {
        RoundCursor
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

html,
body,
#app {
    width: 100%;
    height: 100%;
    cursor: none;
}
</style>