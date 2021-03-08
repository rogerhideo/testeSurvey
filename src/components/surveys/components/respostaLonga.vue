<template>
    <div>
        <div v-if="displayON == false" class="w-full">
            <div class="flex w-full">
                <textarea name="comment" rows="5" placecholder="Enter text here..." v-model= "value.text" @keyup.enter= "createNewOption" class="flex w-full border-2 outline-none focus:outline-none border-gray-300 "></textarea>
            </div>          
        </div>
        <div v-if="displayON == true" class="mt-5">                
            <div class="flex w-full">
                <textarea name="comment" rows="5" placecholder="Enter text here..." v-model= "value.text" @keyup.enter= "createNewOption" class="flex w-full border-2 outline-none focus:outline-none border-gray-300 "></textarea>
            </div>                                               
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
        },	
        mounted () {
            this.value.push({text :''})	
        }
        
    }
</script>

<style lang="scss" scoped>

</style>