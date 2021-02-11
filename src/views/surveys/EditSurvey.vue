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
		<div v-for="(quest, index) in survey.question" :key="index" class="flex-wrap" >
			<miniSurvey :value="quest"/>
		</div>
		<div class='w-full '>
							<div  class="flex w-full md:w-3/5 ">
									<button 
										type="submit"
										@click="creteNewQuestion"
										class="btn bg-white text-red-300  border-gray-300 border-1 hover:bg-gray-300 hover:text-white transition ease-out duration-500 flex-grow hover:shadow-xl w-3/5 focus:outline-none "
									>
										+ Adicionar questão
									</button>
							</div>
		</div>				
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
							tipoSurvey: 0,
							titleQuestion: '',
							options:  []
						}]
						}

					},
					creteNewQuestion(){								
						this.survey.question.push({
							tipoSurvey: 0,
							titleQuestion: '',
							options:[]
						})
          			}
				}
			} 
			
	

</script>

<style lang="scss" scoped>
</style>