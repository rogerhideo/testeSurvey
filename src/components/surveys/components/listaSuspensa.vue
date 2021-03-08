<template>
    <div>
        <div v-if="displayON == false" class="w-full">
            <draggable :list="value"  animation="200"  handle=".my-handle" >          
                <div v-for="(op, index) in value" :key="index" class="flex w-full">
                    <button 
                        class="ml-1 flex items-center justify-center h-6 w-6 rounded-full  focus:ring-inset  hover:ring-gray-400 focus:outline-none fa fa-arrows my-handle cursor-move transform hover:scale-110" 
                    >	
                        <svg class="w-5 h-5 mt-2 mr-2 opacity-40 hover:opacity-70 transform hover:scale-110" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                        </svg>                   
                    </button>
                    <input 
                        type="text" 
                        name="option" 
                        id="option" 
                        placeholder= "Opção"
                        v-model= "op.text"
                        class="flex w-full outline-none mt-1  p-1 mb-3  border-b-1 border-gray-300    shadow-sm sm:text-sm  focus:border-blue-500  rounded-md"
                    >  
                    <button 
                        class="ml-1 flex items-center justify-center h-6 w-6 rounded-full  focus:ring-inset  hover:ring-gray-400 focus:outline-none transform hover:scale-110" @click="removeOption(index)"
                    >	
                        <svg class="w-3 mt-3 opacity-40 hover:opacity-70 transform hover:scale-110" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>             
                </div>	
            </draggable>
            <div class="flex">
                <input 
                    type="text" 
                    name="option" 
                    id="option" 
                    placeholder= "Digite aqui uma opção"
                    v-model= "inputPayload"
                    @keyup.enter= "addOption"
                    class="flex w-full outline-none mt-1 ml-7 p-1 mb-3 border-b-1 border-gray-300 shadow-sm sm:text-sm  focus:border-blue-500  rounded-md"
                >
                <button 
                        class="ml-1 flex items-center justify-center h-6 w-6 rounded-full  focus:ring-inset  hover:ring-gray-400 focus:outline-none transform hover:scale-110" 
                    >	
                    <svg class="w-3 mt-3 opacity-40 hover:opacity-70 transform hover:scale-110" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="flex">
                <div  class="flex-grow-0 ml-8">
                    <p @click="addOption" class="inline-block text-sm text-blue-500 transform hover:scale-105  cursor-pointer ">
                        Adicionar Nova Opção
                    </p>
                </div>
            </div>
        </div>
        <div v-if="displayON == true" class="mt-5">
            <div v-for="(op, index) in value" :key="index" class="flex w-full">
                <input 
                    type="text" 
                    name="option" 
                    id="option" 
                    placeholder= "Opção"
                    v-model= "op.text"
                    class="flex w-full outline-none mt-1  p-1 mb-3  border-b-1 border-gray-300    shadow-sm sm:text-sm  focus:border-blue-500  rounded-md"
                >            
            </div>	   
        </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    export default {
        name: "listaSuspensa",
        data(){
            return{
                inputPayload:''
            }
        },
         components: {
            draggable
        },
        props: {
            value: {
                required: false,
                type: Array,
                default: null
            }, 
            displayON: {
                required: false,
                type: Boolean,
                default: false
            }      
        },
        methods: {
            addOption(){
                this.value.push({
                     text: this.inputPayload
                })
                this.inputPayload = ''
            },          
            removeOption(index){
                this.value.splice(index, 1);
            }   
                 
        }

    }
</script>

<style lang="scss" scoped>

</style>