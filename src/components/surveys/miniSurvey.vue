<template>
    <div>
     <div class="flex p-5 mx-5">		   
        <div class="md:w-3/5 bg-white shadow-md rounded-md border-gray-200 hover:shadow-xl w-min-2xl p-5 mt-5 border-l-3 focus:border-blue-500"> 
				<div class=" flex-wrap sm:flex sm:justify-between items-center w-full text-left "> 
					<div class="w-full sm:w-8/12">
						<input 
							type="text" 
							name="titleQuestion" 
							id="titleQuestion" 
							placeholder= "Digite a pergunta aqui "
                            v-model="value[valueLength].titleQuestion"
							class="flex w-full outline-none mt-1  p-1 mb-3  bg-gray-100 border-b-2 border-black    shadow-sm sm:text-sm  focus:border-blue-500  rounded-md"
						> 
					</div>	
					<div>
						<span class="text-gray-300"> {{selected}} </span>
						<div class="inline-block ">
							<button 
								class="ml-1 flex items-center justify-center h-4 w-4 rounded-full ring-2 ring-gray-300 focus:ring-inset  hover:ring-gray-400 focus:outline-none" @click="toggleModalOptions"
							>	
								<svg class=" w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
								</svg>
							</button>
						</div>
					</div>
				</div> 
				<div v-if="isOpenSelected">
					<checkBox v-if="value[valueLength].tipoSurvey === 4"/>
					<listaSuspensa v-if="value[valueLength].tipoSurvey === 5"/>
					<multiplaEscolha v-if="value[valueLength].tipoSurvey === 3"/>
					<respostaLonga v-if="value[valueLength].tipoSurvey === 2"/>
					<respostaCurta v-if="value[valueLength].tipoSurvey === 1"/>
				</div>
			</div>
			<div class="md:flex-grow-0 bg-white shadow-md rounded-md border-gray-200 hover:shadow-xl w-min-2xl  border-l-3 focus:border-blue-500 p-5 mt-5 ml-5" v-if="isOpenOptions" > 
					<div class="flex ">				
							<button 
								class="ml-1  mt-1 flex items-center justify-center h-4 w-4 rounded-full   focus:ring-inset  hover:ring-gray-400 outline-none" @click.stop="toggleModalSelected" @click="value[valueLength].tipoSurvey = 1" 
							
							>	
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
								</svg>
							</button>
						<div class="inline-block">	
							<span class="text-black ml-2"> Reposta Curta </span>
						</div>
					</div>	
					<div class="flex mt-3">				
							<button 
								class="ml-1  mt-1 flex items-center justify-center h-4 w-4 rounded-full   focus:ring-inset  hover:ring-gray-400 outline-none" @click.stop="toggleModalSelected"
								 @click="value[valueLength].tipoSurvey = 2" 
							>	
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
								</svg>
							</button>
						<div class="inline-block">	
							<span class="text-black ml-2"> Parágrafo </span>
						</div>
					</div>	
					<div class="flex mt-3">				
							<button 
								class="ml-1  mt-1 flex items-center justify-center h-4 w-4 rounded-full   focus:ring-inset  hover:ring-gray-400 outline-nonee" @click.stop="toggleModalSelected"  @click="value[valueLength].tipoSurvey = 3"
							>	
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M4.649 3.084A1 1 0 015.163 4.4 13.95 13.95 0 004 10c0 1.993.416 3.886 1.164 5.6a1 1 0 01-1.832.8A15.95 15.95 0 012 10c0-2.274.475-4.44 1.332-6.4a1 1 0 011.317-.516zM12.96 7a3 3 0 00-2.342 1.126l-.328.41-.111-.279A2 2 0 008.323 7H8a1 1 0 000 2h.323l.532 1.33-1.035 1.295a1 1 0 01-.781.375H7a1 1 0 100 2h.039a3 3 0 002.342-1.126l.328-.41.111.279A2 2 0 0011.677 14H12a1 1 0 100-2h-.323l-.532-1.33 1.035-1.295A1 1 0 0112.961 9H13a1 1 0 100-2h-.039zm1.874-2.6a1 1 0 011.833-.8A15.95 15.95 0 0118 10c0 2.274-.475 4.44-1.332 6.4a1 1 0 11-1.832-.8A13.949 13.949 0 0016 10c0-1.993-.416-3.886-1.165-5.6z" clip-rule="evenodd" />
								</svg>
							</button>
						<div class="inline-block">	
							<span class="text-black ml-2"> Multiplha Escolha </span>
						</div>
					</div>	
					<div class="flex mt-3">				
							<button 
								class="ml-1  mt-1 flex items-center justify-center h-4 w-4 rounded-full   focus:ring-inset  hover:ring-gray-400 outline-none" @click.stop="toggleModalSelected"  @click="value[valueLength].tipoSurvey = 4"
							>	
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
								</svg>
							</button>
						<div class="inline-block">	
							<span class="text-black ml-2"> Caixa de Seleção </span>
						</div>
					</div>	
					<div class="flex mt-3">				
							<button 
								class="ml-1  mt-1 flex items-center justify-center h-4 w-4 rounded-full   focus:ring-inset  hover:ring-gray-400 outline-nonee" @click.stop="toggleModalSelected"  @click="value[valueLength].tipoSurvey = 5"
							> 
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
								</svg>
							</button>
						<div class="inline-block">	
							<span class="text-black ml-2"> Lista Suspensa </span>
						</div>
					</div>	

			</div>
    </div>        
    </div>
</template>

<script>
    import checkBox from '@/components/surveys/checkBox.vue';
    import listaSuspensa from '@/components/surveys/listaSuspensa.vue';
    import multiplaEscolha from '@/components/surveys/multiplaEscolha.vue';
    import respostaLonga from '@/components/surveys/respostaLonga.vue';
    import respostaCurta from '@/components/surveys/respostaCurta.vue';

    export default {
        data(){
			return {
				isOpenOptions: false,
				isOpenSelected: false,
				selected: 'Tipo de questão'
			}
		},
        props: {
            value: {
                required: false,
                type: Array,
                default: null
            },
            list: {
                required: false,
                type: Array,
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
				this.isOpenSelected = true
				this.isOpenOptions = false
                console.log('antes case > ' + this.value[this.valueLength].tipoSurvey)
                switch (this.value[this.valueLength].tipoSurvey) {
                    case 5:
                        console.log('55555 ')
                        this.selected = 'Caixa de Seleção';
                        break;
                    case 4:
                        console.log('44444')
                        this.selected = 'Lista Suspensa';
                        break;
                    case 3:
                        console.log('33333')
                        this.selected = 'Multiplha Escolha';
                        break;
                    case 2:
                        console.log('22222')
                        this.selected = 'Parágrafo';
                        break;
                    case 1:
                        console.log('1111')
                        this.selected = 'Resposta Curta';
                        break;
                    }
                    console.log('dps case > ' + this.value[this.valueLength].tipoSurvey)
			},
			emitter(value) {
                 this.$emit("input", value);
            }
                 
        },
        computed:{
            realValue() {
                return this.value ? this.value : this.list;
            },
            valueLength(){
                return this.value.length -1 ;
            }
        }  
    }
</script>

<style lang="scss" scoped>

</style>
