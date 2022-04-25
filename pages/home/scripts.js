// Assets
import "../../assets/js/main";

// Components
import "../../components/header";
import "../../components/hero";
import "../../components/home-section-real-estate-tabs";
import "../../components/home-section-features";
import "../../components/home-section-initiative";

const home = () => {
    const page = document.getElementById("page-home");

    document.addEventListener("toggleSearch", (e) => {
        const hero = page?.querySelector("._hero");
        const heroSearch = hero?.querySelector(".search-bar");

        heroSearch?.classList.toggle("visible");
    });
};
home();

export default home;
