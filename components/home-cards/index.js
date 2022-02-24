// Modules
import Swiper from "swiper/bundle";

//Components
import "../hero-search/";
import "../hero-details/";

const hero = () => {
  const ref = document.querySelectorAll("._hero");

  if (!ref.length) return;

  // For every component on the page...
  for (let c = 0; c < ref.length; c++) {
    const component = ref[c];
    const sliderContainer = component.querySelector(".slider");

    window.onload = function (e) {
      const swiper = new Swiper(sliderContainer, {});
    };
  }
};

hero();

export default hero;
