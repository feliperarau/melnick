import { Collapse, Dropdown } from "bootstrap";
import noUiSlider from "nouislider";
import wNumb from "wnumb";
import { collapseSection, expandSection } from "./collapse";

export const realEstateFilters = () => {
    const ref = document.querySelectorAll("._real-estate-filters");

    /**
     * Handle the filter clear action
     * @param {*} dropdown
     */
    const clearFilters = (dropdown) => {
        const toggler = dropdown.querySelector(".dropdown-toggle");
        const checkboxes = dropdown.querySelectorAll("._checkbox");
        const togglerLabel = toggler.querySelector("span");
        const temporaryLabel = toggler.querySelector(".temporary-label");

        checkboxes.forEach((checkbox) => {
            const input = checkbox.querySelector("input");
            input.checked = false;
        });

        const dropdownIns = new Dropdown(toggler);
        dropdownIns.toggle();

        togglerLabel?.classList.remove("d-none");
        temporaryLabel?.remove();

        dropdown.classList.remove("filter-enabled");
        toggler.classList.add("variation-outline");
    };

    /**
     * Handle the filter save action
     * @param {*} dropdown
     */
    const saveFilters = (dropdown) => {
        const toggler = dropdown.querySelector(".dropdown-toggle");
        const togglerLabel = toggler.querySelector("span");
        const selected = dropdown.querySelectorAll(
            "input[type=checkbox]:checked"
        );

        const dropdownIns = new Dropdown(toggler);
        dropdownIns.toggle();

        if (!selected.length) {
            clearFilters(dropdown);
            return;
        }

        const temporaryLabel = toggler
            .querySelector(".temporary-label")
            ?.remove();

        const firstSelection = selected[0];
        let firstSelectionLabel =
            firstSelection.parentElement.querySelector(".label")?.textContent;

        if (selected.length > 1) {
            firstSelectionLabel = `${firstSelectionLabel} +${
                selected.length - 1
            }`;
        }

        const newLabel = document.createElement("span");
        newLabel.classList.add("temporary-label");
        newLabel.textContent = firstSelectionLabel;

        togglerLabel.classList.add("d-none");
        togglerLabel.after(newLabel);

        dropdown.classList.add("filter-enabled");
        toggler.classList.remove("variation-outline");
    };

    const cleanModalFilters = (modal) => {
        const radios = modal.querySelectorAll('input[type="radio"]:checked');
        const sliders = modal.querySelectorAll(".slider");

        radios.forEach((radio) => {
            radio.checked = false;
        });

        sliders.forEach((slider) => {
            slider.noUiSlider.reset();
        });
        console.log(modal);
    };

    ref.forEach((component) => {
        const dropdowns = component.querySelectorAll(".dropdown");
        const modal = component.querySelector(".modal");
        const sliders = modal.querySelectorAll(".slider");
        const modalClean = modal.querySelector(".bottom .clear");
        const rows = modal.querySelectorAll(".filter-row");

        rows.forEach((row) => {
            const toggler = row.querySelector(".left");
            const target = row.querySelector(".right");
            var bsCollapse = new Collapse(target, {
                toggle: false,
            });

            toggler.addEventListener("click", (e) => {
                console.log(e);

                bsCollapse.toggle();
            });
        });

        modalClean.addEventListener("click", () => cleanModalFilters(modal));

        sliders.forEach((slider) => {
            const controls =
                slider.parentElement.querySelector(".slider-controls");

            if (slider.classList.contains("area")) {
                noUiSlider.create(slider, {
                    start: [80, 650],
                    connect: true,
                    step: 50,
                    range: {
                        min: 50,
                        max: 800,
                    },
                    format: wNumb({
                        decimals: 0,
                    }),
                });
            } else if (slider.classList.contains("price")) {
                noUiSlider.create(slider, {
                    start: [140, 240],
                    connect: true,
                    step: 1,
                    range: {
                        min: 120,
                        max: 280,
                    },
                    format: wNumb({
                        decimals: 3,
                    }),
                });
            }

            slider.noUiSlider.on("update", function (values, handle) {
                var valueControls = [
                    controls.querySelector(".min"),
                    controls.querySelector(".max"),
                ];

                valueControls[handle].value = values[handle];
            });
        });
        dropdowns.forEach((dropdown) => {
            const menu = dropdown.querySelector(".dropdown-menu");
            const resetBtn = dropdown.querySelector(".clear");
            const saveBtn = dropdown.querySelector(".save");

            resetBtn?.addEventListener("click", () => clearFilters(dropdown));
            saveBtn?.addEventListener("click", () => saveFilters(dropdown));
            menu?.addEventListener("click", (e) => e.stopPropagation());
        });
    });
};

realEstateFilters();
