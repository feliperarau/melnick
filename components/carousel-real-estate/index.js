// Modules
import Swiper from "swiper/bundle";

//Components
import "../entry-real-estate";

export const carouselRealEstate = () => {
    const ref = document.querySelectorAll("._carousel-real-estate");

    ref.forEach((component) => {
        const mainSliders = component.querySelectorAll(".property-slider");
        const navSlider = component.querySelectorAll(".nav-slider");

        //console.log(component);
        navSlider.forEach((slider) => {
            var swiper = new Swiper(slider, {
                slidesPerView: 3,
                //spaceBetween: 20,
                freeMode: true,
                //grabCursor: true,
                //loop: true,

                breakpoints: {
                    992: {
                        slidesPerView: "auto",
                    },
                },
            });
        });

        mainSliders.forEach((slider) => {
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
    });
};

carouselRealEstate();
