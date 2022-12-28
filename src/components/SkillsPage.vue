<template>
    <div id="skillsPage">

        <ThreeInfinity></ThreeInfinity>
    </div>
</template>
  
<script>

    import ThreeInfinity from "./ThreeInfinity.vue"

    export default {
        name: 'SkillsPage',
        data () {
            return {
            }
        },
        components: {
            ThreeInfinity
        }

}
</script>


<style scoped>
    #skillsPage {
        width: 100vw;
        height: auto;
        min-height: 100vh;
        background-color: rgb(83, 122, 124);
    }
</style>