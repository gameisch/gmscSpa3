<template lang="pug">
  #app
      //- navbar
      .navbar.navbar-expand-lg.fixed-top.navbar-dark.bg-primary
        .container
          router-link.navbar-brand(to="/") Home
          button.navbar-toggler(type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation")
            span.navbar-toggler-icon
          .collapse.navbar-collapse#navbarResponsive
            ul.navbar-nav
              li.nav-item
                router-link.nav-link(to="/blog") Blog
              li.nav-item
                router-link.nav-link(to="/services") Services
              li.nav-item
                router-link.nav-link(to="/contact") contact
      .container
        transition(name="moveInUp")
          router-view
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .moveInUp-enter-active{
    animation: fadeIn 2s ease-in;
  }
  @keyframes fadeIn{
    0%{
      opacity: 0;
    }
    50%{
      opacity: 0.5;
    }
    100%{
      opacity: 1;
    }
  }

  .moveInUp-leave-active{
    animation: moveInUp .3s ease-in;
  }
  @keyframes moveInUp{
    0%{
      transform: translateY(0);
    }
      100%{
      transform: translateY(-400px);
    }
  }
</style>
