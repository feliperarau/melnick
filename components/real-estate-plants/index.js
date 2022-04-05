// Modules
import Swiper from "swiper/bundle";

export const realEstatePlants = () => {
    const ref = document.querySelectorAll("._real-estate-plants");

    ref.forEach((component) => {
        const slider = component.querySelector(".swiper");
        const navigationNext = slider.querySelector(".next-slide");

        let swiper = new Swiper(slider, {
            grabCursor: true,
            slidesPerView: 1,
            freeMode: true,
            loop: true,
            effect: "fade",
            fadeEffect: {
                crossFade: true,
            },
            navigation: {
                nextEl: navigationNext,
            },
        });
    });
};

realEstatePlants();
