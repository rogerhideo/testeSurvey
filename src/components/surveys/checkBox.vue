<template>
    <div>
        <div class="flex w-full items-center">
            <input type="checkbox" id="checkk" name="checkk"
                    checked>
            <label for="checkk" class="w-full items-center mt-2  " >
                <div class="flex">
                    <input 
                        type="text" 
                        name="description" 
                        id="description" 
                        placeholder= "Opção 1"
                        class="flex w-full outline-none mt-1  p-1 mb-3 ml-2 border-b-1 border-gray-300    shadow-sm sm:text-sm  focus:border-blue-500  rounded-md"
                    > 
                    <div class="mt-2">
                        <button 
                            class="ml-1 flex items-center justify-center h-6 w-6 rounded-full  focus:ring-inset  hover:ring-gray-400 focus:outline-none" @click="toggleModalOptions"
                        >	
                            <svg class="w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    
                </div>	
            </label>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>