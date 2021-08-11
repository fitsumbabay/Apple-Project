// $(".theClassThatsThereNow")
//   .addClass("newClassWithYourStyles")
//   .removeClass("theClassThatsTherenow");
$(document).ready(function () {
  if ($(window).width() < 768) {
    $(".footer-links-wrapper").addClass("saturdayclass");
  } else {
    $(".footer-links-wrapper").removeClass("saturdayclass");
  }

  $(window).on("resize", function () {
    if ($(window).width() < 768) {
      $(".footer-links-wrapper").addClass("saturdayclass");
    } else {
      $(".footer-links-wrapper").removeClass("saturdayclass");
      $(".footer-links-wrapper ul").show();
    }
  });

  $(document).on("click", ".saturdayclass h3", function () {
    $(this).next("ul").slideToggle();
    $(this).toggleClass("iconRotator");
  });
});
