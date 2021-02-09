<template>
    <div>
        <div class="flex w-full">
            <input 
                type="text" 
                name="description" 
                id="description" 
                placeholder= "Resposta aqui"
                v-model= "value.inputPayload"
                @input= "createNewOption"
                class="flex w-full outline-none mt-1  p-1 mb-3  border-b-1 border-gray-300    shadow-sm sm:text-sm  focus:border-blue-500  rounded-md"
            >          
		</div>	
        <respostaCurta v-if="realValue.options[0]" v-model="realValue.options"/>
    </div>
</template>

<script>
    export default {
    
        props: {
            value: {
                required: false,
                type: Array,
                default: null
            },
            list: {
                required: false,
                type: Array,
                default: null
            }
        },
        methods: {
			emitter(value) {
                 this.$emit("input", value);
            },
            createNewOption(){
                var newOption = {
                    inputPayload: '',
					options:[]
                }
                this.value.options.push(newOption)
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