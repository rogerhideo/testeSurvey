<template>

<div class="grid md:items-center md:grid-cols-3 md:flex md:justify-center min-h-screen">
	<div class="md:col-span-1 md:flex md:justify-end p-5 items-center " >

			<a href="/newsurvey" class="btn text-blue-400 ml-2 border-blue-400 border-2 hover:bg-blue-400 hover:text-white transition ease-out duration-500 d ">New Survey</a>
		
	</div>

	<div class="md:col-span-2 flex flex-col mt-2">
		<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="py-2 align-middle inline-block max-w-550 min-w-300 sm:px-6 lg:px-8">
				<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
					<table class="min-w-full divide-y divide-gray-200">
						<thead class="bg-gray-50">
							<tr>
								<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Name
								</th>
								<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Title
								</th>
								<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Email
								</th>
								<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Index
								</th>
								<th scope="col" class="relative px-6 py-3">
									<span class="sr-only">Edit</span>
								</th>
							</tr>
						</thead>
						<tbody>

							<tr class="bg-white">
								<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
									Jane Cooper
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									Regional Paradigm Technician
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									jane.cooper@example.com
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									Admin
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
									<a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
								</td>
								
							</tr>
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
		
	}
</script>

<style lang="scss" scoped>

</style>