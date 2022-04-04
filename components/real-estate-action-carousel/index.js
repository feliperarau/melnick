// Modules
import Swiper from "swiper/bundle";

export const realEstateActionCarousel = () => {
    const ref = document.querySelectorAll("._real-estate-action-carousel");

    ref.forEach((component) => {
        const slider = component.querySelector(".swiper");
        const navigationPrev = slider.querySelector(".swiper-prev");
        const navigationNext = slider.querySelector(".swiper-next");

        var swiper = new Swiper(slider, {
            spaceBetween: 20,
            slidesPerView: "auto",
            freeMode: true,
            grabCursor: true,

            navigation: {
                nextEl: navigationNext,
                prevEl: navigationPrev,
            },

            /*breakpoints: {
                // when window width is >= 320px
                767: {
                    spaceBetween: 20,
                    slidesPerView: 3,
                },
            },*/
        });
    });
};
realEstateActionCarousel();
