export const realEstateMetaActions = () => {
    const ref = document.querySelectorAll("._real-estate-meta-actions");

    const getAbsoluteHeight = (el) => {
        // Get the DOM Node if you pass in a string
        el = typeof el === "string" ? document.querySelector(el) : el;

        var styles = window.getComputedStyle(el);
        var margin =
            parseFloat(styles["marginTop"]) +
            parseFloat(styles["marginBottom"]);

        return Math.ceil(el.offsetHeight + margin);
    };
    ref.forEach((component) => {
        const inner = component.querySelector(".inner");
        const togglers = component.querySelectorAll(".modal-toggler");
        const shareDropdown = component.querySelector(".share .dropdown-menu");

        /** Overflow Workaround */
        const dropdownHeight = getAbsoluteHeight(shareDropdown);
        inner.style.paddingBottom = `${dropdownHeight + 2}px`;
        inner.style.marginBottom = `-${dropdownHeight + 2}px`;
        /** End overlflow Workaround */

        togglers.forEach((toggler) => {
            toggler.addEventListener("click", (e) => {
                const cls = e.currentTarget.classList;
                let eventName = "galleryOpenModal";

                switch (true) {
                    case cls.contains("plantas-toggler"):
                        eventName = "plantsOpenModal";
                        break;
                    case cls.contains("videos-toggler"):
                        eventName = "videosOpenModal";
                        break;
                    case cls.contains("tour-toggler"):
                        eventName = "tourOpenModal";
                        break;
                }

                const root = e.target.closest(".site-wrapper");
                const event = new CustomEvent(eventName, {});

                root.dispatchEvent(event);
            });
        });
    });
};

realEstateMetaActions();
