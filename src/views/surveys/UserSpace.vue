<template>

<div class="grid items-center grid-cols-3 justify-center min-h-screen">
	<div class="col-span-1  flex justify-end p-5 mr-5 items-center " >

			<a href="/newsurvey" class="btn text-blue-400 ml-2 border-blue-400 border-2 hover:bg-blue-400 hover:text-white transition ease-out duration-500 d ">New Survey</a>
		
	</div>

	<div class="col-span-2  mt-2">
		<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="py-2 align-middle inline-block max-w-550 min-w-300 sm:px-6 lg:px-8">
				<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
					<table class="flex-grow divide-y divide-gray-200">
						<thead class="bg-gray-50" >
							<tr class="flex justify-between">
								<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									ID
								</th>
								<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Title Da Survey
								</th>
								<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Descrição
								</th>
								<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Nº de Questões
								</th>
								<th scope="col" class="relative px-6 py-3 text-left text-xs font-medium">
									
									<span class="sr-only">Edit</span>
								</th>
							</tr>
						</thead>
						<tbody>
							<div v-for="(surv, index) in getSurveys" :key="index" class="flex w-full">
								<tr class="bg-white flex ">
									<td scope="col" class="px-6 py-4 text-left whitespace-nowrap text-sm font-medium text-gray-900">
										{{ surv.id }}
									</td>
									<td scope="col" class="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-500">
										{{ surv.title }}
									</td>
									<td scope="col" class="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-500">
										{{ surv.description }}
									</td>
									<td scope="col" class="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-500 tracking-wider">
										{{ surv.question.length }}
									</td>
									<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium tracking-wider">
										
										<a href="#" @click="editSurvey(surv.id)" class="text-indigo-600 hover:text-indigo-900">Edit</a>
									</td>
									
								</tr>
							</div>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	export default {
		name: "UserSpace",
	methods:{
		editSurvey(id){
				this.$router.push({ name: "edit-survey", params: { id : id }})
		}
	},
	computed: {
      getSurveys() {
        return this.$store.state.survey.surveys;
      }
	
	}
	}
</script>

<style lang="scss" scoped>

</style>