<template>
    <div id="container">
        <div id="text">
            <h1 class="text-neon">OMRAN EDOO</h1>
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
        background-color: aliceblue;
        overflow-x: hidden;
    }

    #text {
        position: absolute;
        width:fit-content;
        translate: 10vw 20vh;
        text-align: start;
        color: rgb(220, 220, 220);
    }

    h1 {
        font-size: 70px;
        margin: 0;
        font-family: 'Oswald';
    }

    .text-neon {
        /*text-shadow: 0.01em 0.01em 0.02em rgb(179, 22, 22), 0 0 0.5em rgb(84, 20, 204), 0 0 0.2em rgb(84, 20, 204);*/
        text-shadow: 0.01em 0.01em 0.02em rgb(179, 22, 22), 0 0 0.5em rgb(0, 208, 255), 0 0 0.2em rgb(0, 208, 255);
    }
</style>