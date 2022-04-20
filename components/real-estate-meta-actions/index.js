export const realEstateMetaActions = () => {
    const ref = document.querySelectorAll("._real-estate-meta-actions");

    ref.forEach((component) => {
        const togglers = component.querySelectorAll(".modal-toggler");

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
