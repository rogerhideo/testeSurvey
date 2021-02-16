<template>
    <div class="w-full">
        <draggable :list="value" :options="{animation:200, handle:'.my-handle'}" >
        <div v-for="(op, index) in value" :key="index" class="flex w-full">
            <button 
                    class="ml-1 flex items-center justify-center h-6 w-6 rounded-full  focus:ring-inset  hover:ring-gray-400 focus:outline-none fa fa-arrows my-handle" 
                >	
                    <svg class="w-3 h-3 mt-2 mr-2 opacity-40 hover:opacity-70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                         
		</div>	
        </draggable>
        <input 
                type="text" 
                name="option" 
                id="option" 
                placeholder= "Nova Opção"
                v-model= "inputPayload"
                @keyup.enter= "addOption"
                class="flex w-full outline-none mt-1  p-1 mb-3  border-b-1 border-gray-300    shadow-sm sm:text-sm  focus:border-blue-500  rounded-md"
            >
        <button 
                class="ml-1 flex items-center justify-center h-6 w-6 rounded-full  focus:ring-inset  hover:ring-gray-400 focus:outline-none" 
            >	
                <svg class="w-3 mt-3 opacity-40 hover:opacity-70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
        </button> 
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    export default {
        name: "respostaCurta",
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
                type: Object,
                default: null
            }     
        },
        methods: {
            addOption(){
                console.log('adddddddd')
                this.value.push({
                     text: this.inputPayload
                })
                this.inputPayload = ''
            }
                 
        }

    }
</script>

<style lang="scss" scoped>

</style>