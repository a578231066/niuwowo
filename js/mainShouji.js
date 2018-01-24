/*
    项目负责人：赵强
    项目创建日期:2017.11.24
    最新更新:2017.11.24
    修改人员:无
    修改日期:无
    修改原因:无
    修改代码行数区间:无
*/
window.onload=function(){
/* banner */
    var swiper = new Swiper('.swiper-container_banner', {
        pagination: '.swiper-pagination_one',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop:true,
        loopedSlides: 5
    });
/* banner 结束 */

/* 种子推荐 touch事件 */
    var page='pagenavi';
    var mslide='slider';
    var mtitle='emtitle';
    arrdiv = 'arrdiv';

    var as=document.getElementById(page).getElementsByTagName('a');

    var tt=new TouchSlider({id:mslide,'auto':'-1',fx:'ease-out',direction:'left',speed:600,timeout:5000,'before':function(index){
        var as=document.getElementById(this.page).getElementsByTagName('a');
        as[this.p].className='';
        as[index].className='active';
        this.p=index;
        var txt=as[index].innerText;
        $("#"+this.page).parent().find('.emtitle').text(txt);
        var txturl=as[index].getAttribute('href');      
        var turl=txturl.split('#');
        $("#"+this.page).parent().find('.go_btn').attr('href',turl[1]);
    }});

    tt.page = page;
    tt.p = 0;
    for(var i=0;i<as.length;i++){
        (function(){
            var j=i;
            as[j].tt = tt;
            as[j].onclick=function(){
                this.tt.slide(j);
                return false;
            }
        })();
    }
/* 种子推荐 touch事件 结束*/


/* 农药推荐 */
    var swiper = new Swiper('.swiper-container-nytj', {
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 0,
        freeMode: true,
    });
/* 农药推荐结束 */
}

/* 广告滚动 */
function startmarquee(lh,speed,delay){
    var p=false;
    var t;
    var o=document.getElementById("marqueebox");
    o.innerHTML+=o.innerHTML;
    o.style.marginTop=0;
    o.onmouseover=function(){p=true;}
    o.onmouseout=function(){p=false;}
    function start(){
        t=setInterval(scrolling,speed);
        if(!p) o.style.marginTop=parseInt(o.style.marginTop)-1+"px";
    }
    function scrolling(){
        if(parseInt(o.style.marginTop)%lh!=0){
        o.style.marginTop=parseInt(o.style.marginTop)-1+"px";
            if(Math.abs(parseInt(o.style.marginTop))>=o.scrollHeight/2) o.style.marginTop=0;
            }else{
            clearInterval(t);
            setTimeout(start,delay);}
        }
    setTimeout(start,delay);
}
startmarquee(20,10,3000);

/* 广告滚动 结束 */

$(function(){
/* 点击底部 */
    $("footer ul li").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
/* 点击底部 结束 */
});