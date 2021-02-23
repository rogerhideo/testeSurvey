export const namespaced = true

export const state = {
  surveys: [
    {
      id: 1,
      title: "BeachCleanup ",
      description: "Let's clean up this beach.",
      question: [{
              tipoSurvey: 3,
              titleQuestion: "Best Day",
              options : []
            }]
      },
      {
        id: 2,
        title: "Travel",
        description: "Let's talk about trvel preferences",
        question: [{
                tipoSurvey: 1,
                titleQuestion: "Diga em poucas Palavras",
                options : []
              }]
        }
        ,
        {
          id: 3,
          title: "Party",
          description: "When it's time to party.",
          question: [{
                  tipoSurvey: 4,
                  titleQuestion: "usually do you preffer...?",
                  options : []
                }]
          }

  ],
  survey: {}
}

 
export const mutations = { 
  NEW_SURVEY: (state, payload) => {
    state.surveys.push(payload)
  },
  UPDATE_SURVEY: (state, {payload, index}) => {
    state.surveys[index] = payload
  },
  SET_SURVEY(state, payload) {
    state.survey = payload
}
  }

export const actions = {
    updateSurveys({ commit }, payload) {     
        for(var index = 0 ; index < state.surveys.length ; index ++) {
          if( payload.id === state.surveys[index].id){
            commit('UPDATE_SURVEY',{ payload, index})
            break
          }											
        }
      
    },
    addNewSurvey({commit}, payload){
      commit('NEW_SURVEY', payload)
    },
    fetchSurvey({ commit, getters, state }, id) {
      if (id == state.survey.id) {
          return state.survey
      }
      console.log('id = ' + id)
      var survey = getters.getSurveyById(id)
      console.log('id = ' + id + 'survey title = ' + survey.title)
      if (survey) {
          commit('SET_SURVEY', survey)
          return survey
      } else {     
        console.log('eroor fetch survey')      
      }
  }
  }

export const getters = {
  getSurveyById: state => id => {
      return  state.surveys.find(survey => survey.id == id)
  }
}

 

