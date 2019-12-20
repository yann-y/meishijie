/**
 * Created by Administrator on 2019/12/10 1019.
 */
$(document).ready(function() {
    $(".CT .ct_bottom .cb .cbb ul li").hover(function () {
        $(this).find("div").css("display", "block");
    }, function () {
        $(this).find("div").css("display", "none");
    });
    $(".CT .ct_bottom .c_t .cb .cbb ul li ul .li_2").hover(function () {
        $(this).find("span").css({
            "color": "red",
            "background-color": "gainsboro"

        });
    }, function () {
        $(this).find("span").css({
            "color": "black",
            "background-color": "white"
        });
    });
});