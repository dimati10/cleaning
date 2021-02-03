$(function () {

  $('.slider__inner').slick({
    arrows: false,
    dots: true,
    autoplay: true
  });

  $('.menu__btn').on('click', function () {
    $('.header__menu .menu__list, .menu__btn').toggleClass('active');
  });

  $('.header__menu .menu__link').on('click', function () {
    $('.header__menu .menu__list, .menu__btn').removeClass('active');
  });

});