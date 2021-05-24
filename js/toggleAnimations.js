const MIN_SCROLL_AMOUNT = 50;
var navMenu = document.querySelector("header nav");
var navContainer = document.querySelector("header container");
var darkModeToggle = document.querySelector("#dark-mode-toggle")
var logo = document.querySelector("figure");

var supportDarkMode = darkModeToggle != null;

function toggleDarkMode() {
    document.querySelector("body").toggleAttribute("darkMode");
}

function navMenuSetSmall() {
    if (window.pageYOffset > MIN_SCROLL_AMOUNT) {
        navMenu.setAttribute("isSmall", "");
    }
}

function navMenuSetBig() {
    navMenu.removeAttribute("isSmall");
}

function headerSetSideVisibility(isOn) {
    if (isOn) {
        darkModeToggle.removeAttribute("doNotShow");
        logo.removeAttribute("doNotShow");
    } else {
        darkModeToggle.setAttribute("doNotShow", "");
        logo.setAttribute("doNotShow", "");
    }
}

$(window).click(function () {
    navMenuSetSmall();
});

$(navMenu).click(function (event) {
    navMenuSetBig();
    event.stopPropagation();
});

var wasAtTopPart = false;
$(window).scroll(UpdateNavWithScroll);
window.onload = function () { wasAtTopPart = true; UpdateNavWithScroll(); };
function UpdateNavWithScroll() {
    if (window.pageYOffset <= MIN_SCROLL_AMOUNT) {
        navMenuSetBig();
        if (supportDarkMode)
            headerSetSideVisibility(true);
        wasAtTopPart = true;
    } else if (window.pageYOffset > MIN_SCROLL_AMOUNT && wasAtTopPart) {
        navMenuSetSmall();
        if (supportDarkMode)
            headerSetSideVisibility(false);
        wasAtTopPart = false;
    }
}