$(document).ready(function () {
  $('.menu__button').click(function (event) {
    $('.menu__button, .nav').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
