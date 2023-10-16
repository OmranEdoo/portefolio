<template>
    <div id="container" class="d-flex align-center" @click="changeLanguage">
        {{ $language.current }}
    </div>
</template>

<script>
export default {
    name: 'LanguageBtn',
    methods: {
        changeLanguage() {
            if (this.$language.current == 'en')
                this.$language.current = 'fr'
            else
                this.$language.current = 'en'
        }
    }
}
</script>

<style scoped>
#container {
    position: absolute;
    top: 50px;
    right: 150px;
    height: 70px;
    width: min-content;
    padding: 0;
    z-index: 110;
    color: rgb(214, 214, 214);
    font-size: 17px;
    text-transform: unset !important;
    border-radius: 25%;
    text-decoration: underline;
    font-family: lemonmilk;
}

@media screen and (orientation: portrait) {
    #container {
        left: 50%;
        transform: translate(-50%, 0);
    }
}

#container:hover {
    color: white;
}

#container:active {
    color: white;
}
</style>