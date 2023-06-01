<template>
    <v-timeline align="start" density="comfortable" line-thickness="10">
        <v-timeline-item width="100%" v-for="(experience, i) in experiences" :key="i" :dot-color="experience.color"
            size="xx-small">
            <template v-slot:opposite>
                <div :class="`pt-1 headline font-weight-bold text-${experience.color}`" style="width: max-content;">{{
                    experience.year }}</div>
            </template>
            <div>
                <v-card variant="tonal" class="elevation-2">
                    <v-card-title :class="`text-body-1 font-weight-bold text-${experience.color}`">
                        {{ experience.title }}
                    </v-card-title>
                    <v-card-text>
                        <p v-for="ligne in experience.value" :key="ligne" class="text-caption text-left">
                            {{ ligne }}
                        </p>
                    </v-card-text>
                </v-card>
            </div>
        </v-timeline-item>
    </v-timeline>
</template>


<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "CursusTimeline",
    data: () => ({
        experiences: [
            {
                color: "teal-lighten-3",
                year: '2018',
                title: 'Baccalauréat',
                value: ['Série générale scientifique', 'Lycéee Lavoisier', 'Paris 5e arrondissement']
            },
            {
                color: 'teal-lighten-3',
                year: '2018 - 2020',
                title: 'CPGE',
                value: ['Classe Préparatoire Aux Grandes Écoles', 'Filière MP (Mathématiques et Physique)', 'Lycée Fénelon', 'Paris 6e arrondissement']
            },
            {
                color: 'teal-lighten-3',
                year: '2020 - 2023',
                title: 'École d\'ingénieurs',
                value: ['École National des Sciences Géographiques (ENSG)', 'Filière des Technologie des Sciences de l\'Information (TSI)']
            },
            {
                color: 'teal-lighten-3',
                year: '2022',
                title: 'Stage Veolia (Runéo)',
                value: ['Stage de deuxième année d\'École d\'ingénieurs', 'À l\'île de la Réunion', 'Levées GPS, Étude d\'incohérences de données, programmation d\'un plugin QGIS en Python']
            },
            {
                color: 'teal-lighten-3',
                year: '2023',
                title: 'Tuteur pédagogique',
                value: ['Association Euréka', 'Goussainville', 'Accompagnement Maths et Physique', 'Cours en groupe']
            },
            {
                color: 'teal-lighten-3',
                year: '2023',
                title: 'Stage Clearance',
                value: ['Stage PFE (de fin d\'étude)', 'Programmation Web Fullstack', 'Backend : Python, Django API REST', 'Frontend : Vue, Vuex']
            }
        ],
    }),
    methods: {

    }
})
</script>

<style scoped>
.v-navigation-drawer__content::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #5d5d5d;
    background-color: #5d5d5d;
}

.v-navigation-drawer__content::-webkit-scrollbar {
    width: 0px;
}

.v-navigation-drawer__content::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px #424242;
    background-color: #424242;
}
</style>