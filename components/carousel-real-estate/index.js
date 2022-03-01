// Modules
import Swiper from "swiper/bundle";

//Components
import "../entry-real-estate";

const carouselRealEstate = () => {
  const ref = document.querySelectorAll("._carousel-real-estate");

  if (!ref.length) return;

  // For every component on the page...
  for (let c = 0; c < ref.length; c++) {
    const component = ref[c];
    const sliderContainer = component.querySelector(".swiper");
    const sliderPagination =
      sliderContainer.querySelector(".swiper-pagination");

    window.onload = function (e) {
      var swiper = new Swiper(sliderContainer, {
        slidesPerView: "auto",
        spaceBetween: 20,
        freeMode: true,
        grabCursor: true,
        pagination: {
          el: sliderPagination,
          clickable: true,
        },
      });
    };
  }
};

carouselRealEstate();

export default carouselRealEstate;
