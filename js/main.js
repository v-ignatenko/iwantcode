// js приветствие alert
// alert ('Привет, Мир!');
// приминение одной фенкцыи при нафатеи на тег
$(function () {
   $('.offer-content a').click(function () {
      // telo
      $('.triangles').css('width','300px');
   });
   $('.menu li a').click(function () {
      // this повторения класса выше
      $(this).css('font-size','10px');
   });
});



// добовление и отминение класса
// $(function () {
//    $('.offer-content a').click(function () {
//       // telo
//       $('.triangles').toggleClass('activ');
//       $('.triangles').css('transition','500ms ease');
//    });
// });

// function ('a,b') {
// }

// function myNameFunction () {

// }