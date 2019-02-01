/**
 * Created by chun on 2018/5/13.
 * 首页导航/侧边栏菜单的操作引入该文件
 */

//alert($.i18n.prop('string_usernotexist'));
//测试token 10827DE543E04035AA43BEC92D467A58
//1253082910@qq.com
//123456
//1351885718@qq.com  正式userId 10896
//11
//userId:2286
//1603894973@qq.com
//11
//**********************************************************************************待还原*****************************************************
//遍历菜单函数
function each_menu(str,arr){
  //导航菜单 demo
  $(str).each(function(i){
    $(this).html($.i18n.prop(arr[i]));
  });
}
function loadProperties(language){
  jQuery.i18n.properties({//加载资浏览器语言对应的资源文件
    name:'strings', //资源文件名称
    language:language,
    path:'components/i18n/resources/i18n/', //资源文件路径
    mode:'map', //用Map的方式使用资源文件中的值
    callback: function() {//加载成功后设置显示内容
//    跳转主页
      $('.skiptTo_index').attr('href',$.i18n.prop('skiptTo_index'));
//                退出登陆
      $('.exit').attr('title',$.i18n.prop('Exit'));
      //导航菜单  缺 官方代充
      var string_nav_menu=['nav_1','nav_2','nav_3','nav_4','nav_5'];
      each_menu('.nav-menu>li>a',string_nav_menu);
      //下拉菜单
      var string_drop_down=['drop_down_1','drop_down_2','drop_down_3','drop_down_4','drop_down_5','drop_down_6'];
      each_menu('.drop_down_contianer>ul>li>a',string_drop_down);
      //侧边栏菜单 子  缺 官方代充
      var aside_items=[
        'aside_items_1',
        'aside_items_2',
        'aside_items_3',
        'aside_items_4',
        'aside_items_5',
        'aside_items_6',
        'aside_items_7',
        'aside_items_8'
        //'aside_items_9'
      ];
      each_menu('.aside_items>li a',aside_items);
      //侧边栏菜单 父
      var aside_items_span=['aside_items_span_1','aside_items_span_2','aside_items_span_3','aside_items_span_4'];
      each_menu('.aside_items>li>span',aside_items_span);

      //BHPC收益
      var item_info=['item_info_1','item_info_2','item_info_3','item_info_4'];
      each_menu('.asides_items>li>span',item_info);

      //页脚文案
      var myFooterText=['myFooterText_1','myFooterText_2'];
      each_menu('.myFooterText>p',myFooterText);

      //header_lang
      $('.lang').html($.i18n.prop('lang'));
    }
  });
}
var language = window.localStorage.language;
if(!language){
  window.localStorage.language='zh-CN';
}
loadProperties(language);
//**********************************************************************************待还原*****************************************************
//调用i8n
//$(function(){
//  window.localStorage.language='zh-CN'
//  $('#language').change(function () {
//    window.localStorage.language =$('#language').val()
//    console.log($('#language').val())
//    var language =$('#language').val()
//    loadProperties(language);
//  })
//
//  $('#button_login').click(function(){//点击登录按钮后验证用户信息
//    var id = $('#username').val();//用户名
//    var payload = {};
//    payload['password']=$('#password').val();
//    payload = $.toJSON(payload);
//    $.ajax({
//      url : 'rest/users/' + id + '/tokens',//REST URI
//      type : 'POST',
//      data: payload, // Request body
//      contentType : 'application/json',
//      dataType:'json',
//      success : function(data) {
//        //验证成功则显示欢迎信息和密钥
//        $('#content').html($.i18n.prop('string_hello',id,data.token));
//      },
//      error : function(jqXHR, textStatus, errorThrown) {
//        if(jqXHR.status == 403){
//          //用户不存在
//          alert($.i18n.prop('string_usernotexist'));
//        }else if(jqXHR.status == 401){
//          //密码错误
//          alert($.i18n.prop('string_wrongpassword'));
//        }else{
//          //其他异常信息
//          alert(errorThrown);
//        }
//      }
//    });
//  });
//});
/**********************************************************************/
/**
 * 替换css样式文件；
 * @param title：替换的css样式文件名称及路径
 * auth:JYX time:2016.07.28
 */
//   首页侧边栏 点击加载
function aside_aclick(){
  $(".aside_items a").each(function(i){
    var $tar=$(this);
    $tar.off("click").click(function(){
      localStorage.setItem('isUp',0);
      window.localStorage.currentPage=$tar.data("url");
      $(".iframe2").load($tar.data("url"));
    });
  });
}
//默认加载iframe页面初始化
function load_iframePage(){
  var isUp=window.localStorage.isUp;
  if(!isUp){
    window.localStorage.isUp=0;
    isUp='0';
  }
  var currentPage=window.localStorage.currentPage;
  if(isUp=='0'){
    if(!currentPage){
      window.localStorage.currentPage='myAssets.html';
      currentPage='myAssets.html';
    }
    $(".iframe2").load(currentPage);
  }
  else{
    $(".iframe1").empty().load(currentPage);
  }
}
////默认加载iframe1页面
//function load_iframe1Page(){
//  var up_page=window.localStorage.upPage;
//  if(!up_page){
//    window.localStorage.upPage='up_bibiFiance.html';
//    up_page='up_bibiFiance.html';
//  }
//  $(".iframe1").load(up_page);
//}
//function run_defaultPage(isUp){
//  isUp=!isUp?false:isUp;
//  if(isUp){
//    load_iframe1Page();
//  }else{
//    load_iframePage();
//  }
//}
/**
 * 计算bcex 24H涨跌。
 *
 * @param arr1 需查对象数组，parameter1 所需查特定对象字段，parameter2 所需查子字段，
 */
function bcex_show(arr1,parameter1,parameter12){
  var arr2 = [];
//转换成 hash，以空间换时间
  arr1.forEach(function(element,index) {
    arr2[element.coin_from] = element;
  });
  arr1 = arr2;
  var num1=arr1[parameter1][parameter12];
  var num2=100;
  return numMulti(num1, num2);
}
//不含时分秒
function timestampToTime(timestamp) {
  var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  Y = date.getFullYear() + '-';
  M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  D = (date.getDate()<10 ? '0'+date.getDate():date.getDate()) + ' ';
  //h = (date.getHours()<10 ? '0'+date.getHours():date.getHours()) + ':';
  //m = (date.getMinutes()<10 ? '0'+date.getMinutes():date.getMinutes()) + ':';
  //s = date.getSeconds()<10 ? '0'+date.getSeconds():date.getSeconds();
  //return Y+M+D+h+m+s;
  return Y+M+D;
}
//page_flag 参数说明
// 0 myAssets.html 我的资产
// 1 withdrawCoin.html 我的资产-提币
// 2 change_details.html 我的资产-去理财
// 3 bibiFinance.html 我的理财-币币理财
// 4 safe_settings.html 安全管理-安全设置
// 5 up_bibiFiance.html 币币兑换
$(function(){
  var token=window.localStorage.token;
  var language=window.localStorage.language;
  //请求is_login 判断是否正常登陆
  $.ajax({
    type:"POST",
    url:config.domain+"/api/v2/user/is_login",
    data:{
      token:token,
      language:language
    },
    dataType:"json",
    success:function(res){
      console.log("这是is_login个人信息响应");
      language=window.localStorage.language;
      if(res.code==200) {
        var page_flag='';
        sessionStorage.setItem('page_flag',page_flag);
        sessionStorage.setItem('exchangeNum','');
        sessionStorage.setItem('chosenType','');
        var obj=res.obj.userQuery;
        var seting=res.obj.seting;
        var certification=res.obj.certification;
        var email=obj.email;
        $(".mail_info").html(email);
        var local_obj={
          email:obj.email,
          password:obj.password,
          phone:obj.phone,
          birthday:timestampToTime(obj.birthday),
          name:obj.name,
          userId:obj.userId,
          setingStatus:seting,
          certification:certification
        };
        sessionStorage.local_obj=JSON.stringify(local_obj);
        //api/v2/user/bcex
        var data_title='24H涨跌：';
        $('.header_title').html(data_title);
        var data_names=['1.BTC2CK.USD','2.BHPC2BTC','3.BHPC2ETH','4.ETH2CK.USD'];
        $('ul.header_data>li>span.data_name').each(function(i){
                      $(this).html(data_names[i]);
        });
        var language=window.localStorage.language;
        $.ajax({
          type:"POST",
          url:config.domain+'/api/v2/user/bcex',
          data:{
            language:language
          },
          dataType:"json",
          success:function(res){
            console.log("这是bcex响应");
            console.log(res);
            if(res.code==200) {
              //var btc2cny=JSON.parse(res.obj.btc2cny);
              try{
                if(res.obj.btc2cny==''||res.obj.markets==''){
                  throw new MyError("bcexBoom!");
                }
                var btc2cny=JSON.parse(res.obj.btc2cny);
                var markets=JSON.parse(res.obj.markets);
                console.log("btc2cny",btc2cny);
                console.log("markets",markets);
                var eth=markets.data.eth;
                var ckusd=markets.data.ckusd;
                var btc=markets.data.btc;
                //var BTC2CKUSD=ckusd[0]["24_ups"];
                var BTC2CKUSD=bcex_show(ckusd,'btc','24_ups');
                //var BHPC2BTC=btc[6]["24_ups"];
                var BHPC2BTC=bcex_show(btc,'bhpc','24_ups');
                //var BHPC2ETH=eth[2]["24_ups"];
                var BHPC2ETH=bcex_show(eth,'bhpc','24_ups');
                var ETH2CKUSD=bcex_show(ckusd,'eth',"24_ups");
                console.log('BTC2CKUSD',BTC2CKUSD);
                console.log('BHPC2BTC',BHPC2BTC);
                console.log('BHPC2ETH',BHPC2ETH);
                console.log('ETH2CKUSD',ETH2CKUSD);
                //var ETH2CKUSD=[];
                //ckusd.forEach(function(element,index){
                //  ETH2CKUSD[element.coin_from]=element;
                //});
                //ckusd=ETH2CKUSD;
                var data_values=[BTC2CKUSD,BHPC2BTC,BHPC2ETH,ETH2CKUSD];
                $('ul.header_data>li>span.data_value').each(function(i){
                  $(this).html(data_values[i]>0?`+${data_values[i]}%`:`${data_values[i]}%`);
                  if(  $(this).html().indexOf('-')!=-1){
                    $(this).css('color','red');
                  }
                });
              }
              catch(err){
                if(err.name =='MyError') alert(err.message);
              }
            }
              //catch(err){
              //  if(err.name =='MyError') alert(err.message);
              //}
            //}
            else{
              alert(res.msg);
              window.localStorage.language=language;
              window.location=config.myWeb+'/login.html';
            }
          },
          error:function(){
            alert($.i18n.prop('network_error'));
            window.location.reload();
          }
        });
        var timer=null;
        //加载主题内容
        load_iframePage();
        //load_iframe1Page();
        //load_iframePage();
        //console.log(111);
        //$(".iframe2").load(currentPage);
        //console.log(2222);
        //点击下拉菜单/
        $('.drop_down_contianer>ul>li>a').each(function(i){
          var $tar=$(this);
          $tar.off('click').click(function(){
            localStorage.setItem('isUp',0);
            var html='';
            html+=`
        <div class="container">
          <aside>
                <ul class="aside_items">
                    <li><span>${$.i18n.prop('aside_items_span_1')}</span></li>
                    <li>
                        <span class="user_mon">${$.i18n.prop('aside_items_span_2')}</span>
                        <ul class="item item-myMoney">
                            <!--<li><a href="javascript:" data-link="myAssets.html" class="active">我的资产</a></li>-->
                            <li><a href="javascript:"  data-url="myAssets.html" class="active">${$.i18n.prop('aside_items_1')}</a></li>
                            <li><a href="javascript:" data-url="rechargeRecord.html">${$.i18n.prop('aside_items_2')}</a></li>
                        </ul>
                    </li>
                    <li>
                        <span class="my_mon">${$.i18n.prop('aside_items_span_3')}</span>
                        <ul class="item item-myFinance">
                            <li><a href="javascript:" target="_blank" data-url="bibiFinance.html">${$.i18n.prop('aside_items_3')}</a></li>
                            <li><a href="javascript:" data-url="financeRecord.html">${$.i18n.prop('aside_items_4')}</a></li>
                        </ul>
                    </li>
                    <li>
                        <span class="safe">${$.i18n.prop('aside_items_span_4')}</span>
                        <ul class="item item-mySecurity">
                            <li><a href="javascript:" class="add" data-url="addressManagement.html">${$.i18n.prop('aside_items_5')}</a></li>
                            <li><a href="javascript:" data-url="personalInfo.html">${$.i18n.prop('aside_items_6')}</a></li>
                            <li><a href="javascript:" data-url="safe_settings.html">${$.i18n.prop('aside_items_7')}</a></li>
                            <li><a href="javascript:" data-url="ERC-20.html">${$.i18n.prop('aside_items_8')}</a></li>
                        </ul>
                    </li>
                </ul>
            </aside>
             <div class="iframe2"></div>
           </div>
        `;
            $('.iframe1').empty().html(html);//先做清空操作
            window.localStorage.currentPage=$tar.data("url");
            $('.iframe2').load($tar.attr('data-url'));
            $(".aside_items a").each(function() {
              var $tar = $(this);
              $tar.off("click").click(function () {
                localStorage.setItem('isUp',0);
                window.localStorage.currentPage=$tar.data("url");
                $(".iframe2").load($tar.attr('data-url'));
              })
            });
          });
        });
        //$(".drop_down_contianer a").each(function(i){
        //  $(this).click(function(){
        //    var $tar=$(this);
        //    var $ifram2=$(".iframe2");
        //    //window.location="index.html";
        //    //window.open("index.html");
        //    switch(i){
        //       case 0: $ifram2.load($tar.data("url"));break;
        //       case 1: $ifram2.load($tar.data("url"));break;
        //       case 2: $ifram2.load($tar.data("url"));break;
        //       case 3: $ifram2.load($tar.data("url"));break;
        //       case 4: $ifram2.load($tar.data("url"));break;
        //    }
        //  });
        //});
        $("ul.nav-menu>li>a").each(function(i){
          $(this).off("click").click(function(){
            localStorage.setItem('isUp',1);
            var $tar=$(this);
            if(i==0){
              return;
            }else{
              window.localStorage.currentPage=$tar.data("url");
              $(".iframe1").load($tar.data("url"));
              //window.localStorage.upcurrentPage=$tar.data("url");
              clearInterval(timer);
              timer=setInterval(function(){
                aside_aclick();
              },500);
            }
          });
        });
        //首页侧边栏 点击加载
        aside_aclick();
        //首页导航下拉框
        //效果一
        //$(".nav-accountInfo").hover(function(){
        //  $(".drop_down_contianer").toggle("hide");
        //});
        //效果二
        $(".nav-accountInfo").hover(function(){
            $(".drop_down_contianer").show();
            $(".drop_down").css('background',"url('img/black_up.png')no-repeat center");
          },
          function(){
            $(".drop_down_contianer").hide();
            $(".drop_down").css('background',"url('img/black_down.png')no-repeat center");
          });
        //退出登陆
        //POST /api/v2/user/quit
        $(".exit_icon ").click(function(){
          if(confirm($.i18n.prop('alert_exit'))){
            $.ajax({
              type:"POST",
              url:config.domain+"/api/v2/user/quit",
              data:{
                token:token,
                language:language
              },
              dataType:"json",
              success:function(res){
                console.log("这是注销登陆");
                console.log(res);
                if(res.code==200){
                  localStorage.clear();
                  sessionStorage.clear();
                  window.localStorage.language=language;
                  window.location='login.html';
                  //window.location='login.html';
                  //window.sessionStorage="";
                  //window.localStorage="";
                  //window.location.reload();
                }
                else{
                  alert(res.msg);
                }
              },
              error:function(){
                alert($.i18n.prop('network_error'));
                window.location.reload();
              }
            });
          }
        });
        var flag_icon= language=='zh-CN'?"url('img/China.png')no-repeat center":"url('img/America.png')no-repeat center";
        $('.flag_icon').css('background',flag_icon);
        $(".header_lang").click(function(event){
          event.stopPropagation();
          $('.lang_choose').toggle();
          //window.localStorage.language="EN";
          //loadProperties(window.localStorage.language);
          //window.location="index.html";
        });

        $(document).click(function () {
          $('.lang_choose').hide();
        });
        $('ul.lang_choose>li').click(function(){
          //$('.lang_choose').hide();
          var $tar=$(this);
          //$('.flag_icon').css('background',"url('img/guoqibg.png')no-repeat 0 -45px");
          window.localStorage.styleSheet=$tar.attr('data-css');
          window.localStorage.language=$tar.attr('data-lang');
          //var currentPage=window.localStorage.currentPage;
          //$(".iframe2").load(currentPage);
          window.location.reload();

          //window.location.reload();
        });
      }
      else{
        alert(res.msg);
        window.localStorage.language=language;
        window.location=config.myWeb+'/login.html';
      }
    },
    error:function(){
     alert($.i18n.prop('network_error'));
      window.location.reload();
    }
  });
});