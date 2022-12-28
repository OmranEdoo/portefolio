<template>
    <div id="mainPage">
        <div id="text">
            <h1 id="blaze" class="text-neon">OMRAN EDOO</h1>
            <Typewriter :array="text"></Typewriter>
        </div>

        <Threebackground></Threebackground>
    </div>
</template>
  
<script>

    import Typewriter from "./TypeWriter.vue"
    import Threebackground from "./ThreeBackground.vue"

    export default {
        name: 'MainPage',
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
    #mainPage {
        display: block;
        height: auto;
        min-height: 350px;
    }

    #text {
        position: absolute;
        width:max-content;
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
        text-shadow: 0.01em 0.01em 0.02em rgb(179, 22, 22), 0 0 0.5em rgb(0, 208, 255), 0 0 0.2em rgb(0, 208, 255);
    }

    @media screen and (max-width: 600px) {
        h1 {
            font-size: 50px;
        }
    }

    @media screen and (max-width: 300px) {
        h1 {
            font-size: 30px;
        }
    }
</style>