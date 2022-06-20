function menuToggle() {
    let menu = document.getElementById("menu-container");
    let menuElements = document.querySelector("ul");

    if(menu.classList.contains("menu-opened")) {
        menu.classList.remove("menu-opened");
        menuElements.style.display = "none";
    }
    else {
        menu.classList.add("menu-opened");
        menuElements.style.display = "flex";
    }
}