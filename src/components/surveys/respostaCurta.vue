<template>
    <div class="w-full">
        <div class="flex w-full">
            <input 
                type="text" 
                name="option" 
                id="option" 
                placeholder= "Opção"
                v-model= "value.inputPayload"
                @keyup.enter= "createNewOption"
                class="flex w-full outline-none mt-1  p-1 mb-3  border-b-1 border-gray-300    shadow-sm sm:text-sm  focus:border-blue-500  rounded-md"
            >             
		</div>	
        <div class="flex w-full">
            <respostaCurta  v-model="realValue.options"/> 
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
            },
            list: {
                required: false,
                type: Object,
                default: null
            }
        },
        methods: {
			emitter(value) {
                 this.$emit("input", value);
            },
            createNewOption(){
                this.value.options = {
                    inputPayload: '',
					options:{}
                }
            }
                 
        },
        computed:{
            realValue() {
                return this.value ? this.value : this.list;
            }         
        }  
    }
</script>

<style lang="scss" scoped>

</style>