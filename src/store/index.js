import Vue from 'vue'
import Vuex from 'vuex'
import * as notification from '@/store/modules/notification.js'
import * as survey from '@/store/modules/survey.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        notification,
        survey
    }
})