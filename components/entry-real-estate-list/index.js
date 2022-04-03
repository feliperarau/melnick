export const entryRealEstateList = () => {
    const ref = document.querySelectorAll("._entry-real-estate-list");

    const handleHover = (event) => {
        let entry = event.currentTarget;

        entry.classList.toggle("active");
    };

    ref.forEach((component) => {
        ["mouseenter", "mouseleave"].forEach(function (e) {
            component.addEventListener(e, handleHover);
        });
    });
};

entryRealEstateList();
