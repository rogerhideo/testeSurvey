<template>
    <div class="w-full">
        <div class="flex w-full items-center">
        
                    <input 
                        type="text" 
                        name="option" 
                        id="option" 
                        placeholder= "Opção 45"
                        v-model= "inputPayload"
                        @keyup.enter= "addOption"
                        class="flex w-full outline-none mt-1  p-1 mb-3  border-b-1 border-gray-300    shadow-sm sm:text-sm  focus:border-blue-500  rounded-md"
                    > 
                    
                    
                
        </div>
    </div>
</template>

<script>
    export default {
        name: "multiplaEscolhaa",
        data(){
            return{
                inputPayload:''
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
                console.log('adddddddd')
                this.value.options.push({
                    text: this.inputPayload
                })            
            }                
        }

    }
</script>

<style lang="scss" scoped>

</style>