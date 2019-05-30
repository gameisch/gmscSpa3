<template lang="pug">
	.blog
		h1 {{title}}
		.row
			.col-md-4
				.card
					.card-header
						h3 Vus.js
					.card-body
						| cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			.col-md-4
				.card
					.card-header
						h3 Angular
					.card-body
						| cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			.col-md-4
				.card
					.card-header
						h3 React
					.card-body
						| cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</template>
<script>
	export default{
		name:'blog',
		data (){
			return{
				title:'Blog'
			}
		}
	}
</script>

<style scoped lang="scss">
	
</style>