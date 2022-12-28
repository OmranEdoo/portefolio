<template>
    <div id="navBar" @isOpen="getOpen">
        <div class="square" v-if="!open" @click="openNavBar">&nbsp;</div>
        <ul id="ul" v-else>
            <div class="square" @click="openNavBar"></div>
            <div class="center">
                <li @click="scrollDown(0)">Accueil</li>
                <li @click="scrollDown(1)">Cursus</li>
                <li @click="scrollDown(2)">Compétences</li>
                <li @click="scrollDown(3)">Projets</li>
                <li @click="scrollDown(4)">Contact</li>
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
    mounted () {
    },
    methods: {
        getOpen() {
            return this.open;
        },
        openNavBar() {
            if (this.open === true) {
                this.open = false;
                document.getElementById("text").style.translate = "10vw 20vh";

                document.getElementById("blaze").style.color = "rgb(220, 220, 220)";
                document.getElementById("blaze").style.textShadow = "0.01em 0.01em 0.02em rgb(179, 22, 22), 0 0 0.5em rgb(0, 208, 255), 0 0 0.2em rgb(0, 208, 255)";
                document.getElementById("text").style.color = "rgb(220, 220, 220)";
            } else {
                this.open = true;
                if (window.innerWidth < 550){
                    document.getElementById("blaze").style.color = "transparent";
                    document.getElementById("blaze").style.textShadow = "0px 0px transparent";
                    document.getElementById("text").style.color = "transparent";
                }
                document.getElementById("text").style.translate = "280px 20vh";
                document.getElementsByClassName("square")[0].style.translate = "0 0";
            }
            this.$emit('isOpen', this.open);
        },
        scrollRec(i, scrollLevel, scrollInit){

            if (scrollInit < i*window.innerHeight) {
                if (scrollLevel < i*window.innerHeight) {
                    scrollLevel += 10;
                    window.scrollTo(window.scrollX, scrollLevel);
                    setTimeout(() => {
                        this.scrollRec(i, scrollLevel, scrollInit);
                    }, 1);                 
                } else {
                    window.scrollTo(window.scrollX, i*window.innerHeight)
                }
            } else {
                if (scrollLevel > i*window.innerHeight) {
                    scrollLevel -= 10;
                    window.scrollTo(window.scrollX, scrollLevel);
                    setTimeout(() => {
                        this.scrollRec(i, scrollLevel, scrollInit);
                    }, 1);                 
                } else {
                    window.scrollTo(window.scrollX, i*window.innerHeight)
                }
            }
            
        },
        scrollDown(i){
            this.scrollRec(i, window.scrollY, window.scrollY);
            this.open = false;
            document.getElementById("blaze").style.color = "rgb(220, 220, 220)";
            document.getElementById("blaze").style.textShadow = "0.01em 0.01em 0.02em rgb(179, 22, 22), 0 0 0.5em rgb(0, 208, 255), 0 0 0.2em rgb(0, 208, 255)";
            document.getElementById("text").style.color = "rgb(220, 220, 220)";
        }
    }
}
</script>


<style scoped>

#navBar {
    position: fixed;
    top: 0;
    left: 0;
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
    width: 250px;
    height: 100vh;
    list-style-type: none;
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: rgb(36, 73, 74);
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    z-index: 1000;
}

@media screen  and (max-width: 550px) {
    ul {
        width: 100vw
    }
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
    top: 5vh;
    left: 2.5vw;
    position: absolute;
    display: block;
    border-radius: 10%;
    background-image: url('./../assets/param.png');
    z-index: 1000;
}

.square:hover {
    background-color: rgba(187, 187, 187, 0.2);
}
</style>