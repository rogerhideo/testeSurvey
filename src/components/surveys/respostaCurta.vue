<template>
    <div class="w-full">
        <div v-for="(op, index) in value" :key="index" class="flex w-full">
            <input 
                type="text" 
                name="option" 
                id="option" 
                placeholder= "Opção"
                v-model= "op.inputPayload"
                @keyup.enter= "addOption"
                class="flex w-full outline-none mt-1  p-1 mb-3  border-b-1 border-gray-300    shadow-sm sm:text-sm  focus:border-blue-500  rounded-md"
            >             
		</div>	
    </div>
</template>

<script>
    export default {
        name: "respostaCurta",
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
                    inputPayload: ''
                })
              
            }
                 
        }

    }
</script>

<style lang="scss" scoped>

</style>