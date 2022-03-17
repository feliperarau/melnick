// Modules
import Swiper from "swiper/bundle";

//Components
import "../entry-real-estate";

export const homeSectionInitiative = () => {
    const ref = document.querySelectorAll("._home-section-initiative");

    ref.forEach((component) => {
        const slider = component.querySelector(".swiper");

        const navigationPrev = slider.querySelector(".swiper-prev");
        const navigationNext = slider.querySelector(".swiper-next");

        var swiper = new Swiper(slider, {
            grabCursor: true,
            loop: true,
            effect: "fade",
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

homeSectionInitiative();
