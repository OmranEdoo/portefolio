<template>
    <div id="container" class="d-flex align-center">
        <p id="btn" @click="changeLanguage">
            {{ $language.current }}
        </p>
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
}

@media screen and (orientation: portrait) {
    #container {
        left: 50%;
        transform: translate(-50%, 0);
    }
}

#btn {
    padding: 0;
    z-index: 11;
    color: rgb(214, 214, 214);
    font-size: 17px;
    text-transform: unset !important;
    border-radius: 25%;
    text-decoration: underline;
    font-family: lemonmilk;
}

#btn:hover {
    color: white;
}
</style>