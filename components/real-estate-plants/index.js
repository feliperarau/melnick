// Modules
import Swiper from "swiper/bundle";

export const realEstatePlants = () => {
    const ref = document.querySelectorAll("._real-estate-plants");

    ref.forEach((component) => {
        const tabs = component.querySelectorAll(".tab-pane");
        const fullscreen = component.querySelector(".fullscreen");

        fullscreen.addEventListener("click", (e) => {
            const root = e.target.closest(".site-wrapper");
            const event = new CustomEvent("plantsOpenModal", {});

            root.dispatchEvent(event);
        });

        tabs.forEach((tab) => {
            const slider = tab.querySelector(".swiper");
            const navigationPrev = tab.querySelector(".prev-slide");
            const navigationNext = tab.querySelector(".next-slide");

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
