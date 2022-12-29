<template>
    <div>
        <div class="text-gray text-neon grayBar">
            <p>Site codé par Omran</p>
        </div>
        
        <div id=downBar>
            <div id=networksBar class="text-white center">
                <p class="padLeft0 padRight10">Retrouve moi sur </p>
                <img src="./../assets/mail.png" alt="" class="icon" @click="openMail">

                <img src="./../assets/linkedin.png" alt="" class="icon" @click="openLinkedin">

                <img src="./../assets/github.png" alt="" class="icon" @click="openGithub">
            </div>
        </div>

        <div class="grayBar">
            <p class="text-left text-gray">© Patatarte all rights reserved</p>
        </div>
    </div>
</template>


<script>
export default {

    methods: {
        openMail() {
            window.location.href = "mailto:omranedoo@gmail.com";
        },
        openGithub() {
            window.location.href = "https://github.com/OmranEdoo";
        },
        openLinkedin() {
            window.location.href = "https://www.linkedin.com/in/omran-edoo-6a170022a/";
        }
    }
}
</script>


<style scoped>
#downBar{
    width: 90vw;
    padding-right: 5vw;
    padding-left: 5vw;
    background: #333;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

#networksBar {
    width: 100vw;
    height:90px;
    background: #333;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-top: solid 0.5px rgb(125, 125, 125);
    border-bottom: solid 0.5px rgb(125, 125, 125);
}

.grayBar{
    width: 100vw;
    height:90px;
    background: #333;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.text-gray {
    color: rgb(161, 161, 161);
}

.text-white{
    color: white;
}

.hover-white:hover{
    color: rgb(241, 241, 241);
}

.text-neon{
    text-shadow: 0.01em 0.01em 0.02em rgb(179, 22, 22), 0 0 0.5em rgb(84, 20, 204), 0 0 0.2em rgb(84, 20, 204);
}

.marg10 {
    margin: 10px;
}

.text-left{
    justify-self: start;
}

.padLeft0{
    padding-left: 0;
}

.padRight10{
    padding-right: 10px;
}

.icon {
    margin-left: 10px;
}

.icon:hover {
    width: 40px;
}

.center {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>