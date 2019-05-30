<template lang="pug">
  .home
    h1 {{title}}
    .row
      .col-md-4.col-lg4(v-for="(data,index) in products" :key="index")
        img(:src="data.image" class="img-fluid")
        h3(@click="goTodetail(data.productId)") {{data.productTitle}}
    //- swiper(v-ref:swiper, direction="horizontal", :mousewheel-control="true", :performance-mode="false", :pagination-visible="true", :pagination-clickable="true", :loop="true"
    //-   @slide-change-start="onSlideChangeStart"
    //-   @slide-change-end="onSlideChangeEnd")
    //-   div Page 1
    //-   div Page 2
    //-   div Page 3
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: 'Home',
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
  },
  methods:{
    goTodetail(prodId) {
      let proId=prodId
      this.$router.push({name:'details',params:{Pid:proId}})
    },
    onSlideChangeStart (currentPage) {
      console.log('onSlideChangeStart', currentPage);
    },
    onSlideChangeEnd (currentPage) {
      console.log('onSlideChangeEnd', currentPage);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.row img{
  max-height: 15em;
  width: 100%;

}
.row h3{
  cursor:pointer;
}
</style>
