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
				productTitle:"ABCN",
				image       : require('../assets/images/product1.png'),
				productId:1
				},
				{
				productTitle:"KARMA",
				image       : require('../assets/images/product2.png'),
				productId:2
				},
				{
				productTitle:"Tino",
				image       : require('../assets/images/product3.png'),
				productId:3
				},
				{
				productTitle:"EFG",
				image       : require('../assets/images/product4.png'),
				productId:4
				},
				{
				productTitle:"MLI",
				image       : require('../assets/images/product5.png'),
				productId:5
				},
				{
				productTitle:"Banans",
				image       : require('../assets/images/product6.png'),
				productId:6
				}
				]
				 
			}
		}
		
	}
</script>