import starsBackgroundStore from './starsBackgroundStore'
import projectsCubeStore from './projectsCubeStore'
import { createStore } from 'vuex'


export default createStore({
    modules: {
        starsBackgroundStore,
        projectsCubeStore
    },
    state: {
        pageName: 'home'
    },
    mutations: {
        UPDATE_PAGE(state, value) {
            state.pageName = value
        }
    },
    getters: {
        GET_PAGE(state) {
            return state.pageName
        }
    }
})