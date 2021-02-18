export const namespaced = true

export const state = {
  surveys: [
    {
    id: 1,
    title: "Beach Cleanup",
    description: "Let's clean up this beach.",
    question: {
            tipoSurvey: 0,
            titleQuestion: "Adam Jahr",
            options : [],
            newQuestion :[]
          }
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

  

 

