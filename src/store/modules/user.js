export const namespaced = true

export const state = {
  surveys: [
    {
    id: 1,
    title: "Beach Cleanup",
    description: "Let's clean up this beach.",
    question: [{
            tipoSurvey: 1,
            titleQuestion: "Adam Jahr",
            options : [],
            newQuestion :[]
          }]
    }]
}
    
export const mutations = {
    ADD_USER(state, user) {
        state.users.push(user)
    },
    SET_USERS(state, users) {
        state.users = users
    },
    SET_USERS2(state, users) {
        state.users2 = users
    },
    SET_USERS_TOTAL(state, usersTotal) {
        state.usersTotal = usersTotal
    },
    SET_USER(state, user) {
        state.user = user
    },
    UPDATE_USERS(){}
}
export const actions = {
    updateAllUsers({commit}, users) {
                console.log('actions 1')
                commit('SET_USERS', users)        
    },
    updateAllUsers2({commit}, users) {
                console.log('actions 2')
                commit('SET_USERS2', users)        
    },
    fetchUser({ commit, getters, state }, id) {
        if (id == state.user.id) {
            return state.user
        }
        var user = getters.getUserById(id)

        if (user) {
            commit('SET_USER', user)
            return user
        } else {
            console.log('FetchUser')
        }
    }
}

export const getters = {
    getUserById: state => id => {
        return state.users.find(user => user.id === id)
    }
}