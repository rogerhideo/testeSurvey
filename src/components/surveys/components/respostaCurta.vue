<template>
    <div>
        <div v-if="displayON == false" class="w-full">
            <div class="flex">
                <input 
                    type="text" 
                    name="option" 
                    id="option" 
                    placeholder= "Digite aqui a resposta"
                    v-model= "inputPayload"
                    class=" mt-1  ml-7 p-1 mb-3  flex w-full outline-none hover:border-b-2 focus:border-b-2 border-gray-300    shadow-sm sm:text-sm  focus:border-blue-500  rounded-md"
                >
            </div>
        </div>
        <div v-if="displayON == true" class="mt-5">                
                <input 
                    type="text" 
                    name="option" 
                    id="option" 
                    v-model= "inputPayload"
                    class="flex w-full outline-none mt-1 p-1 mb-3  hover:border-b-1 focus:border-b-1 border-gray-300    shadow-sm sm:text-sm  focus:border-blue-500  rounded-md"
                >                                                  
        </div>
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
                type: Array,
                default: null
            }, 
            displayON: {
                required: false,
                type: Boolean,
                default: false
            }      
        }
    }
</script>

<style lang="scss" scoped>

</style>