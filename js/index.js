/*
    项目负责人：赵强
    项目创建日期:2017.12.14
    最新更新:2017.12.14
    修改人员:无
    修改日期:无
    修改原因:无
    修改代码行数区间:无
*/

$(function(){
    $(".main .title ul li").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    var geshu=$(".main .downMain li").length;
    if(geshu<=3){
        $("footer").css({
            position: 'absolute',
            bottom: '0',
            left: '0'
        });
    };
});