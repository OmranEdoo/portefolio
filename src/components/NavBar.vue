<template>
    <div id="navBar">
        <div class="square" v-if="!open" @click="openNavBar">&nbsp;</div>
        <ul v-else>
            <div class="square" @click="openNavBar"></div>
            <div class="center">
                <li @click="retournerPageAccueil">Accueil</li>
                <li @click="scrollDown(1)">Cursus</li>
                <li @click="scrollDown(2)">Projets</li>
                <li @click="scrollDown(3)">Contact</li>
            </div>
        </ul>
    </div>
</template>


<script>
export default {
    name: 'NavBar',
    data() {
        return {
            open: false
        }
    },
    methods: {
        openNavBar() {
            if (this.open === true) {
                this.open = false;
                document.getElementById("text").style.translate = "10vw 20vh";
            } else {
                this.open = true;
                document.getElementById("text").style.translate = "280px 20vh";
                document.getElementsByClassName("square")[0].style.translate = "0 0";
            }
        },
        retournerPageAccueil() {
            window.open("./index.html");
        },
        scrollRec(i, scrollLevel){
            if (scrollLevel != i*window.innerHeight){
                window.scrollTo(scrollLevel, scrollLevel+1);
                scrollLevel++;
                setTimeout(this.scrollRec(i, scrollLevel), 100);                 
            }
        },
        scrollDown(i){
            this.scrollRec(i, 0);
        }
    }
}
</script>


<style scoped>

#navBar {
    position: fixed;
}
.center {
    width: 250px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}

ul {
    position: fixed;
    width: 250px;
    height: 100vh;
    translate: 0 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    background-color: rgb(36, 73, 74);
    margin: 0;
    padding: 0;
}

li {
    margin: 0 20px;
    font-size: 20px;
    color: rgb(133, 133, 133);
    margin-top: 20px;
}

li:hover {
    color: rgb(196, 196, 196);
}

.square {
    width: 50px;
    height: 50px;
    display: block;
    position: absolute;
    translate: 2.5vw 5vh;
    border-radius: 10%;
    background-image: url('./../assets/param.png');
    z-index: 10;
}

.square:hover {
    background-color: rgba(187, 187, 187, 0.2);
}
</style>