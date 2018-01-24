/*
    项目负责人：赵强
    项目创建日期:2017.12.7
    最新更新:2017.12.7
    修改人员:无
    修改日期:无
    修改原因:无
    修改代码行数区间:无
*/

$(function(){
    var timejpg=3000; //轮播时间
    var num=$('.banner .banner_img li').size(); //获取li中图片的数量
    for(var i=1; i<=num; i++){
        $(".box_tab").append("<a href='javascript:(void)'>"+" "+"</a>");
    }   

//初始化
    $(".banner_img li").eq(0).show();
    $(".box_tab a").eq(0).addClass("active");

//轮播基本功能(鼠标经过按钮轮播)  
    $(".box_tab a").mouseenter(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var index=$(this).index();
        i=index;
        /***
            1.解决点击按钮后,无法按顺序轮播的bug
            2.原理: 将鼠标经过按钮的下标值,传给自动轮播move的按钮下标.
        ***/
        $(".banner_img li").eq(index).stop(true,false).fadeIn(400).siblings().stop(true,false).fadeOut(400);
    });

//自动轮播 
    var i=0; //图片|按钮的数组下标
    var timer=setInterval(move,timejpg);
    function move(){
        i++;
        if(i==num){
            i=0;
        }
        if(i<0){
            i=num-1;
        }
        $(".box_tab a").eq(i).addClass("active").siblings().removeClass();
        $(".banner_img li").eq(i).stop(true,false).fadeIn(400).siblings().stop(true,false).fadeOut(400);
    }
//鼠标经过停止
    $(".banner").hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(move,timejpg);
    });

//左右 方向键
    $(".banner .box_left").click(function(){
        i-=2;//减去 i++然后在减去一个
        move();
    });
    $(".banner .box_right").click(function(){
        move();
    });
});









