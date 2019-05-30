<template lang="pug">
	.contact
		h1 {{title}}
		.contact
		 	form
		 		.form-group
		 			.input-group-prepend
		 				input(type="text" class="form-control" name="")
		 			.input-group-prepend
		 				input(type="text" class="form-control" name="")
		 			.input-group-prepend
		 				textarea.form-control
		 			button.btn.btn-primary.btn-block Submit
</template>
<script>
	export default{
		name:'blog',
		data (){
			return{
				title:'contact'
			}
		}
	}
</script>

<style scoped>
.contact form{
	max-width: 40em;
	margin: 2em auto;
}
.contact form .form-control{
	margin-bottom: 1em;
}
.contact form textarea{
	min-height: 20em;
}	
</style>