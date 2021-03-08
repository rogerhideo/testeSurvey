<template>
    <div>
        <div v-if="displayON == false" class="w-full">
            <div class="flex w-full">
                <textarea name="comment" rows="5" placecholder="Enter text here..." v-model= "value.inputPayload" @keyup.enter= "createNewOption" class="flex w-full border-2 outline-none focus:outline-none border-gray-300 "></textarea>
            </div>
            
        </div>
        <div v-if="displayON == true" class="mt-5">                
                <input 
                    type="text" 
                    name="option" 
                    id="option" 
                    placeholder= "Opção"
                    v-model= "inputPayload"
                    class="flex w-full outline-none mt-1 p-1 mb-3  hover:border-b-1 focus:border-b-1 border-gray-300    shadow-sm sm:text-sm  focus:border-blue-500  rounded-md"
                >                                                  
        </div>
    </div>


</template>

<script>
    export default {
        name: "respostaLonga",
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
			emitter(value) {
                 this.$emit("input", value);
            }            
        }
        
    }
</script>

<style lang="scss" scoped>

</style>