// Modules
import Swiper from "swiper/bundle";

export const realEstatePlants = () => {
    const ref = document.querySelectorAll("._real-estate-plants");

    ref.forEach((component) => {
        const tabs = component.querySelectorAll(".tab-pane");
        const fullscreenButtons = component.querySelectorAll(".fullscreen");

        tabs.forEach((tab) => {
            const slider = tab.querySelector(".swiper");
            const navigationPrev = tab.querySelector(".prev");
            const navigationNext = tab.querySelector(".next");

            let swiper = new Swiper(slider, {
                grabCursor: true,
                slidesPerView: 1,
                effect: "fade",
                fadeEffect: {
                    crossFade: true,
                },
                navigation: {
                    prevEl: navigationPrev,
                    nextEl: navigationNext,
                },
            });
        });
    });
};

realEstatePlants();
