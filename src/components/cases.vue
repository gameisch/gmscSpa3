<template lang="pug">
    #cases(v-if="cases")
</template>
<script>
	document.documentElement.className = "js";
    var supportsCssVars = function () {
      var e,
        t = document.createElement("style");
      return (
        (t.innerHTML = "root: { --tmp-var: bold; }"),
        document.head.appendChild(t),
        (e = !!(
          window.CSS &&
          window.CSS.supports &&
          window.CSS.supports("font-weight", "var(--tmp-var)")
        )),
        t.parentNode.removeChild(t),
        e
      );
    };
    supportsCssVars() ||
      alert(
        "Please view this demo in a modern browser that supports CSS Variables."
    );
    export default{
		name:'cases',
		data (){
			return{
				title:'cases'
			}
		}
	}
</script>
<style lang="scss">
  @import "../assets/styles/_cases.scss";
</style>