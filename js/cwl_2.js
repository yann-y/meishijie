
/**
 * Created by Administrator on 2019/12/2 0002.
 */
/* ################################    jqury    ################################ */

$(document).ready(function(){
/*############################头部####################################*/
$(".HD .header .header_deng ul li").hover(function(){
    $(this).css("background-color","#8E8E8E");
    $(this).find("a").css( "text-decoration","underline");
},function(){
    $(this).css("background-color","darkred");
    $(this).find("a").css( "text-decoration","none")
});
/*############################导航####################################*/
$(".DH .daohang ul li").hover(function(){
        $(this).css("background-color","#EEEEEE").addClass("on");
        $(this).find(".blus").hide();
    },function(){
        $(this).css("background-color","#FFFFFF").removeClass("on");
        $(this).find(".blus").show();
    });
 $(".DH .daohang ul li .CO  dl a").hover(function(){
     $(this).css({
         "background-color":"#FF3333",
         "color":"white"
     });
 },function(){
     $(this).css({
         "background-color":"lightgrey",
         "color":"red"
     });
 });
    $(".DH .daohang ul li .CO  dt a").hover(function(){
        $(this).css("background-color","#FF3333");
    },function(){
        $(this).css("background-color","lightgrey");
    });
    /*############################中间####################################*/


    /*$(".CT .content .content_c1 .ctime2 .time_2").hover(function(){
        $(this).css("display","block");
        for(var i=0;i=this.length;i++){

        }
       /!* $(this).siblings().css("display","none");*!/
    },function(){
        $(this).css("display","none");
        $(this).siblings().css("display","block");
    });*/

    /************* ???????? *************/
    $(".CT .content .content_c2 .food_material1 .more a").hover(function(){
        $(this).css({
            "color":"red",
            "text-decoration":"underline"
        });
    },function(){
        $(this).css({
            "color":"#3B3B3B",
            "text-decoration":"none"
        });
    });
   /* $(".food_material2 .food_up .food_u").hover(function(){
        $(this).toggleClass("food_p1");
        $(this).find("a").toggleClass("food_p2");
        var index=$(this).index();
        $(".food_d").eq(index).css("display","block");
    },function(){
        $(this).toggleClass("food_p1");
        $(this).find("a").toggleClass("food_p2");
        var index=$(this).index();
        $(".food_d").eq(index).css("display","none");
    });*/
    $(".food_material2 .food_up .food_u").mouseover(function(){
        $(this).toggleClass("food_p1");
        $(this).find("a").toggleClass("food_p2");
        var index=$(this).index();
        $(".food_d").eq(index).css("display","block");
        $(".food_d").eq(index).siblings().css("display","none");
    });
    $(".food_material2 .food_up .food_u").mouseout(function(){
        $(this).toggleClass("food_p1");
        $(this).find("a").toggleClass("food_p2");
    });
/************* ???????? *************/
    $(".cookbook .book2  ul .cook2").hover(function(){
        $(this).find(".cook221").css("display","none");
        $(this).find(".cook222").css("display","block");
    },function(){
        $(this).find(".cook222").css("display","none");
        $(this).find(".cook221").css("display","block");
    });
    $(".cookbook .book2  ul .cook2 .cook24 li").hover(function(){
        $(this).css("background","red");
    },function(){
        $(this).css({
            "background":"gray",
            "background-color": "rgba(96,96,96,0.1)"
        });
    });
/***********************C3**********************/
    $("  .CT .content .content_c3 .morethan .a1_1").hover(function(){
        $(this).css({
            "color":"red",
            "text-decoration":"underline"

        });
    },function(){
        $(this).css({
            "color": "#3B3B3B",
            "text-decoration":"none"
        });
    });
    /***********************C4**********************/
    $(" .healthnews2 .ht1 .c4name li").hover(function(){
        $(this).toggleClass("new1");
        var index=$(this).index();
        $(this).parents(".c4name").siblings(".c4img").find(".ig1").eq(index).css("display","block");
        $(this).parents(".c4name").siblings(".c4img").find(".ig1").eq(index).siblings().css("display","none");
       /* $(".c4img .ig1").eq(index).css("display","block");
        $(".c4img .ig1").eq(index).siblings().css("display","none");*/

    },function(){
        $(this).toggleClass("new1");
        var index=$(this).index();
    });
    $(" .healthnews2 .ht1 .c4name li a").hover(function(){
        $(this).toggleClass("new2");

    },function(){
        $(this).toggleClass("new2");
    });
    $(".CT .content .content_c3 .content_2").hover(function(){

        $(this).find(".left1").css("display","none");
        $(this).find(".left2").css("display","block");
    },function(){
        $(this).find(".left1").css("display","block");
        $(this).find(".left2").css("display","none");
    });
    $(".CT .content .content_c3 .content_3").hover(function(){

        $(this).find(".right1").css("display","none");
        $(this).find(".right2").css("display","block");
    },function(){
        $(this).find(".right1").css("display","block");
        $(this).find(".right2").css("display","none");
    });
    $(".CT .content .content_c3 .content_2").click(function(){
        /*$(this).*/
    });

    /*############################底部####################################*/
    $(".BM .bottom .bot_f .bot_f2 .bot_fa").hover(function(){
        $(this).css({
            "color":"#ffffff",
            "text-decoration":"underline"
        });
    },function(){
        $(this).css({
            "color":"dimgrey",
            "text-decoration":"none"
        });
    });
    $(".BM .bottom .bot_s dd a").hover(function(){
        $(this).css ({
            "color":"red",
            "text-decoration":"underline"
        });
    },function(){
        $(this).css({
            "color":"dimgrey",
            "text-decoration":"none"
        });
    });
    $(".BM .bottom .bot_t .bot_t1 li").hover(function(){
        $(this).css("background-color","#cc3333") ;
    },function(){
        $(this).css("background-color","#3B3B3B");
    });










});

