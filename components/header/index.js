import { throttle } from "lodash";

import "../navbar";
import "../nav-overlay";

export const header = () => {
    const ref = document.querySelectorAll("._header");

    const toggleScroll = (e, header) => {
        if (window.scrollY > 0) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    };

    ref.forEach((component) => {
        const navSearchToggle = component.querySelector(".search-toggler");
        const navbar = component.querySelector("._navbar");
        const navOverlay = component.nextElementSibling;

        navSearchToggle.addEventListener("click", (e) => {
            const event = new CustomEvent("toggleSearch");

            document.dispatchEvent(event);
        });

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

        window.addEventListener(
            "scroll",
            _.throttle(function (e) {
                toggleScroll(e, component);
            }, 300)
        );
    });
};

header();
