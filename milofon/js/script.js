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

$(document).on("click", ".header a", function () {
  var linkID = $(this).attr("href");
  $("html, body").animate(
    {
      scrollTop: $(linkID).offset().top,
    },
    "slow"
  );
});
