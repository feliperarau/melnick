export const realEstateGallery = () => {
    const ref = document.querySelectorAll("._real-estate-gallery");

    ref.forEach((component) => {
        const galleryItems = component.querySelectorAll(".gallery-item");

        galleryItems.forEach((galleryItem) => {
            galleryItem.addEventListener("click", (e) => {
                const index = [...galleryItems].indexOf(galleryItem);
                const root = galleryItem.closest(".site-wrapper");
                const event = new CustomEvent("galleryOpenModal", {
                    detail: {
                        itemIndex: index,
                    },
                });

                root.dispatchEvent(event);
            });
        });
    });
};

realEstateGallery();
