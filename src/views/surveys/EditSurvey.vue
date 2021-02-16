<template>
 	<div class="items-center justify-center min-h-screen bg-indigo-100 p-12 ">
		 
     	<div class="md:flex-wrap w-3/5 bg-white shadow-md rounded-md border-gray-200 hover:shadow-xl p-3 ml-6 "> 
		 	<div class=" w-11/12">
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
      	</div>
		<draggable :list="survey.question" :options="{animation:200, handle:'.my-handle'}">
		<div v-for="(quest, index) in survey.question" :key="index" class="flex-wrap w-full" >
			<div class="flex items-center justify-center w-full ">
				<div class="w-8 min-h-full bg-white opacity-20 hover:opacity-70 items-center flex justify-center transition duration-500 ease-in-out hover:shadow-md rounded-full">
					<i class="fa fa-arrows my-handle">
						<svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
						</svg>
					</i>
				</div>
			<miniSurvey :value="quest"/>
			</div>
			<div v-if="survey.question.length > 1 && index < survey.question.length -1" class="flex w-3/5 justify-center items-center opacity-0 hover:opacity-70 transition ease-out duration-500">
									<button 
										type="submit"
										@click="createMiddleQuestion(index)"
										class="rounded-full uppercase text-xs font-bold tracking-wider cursor-pointer bg-white text-red-300  border-gray-300 border-1 py-1 px-2 flex-shrink-0 hover:shadow-xl   focus:outline-none "
									>
										 + questão
									</button>
			</div>
		</div>
		</draggable>
		<div class='w-full '>
							<div  class="flex w-3/5 justify-end">
								<div class=" w-11/12">
									<button 
										type="submit"
										@click="createNewQuestion"
										class="btn bg-white text-red-300  border-gray-300 border-1 hover:bg-gray-100 hover:text-blue-200 transition ease-out duration-500 flex-grow hover:shadow-xl w-full focus:outline-none "
									>
										+ Adicionar questão
									</button>
								</div>
							</div>
		</div>				
  	</div>
</template>


<script>
	import draggable from 'vuedraggable'
	import miniSurvey from '@/components/surveys/miniSurvey.vue';
	export default {	
			name:"EditSurvey",	
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
					createNewQuestion(){								
						this.survey.question.push({
							tipoSurvey: 0,
							titleQuestion: '',
							options:[]
						})
          			},
					freshObject(){								
						return{
							tipoSurvey: 0,
							titleQuestion: '',
							options:[]
						}
          			},  
					createMiddleQuestion(index){
						var saveQuestion = this.freshObject()
						var nextQuestion = this.freshObject()
						index += 1 
						if (index === this.survey.question.length -1 ){
							nextQuestion = this.survey.question[index]
							console.log('id index')
						}
						saveQuestion = this.survey.question[index];	
						this.survey.question[index] = this.freshObject() 
						index += 1
						for(var i = index ; i < this.survey.question.length ; i++) {
							nextQuestion = this.survey.question[i]	
							this.survey.question[i] = saveQuestion 
							saveQuestion = nextQuestion												
						}
						this.survey.question.push(nextQuestion)
					}
				}
			} 
			
	

</script>

<style lang="scss" scoped>
</style>