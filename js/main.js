$(document).ready(function () {
    $('[data-fancybox="gallery"]').fancybox();
    
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScrovll: 3,
        arrows: true,
        dots: true
      });
         
});
console.log(1);