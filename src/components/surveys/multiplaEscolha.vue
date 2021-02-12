<template>
    <div class="w-full">
        <div v-for="(op, index) in value" :key="index" class="flex w-full" >
            <input type="radio" value="op.value" id="op.value">
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
       <div class="flex w-full" >
            <input type="radio" value="vall" id="vall">
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
    export default {
        name: "multiplaEscolhaa",
        data(){
            return{
                inputPayload:'',
                vall : 'check',
                count : 1
            }
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
                console.log('add')
                this.value.push({
                    text: this.inputPayload,
                    value: this.vall
                })
                this.inputPayload = ''
                this.count += 1
                this.vall = 'check'
                this.vall = this.vall + this.count     
                 console.log('fiim')      
            }                
        }

    }
</script>

<style lang="scss" scoped>

</style>