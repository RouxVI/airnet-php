var controller = new ScrollMagic.Controller();
var timeline = new TimelineMax();
const landingHeight = $("#landing-section").height() * 1.5;

timeline.fromTo("#pastille", 1, { scale: 1, y: 0 }, { scale: 0, y: 50 });
timeline.fromTo("#contact-section", 1, { opacity: 0 }, { opacity: 1 }, "-=0.75");
timeline.fromTo("#contact-title", 1, { y: 0, opacity: 1 }, { y: 50, opacity: 0 }, "-=0.75");
timeline.fromTo("#contact-intro", 1, { y: 0, opacity: 1 }, { y: 50, opacity: 0 }, "-=0.75");
timeline.fromTo("footer", 1, { y: landingHeight + "vh" }, { y: 0 }, "-=0.5");

var scene = new ScrollMagic.Scene({
  duration: "200%",
})
  .setPin("body")
  .setTween(timeline)
  .addTo(controller);

function scrollToContact() {
  $("body,html").animate({ scrollTop: landingHeight }, 1000);
}
