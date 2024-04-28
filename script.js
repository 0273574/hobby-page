function openNav() {
    var nav = document.getElementById("myNav");
    if (nav.style.width === "60%") {
        nav.style.width = "0";
    } else {
        nav.style.width = "60%";
    }
}

document.getElementById("menuIcon").addEventListener("click", openNav);
