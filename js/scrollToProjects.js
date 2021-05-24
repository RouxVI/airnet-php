document.getElementById("project_button").onclick = loadProjects;
const heightToScroll = $("#main_page_holder").height() * 4;
const animationTime = 1500;
const toLoadId = "project_load";

var noRefreshLocations = ["/fr/", "/en/"];

function loadProjects() {
  var currentLocation = window.location.pathname;
  var loadOtherPage = true;

  noRefreshLocations.forEach((location) => {
    if (location == currentLocation) loadOtherPage = false;
  });

  if (loadOtherPage) {
    sessionStorage.setItem(toLoadId, "1");
    window.location.assign("/");
    return;
  } else {
    scrollToProject();
  }
}

$(document).ready(onLoadScroll);
function onLoadScroll() {
  if (sessionStorage.getItem(toLoadId) == "1") {
    sessionStorage.setItem(toLoadId, "0");
    scrollToProject();
  }
}

function scrollToProject() {
  $("body,html").animate({ scrollTop: heightToScroll }, animationTime);
}
