// Modules
import Swiper from "swiper/bundle";

export const realEstateModal = () => {
    const ref = document.querySelectorAll("._real-estate-modal");

    const toggleThumbnails = (e) => {
        e.preventDefault();
        let success = false;

        const button = e.target;
        const thumbnailsContainer = button.closest(".slider-thumbnails");

        if (thumbnailsContainer) {
            thumbnailsContainer.classList.toggle("open");
        }

        return success;
    };

    ref.forEach((component) => {
        const tabs = component.querySelectorAll(".tab-pane");

        tabs.forEach((tab) => {
            const main = tab.querySelector(".gallery-slider");
            const mainSlider = tab.querySelector(".swiper");

            const thumbnails = tab.querySelector(".slider-thumbnails");
            const sliderThumbnails = thumbnails?.querySelector(".swiper");
            const thumbnailsToggler = thumbnails?.querySelector(
                ".thumbnails-toggler"
            );

            thumbnailsToggler?.addEventListener("click", toggleThumbnails);

            let thumbnailsSlider = new Swiper(sliderThumbnails, {
                spaceBetween: 10,
                slidesPerView: "auto",
                freeMode: true,
                watchSlidesProgress: true,
                navigation: {
                    prevEl: thumbnails?.querySelector(".swiper-prev"),
                    nextEl: thumbnails?.querySelector(".swiper-next"),
                },
            });

            let sliderMain = new Swiper(mainSlider, {
                spaceBetween: 10,
                slidesPerView: 1,
                navigation: {
                    prevEl: main?.querySelector(".swiper-prev"),
                    nextEl: main?.querySelector(".swiper-next"),
                },
                effect: "fade",
                fadeEffect: {
                    crossFade: true,
                },
                thumbs: {
                    swiper: thumbnailsSlider,
                },
            });
        });
    });
};

realEstateModal();
