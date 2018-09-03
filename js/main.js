$(document).ready(function () {
    $('[data-fancybox="gallery"]').fancybox();
    var temp_st = 0;
    var status = 2;

    if ($(window).width() < 800) {
        temp_st = 1;
        $('#slider').addClass('single-item')
    } else if ($(window).width() > 800) {
        temp_st = 2;
        $('#slider').addClass('multiple-items')
    }

    $(window).resize(test)


    

    function test() {
        if ($(window).width() < 800) {
            temp_st = 1;
        }
        else if ($(window).width() > 800) {
            temp_st = 2; 
        }

        if (status !== temp_st) {
            // $('#slider').removeClass('single-item multiple-items slick-initialized slick-slide slick-dottedr')
            // $('#slider').removeClass(' slick-initialized slick-slider ')
            // return;
            // alert(0)
            if (temp_st == 1) {
                status = temp_st
                $('#slider').removeClass('multiple-items')
                $('#slider').addClass('single-item')
            } else if (temp_st == 2) {
                status = temp_st
                $('#slider').removeClass('single-item')
                $('#slider').addClass('multiple-items')
            }
        } else {
            console.log('ok')
        }}

        $('.single-item').slick();
        $('.multiple-items').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScrovll: 3,
            arrows: true,
            // dots: true   
        });




            // $('.single-item').slick();
            // $('.multiple-items').slick({
            //     infinite: true,
            //     slidesToShow: 3,
            //     slidesToScrovll: 3,
            //     arrows: true,
                
            // });  
    


    
   
    // function widthCheck() {
    //     z = $(window).width(); single-item slick-initialized slick-slider
    //     if (z < 800) {  multiple-items slick-initialized slick-slider slick-dotted
    //         $('#slider').removeClass('multiple-items')
    //         $('#slider').removeClass('single-item')
    //         $('#slider').addClass('single-item')

    //     } else if (z > 800) {
    //         $('#slider').removeClass('single-item')
    //         $('#slider').removeClass('multiple-items')
    //         $('#slider').addClass('multiple-items')

    //     }
    //     // widthCheck()

    // }



    // q = $('#slider').attr('class').split(/\s+/);
    // console.log(q)
    //   $('.single-item').slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 1,
    //     adaptiveHeight: true
    //   });
});
console.log(1);
// alert()