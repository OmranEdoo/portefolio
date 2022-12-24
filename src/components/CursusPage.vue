<template>
    <div id="container center">
        <h2>Parcours scolaire</h2>
        <div class="horizontally center">
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
            <div id="canvasContainer" class="vertically">
                
            </div>
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
        <p class="margin center"><a href="./CV_V4.pdf">Afficher mon CV</a></p>

        <h2>Extrascolaire</h2>
        <div class="horizontally center">
            <div class="vertically marginSide">
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
            <div class="vertically marginSide">
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
</template>
  
<script>

    export default {
        name: 'CursusPage',
        data () {
            return {
                
            }
        },
        components: {
            
        },
        mounted () {
            this.drawOnCanvas();
        },
        methods: {
            drawOnCanvas() {
                const canvasContainer = document.getElementById('canvasContainer');
                const textContainer = document.getElementById('textContainer');
                const h = parseInt(textContainer.clientHeight);
                const canvas = document.createElement("canvas");
                canvas.id = "canvas";
                canvas.width = 200;
                canvas.height = h;
                canvasContainer.appendChild(canvas);
                const context = canvas.getContext('2d');

                context.strokeStyle = 'blue';
                context.lineWidth = 5;
                context.fillStyle = 'blue';

                context.beginPath();
                context.moveTo(100, 0);
                context.lineTo(100, h);
                context.stroke();

                context.beginPath();
                context.arc(100, 30, 5, 0, 2 * Math.PI, false);
                context.fill();
                context.stroke();

                context.beginPath();
                context.arc(100, 120, 5, 0, 2 * Math.PI, false);
                context.fill();
                context.stroke();

                context.beginPath();
                context.arc(100, 210, 5, 0, 2 * Math.PI, false);
                context.fill();
                context.stroke();

                context.beginPath();
                context.arc(100, 300, 5, 0, 2 * Math.PI, false);
                context.fill();
                context.stroke();
            }
        }

}
</script>


<style scoped>
    #container {
        width: 100%;
        height: 100vh;
        background-color: aliceblue;
        overflow-x: hidden;
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

    #dateContainer>p {
        height: 50px;
        font-weight: bold;
        margin: 20px 0 20px 0;
    }

    #textContainer>p {
        height: 50px;
        margin: 20px 0 20px 0;
    }
</style>