<template lang="pug">
  #app
      //- navbar
      header.navbar.navbar-expand-lg.fixed-top
        .container
          router-link.logo(to="/")
            img(src="./assets/images/logo.svg" class="img-fluid" alt="gameisch co logo" title="gameisch co logo")
          router-link.navbar-brand(to="/") 
            font-awesome-icon(icon="coffee") 
            | Home
          button.navbar-toggler(type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation")
            span.navbar-toggler-icon
          .collapse.navbar-collapse#navbarResponsive
            ul.navbar-nav
              li.nav-item
                router-link.nav-link(to="/blog") Blog
              li.nav-item
                router-link.nav-link(to="/services") Services
              li.nav-item
                router-link.nav-link(to="/cases") Cases
              li.nav-item
                router-link.nav-link(to="/contact") Contact
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
  @import "./assets/styles/_app.scss";
</style>
