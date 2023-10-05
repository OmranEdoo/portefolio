import starsBackgroundStore from './starsBackgroundStore'
import projectsCubeStore from './projectsCubeStore'
import { createStore } from 'vuex'


export default createStore({
    modules: {
        starsBackgroundStore,
        projectsCubeStore
    },
})