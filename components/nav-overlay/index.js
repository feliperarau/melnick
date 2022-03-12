import "../navbar";

export const navOverlay = () => {
    const ref = document.querySelectorAll("._nav-overlay");

    ref.forEach((component) => {
        const toggler = component.querySelector(".navbar-toggler");

        toggler.addEventListener("click", (e) => {
            e.preventDefault();

            component.trigger("navOverlayHide");
        });
    });
};

navOverlay();
