// Modules
import Swiper from "swiper/bundle";

//Components
import "../entry-real-estate";

export const carouselRealEstate = () => {
  const ref = document.querySelectorAll("._carousel-real-estate");

  if (!ref.length) return;

  // For every component on the page...
  for (let c = 0; c < ref.length; c++) {
    const component = ref[c];
    const sliderContainer = component.querySelectorAll(".swiper");

    sliderContainer.forEach((slider) => {
      const sliderPagination = slider.querySelector(".swiper-pagination");

      var swiper = new Swiper(slider, {
        slidesPerView: "auto",
        spaceBetween: 20,
        freeMode: true,
        grabCursor: true,
        pagination: {
          el: sliderPagination,
          clickable: true,
        },
      });
    });
  }
};

carouselRealEstate();
