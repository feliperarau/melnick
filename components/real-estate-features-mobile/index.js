import Swiper from "swiper/bundle";

export const realEstateFeaturesMobile = () => {
    const ref = document.querySelectorAll("._real-estate-features-mobile");

    ref.forEach((component) => {
        const slider = component.querySelector(".swiper");
        const pagination = slider.querySelector(".swiper-pagination");
        const featureItems = component.querySelectorAll(".feature-item");

        featureItems.forEach((featureItem) => {
            const tipToggler = featureItem.querySelector(".tip-wrapper");

            if (!tipToggler) {
                return;
            }

            tipToggler.addEventListener("mouseenter", function (e) {
                const toggler = this;
                const tip = toggler.querySelector(".tip");

                tip.classList.toggle("visible");
                toggler.classList.add("tip-visible");
            });
            tipToggler.addEventListener("mouseleave", function (e) {
                const toggler = this;
                const tip = toggler.querySelector(".tip");

                toggler.classList.remove("tip-visible");
                tip.classList.remove("visible");
            });
        });

        const featureSlider = new Swiper(slider, {
            pagination: {
                el: pagination,
            },
        });
    });
};

realEstateFeaturesMobile();
