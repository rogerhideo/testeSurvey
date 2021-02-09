<template>
    <div>
        <div class="flex w-full">
            <input 
                type="text" 
                name="option" 
                id="option" 
                placeholder= "Opção"
                v-model= "value.inputPayload"
                @input= "createNewOption"
                class="flex w-full outline-none mt-1  p-1 mb-3  border-b-1 border-gray-300    shadow-sm sm:text-sm  focus:border-blue-500  rounded-md"
            >      
            <respostaCurta v-if="value.options.inputPayload === 1" v-model="value.options"/>    
		</div>	
        
    </div>
</template>

<script>
    import respostaCurta from '@/components/surveys/respostaCurta.vue';
    export default {
        components:{
            respostaCurta
        },
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
                    inputPayload: 1,
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