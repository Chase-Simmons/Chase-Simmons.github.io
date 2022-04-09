const about = document.getElementById("nav-about");
const works = document.getElementById("nav-works");
const extra = document.getElementById("nav-extra");
const contact = document.getElementById("nav-contact");

const navItems = document.querySelectorAll(".nav-item");
const navItemsByID = [about, works, extra, contact];

const aboutSection = document.getElementById("about");
const worksSection = document.getElementById("works");
const extraSection = document.getElementById("extra");
const contactSection = document.getElementById("contact");

// METHODS
const OnLoad = () => {
    about.firstChild.classList.add("nav-text-active");
}

const HandleActive = (activeItem) => {
    navItemsByID.forEach(nItemBID => nItemBID.firstChild.classList.remove("nav-text-active"));
    activeItem.firstChild.classList.add("nav-text-active");
}
///

// EVENT LISTENERS
navItems.forEach(nItem => nItem.firstChild.addEventListener("click", () => {

    HandleActive(nItem);

}));
///

OnLoad();
