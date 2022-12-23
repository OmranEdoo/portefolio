<template>
    <div id="container">
        <div id="text">
            <h1>OMRAN EDOO</h1>
            <Typewriter :array="text"></Typewriter>
        </div>

        <Threebackground></Threebackground>
    </div>
</template>
  
<script>

    import Typewriter from "./TypeWriter.vue"
    import Threebackground from "./ThreeBackground.vue"

    export default {
        data () {
            return {
                text: ["Future ingénieur...", "Passionné de programmation...", "Joueur d'échecs (très) amateur..."]
            }
        },
        components: {
            Typewriter,
            Threebackground
        }

}
</script>


<style scoped>
    #container {
        width: 100%;
        height: 100vh;
    }

    #text {
        translate: 10vw 50vh;
        text-align: start;
    }

    h1 {
        font-size: 70px;
        margin: 0;
    }
</style>