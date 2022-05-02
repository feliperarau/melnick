import { Modal } from "bootstrap";

export const openStoriesModal = (index) => {
    const realEstateStories = document.getElementById("real-estate-stories");
    const storiesModal = Modal.getOrCreateInstance(realEstateStories);

    if (!storiesModal._isShown) {
        storiesModal.show();
    }

    const outerSlider = realEstateStories.querySelector(".stories-carousel");

    if (!outerSlider.swiper) {
        window.realEstateStories();
    }

    outerSlider.swiper.slideTo(index);
};

window.openStoriesModal = openStoriesModal;
