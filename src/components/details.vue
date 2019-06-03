<template lang="pug">
	.details
		.container
			.row
				.col-md-12(v-for="(product,index) in products" :key="index")
					div(v-if="proId == product.productId")
						h1 {{product.productTitle}}
						img(:src="product.image" class="img-fluid")
</template>
<script>
	export default{
		name:'details',
		data(){
			return{
				proId:this.$route.params.Pid,
				title:"details",
				products:[
				  	{
						productTitle:"36squared",
						image       : require('../assets/images/36sq_img.png'),
						productId:1
					},
					{
						productTitle:"National Lift Truck",
						image       : require('../assets/images/nlt_img.png'),
						productId:2
					},
					{
						productTitle:"Senior Living Experts",
						image       : require('../assets/images/sle_img.png'),
						productId:3
					},
					{
						productTitle:"American Marketing & Publishing",
						image       : require('../assets/images/amp_img.png'),
						productId:4
					},
					{
						productTitle:"UTC Partners",
						image       : require('../assets/images/utc_img.png'),
						productId:5
					},
					{
						productTitle:"The Law Office of Daniel Hinich",
						image       : require('../assets/images/loh_img.png'),
						productId:6
					}
				]
				 
			}
		}
		
	}
</script>