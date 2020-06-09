$(function (){
    $('.service-slider').slick({
        arrows: false,
        dots: true,
        responsive:[{
            breakpoint: 600,
            settings:{
                dots:false,
                centerMode: true,
                centerPadding:'80px'
            }
        }]
    });
});
