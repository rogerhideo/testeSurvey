<template>
 	<div class="items-center justify-center min-h-screen bg-indigo-100 p-12 ">
     	<div class="md:flex-wrap w-4/5 bg-white shadow-md rounded-md border-gray-200 hover:shadow-xl w-min-2xl p-5 "> 
        	<div class="md:flex-wrap md:justify-center md:items-center w-full text-center "> 
				<p class="text-xl text-black" > Titulo </p>
				<p class="text-sm text-gray-500">Descrição </p>
         	</div> 
      	</div>

		<div class="md:flex-wrap w-4/5 bg-white shadow-md rounded-md border-gray-200 hover:shadow-xl w-min-2xl p-5 mt-5 border-l-3 focus:border-blue-500"> 
        	<div class="sm:flex sm:justify-between items-center w-full text-left "> 
				<input 
					type="text" 
					name="description" 
					id="description" 
					placeholder= "Digite a pergunta aqui "
					class="flex w-full sm:w-2/4 outline-none mt-1  p-1 mb-3  bg-gray-100 border-b-2 border-black    shadow-sm sm:text-sm  focus:border-blue-500  rounded-md"
				> 
				<div >

					<span class="text-gray-300"> Tipo de questão </span>
					<div class="inline-block ">
						<button 
							class="ml-1 flex items-center justify-center h-4 w-4 rounded-full ring-2 ring-gray-300 focus:ring-inset  hover:ring-gray-400 focus:outline-none" @click="toggleModal"
						>	
							<svg class=" w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
							</svg>
						</button>
					</div>
				</div>
         	</div> 
			<div v-if="isOpen">
				
					<p>OI!!!!!!!!!!!!</p>

			</div>
      	</div>
	
  	</div>
</template>

<script>
	export default {
		data: () => ({
			isOpen: false
		}),
		methods: {
			toggleModal() {
				this.isOpen = !this.isOpen
			}
  		}
	}
</script>

<style lang="scss" scoped>

</style>