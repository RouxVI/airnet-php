//************************************************************************
//  SCROLL MAGIC
//************************************************************************
const controller = new ScrollMagic.Controller();
const timeline = new TimelineMax({ onUpdate: toggleElements });
const teamSection = $("#team-section").height();

timeline.fromTo("#team-section", 1, { opacity: 1, y: 100 + "vh" }, { opacity: 1, y: 0 }, "-=.75");
timeline.fromTo("#background-triangle", 1, { x: "-100%" }, { x: "0%" }, "-=1");
// timeline.fromTo("#scroller", 0.25, { opacity: 1, y: 20 }, { opacity: 1, y: 0 }, "-=0.25");
// timeline.fromTo("#background-triangle", 1.5, { x: "0%" }, { x: "-100vw" }, "=1");
// timeline.fromTo("#last-section", 1.5, { opacity: 1, y: teamSection + "vh" }, { opacity: 1, y: 0 }, "-=1");
// timeline.fromTo("#container", 1, { y: 0 }, { y: -100 + "vh" }, "-=0.65");

const scene = new ScrollMagic.Scene({
  duration: "150%",
})
  .setPin("body")
  .setTween(timeline)
  .addTo(controller);

function toggleElements() {
  if (timeline.progress() > 0.95) {
    document.getElementById("service-title").style.display = "none";
  } else {
    document.getElementById("service-title").style.display = "block";
  }
}
