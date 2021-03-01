<template>
    <div class="flex-grow">
      <div class="flex-wrap">
     <div class="flex p-2">		   
        <div class="md:w-3/5 bg-white shadow-md rounded-md border-gray-200 hover:shadow-xl w-min-2xl p-5  border-l-3 focus:border-blue-500"> 
				<div class=" flex-wrap sm:flex sm:justify-between items-center w-full text-center "> 
					<div class="w-full sm:w-8/12">
						<input 
							type="text" 
							name="titleQuestion" 
							id="titleQuestion" 
							placeholder= "Digite a pergunta aqui "
                            v-model="value.titleQuestion"
							class="flex w-full outline-none mt-1  p-1 mb-3  bg-gray-100 border-b-2 border-black    shadow-sm sm:text-sm  focus:border-blue-500  rounded-md"
						> 
					</div>	
					<div>
						<span class="text-gray-400" > {{selectedSet}} </span>
						<div class="inline-block ">
							<button 
								class="ml-1 flex items-center justify-center h-4 w-4 rounded-full ring-2 ring-gray-300   hover:ring-gray-400 focus:outline-none transform hover:scale-110 shadow-sm" @click="toggleModalOptions"
							>	
								<svg class=" w-4 transform hover:scale-110 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
								</svg>
							</button>
						</div>
					</div>
				</div> 
                <div v-if="isOpenSelect">
					<checkBox v-if="realValue.tipoSurvey === 4" v-model="realValue.options"/>
					<listaSuspensa v-if="realValue.tipoSurvey === 5" v-model="realValue.options"/>
					<multiplaEscolha v-if="realValue.tipoSurvey === 3" v-model="realValue.options"/>
					<respostaLonga v-if="realValue.tipoSurvey === 2" v-model="realValue.options"/>
					<respostaCurta v-if="realValue.tipoSurvey === 1" v-model="realValue.options"/>
				</div>
			</div>
			<div class="md:flex-grow-0 h-full  bg-white shadow-md rounded-md border-gray-200 hover:shadow-xl w-min-2xl  border-l-3 focus:border-blue-500 p-5 ml-5" v-if="isOpenOptions" > 
					<div class="flex ">				
							<i
								class="ml-1  mt-1  flex items-center justify-center rounded-full  cursor-pointer transform hover:scale-110  outline-none"
								 @click="value.tipoSurvey = 1"  @click.stop="toggleModalSelected" 
							> 	
								<svg class="w-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
								</svg>
							
							
							<span class="text-gray-300 hover:text-black hover:font-bold ml-2"> Reposta Curta </span>
						</i>
					</div>	
					<div class="flex mt-3">				
							<i
								class="ml-1  mt-1  flex items-center justify-center rounded-full  cursor-pointer transform hover:scale-110  outline-none"
								 @click="value.tipoSurvey = 2"  @click.stop="toggleModalSelected" 
							> 
								<svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
								</svg>
							
							<span class="text-gray-300 hover:text-black hover:font-bold ml-2"> Parágrafo </span>
						</i>
					</div>	
					<div class="flex mt-3">				
							<i
								class="ml-1  mt-1  flex items-center justify-center rounded-full  cursor-pointer transform hover:scale-110  outline-none"
								 @click="value.tipoSurvey = 3"  @click.stop="toggleModalSelected" 
							> 	
								<svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
								</svg>
							
						
							<span class="text-gray-300 hover:text-black hover:font-bold ml-2"> Multiplha Escolha </span>
						</i>
					</div>	
					<div class="flex mt-3">				
							<i
								class="ml-1  mt-1  flex items-center justify-center rounded-full  cursor-pointer transform hover:scale-110  outline-none"
								 @click="value.tipoSurvey = 4"  @click.stop="toggleModalSelected" 
							> 
								
								<svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
								</svg>
							
							<span class="text-gray-300 hover:text-black hover:font-bold ml-2"> Caixa de Seleção </span>
						</i>
					</div>	
					<div class="flex mt-3">				
							<i
								class="ml-1  mt-1  flex items-center justify-center rounded-full  cursor-pointer transform hover:scale-110  outline-none"
								 @click="value.tipoSurvey = 5"  @click.stop="toggleModalSelected" 
							> 
								<svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
								</svg>
							
						
								<span class="text-gray-300 hover:text-black hover:font-bold ml-2"> Lista Suspensa </span>
							</i>
						
					</div>	

			</div>
    </div>
       
        

    </div>  
    </div>
</template>

<script>
    import checkBox from '@/components/surveys/components/checkBox.vue'
    import listaSuspensa from '@/components/surveys/components/listaSuspensa.vue'
    import multiplaEscolha from '@/components/surveys/components/multiplaEscolha.vue'
    import respostaLonga from '@/components/surveys/components/respostaLonga.vue'
    import respostaCurta from '@/components/surveys/components/respostaCurta.vue'

    export default {
        name:"miniSurvey",
        data(){
			return {
				isOpenOptions: false
			}
		},
        props: {
            value: {
                required: false,
                type: Object,
                default: null
            },
            list: {
                required: false,
                type: Object,
                default: null
            }
        },
        components: {
            checkBox,
            listaSuspensa,
            multiplaEscolha,
            respostaLonga,
            respostaCurta
        },
        methods: {
			toggleModalOptions() {
				this.isOpenOptions = !this.isOpenOptions
			},
			toggleModalSelected() {
				    this.isOpenOptions = false
					this.selected = this.selectedSet
					this.value.options = []
			},
            
			emitter(value) {
                 this.$emit("input", value);
            }
                 
        },
        computed:{
            realValue() {
                return this.value ? this.value : this.list;
            },			
			selectedSet(){
				var texto
				switch (this.value.tipoSurvey) {
						case 4:
							texto = 'Caixa de Seleção'
							break
						case 5:
							texto  = 'Lista Suspensa'
							break
						case 3:
							texto  = 'Multiplha Escolha'
							break
						case 2:
							texto  = 'Parágrafo'
							break
						case 1:
							texto  = 'Resposta Curta'
							break
						default:
							texto  = 'Tipo de questão'
							break
						}
				return texto
			},
			isOpenSelect(){
				if (this.value.tipoSurvey !== 0 ){
					return true
				}
				else
					return false
			}	
		}		
    }  
    
</script>

<style lang="scss" scoped>

</style>
