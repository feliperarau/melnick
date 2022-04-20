// Modules
import { Modal, Tab } from "bootstrap";

// Assets
import "../../assets/js/main";

// Components
import "../../components/header";
import "../../components/real-estate-gallery";
import "../../components/real-estate-meta-actions/";
import "../../components/real-estate-action-carousel/";
import "../../components/entry-real-estate-list";
import "../../components/real-estate-plants";
import "../../components/real-estate-modal";
import "../../components/real-estate-features";
import "../../components/real-estate-description";

export const empreendimentosInterna = () => {
    const page = document.getElementById("page-empreendimentos-interna");
    const realEstateModal = document.getElementById("real-estate-modal");
    const modal = new Modal(realEstateModal, {});

    const showTab = (tabId) => {
        const tabElement = document.getElementById(tabId);
        const tab = Tab.getOrCreateInstance(tabElement);

        tab?.show();
    };

    const galleryModalOpenHooks = {
        galleryOpenModal: "imagens-tab",
        plantsOpenModal: "plantas-tab",
        videosOpenModal: "videos-tab",
        tourOpenModal: "tour-tab",
    };

    for (const key in galleryModalOpenHooks) {
        if (Object.hasOwnProperty.call(galleryModalOpenHooks, key)) {
            const tabId = galleryModalOpenHooks[key];

            page.addEventListener(key, function (e) {
                modal.show();

                realEstateModal.addEventListener("shown.bs.modal", (e) => {
                    showTab(tabId);
                });
            });
        }
    }
    /*
    page.addEventListener("galleryOpenModal", function (e) {
        modal.show();

        realEstateModal.addEventListener("shown.bs.modal", (e) => {
            showTab("imagens-tab");
        });
    });

    page.addEventListener("plantsOpenModal", function (e) {
        modal.show();

        realEstateModal.addEventListener("shown.bs.modal", (e) => {
            showTab("plantas-tab");
        });
    });*/
};
empreendimentosInterna();
