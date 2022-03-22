// Modules
import Swiper from "swiper/bundle";

export const homeSectionFeatures = () => {
    const ref = document.querySelectorAll("._home-section-features");

    ref.forEach((component) => {
        console.log(component);
        const slider = component.querySelector(".swiper");
        const sliderPagination = slider.querySelector(".swiper-pagination");

        var swiper = new Swiper(slider, {
            spaceBetween: 10,
            slidesPerView: "auto",
            freeMode: true,
            grabCursor: true,
            pagination: {
                el: sliderPagination,
                clickable: true,
            },
            breakpoints: {
                // when window width is >= 320px
                767: {
                    spaceBetween: 20,
                    slidesPerView: 3,
                },
            },
        });
    });
};

homeSectionFeatures();
