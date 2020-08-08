$(document).ready(function () {
  // модальные окна
  $(".consultation").on("click", function (e) {
    e.preventDefault();
    $(".consultation_popup").fadeIn();
  });
  $(".close").click(function (e) {
    e.preventDefault();
    $(".consultation_popup").fadeOut();
  });

  $(".upgrade").on("click", function (e) {
    e.preventDefault();
    $(".upgrade_popup").fadeIn();
  });
  $(".close").click(function (e) {
    e.preventDefault();
    $(".upgrade_popup").fadeOut();
  });

  $(".rent").on("click", function (e) {
    e.preventDefault();
    $(".rent_popup").fadeIn();
  });
  $(".close").click(function (e) {
    e.preventDefault();
    $(".rent_popup").fadeOut();
  });

  $(".activities").on("click", function (e) {
    e.preventDefault();
    $(".activities_popup").fadeIn();
  });
  $(".close").click(function (e) {
    e.preventDefault();
    $(".activities_popup").fadeOut();
  });

  // модельные окна с примерами работ
  $(".count_leafs_examples").on("click", function (e) {
    e.preventDefault();
    $(".count_leafs_examples__popup").fadeIn();
  });
  $(".close").click(function (e) {
    e.preventDefault();
    $(".count_leafs_examples__popup").fadeOut();
  });
  $(".shape_leafs_examples").on("click", function (e) {
    e.preventDefault();
    $(".shape_leafs_examples__popup").fadeIn();
  });
  $(".close").click(function (e) {
    e.preventDefault();
    $(".shape_leafs_examples__popup").fadeOut();
  });
  $(".coloration_examples").on("click", function (e) {
    e.preventDefault();
    $(".coloration_examples__popup").fadeIn();
  });
  $(".close").click(function (e) {
    e.preventDefault();
    $(".coloration_examples__popup").fadeOut();
  });
  $(".etching_examples").on("click", function (e) {
    e.preventDefault();
    $(".etching_examples__popup").fadeIn();
  });
  $(".close").click(function (e) {
    e.preventDefault();
    $(".etching_examples__popup").fadeOut();
  });

  // слайдер
  $(".slider").slick({
    dots: true,
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
new WOW().init();
