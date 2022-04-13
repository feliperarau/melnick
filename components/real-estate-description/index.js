// Modules
import Swiper from "swiper/bundle";

export const realEstateDescription = () => {
    const ref = document.querySelectorAll("._real-estate-description");

    ref.forEach((component) => {
        const slider = component.querySelector(".swiper");
        const navigationPrev = component.querySelector(".prev button");
        const navigationNext = component.querySelector(".next button");

        var swiper = new Swiper(slider, {
            spaceBetween: 30,
            effect: "fade",
            loop: true,
            fadeEffect: {
                crossFade: true,
            },
            navigation: {
                nextEl: navigationNext,
                prevEl: navigationPrev,
            },
        });
    });
};

realEstateDescription();
