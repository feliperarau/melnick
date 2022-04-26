import { Modal, Tab } from "bootstrap";

export const openGalleryModal = (index) => {
    const realEstateModal = document.getElementById("real-estate-modal");
    const modal = Modal.getOrCreateInstance(realEstateModal);

    const showTab = (i) => {
        const tabs = realEstateModal.querySelectorAll(
            ".nav-tabs .nav-item .nav-link"
        );

        if (i === null) {
            return;
        }

        const tabElement = tabs[i] !== "undefined" ? tabs[i] : false;

        if (tabElement) {
            const tabIns = Tab.getOrCreateInstance(tabElement);

            tabIns?.show();
        }
    };

    const tabId = index ?? 0;

    if (tabId !== null) {
        if (!modal._isShown) {
            modal.show();
        }

        showTab(tabId);
    }
};

window.openGalleryModal = openGalleryModal;
