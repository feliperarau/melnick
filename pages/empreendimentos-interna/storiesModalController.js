import { Modal } from "bootstrap";

export const openStoriesModal = (index) => {
    const realEstateStories = document.getElementById("real-estate-stories");
    const storiesModal = Modal.getOrCreateInstance(realEstateStories);

    if (!storiesModal._isShown) {
        storiesModal.show();
    }

    const outerSlider = realEstateStories.querySelector(".stories-carousel");

    const outerSwiper = outerSlider.swiper;
    outerSwiper.slideTo(index);
};

window.openStoriesModal = openStoriesModal;
