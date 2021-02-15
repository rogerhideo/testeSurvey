<template>
    <div class="w-full">
        <draggable :list="value" :options="{animation:200, handle:'.my-handle'}" >
        <div v-for="(op, index) in value" :key="index" class="flex w-full" >
            <i class="fa fa-arrows my-handle">
                    <svg class="w-5 h-5 mt-2 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
			    </i>
            <input class="mt-2" type="checkbox" value="op.value" id="op.value">
            <label for="op.value" class="w-full">
                            <input 
                                type="text" 
                                placeholder= "Opção 1"
                                v-model= "op.text"
                                class="flex w-full outline-none mt-1  p-1 mb-3 ml-2 border-b-1 border-gray-300    shadow-sm sm:text-sm  focus:border-blue-500  rounded-md"
                            >               
            </label>
            <button 
                class="ml-1 flex items-center justify-center h-6 w-6 rounded-full  focus:ring-inset  hover:ring-gray-400 focus:outline-none" 
            >	
                <svg class="w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
       </div>
       </draggable>
       <div class="flex w-full" >
            <input class="mt-2" type="checkbox" value="vall" id="vall">
            <label for="vall" class="w-full">
                            <input 
                                type="text" 
                                placeholder= "Nova opção"
                                v-model= "inputPayload"
                                @keyup.enter= "addOption"
                                class="flex w-full outline-none mt-1  p-1 mb-3 ml-2 border-b-1 border-gray-300    shadow-sm sm:text-sm  focus:border-blue-500  rounded-md"
                            >               
            </label>
            <button 
                class="ml-1 flex items-center justify-center h-6 w-6 rounded-full  focus:ring-inset  hover:ring-gray-400 focus:outline-none" 
            >	
                <svg class="w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
       </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    export default {
        name: "multiplaEscolhaa",
        data(){
            return{
                inputPayload:'',
                vall : 'check',
                count : 1
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
                this.value.push({
                    text: this.inputPayload,
                    value: this.vall
                })
                this.inputPayload = ''
                this.count += 1
                this.vall = 'check'
                this.vall = this.vall + this.count        
            }                
        }

    }
</script>

<style lang="scss" scoped>

</style>