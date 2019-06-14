// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import cases from '@/components/cases'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import CaseJs from '@/assets/js/case'
import { Cursor } from './assets/js/cursor'

library.add(faCoffee)

// cases.use(CaseJs)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

new Cursor(document.querySelector(".cursor"));
// const container = document.getElementById("app");

// const slidesData = [
//     {
//         image: image1,
//         title: "Segovia",
//         meta: "Spain / Castile and León"
//     },
//     {
//         image: image2,
//         title: "Barcelona",
//         meta: "Spain / Catalonia"
//     },
//     {
//         image: image3,
//         title: "Málaga",
//         meta: "Spain / Andalusia"
//     },
//     {
//         image: image4,
//         title: "Pamplona",
//         meta: "Spain / Navarre"
//     },
//     {
//         image: image5,
//         title: "Bilbao",
//         meta: "Spain / Biscay"
//     }
//     ];

// const slides = new Slides(slidesData);
// const showcase = new Showcase(slidesData, {
//     onActiveIndexChange: activeIndex => {
//         slides.onActiveIndexChange(activeIndex);
//     },
//     onIndexChange: index => {
//         slides.onMove(index);
//     },
//     onZoomOutStart: ({ activeIndex }) => {
//         cursor.enter();
//         slides.appear();
//     },
//     onZoomOutFinish: ({ activeIndex }) => {},
//     onFullscreenStart: ({ activeIndex }) => {
//         cursor.leave();
//         slides.disperse(activeIndex);
//     },
//     onFullscreenFinish: ({ activeIndex }) => {}
//     });

//     showcase.mount(container);
//     slides.mount(container);
//     showcase.render();

//     window.addEventListener("resize", function() {
//     showcase.onResize();
// });

// window.addEventListener("mousemove", function(ev) {
//     showcase.onMouseMove(ev);
// });
