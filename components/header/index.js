import "../navbar";
import "../nav-overlay";

export const header = () => {
    const ref = document.querySelectorAll("._header");

    ref.forEach((component) => {
        const navbar = component.querySelector("._navbar");
        const navOverlay = component.nextElementSibling;

        if (!navOverlay.classList.contains("_nav-overlay")) {
            return;
        }

        navbar.addEventListener("navOverlayShow", (e) => {
            navOverlay.classList.remove("hide");
            navbar.classList.add("hide");
        });
        navOverlay.addEventListener("navOverlayHide", (e) => {
            navOverlay.classList.add("hide");
            navbar.classList.remove("hide");
        });
    });
};

header();
