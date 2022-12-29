<template>
    <div id="ProjectPage" class="vertically center">
        <p>En cours d'écriture...</p>
        <ThreeInProgress></ThreeInProgress>
    </div>
</template>
  
<script>

    import ThreeInProgress from "./ThreeInProgress.vue"

    export default {
        name: 'ProjectPage',
        data () {
            return {
            }
        },
        components: {
            ThreeInProgress
        }

}
</script>


<style scoped>
    #ProjectPage {
        width: 100vw;
        height: auto;
        min-height: 100vh;
        background-color: rgb(0, 0, 0);
        max-height: 100vh;
    }

    p {
        translate: 0px 100px;
        color: aliceblue;
        background-color: black;
        z-index: 10;
    }
</style>