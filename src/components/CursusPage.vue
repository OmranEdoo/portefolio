<template>
    <MqResponsive v-if="renderComponent" id="mq1" class="horizontally center" :target="['sm','md','lg','xl','xxl']">
        <div id="cursusPage" class="center container">
            <div id="page1" class="vertically center page">
                <h2>Parcours scolaire</h2>
                <div class="horizontally center">
                    <div id="box1" class="horizontally marginSide box">
                        <div id="dateContainer" class="vertically">
                            <p>
                                2011 - 2015
                            </p>
                            <p>
                                2015 - 2018
                            </p>
                            <p>
                                2018 - 2020
                            </p>
                            <p>
                                2020 - 2023
                            </p>
                        </div>
                        <div id="canvasContainer" class="vertically"></div>
                        <div id="textContainer" class="vertically">
                            <p>
                                <b>Collège Thomas Mann</b><br>
                                75013 Paris
                            </p>
                            <p>
                                <b>Lycée Lavoisier</b> <br>
                                75005 Paris <br>
                                Filière scientifique
                            </p>
                            <p>
                                <b>CPGE MP (Maths/Physique) Lycée Fénelon</b><br>
                                75006 Paris
                            </p>
                            <p>
                                <b>École d'ingénieur ENSG</b><br>
                                Champs-sur-Marne, 77420 <br>
                                Filière Technologie des Système d'Information 
                            </p>
                        </div>
                    </div>
                </div>
                <p id="cv" class="margin center"><a href="./CV_V4.pdf">Afficher mon CV</a></p>
            </div>
    
            <div id="page2" class="vertically center page">
                <h2>Extrascolaire</h2>
                <div class="horizontally center">
                    <div class="vertically marginSide box">
                        <p>
                            <b>Natation</b><br>
                            9 ans en compétition
                        </p>
                        <p>
                            <b>Boxe anglaise</b><br>
                            2 ans
                        </p>
                        <p>
                            <b>Football, loisir</b><br>
                            Milieu centrale, supporter du PSG
                        </p>
                    </div>
                    <div class="vertically marginSide box">
                        <p>
                            <b>Échecs</b><br>
                            ~1400 elo sur <a href="https://www.chess.com/home">chess.com</a>
                        </p>
                        <p>
                            <b>Automobile</b><br>
                            Passionné par les voiture japonaises
                        </p>
                        <p>
                            <b>Cuisine</b><br>
                            Fan incontesté du butter chicken (cuisine indienne)
                        </p>
                    </div>
                </div>
            </div>

            <button id="leftArrow" v-on:mouseenter="isArrowLeftHover = true" v-on:mouseleave="isArrowLeftHover = false" @click="changePage" :disabled="!isArrowRightDisabled" :style='getArrowLeftColor'>{{arrowSymbol}}</button>
            <button id="rightArrow" v-on:mouseenter="isArrowRightHover = true" v-on:mouseleave="isArrowRightHover = false" @click="changePage" :disabled="isArrowRightDisabled" :style='getArrowRightColor'>></button>
        </div>
    </MqResponsive>

    <MqResponsive id="mq2" class="containerSlide" v-if="renderComponent" target="xs">
            <swiper
                :slides-per-view="1"
                :space-between="0"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
            >
                <swiper-slide class="vertically center">
                    <h2>Parcours scolaire</h2>
                    <div class="horizontally center">
                        <div id="box1" class="horizontally marginSide box">
                            <div id="dateContainer" class="vertically">
                                <p>
                                    2011 - 2015
                                </p>
                                <p>
                                    2015 - 2018
                                </p>
                                <p>
                                    2018 - 2020
                                </p>
                                <p>
                                    2020 - 2023
                                </p>
                            </div>
                            <div id="canvasContainer" class="vertically"></div>
                            <div id="textContainer" class="vertically">
                                <p>
                                    <b>Collège Thomas Mann</b><br>
                                    75013 Paris
                                </p>
                                <p>
                                    <b>Lycée Lavoisier</b> <br>
                                    75005 Paris <br>
                                    Filière scientifique
                                </p>
                                <p>
                                    <b>CPGE MP (Maths/Physique) Lycée Fénelon</b><br>
                                    75006 Paris
                                </p>
                                <p>
                                    <b>École d'ingénieur ENSG</b><br>
                                    Champs-sur-Marne, 77420 <br>
                                    Filière Technologie des Système d'Information 
                                </p>
                            </div>
                        </div>
                    </div>
                    <p class="margin center"><a href="./CV_V4.pdf">Afficher mon CV</a></p>
                </swiper-slide>
                <swiper-slide class="vertically center">
                    <h2>Extrascolaire</h2>
                    <div class="horizontally center">
                        <div class="vertically marginSide box">
                            <p>
                                <b>Natation</b><br>
                                9 ans en compétition
                            </p>
                            <p>
                                <b>Boxe anglaise</b><br>
                                2 ans
                            </p>
                            <p>
                                <b>Football, loisir</b><br>
                                Milieu centrale, supporter du PSG
                            </p>
                        </div>
                        <div class="vertically marginSide box">
                            <p>
                                <b>Échecs</b><br>
                                ~1400 elo sur <a href="https://www.chess.com/home">chess.com</a>
                            </p>
                            <p>
                                <b>Automobile</b><br>
                                Passionné par les voiture japonaises
                            </p>
                            <p>
                                <b>Cuisine</b><br>
                                Fan incontesté du butter chicken (cuisine indienne)
                            </p>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
    </MqResponsive>
</template>
  
<script>
    import { onMounted } from "vue";
    import { MqResponsive, updateBreakpoints } from "vue3-mq";
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';

    export default {
        name: 'CursusPage',
        inject: [updateBreakpoints],
        data () {
            return {
                arrowSymbol: "<",
                renderComponent: false,
                isArrowRightDisabled: false,
                isArrowRightHover: false,
                isArrowLeftHover: false,
                colorInactive: {
                    color: "rgb(150, 150, 150)"
                },
                colorActive: {
                    color: "rgb(70, 70, 100)"
                },
                colorHover: {
                    color: "rgb(28, 132, 153)"
                }
            }
        },
        components: { 
            MqResponsive,
            Swiper,
            SwiperSlide,
        },
        setup() {
            onMounted(() => {
                updateBreakpoints({
                    preset: "bootstrap5"
                })
            })
            const onSwiper = (swiper) => {
                console.log(swiper);
            };
            const onSlideChange = () => {
                console.log('slide change');
            };
            return {
                onSwiper,
                onSlideChange
            }
        },
        mounted () {
            this.renderComponent = true;
        },
        updated () {
            this.drawOnCanvas();
        },
        computed: {
            getArrowLeftColor() {
                if (this.isArrowLeftHover == true) {
                    return this.colorHover;
                }
                else if ( this.isArrowRightDisabled == true) {
                    return this.colorActive;
                }
                else {
                    return this.colorInactive
                } 
            },
            getArrowRightColor() {
                if ( this.isArrowRightHover == true ) {
                    return this.colorHover;
                }
                else if ( this.isArrowRightDisabled == false) {
                    return this.colorActive;
                }
                else {
                    return this.colorInactive
                } 
            }
        },
        methods: {
            drawOnCanvas() {
                const canvasContainer = document.getElementById('canvasContainer');
                const textContainer = document.getElementById('textContainer');
                const h = parseInt(textContainer.clientHeight);
                const canvas = document.createElement("canvas");
                canvas.id = "canvas";
                canvas.width = 50;
                canvas.height = h;
                canvasContainer.appendChild(canvas);
                const context = canvas.getContext('2d');

                context.strokeStyle = 'rgb(100,100,100)';
                context.lineWidth = 5;
                context.fillStyle = 'rgb(67, 189, 223)';

                context.beginPath();
                context.moveTo(25, 0);
                context.lineTo(25, h);
                context.stroke();

                context.beginPath();
                context.arc(25, 30, 5, 0, 2 * Math.PI, false);
                context.fill();
                context.stroke();

                context.beginPath();
                context.arc(25, 120, 5, 0, 2 * Math.PI, false);
                context.fill();
                context.stroke();

                context.beginPath();
                context.arc(25, 210, 5, 0, 2 * Math.PI, false);
                context.fill();
                context.stroke();

                context.beginPath();
                context.arc(25, 300, 5, 0, 2 * Math.PI, false);
                context.fill();
                context.stroke();
            },
            changePage() {
                let topMove = "45vh";
                document.getElementById("leftArrow").style.top = topMove;
                document.getElementById("rightArrow").style.top = topMove;

                if (this.isArrowRightDisabled == false){
                    document.getElementById("cursusPage").style.transform = "translate(-100vw, 0)";
                    
                    document.getElementById("leftArrow").style.left = "115vw";
                    document.getElementById("rightArrow").style.left = "185vw";
                    this.isArrowRightDisabled = true;
                    this.isArrowRightHover = false;
                } else {
                    document.getElementById("cursusPage").style.transform = "translate(0, 0)";
                    document.getElementById("leftArrow").style.left = "15vw";
                    document.getElementById("rightArrow").style.left = "85vw"; 
                    this.isArrowRightDisabled = false;
                    this.isArrowLeftHover = false;
                }
                
            }
        }
}


</script>


<style>
    .container {
        width: 200vw;
        background: linear-gradient(135deg, rgb(83, 122, 124), rgb(255, 255, 255));
        transition-property: transform;
        transition-duration: 0.8s;
        transition-timing-function: ease-in-out;
        position: block;
        height: auto;
        min-height: 100vh;
        z-index: 1;
    }

    .containerSlide {
        width: 100vw;
        background: linear-gradient(135deg, rgb(83, 122, 124), rgb(255, 255, 255));
        position: block;
        height: auto;
    }

    .page {
        width: 100vw;
        height: auto;
        position: block;
    }

    .center {
        display: flex;
        align-content: center;
        justify-content: center;
    }

    .horizontally {
        display: flex;
        flex-direction: row;
    }

    .vertically {
        display: flex;
        flex-direction: column;
    }

    .marginSide {
        margin: 0 40px 0 40px;
    }

    .margin {
        margin: 50px
    }
    
    p {
        text-align: start;
        font-size: large;
    }

    .box {
        background-color: rgb(231, 231, 231);
        border-radius: 10px;
        width: fit-content;
        padding: 20px;
    }

    #box1 {
        min-width: 269px;
    }

    #dateContainer>p {
        height: 50px;
        font-weight: bold;
        margin: 20px 0 20px 0;
    }

    #textContainer>p {
        height: 50px;
        margin: 20px 0 20px 0;
    }

    @font-face {
        font-family: 'ChubbyChicks';
        src: url('../font/ChubbyChicks.otf');
    }

    #leftArrow {
        position: absolute;
        font-weight: bolder;
        font-size: 10ch;
        z-index: 10;
        top: 145vh;
        left: 115vw;
        margin: 0;
        padding: 0;
        font-family: 'ChubbyChicks';
        background-color: transparent;
        border-color: transparent;
    }

    #rightArrow {
        position: absolute;
        font-weight: bolder;
        font-size: 10ch;
        z-index: 10;
        top: 145vh;
        left: 182vw;
        margin: 0;
        padding: 0;
        font-family: 'ChubbyChicks';
        background-color: transparent;
        border-color: transparent;
    }

    @media screen and (max-width: 900px) {
        #leftArrow {
            left: 105vw;
        }

        #rightArrow {
            left: 192vw;
        }
    }

    @media screen and (max-width: 690px) {
        p {
            font-size: medium;
        }
    }

    @media screen and (max-width: 640px) {
        p {
            font-size: small;
        }
    }

    @media screen and (max-width: 360px) {
        p {
            font-size: x-small;
        }
    }

    @media screen and (max-width: 276px) {
        .box {
            padding: 5px;
        }
    }
</style>