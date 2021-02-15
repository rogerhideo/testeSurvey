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
		<draggable :list="survey.question" :options="{animation:200, handle:'.my-handle'}">
		<div v-for="(quest, index) in survey.question" :key="index" class="flex-wrap w-full" >
			<div class="flex items-center justify-center w-full ">
				<div class="w-10 h-full bg-white opacity-0 hover:opacity-60 items-center flex justify-center transition duration-500 ease-in-out">
					<i class="fa fa-arrows my-handle">
						<svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
						</svg>

					</i>
				</div>
			<miniSurvey :value="quest"/>
			</div>
			<div v-if="survey.question.length > 1 && index < survey.question.length -1" class="flex w-3/5 justify-center">
									<button 
										type="submit"
										@click="creteNewQuestion"
										class="btn bg-white text-red-300  border-gray-300 border-1  transition ease-out duration-500 flex-shrink-0 hover:shadow-xl  opacity-0 hover:opacity-60 focus:outline-none "
									>
										 + questão
									</button>
			</div>
		</div>
		</draggable>
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
	import draggable from 'vuedraggable'
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
				miniSurvey,
				draggable
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