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
            }],
      itsNew: false
      },
      {
        id: 2,
        title: "President",
        description: "Let's talk about R president",
        question: [{
                tipoSurvey: 1,
                titleQuestion: "Diga em poucas Palavras",
                options : []
              }],
        itsNew: false
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
                }],
          itsNew: false
          }

  ]
}

 
export const mutations = { 
  NEW_SURVEY: (state, payload) => {
    state.surveys.push(payload)
  },
  UPDATE_SURVEY: (state, {payload, index}) => {
    state.surveys[index] = payload
  }
  }

export const actions = {
    updateSurveys({ commit }, payload) {
      if (payload.itsNew) {
        payload.itsNew = false
        commit('NEW_SURVEY', payload)
      }
      else {
        for(var index = 0 ; index < state.surveys.length ; index ++) {
          if( payload.id === state.surveys[index].id){
            commit('UPDATE_SURVEY',{ payload, index})
            break
          }											
        }
      }
    }
  }

export const getters = {
  getSurveyById: state => id => {
      return state.surveys.find(survey => survey.id === id)
  }
}

 

