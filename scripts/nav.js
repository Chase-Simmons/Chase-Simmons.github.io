const about = document.getElementById("nav-about");
const works = document.getElementById("nav-works");
const extra = document.getElementById("nav-extra");
const contact = document.getElementById("nav-contact");

const navControls = document.querySelectorAll(".nav-text");
const navItemsByID = [about, works, extra, contact];

const aboutSection = document.getElementById("about");
const worksSection = document.getElementById("works");
const extraSection = document.getElementById("extra");
const contactSection = document.getElementById("contact");

const OnLoad = () => {

    about.classList.add("nav-text-active");

    navControls.forEach(nItem => nItem.addEventListener("click", () => {

        HandleActive(nItem);

        switch (nItem) {
            case about:
                window.scrollTo({
                    left: 0,
                    top: aboutSection.offsetTop,
                    behavior: "smooth"
                })
                break;
            case works:
                window.scrollTo({
                    left: 0,
                    top: worksSection.offsetTop,
                    behavior: "smooth"
                })
                break;
            case extra:
                window.scrollTo({
                    left: 0,
                    top: extraSection.offsetTop,
                    behavior: "smooth"
                })
                break;
            case contact:
                window.scrollTo({
                    left: 0,
                    top: contactSection.offsetTop,
                    behavior: "smooth"
                })
                break;

            default:
                break;
        }
    }));
}

const HandleActive = (activeItem) => {
    navItemsByID.forEach(nItemBID => nItemBID.classList.remove("nav-text-active"));
    activeItem.classList.add("nav-text-active");
}

window.addEventListener("load", (e) => {
    OnLoad();
});

window.addEventListener("scroll", (e) => {

    if (window.scrollY >= worksSection.offsetTop / 2) HandleActive(works);
    else HandleActive(about);
})