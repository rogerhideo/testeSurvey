import Vue from 'vue'
import Vuex from 'vuex'
import * as user from '@/store/modules/user.js'
import * as notification from '@/store/modules/notification.js'
import * as survey from '@/store/modules/survey.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        notification,
        survey
    },
    state: {
        countries: [
            'United States',
            'Canada',
            'México',
            'Brazil',
            'Japan',
            'England',
            'French',
            'Russia',
            'China'
        ]
    }
})