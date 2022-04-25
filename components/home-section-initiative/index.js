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
        const sliderPagination = slider.querySelector(".swiper-pagination");

        console.log(navigationPrev);

        var swiper = new Swiper(slider, {
            grabCursor: true,
            spaceBetween: 10,
            slidesPerView: "auto",
            freeMode: true,
            loop: false,
            navigation: {
                nextEl: navigationNext,
                prevEl: navigationPrev,
            },
            pagination: {
                el: sliderPagination,
                clickable: true,
            },
            breakpoints: {
                767: {
                    loop: true,
                },
            },
        });
    });
};

homeSectionInitiative();
