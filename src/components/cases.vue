<template lang="pug">
  //- component(v-bind:is="")
  #case
</template>
<script>
  import CaseJs from '../assets/js/case.js';
  // https://jsfiddle.net/chrisvfritz/o3nycadu/
  // https://github.com/Anemolo/StickyImageEffect
  // https://github.com/codrops/AnimatedImageColumns/blob/master/index.html
  // https://codepen.io/lisilinhart/pen/rqRvxJ
  // https://codepen.io/shshaw/pen/pLgWLa
  // https://codepen.io/erawk26/pen/byRZMZ
  // https://codepen.io/slc/pen/XeVJeq
  // https://ru.vuejs.org/v2/guide/components-registration.html

	// document.documentElement.className = "js";
  // let supportsCssVars = function () {
  //   var e,
  //   t = document.createElement("style");
  //   return (
  //     (t.innerHTML = "root: { --tmp-var: bold; }"),
  //     document.head.appendChild(t),
  //     (e = !!(
  //       window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)")
  //     )),
  //     t.parentNode.removeChild(t), e
  //   );
  // };
  // supportsCssVars() || alert("Please view this demo in a modern browser that supports CSS Variables.");

  export default{
    name:'cases',
		data (){
			return{
        title:'cases',
        CaseJs
			}
    }
  }
</script>
<style lang="scss">
  @import "../assets/styles/_cases.scss";
</style>