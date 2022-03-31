// Modules
import Swiper from "swiper/bundle";

export const realEstateActionCarousel = () => {
    const ref = document.querySelectorAll("._real-estate-action-carousel");

    ref.forEach((component) => {
        const slider = component.querySelector(".swiper");

        var swiper = new Swiper(slider, {
            spaceBetween: 10,
            slidesPerView: 7,
            freeMode: true,
            grabCursor: true,

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
