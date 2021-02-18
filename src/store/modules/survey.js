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
        title: "President",
        description: "Let's talk about R president",
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

  ]
}

 
export const mutations = { 
    updateSurveys: (state, payload) => {
      state.surveys.push(payload) 
    }
  }
export const actions = {
    updateSurveys: ({ commit }, payload) => {
      console.log('update action')
      commit("updateSurveys", payload);
    }
  }

  

 

