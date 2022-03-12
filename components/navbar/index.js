export const navbar = () => {
    const ref = document.querySelectorAll("._navbar");

    ref.forEach((component) => {
        const toggler = component.querySelector(".navbar-toggler");

        toggler.addEventListener("click", (e) => {
            e.preventDefault();

            component.trigger("navOverlayShow");
        });
    });
};

navbar();
