const profileButton = document.getElementById("profile-button");
const dropdownMenu = document.getElementById("dropdown-menu");
const sideMenu = document.getElementById("side-menu");
const modalMenu = document.getElementById("modal-menu");

let activeMenu = null;

function toggleMenu(menu) {
    if (activeMenu && activeMenu !== menu) {
        activeMenu.classList.add("hidden");
    }
    menu.classList.toggle("hidden");
    activeMenu = menu.classList.contains("hidden") ? null : menu;
}

profileButton.addEventListener("click", () => {
    const menuStyle = prompt("Choose a menu style: dropdown, side, modal");

    if (menuStyle === "dropdown") {
        toggleMenu(dropdownMenu);
    } else if (menuStyle === "side") {
        toggleMenu(sideMenu);
    } else if (menuStyle === "modal") {
        toggleMenu(modalMenu);
    }
});

document.addEventListener("click", (event) => {
    if (!event.target.closest("#profile-button, .menu")) {
        if (activeMenu) {
            activeMenu.classList.add("hidden");
            activeMenu = null;
        }
    }
});
