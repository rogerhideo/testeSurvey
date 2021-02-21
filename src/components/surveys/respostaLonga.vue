<template>
    <div class="w-full">
        <div class="flex w-full">
            <textarea name="comment" rows="5" placecholder="Enter text here..." v-model= "value.inputPayload" @keyup.enter= "createNewOption" class="flex w-full border-2 outline-none focus:outline-none border-gray-300 "></textarea>
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