// Modules
import Swiper from "swiper/bundle";

export const realEstateActionCarousel = () => {
    const ref = document.querySelectorAll("._real-estate-action-carousel");

    ref.forEach((component) => {
        const slider = component.querySelector(".swiper");
        const navigationPrev = slider.querySelector(".swiper-prev");
        const navigationNext = slider.querySelector(".swiper-next");
        const cards = slider.querySelectorAll("._real-estate-action");

        var swiper = new Swiper(slider, {
            spaceBetween: 20,
            slidesPerView: "auto",
            freeMode: true,
            grabCursor: true,
            navigation: {
                nextEl: navigationNext,
                prevEl: navigationPrev,
            },
        });
    });
};
realEstateActionCarousel();
