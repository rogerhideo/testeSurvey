<template>
<div class="flex  justify-center min-h-screen">
	<div class="flex-wrap min-h-screen w-full justify-center bg-indigo-100 p-8 ">
			
		<div class="md:flex-wrap w-3/5 bg-white shadow-md rounded-md border-gray-200 hover:shadow-xl p-5 ml-6 mb-3 "> 
			<div class=" w-11/12">
				<div class="md:flex-wrap md:justify-center md:items-center w-full text-center "> 
					
					<input 
						type="text" 
						name="title" 
						id="title" 
						placeholder= "Título do formulário"
						v-model= "survey.title"
						class="flex w-full outline-none text-center text-3xl border-b-2 border-gray-100  shadow-sm  focus:border-blue-500  rounded-md  mt-1  p-1 mb-3"
					> 
					
					<input 
						type="text" 
						name="description" 
						id="description" 
						placeholder= "Descrição do formulário"
						v-model= "survey.description"
						class="flex w-full outline-none mt-1 p-1 mb-3 text-center text-xl text-gray-500 border-b-2 border-gray-100    shadow-sm sm:text-sm  focus:border-blue-500  rounded-md"
					> 
					
				</div> 
			</div>
		</div>
		<div v-if="survey.question.length === 1" class='w-full '>
			<div  class="flex w-3/5 justify-end">
				<div class=" w-11/12">
					<button 
						type="submit"
						@click="saveIn"
						class="btn bg-white text-blue-200  border-blue-300 border-1 hover:bg-gray-50 hover:text-red-100 transition ease-out duration-500 flex-grow hover:shadow-xl w-full focus:outline-none "
					>
						Salvar mudanças
					</button>
				</div>
			</div>
		</div>
		<draggable :list="survey.question" :options="{animation:200, handle:'.my-handle'}">
			<div v-for="(quest, index) in survey.question" :key="index" class="flex-wrap w-full" >
				<div class="flex items-center justify-center w-full m-0 ">
					<div class="w-8 min-h-full flex-wrap ">
						<div class="bg-white hover:shadow-md rounded-full justify-center items-center mb-5  flex-grow transform hover:scale-110  opacity-20 hover:opacity-70  transition duration-500 ease-in-out">
							<i class="fa fa-arrows my-handle cursor-pointer  transform hover:scale-110" @click="removeOption(index)">
								<svg class="w-5 transform hover:scale-110 ml-1"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</i>
						</div>
						<div class="bg-white hover:shadow-md rounded-full justify-center items-center mt-5  flex-grow transform hover:scale-110  opacity-20 hover:opacity-70  transition duration-500 ease-in-out">
							<i class="fa fa-arrows my-handle cursor-move transform hover:scale-110 ">
								<svg class="w-5 transform hover:scale-110 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
								</svg>
							</i>
						</div>
					</div>
				<miniSurvey :value="quest"/>
				</div>
				<div v-if="survey.question.length > 1 && index < survey.question.length -1" class="flex w-3/5 justify-center items-center opacity-0 hover:opacity-70 transform scale-y-50 hover:scale-100  transition ease-out duration-700 ml-6 ">
					<div class="flex w-2/5 ">
						<button 
							type="submit"
							@click="saveIn"
							class="mr-3 w-full rounded-full uppercase text-xs font-bold tracking-wider cursor-pointer bg-white text-blue-300  border-blue-300 border-1 py-1 px-2 flex-shrink-0 hover:shadow-xl   focus:outline-none "
						>
								Save 
								<svg class="w-3 inline-block mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
						</button>
					</div>
					<div class="flex w-2/5 ">
						<button 
							type="submit"
							@click="createMiddleQuestion(index)"
							class="w-full rounded-full uppercase text-xs font-bold tracking-wider cursor-pointer bg-white text-red-300  border-red-300 border-1 py-1 px-2 ml-3 flex-shrink-0 hover:shadow-xl   focus:outline-none "
						>
							<svg class="w-3 inline-block mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							questão
						</button>
					</div>
				</div>
			</div>
		</draggable>
		<div class='w-full '>
			<div  class="flex w-3/5 justify-end">
				<div class=" w-11/12">
					<button 
						type="submit"
						@click="createNewQuestion"
						class="btn bg-white text-red-200  border-gray-300 border-1 hover:bg-gray-50 hover:text-blue-200 transition ease-out duration-500 flex-grow hover:shadow-xl w-full focus:outline-none "
					>
						+ Adicionar questão
					</button>
				</div>
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
					survey: {}
				}
			},
			components: {
				miniSurvey,
				draggable
			},
			methods:{
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
					},				
					removeOption(index){
						this.survey.question.splice(index, 1);
					},
					saveIn(){
						  this.$store
								.dispatch("survey/updateSurveys", this.survey)
								.then(() => {
									console.log('save ok')
								})
								.catch(() => {
									//NProgress.done()
									console.log('catch')
								})
					}
			},
			created() {
				this.survey = this.$route.params.survey
				}
			} 
			
	

</script>

<style lang="scss" scoped>
</style>