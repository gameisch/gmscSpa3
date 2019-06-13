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
  @import "../assets/styles/_home.scss";
</style>
