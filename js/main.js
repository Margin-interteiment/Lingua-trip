$(function () {
  $(".menu__item a").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1600);
  });

  $(".header__open, .menu__item a").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
    $(".header__open").toggleClass("header__open--active");
    $("body").toggleClass("lock");
  });
});
