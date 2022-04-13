export const realEstateFeatures = () => {
    const ref = document.querySelectorAll("._real-estate-features");

    ref.forEach((component) => {
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
    });
};

realEstateFeatures();
