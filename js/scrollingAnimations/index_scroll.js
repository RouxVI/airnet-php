let durationValue;
if ($(window).width() > 700) {
  durationValue = "300%";
} else {
  durationValue = "225%";
}
var controller = new ScrollMagic.Controller();
var timeline = new TimelineMax({ onUpdate: toggleElements });

var section_to_text_ratio = $("#projects_section").height() / $("#project_holder").height();

timeline.fromTo("h1", 0.6, { opacity: 1 }, { scaleX: 1.1, opacity: 0 }, "-=0.6");
timeline.fromTo("#scroll_holder", 0.4, { opacity: 1 }, { opacity: 0, scaleX: 1.05 }, "-=0.4");
timeline.fromTo("#scroller", 0.5, { y: "0%" }, { y: "120%" }, "-=0.35");

timeline.fromTo("#bg-video", 1.5, { opacity: 1, y: 0 }, { opacity: 1, y: -200 });

timeline.fromTo("#project_holder", 0.5, { opacity: 0.5, x: -20 }, { opacity: 1, x: 0 });
timeline.fromTo("#projects_cta", 1, { opacity: 0.5 }, { opacity: 1 }, "-=1");

timeline.fromTo("#projects_section", 1, { y: "100vh" }, { y: "-100%" }, "-=1.25");

var scene = new ScrollMagic.Scene({
  triggerElement: "#main_project_holder",
  duration: durationValue,
})
  .setPin("body")
  .setTween(timeline)
  .addTo(controller);

function toggleElements() {
  if (timeline.progress() > 0.5) {
    document.getElementById("main_page_holder").style.display = "none";
    document.getElementById("scroller").style.display = "none";
  } else {
    document.getElementById("main_page_holder").style.display = "";
    document.getElementById("scroller").style.display = "";
  }
}
