/**
 * Created by chun on 2018/5/19.
 */

//跳转到安全设置-交易密码设置
$(function(){
  $(".toSetting").click(function(){
    $(".iframe2").load('transactionPassword_settings.html');
  });
//地址管理页点击添加新地址
$(".toAdd_addr").click(function(){
  $(this).hide();
  $(".add_addr").show();
});
//点击取消按钮返回当前页面
$(".cancel_btn").click(function(){
  $(".toAdd_addr").show();
  $(".add_addr").hide();
});
//bibi理财 币种点击变化
$(".brand_container li").each(function(i){
  var $tar=$(this);
  $tar.click(function(){
    $tar.css('border','1px solid #2ec3ee').find(".choose_icon").addClass("selected");
    $tar.siblings().css('border','1px solid #EBEFF0').find(".choose_icon").removeClass("selected")
  });
});
//进度条
$(".progress>a").each(function(i){
  $(this).click(function(){
    $(this).addClass("shining").siblings(".shining").removeClass("shining");
    var $tar=$(this).parent().children("progress");
    var val=parseInt($tar.val());
    var timer=setInterval(function(){
      var data=0;
      switch(i){
        case 0: data=0;break;
        case 1: data=10;break;
        case 2: data=50;break;
        case 3: data=75;break;
        case 4: data=100;break;
      }
      if(val>data){
        val--;
        if(val==data){
          return;
        }
      }
      else if(val<data){
        val++;
        if(val==data){
          return;
        }
      }
      else{
        return;
      }
      $tar.val(val);
    },5)
  });
});
//封装函数
function viewHistory(Selectorclass1,Selectorclass2,Selectorclass3){
  $(Selectorclass1).each(function(i){
    $(this).click(function(){
      var $tar=$(this);
      $tar.html($tar.data("view"));
      $(Selectorclass2).toggle("hide");
      $(Selectorclass3).toggle("hide");
    });
  });
}
//最近记录查看地址
viewHistory(".view_recentlyAddr",".view_recently_tr",".sanjiao");
//历史纪录查看地址
viewHistory(".view_historyAddr",".view_history_tr",".sanjiao");

//        点击二维码放大
$(document).click(function(){
  $(".erweima_big").hide();
  $('body').addClass("opacity");
});
$(".erweiCode").click(function(event){
  event.stopPropagation();
  $(".erweima_big").toggle();
});


});

