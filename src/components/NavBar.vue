<template>
    <div>
        <nav class="center">
            <ul class="liste">
                <li @click="retournerPageAccueil">Accueil</li>
                <li>Projets</li>
                <li>Cursus</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>
</template>


<script>
export default {
//    name: NavBar
}
</script>


<style scoped>
nav {
    left:0;
    top:0;
    width: 100%;
    height:50px;
    background: #333;
    color: #f1f1f1;
    position: fixed;
    z-index: 1;
}

ul {
    width: 100%;
    height: 100%;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

li {
    margin: 0 20px;
    font-size: 20px;
}

li:hover {
    color: rgb(120, 120, 120);
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>