/**
 * Created by chun on 2018/5/28.
 */
function loadProperties(language){
  jQuery.i18n.properties({//加载资浏览器语言对应的资源文件
    name:'strings', //资源文件名称
    language:language,
    path:'components/i18n/resources/i18n/', //资源文件路径
    mode:'map', //用Map的方式使用资源文件中的值
    callback: function() {//加载成功后设置显示内容
//                充币
      $('.string_Deposit').html($.i18n.prop('string_Deposit'));
//                复制到钱包地址
      $('.string_Wallet_address_copy').html($.i18n.prop('string_Wallet_address_copy'));
//              钱包地址
      $('.Wallet_address').html($.i18n.prop('Wallet_address'));
//             点击二维码
      $('.Click_to_zoom_in').html($.i18n.prop('Click_to_zoom_in'));
//             警告
      $('.string_warnings').html($.i18n.prop('string_warnings'));
//             近期转入记录
      $('.Deposit_record').html($.i18n.prop('Deposit_record'));
//             转入说明
      var Deposit_notes_details=['Deposit_notes_1', 'Deposit_notes_2', 'Deposit_notes_3'];
      each_menu('.Deposit_notes_details>p',Deposit_notes_details);
//             近期转入转移记录
      var Record_tds=['string_Wallet_address', 'string_Amount', 'string_Status', 'string_Operation_time'];
      each_menu('table>thead>tr>th',Record_tds);
//                暂无记录  日期
////                上一页
//                $('.string_Previous_Page').html($.i18n.prop('string_Previous_Page'));
////                下一页
//                $('.string_Next_Page').html($.i18n.prop('string_Next_Page'));
    }
  });
}
var language = window.localStorage.language;
if(!language){
  window.localStorage.language='zh-CN';
  language='zh-CN';
}
loadProperties(language);
$(function () {
  var token = window.localStorage.token;
  var language = window.localStorage.language;
  //请求is_login 判断是否正常登陆
  $.ajax({
    type: "POST",
    url: config.domain + "/api/v2/user/is_login",
    data: {
      token: token,
      language:language
    },
    dataType: "json",
    success: function (res) {
      console.log("这是is_login个人信息响应");
      if (res.code == 200) {
        //        格式化 时间戳转日期
        function timestampToTime(timestamp) {
          var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
          Y = date.getFullYear() + '-';
          M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
          D = (date.getDate()<10 ? '0'+date.getDate():date.getDate()) + ' ';
          h = (date.getHours()<10 ? '0'+date.getHours():date.getHours()) + ':';
          m = (date.getMinutes()<10 ? '0'+date.getMinutes():date.getMinutes()) + ':';
          s = date.getSeconds()<10 ? '0'+date.getSeconds():date.getSeconds();
          return Y+M+D+h+m+s;
        }
        var type = sessionStorage.getItem("cointype");
        var coinname = sessionStorage.getItem("coinname");
        var coinChinesename=sessionStorage.getItem('coinChinesename');
        var coinTIps='';
        coinTIps+= language=='zh-CN'?`这是您的 ${coinname} 钱包地址,请将您的 ${coinChinesename} 转入此地址`:
                 `This is your ${coinname} Wallet address, please deposit your ${coinname} to this address`               ;
        $(".coinTIps").html(coinTIps);
        $(".coinname").html(coinname);
        //     GET /api/v2/user/recharge   ajax请求
        $.ajax({
          type: 'GET',
          url: config.domain + '/api/v2/user/recharge',
          data: {
            token: token,
            type: type,
            language:language
          },
          dataType: 'json',
          success: function (res) {
            console.log("这是充币页面");
            console.log(res);
            var obj = res.obj;
            if(obj==null){
              obj.address='空';
              //return '空';
            }
            var walletAddr='';
            walletAddr += !obj.address?'空':obj.address;
            sessionStorage.setItem("walletAddr", walletAddr);
            $(".walletAddr").html(walletAddr);
            var qrcode = new QRCode('qrcode', {
              text: String(sessionStorage.getItem("walletAddr")),
              width: 146,
              height: 146,
              colorDark: '#000000',
              colorLight: '#ffffff',
              correctLevel: QRCode.CorrectLevel.H
            });
            console.log(String(walletAddr));
            var qrcode_big = new QRCode('qrcode_big', {
              text: String(sessionStorage.getItem("walletAddr")),
              width: 276,
              height: 276,
              colorDark: '#000000',
              colorLight: '#ffffff',
              correctLevel: QRCode.CorrectLevel.H
            });
            var rechargeRecordList = obj.rechargeRecordList;
            var html='';
            var language = window.localStorage.language;
            var  No_records=language=='zh-CN'?'暂无记录':'No record';
            if (rechargeRecordList.length == 0) {
                html+=`<tr><td colspan="5" style="text-align: center">${No_records}</td></tr>`;
            }else{
              for (var i = 0; i < rechargeRecordList.length; i++) {
                var o = rechargeRecordList[i];
                o.address=o.address==null?'':o.address;
                var  authentication=language=='zh-CN'?o.authentication:'success';
                var createTime = timestampToTime(o.createTime);
                html += `
                       <tr>
                        <td>${o.address}</td><td>${o.payAmount}</td><td>${authentication}</td>
                        <td style="text-align:center">
                        <span>${createTime}</span>
                        <!--<a href="javascript:" class="view_historyAddr">查看对方地址</a> -->
                        </td>
                       </tr>
                    `;
              }

            }
            <!--新增一行作为查看-->
            //html += `
            //        <tr class="view_history_tr hide">
            //        <img src="img/blue_sanjiao.png" alt="" class="sanjiao hide"/>
            //        <td colspan="5">未提供</td>
            //        </tr>
            //    `;
            $("#tbody1").html(html);
          },
          error: function () {
            alert($.i18n.prop('network_error'));
          }
        });
//        点击查看地址
        $("#tbody1").off('click').on("click", ".view_historyAddr", function () {
          var $tar = $(this);
          $tar.html($tar.data("view"));
          $(".view_history_tr").toggle("hide");
          $(".sanjiao").toggle("hide");
        });
//        点击二维码放大
        $(document).click(function () {
          $(".erweima_big").hide();
          $('body').addClass("opacity");
        });
        $(".erweima").click(function (event) {
          event.stopPropagation();
          $(".erweima_big").toggle();
        });
        function copy() {
          var text = document.getElementById("walletAddr").innerText;
          var input = document.getElementById("input-code");
          input.value = text; // 修改文本框的内容
          input.select(); // 选中文本
          document.execCommand("copy"); // 执行浏览器复制命令
          alert($.i18n.prop('copy_success'));
        }
//copy钱包地址
        $('.copy-btn').off("click").click(function () {
          copy();
        });
      }
//copy函数
      else {
        alert(res.msg);
        window.localStorage.language=language;
        //window.location = "../login.html";
        window.location=config.myWeb+'/login.html';
      }
    },
    error: function () {
     alert($.i18n.prop('network_error'));
    }
  });
});

