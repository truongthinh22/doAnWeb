// JavaScript source code
// js-khi đưa chuột vào vùng hienLen thì sẽ hiện lên div có class no1-no2
$(document).ready(function () {
    $(".hienLen1").on({
        mouseenter: function () {
            $(".no1").fadeIn();
        },
        mouseenter: function () {
            $(".no1").css("display", "contents");
        },
        mouseleave: function () {
            $(".no1").fadeOut();
        }
    });
    $(".hienLen2").on({
        mouseenter: function () {
            $(".no2").fadeIn();
        },
        mouseenter: function () {
            $(".no2").css("display", "contents");
        },
        mouseleave: function () {
            $(".no2").fadeOut();
        }
    });
});