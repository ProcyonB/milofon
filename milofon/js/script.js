$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    // infinite: true,
    // speed: 500,
    // fade: true,
    cssEase: "ease",
    arrows: true,
  });
});

$(document).on("click", ".animated_a", function () {
  var linkID = $(this).attr("href");
  $("html, body").animate(
    {
      scrollTop: $(linkID).offset().top,
    },
    "slow"
  );
  return false;
});
// var rellax = new Rellax(".rellax", {
//   speed: 2,
//   center: false,
//   wrapper: null,
//   round: true,
//   vertical: true,
//   horizontal: false,
//   zindex: -10,
// });
new WOW().init();
// const swup = new Swup();
