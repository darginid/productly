$(function () {

   $('.slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      dots: true,
      responsive: [
         {
            breakpoint: 1175,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         }
      ]
   });

   $('.nav__btn').on('click', function () {
      $('.nav__list').toggleClass('nav__list--active')
   });

});
