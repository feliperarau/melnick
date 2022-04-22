// Modules
import Swiper from "swiper/bundle";

export const realEstateActionCarousel = () => {
    const ref = document.querySelectorAll("._real-estate-action-carousel");

    ref.forEach((component) => {
        const slider = component.querySelector(".swiper");
        const navigationPrev = slider.querySelector(".swiper-prev");
        const navigationNext = slider.querySelector(".swiper-next");
        const cards = slider.querySelectorAll("._real-estate-action");

        // console.log(cards);

        cards.forEach((card) => {
            //console.log(card);

            card.addEventListener("click", (e) => {
                const index = [...cards].indexOf(card);
                const root = e.target.closest(".site-wrapper");
                const event = new CustomEvent("openStories", {
                    detail: { storyToOpen: index },
                });

                root.dispatchEvent(event);
            });
        });

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
