<template>
    <v-timeline align="start" density="comfortable" line-thickness="10" class="overflow-y-auto">
        <v-timeline-item v-for="(experience, i) in experiences" :key="i" :dot-color="experience.color" size="small">
            <template v-slot:opposite>
                <div :class="`pt-1 headline font-weight-bold text-${experience.color}`">{{
                    experience.year }}</div>
            </template>
            <div>
                <v-card variant="tonal" class="elevation-2 ">
                    <v-card-title :class="`text-h5 text-${experience.color}`">
                        {{ experience.title }}
                    </v-card-title>
                    <v-card-text>
                        {{ experience.value }}
                        dsgdsf g
                        dsfgsg
                        dsfgsgdsgggggggggggg
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffff
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
                color: "linear-gradient('red', 'blue')",
                year: '1960',
                title: 'title',
                value: 'dgssdgsh'
            },
            {
                color: 'green',
                year: '1970',
                title: 'title',
                value: 'sdfdgg'
            },
            {
                color: 'pink',
                year: '1980',
                title: 'title',
                value: 'bbbbb'
            },
            {
                color: 'amber',
                year: '1990',
                title: 'title',
                value: 'ttttt'
            },
            {
                color: 'orange',
                year: '2000',
                title: 'title',
                value: 'hhhh'
            },
        ],
    }),
    methods: {

    }
})
</script>


<style></style>