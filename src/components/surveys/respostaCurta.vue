<template>
    <div class="w-full">
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
        <input 
                type="text" 
                name="option" 
                id="option" 
                placeholder= "Nova Opção"
                v-model= "inputPayload"
                @keyup.enter= "addOption"
                class="flex w-full outline-none mt-1  p-1 mb-3  border-b-1 border-gray-300    shadow-sm sm:text-sm  focus:border-blue-500  rounded-md"
            > 
    </div>
</template>

<script>
    export default {
        name: "respostaCurta",
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