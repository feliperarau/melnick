// Modules
import { Modal, Tab } from "bootstrap";

// Assets
import "../../assets/js/main";

// Components
import "../../components/header";
import "../../components/real-estate-gallery";
import "../../components/real-estate-gallery-mobile";
import "../../components/real-estate-meta-actions/";
import "../../components/real-estate-action-carousel/";
import "../../components/entry-real-estate-list";
import "../../components/real-estate-plants";
import "../../components/real-estate-modal";
import "../../components/real-estate-stories";
import "../../components/real-estate-features";
import "../../components/real-estate-features-mobile";
import "../../components/real-estate-description";
import { openGalleryModal } from "./galleryModalController";
import { openStoriesModal } from "./storiesModalController";

export const empreendimentosInterna = () => {
    const page = document.getElementById("page-empreendimentos-interna");

    Array.from(Array(30).keys()).forEach((i) => {
        const modalTogglerClass = `.gallery-toggler-${i}`;
        const storiesTogglerClass = `.stories-toggler-${i}`;

        const modalTogglers = document.querySelectorAll(modalTogglerClass);
        const storiesTogglers = document.querySelectorAll(storiesTogglerClass);

        modalTogglers.forEach((toggler) => {
            toggler.addEventListener("click", (e) => {
                openGalleryModal(i);
            });
        });

        storiesTogglers.forEach((toggler) => {
            toggler.addEventListener("click", (e) => {
                openStoriesModal(i);
            });
        });
    });
};

window.empreendimentosInterna = empreendimentosInterna;

empreendimentosInterna();
