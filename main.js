const workContainer = document.querySelector("#work_section")

setTimeout(function () {
  $("#loading").addClass("animated");
  $("#loading").addClass("fadeOut");
  setTimeout(function () {
    $("#loading").removeClass("animated");
    $("#loading").removeClass("fadeOut");
    $("#loading").css("display", "none");
  }, 800);
}, 1500);


const magicProjectsGrid = new MagicGrid({
  container: "#work_section",
  animate: false,
  gutter: 30, // default gutter size
  static: true,
  useMin: false,
  maxColumns: 2,
  useTransform: true
});


$("document").ready(() => {
  magicProjectsGrid.listen();
});


