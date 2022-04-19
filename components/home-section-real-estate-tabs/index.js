// Modules
import Swiper from "swiper/bundle";
import { Tab } from "bootstrap";

import "../../components/carousel-real-estate";

export const homeSectionRealEstateTabs = () => {
    const ref = document.querySelectorAll("._home-section-real-estate-tabs");

    ref.forEach((component) => {
        const selector = component.querySelector(".selector");
        const toggler = selector.querySelector(".toggler");
        const togglerLabel = toggler.querySelector(".label");
        const dropdown = selector.querySelector(".dropdown-menu");
        const dropdownItems = dropdown.querySelectorAll(".dropdown-item");

        dropdownItems.forEach((dropdownItem) => {
            dropdownItem.addEventListener("click", (e) => {
                const item = e.currentTarget;
                togglerLabel.textContent = item.textContent;
            });
        });
    });
};

homeSectionRealEstateTabs();
