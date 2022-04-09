// Modules
import Swiper from "swiper/bundle";

export const realEstateStories = () => {
    const ref = document.querySelectorAll("._real-estate-stories");

    const pauseStory = (slider) => {
        const sliderEl = slider.el.closest(".stories-slider");

        if (sliderEl.classList.contains("paused")) {
            slider.autoplay.start();
            sliderEl.classList.remove("paused");
        } else {
            slider.autoplay.stop();
            sliderEl.classList.add("paused");
        }
    };

    const setupStoryCarousel = (component) => {
        const storyCarousel = component.querySelector(".stories-carousel");
        const carouselItems = component.querySelectorAll(".carousel-slide");

        carouselItems.forEach((carouselItem) => {
            console.log(carouselItem);
            setupStorySlider(carouselItem);
        });

        let carousel = new Swiper(storyCarousel, {
            slidesPerView: "auto",
            centeredSlides: true,
        });
    };

    const setupStorySlider = (component) => {
        const storyInner = component.querySelector(".stories-slider");
        const storyControls = component.querySelector(".swiper-controls");
        const storySlider = storyInner.querySelector(".swiper");

        const storyPause = storyControls.querySelector(".pause");
        const storyClose = storyControls.querySelector(".close");

        let storyIns = new Swiper(storySlider, {
            spaceBetween: 10,
            slidesPerView: 1,
            navigation: {
                prevEl: storyInner?.querySelector(".swiper-prev"),
                nextEl: storyInner?.querySelector(".swiper-next"),
            },
            /*autoplay: {
                delay: 2000,
            },*/
            pagination: {
                el: storyInner?.querySelector(".swiper-pagination"),
                clickable: true,
            },
            effect: "fade",
            speed: 800,
            fadeEffect: {
                crossFade: true,
            },
        });

        storyPause.addEventListener("click", function (e) {
            pauseStory(storyIns);
        });
    };

    ref.forEach((component) => {
        setupStoryCarousel(component);
        //setupStorySlider(component);
    });
};

realEstateStories();
