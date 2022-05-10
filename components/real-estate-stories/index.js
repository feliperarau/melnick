// Modules
import { Modal } from "bootstrap";
import Swiper from "swiper/bundle";

//Components
import "../progress-bar/";

export const realEstateStories = () => {
    const ref = document.querySelectorAll("._real-estate-stories");

    const pauseStory = (slider) => {
        const sliderEl = slider.el.closest(".stories-slider");

        if (sliderEl.classList.contains("paused")) {
            //slider.autoplay.start();
            sliderEl.classList.remove("paused");
        } else {
            //slider.autoplay.stop();
            sliderEl.classList.add("paused");
        }
    };

    const setupStoryCarousel = (component) => {
        const storyCarousel = component.querySelector(".stories-carousel");
        const carouselItems = component.querySelectorAll(".carousel-slide");
        const next = storyCarousel?.querySelectorAll(".swiper-next");

        carouselItems.forEach((carouselItem, i) => {
            setupStorySlider(carouselItem, i);

            carouselItem.addEventListener("click", function (e) {
                const button = e.target.closest(".swiper-nav");
                const parentSlider =
                    e.currentTarget.closest(".stories-carousel").swiper;

                const parent = [...e.currentTarget.parentNode.children];
                const index = parent.indexOf(e.currentTarget);

                if (button) {
                    if (button.classList.contains("swiper-next")) {
                        parentSlider.slideNext();
                    } else if (button.classList.contains("swiper-prev")) {
                        parentSlider.slidePrev();
                    }

                    return;
                }

                carousel.slideTo(index);
            });
        });

        let carousel = new Swiper(storyCarousel, {
            slidesPerView: "auto",
            centeredSlides: true,
            prevEl: storyCarousel?.querySelectorAll(".swiper-prev"),
            nextEl: storyCarousel?.querySelectorAll(".swiper-next"),
            allowTouchMove: false,
            on: {
                slideChange: function (swiper) {
                    const currentSlide = swiper.slides[swiper.activeIndex];
                    const slides = swiper.slides;

                    slides.forEach((slide) => {
                        let childSlider =
                            slide?.querySelector(".swiper")?.swiper;

                        if (slide === currentSlide) {
                            //childSlider.autoplay.start();
                        } else {
                            //childSlider.autoplay.stop();
                        }
                    });

                    if (swiper.el.classList.contains("landscape")) {
                        swiper.el.classList.remove("landscape");
                        setTimeout(() => {
                            swiper.update();
                        }, 200);
                    }
                },
            },
        });
    };

    const setupStorySlider = (component, i) => {
        const storyInner = component.querySelector(".stories-slider");
        const storyControls = component.querySelector(".swiper-controls");
        const storySlider = storyInner.querySelector(".swiper");

        const storyPause = storyControls.querySelector(".pause");
        const storyClose = storyControls.querySelector(".close");

        let storyIns = new Swiper(storySlider, {
            spaceBetween: 10,
            slidesPerView: 1,
            /*autoplay: {
                delay: 2000,
                stopOnLastSlide: true,
            },*/
            preventClicks: false,
            preventClicksPropagation: false,
            allowTouchMove: false,
            pagination: {
                el: storyInner?.querySelector(".swiper-pagination"),
                clickable: true,
            },
            effect: "fade",
            speed: 800,
            fadeEffect: {
                crossFade: true,
            },

            on: {
                slideChange: function (swiper) {
                    const currentSlide = swiper.slides[swiper.activeIndex];
                    const container =
                        currentSlide?.closest(".stories-carousel");
                    const containerSlider = container?.swiper;

                    if (!containerSlider) {
                        return;
                    }

                    if (currentSlide.classList.contains("wide")) {
                        if (!container.classList.contains("landscape")) {
                            container.classList.add("landscape");
                            swiper.el.classList.add("wide-active");

                            setTimeout(() => {
                                containerSlider.update();
                            }, 200);
                        }
                    } else {
                        if (container.classList.contains("landscape")) {
                            container.classList.remove("landscape");
                            swiper.el.classList.remove("wide-active");

                            setTimeout(() => {
                                containerSlider.update();
                            }, 200);
                        }
                    }
                },
            },
        });

        if (i !== 0) {
            storyIns.autoplay.stop();
        }

        storyPause.addEventListener("click", function (e) {
            pauseStory(storyIns);
        });
        storyClose.addEventListener("click", function (e) {
            const modal = this.closest(".modal");
            const modalControl = Modal.getOrCreateInstance(modal);

            modalControl.hide();
        });
    };

    ref.forEach((component) => {
        setupStoryCarousel(component);
    });
};

window.realEstateStories = realEstateStories;

//realEstateStories();
