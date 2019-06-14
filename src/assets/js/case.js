import { Showcase } from "./showcase";
import { Slides } from "./slides";

import image1 from "../../assets/images/36sq_img.png";
import image2 from "../../assets/images/amp_img.png";
import image3 from "../../assets/images/comrade_img.png";
import image4 from "../../assets/images/loh_img.png";
import image5 from "../../assets/images/utc_img.png";

const container = document.getElementById("app");

const slidesData = [
    {
      image: image1,
      title: "Segovia",
      meta: "Spain / Castile and León"
    },
    {
      image: image2,
      title: "Barcelona",
      meta: "Spain / Catalonia"
    },
    {
      image: image3,
      title: "Málaga",
      meta: "Spain / Andalusia"
    },
    {
      image: image4,
      title: "Pamplona",
      meta: "Spain / Navarre"
    },
    {
      image: image5,
      title: "Bilbao",
      meta: "Spain / Biscay"
    }
];

const slides = new Slides(slidesData);

const showcase = new Showcase(slidesData, {
    onActiveIndexChange: activeIndex => {
      slides.onActiveIndexChange(activeIndex);
    },
    onIndexChange: index => {
      slides.onMove(index);
    },
    onZoomOutStart: ({ activeIndex }) => {
      slides.appear();
    },
    onZoomOutFinish: ({ activeIndex }) => {},
    onFullscreenStart: ({ activeIndex }) => {
      slides.disperse(activeIndex);
    },
    onFullscreenFinish: ({ activeIndex }) => {}
});

showcase.mount(container);
slides.mount(container);
showcase.render();

window.addEventListener("resize", function() {
    showcase.onResize();
});

window.addEventListener("mousemove", function(ev) {
    showcase.onMouseMove(ev);
});

export { CaseJs };