import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import store from './store.js'
import App from './App.vue'
import { createGettext } from "vue3-gettext";
import translations from "./language/translations.json";

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import './assets/sass/style.scss'
import HomePage from './pages/HomePage.vue'
import ProjectsPage from './pages/ProjectsPage.vue'
import AboutPage from './pages/AboutPage.vue'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
})

const routes = [
    { path: '/', component: HomePage },
    { path: '/projects', component: ProjectsPage },
    { path: '/about', component: AboutPage },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

const gettext = createGettext({
    availableLanguages: {
        fr: "French",
        en: "English",
    },
    defaultLanguage: "fr",
    translations: translations,
})

createApp(App).use(gettext).use(store).use(router).use(vuetify).mount('#app')