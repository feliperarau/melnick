import Swiper from "swiper/bundle";

export const realEstateGalleryMobile = () => {
    const ref = document.querySelectorAll("._real-estate-gallery-mobile");

    ref.forEach((component) => {
        const slider = component.querySelector(".swiper");
        const pagination = component.querySelector(".swiper-pagination");

        var swiper = new Swiper(slider, {
            pagination: {
                el: pagination,
                type: "fraction",
            },
            /*navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },*/
        });
    });
};

realEstateGalleryMobile();
