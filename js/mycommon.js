/**
 * Created by chun on 2018/5/19.
 */

//��ת����ȫ����-������������
$(function(){
  $(".toSetting").click(function(){
    $(".iframe2").load('transactionPassword_settings.html');
  });
//��ַ����ҳ�������µ�ַ
$(".toAdd_addr").click(function(){
  $(this).hide();
  $(".add_addr").show();
});
//���ȡ����ť���ص�ǰҳ��
$(".cancel_btn").click(function(){
  $(".toAdd_addr").show();
  $(".add_addr").hide();
});
//bibi��� ���ֵ���仯
$(".brand_container li").each(function(i){
  var $tar=$(this);
  $tar.click(function(){
    $tar.css('border','1px solid #2ec3ee').find(".choose_icon").addClass("selected");
    $tar.siblings().css('border','1px solid #EBEFF0').find(".choose_icon").removeClass("selected")
  });
});
//������
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
//��װ����
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
//�����¼�鿴��ַ
viewHistory(".view_recentlyAddr",".view_recently_tr",".sanjiao");
//��ʷ��¼�鿴��ַ
viewHistory(".view_historyAddr",".view_history_tr",".sanjiao");

//        �����ά��Ŵ�
$(document).click(function(){
  $(".erweima_big").hide();
  $('body').addClass("opacity");
});
$(".erweiCode").click(function(event){
  event.stopPropagation();
  $(".erweima_big").toggle();
});


});

