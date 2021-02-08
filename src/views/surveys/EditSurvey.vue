<template>
 	<div class="items-center justify-center min-h-screen bg-indigo-100 p-12 ">
		 
     	<div class="md:flex-wrap w-full bg-white shadow-md rounded-md border-gray-200 hover:shadow-xl w-min-2xl p-5 "> 
        	<div class="md:flex-wrap md:justify-center md:items-center w-full text-center "> 
				<input 
					type="text" 
					name="title" 
					id="title" 
					placeholder= "Título do formulário"
					v-model= "survey.title"
					class="flex w-full outline-none mt-1  p-1 mb-3 text-2xl border-b-1 border-gray-300    shadow-sm sm:text-sm  focus:border-blue-500  rounded-md"
				> 
				<input 
					type="text" 
					name="description" 
					id="description" 
					placeholder= "Descrição do formulário"
					v-model= "survey.description"
					class="flex w-full outline-none mt-1  p-1 mb-3 text-gray-300 border-b-1 border-gray-300    shadow-sm sm:text-sm  focus:border-blue-500  rounded-md"
				> 
				
         	</div> 
      	</div>

		<miniSurvey v-model="survey.question"/>

  	</div>
</template>


<script>
import miniSurvey from '@/components/surveys/miniSurvey.vue';
export default {		
		data(){
			return{
				survey: this.createFreshSurveyObject()
			}
		},
		props: {
			titleProps: {
				type: String,
				default: ''
			},
			descriptionProps: {
				type: String,
				default: ''
			},
		},
		components: {
			miniSurvey
		},
		methods:{
			 createFreshSurveyObject() {
                const id = Math.floor(Math.random() * 10000000)

                return {
                    id: id,
                    title: this.titleProps,
                    description: this.descriptionProps,
                    question: [{
                          tipoSurvey:0,
                          titleQuestion: '',
                          options: [],
                          newQuestion: []
                          }

                    ]
                }
            } 
		}
	}

</script>

<style lang="scss" scoped>
</style>