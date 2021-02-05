<template>
    
  <div class="flex justify-center items-center min-h-screen bg-indigo-100 p-12 ">
     <div class="min-w-full sm:flex-wrap  sm:min-w-0 sm:w-6/12 bg-white shadow-md rounded-md border-gray-200 hover:shadow-xl  p-5"> 
        <div class="md:flex-wrap md:justify-center md:items-center w-full text-center "> 
            <label for="survey_name" class="block text-sm font-medium text-gray-700 p-1">Título o questionáro:</label>
								<input 
									type="text" 
									placeholder= "Digite o titulo do questionário"
									class="flex-shrink-0 sm:flex w-11/12 outline-none mt-1  p-1 mx-3 bg-gray-100 border-2  hover:bg-white shadow-sm sm:text-sm border-blue-300 focus:border-blue-500 focus:bg-white rounded-md"
								>

            <label for="description" class="block text-sm font-medium text-gray-700 p-1">Descrição:</label>

								<input 
									type="text" 
									name="description" 
									id="description" 
                  placeholder= "Digite o titulo do questionário"
									class="flex-shrink-0 sm:flex w-11/12 outline-none mt-1  p-1 mb-3 mx-3 bg-gray-100 border-2   hover:bg-white shadow-sm sm:text-sm border-blue-300 focus:border-blue-500 focus:bg-white rounded-md"
								>      
              
         </div> 
          <div class="flex w-full sm:justify-between items-center p-2" >
          
              <a href="/" class="btn text-red-400  border-red-400 border-2 hover:bg-red-400 hover:text-white transition ease-out duration-500  ml-1">Cancelar</a>
            
              <a href="/editsurvey" class="btn text-blue-400  border-blue-400 border-2 hover:bg-blue-400 hover:text-white transition ease-out duration-500 flex-shrink-0 mr-3">Criar Survey</a>
            
          </div>  
      </div>
  </div>
</template>

<script>
      export default {
            
      }
</script>

<style lang="scss" scoped>
</style>