import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

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

createApp(App).use(router).use(vuetify).mount('#app')