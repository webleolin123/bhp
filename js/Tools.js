/**
 * Created by Administrator on 2018/2/10.
 */
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
}
function regEmail(email) {
    if (String(email).indexOf('@') > 0) {
        var str = email.split('@')
//                    _s = '';
//            if (str[0].length > 3) {
//                for (var i = 0; i < str[0].length - 3; i++) {
//                    _s += '*';
//                }
//            }
        var new_email = str[0].substr(0, 3) + '***' + '@' + str[1]
    }
    return new_email
}
function isEmail(str){
    //var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    var reg=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    return reg.test(str);
}
function is8_15password(str){
    var reg=/^(?![^a-zA-Z]+$)(?!\D+$).{8,15}$/;
    return reg.test(str);
}
//function myTimertCountdown(count,page,selector){
//    var curCount = count;
//    var timer = setInterval(function(){
//        curCount--;
//        if(curCount == 0) {
//            window.clearInterval(timer); //停止计时器
//            window.location=config.myWeb+'/'+page;
//        } else {
//            $(selector).html('toLoginPage '+count+' s');
//            $('.countDownTips').html('toLoginPage '+count+' s');
//        }
//    }, 1000);
//}
function isNull(str){
    var regu = /\S/;
    var re = new RegExp(regu);
    return re.test(str);
}
function add0(m){return m<10?'0'+m:m }
function format(shijianchuo) {
//shijianchuo是整数，否则要parseInt转换
    var time = new Date(shijianchuo);
    var y = time.getFullYear();
    var m = time.getMonth()+1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y+'-'+add0(m)+'-'+add0(d);
}
//输入框获取焦点样式
function click_borderColor(selector1,class1){
    $(selector1).each(function(){
        var $tar=$(this);
        $tar.css('outline','none');
        $tar.blur(function(){
            if($tar.val()!=''){
                $tar.addClass(class1);
            }else{
                $tar.removeClass(class1);
            }
        });
    });
}
/**
 * 减法运算，避免数据相减小数点后产生多位数和计算精度损失。
 *
 * @param num1被减数  |  num2减数
 */
function numSub(num1, num2) {
    var baseNum, baseNum1, baseNum2;
    var precision;// 精度
    try {
        baseNum1 = num1.toString().split(".")[1].length;
    } catch (e) {
        baseNum1 = 0;
    }
    try {
        baseNum2 = num2.toString().split(".")[1].length;
    } catch (e) {
        baseNum2 = 0;
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
    precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2;
    return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision);
};
/**
 * 乘法运算，避免数据相乘小数点后产生多位数和计算精度损失。
 *
 * @param num1被乘数 | num2乘数
 */
function numMulti(num1, num2) {
    var baseNum = 0;
    try {
        baseNum += num1.toString().split(".")[1].length;
    } catch (e) {
    }
    try {
        baseNum += num2.toString().split(".")[1].length;
    } catch (e) {
    }
    return Number(num1.toString().replace(".", "")) * Number(num2.toString().replace(".", "")) / Math.pow(10, baseNum);
};
//        格式化 时间戳转日期
function timestampToTime(timestamp,flag) {
    var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    D = (date.getDate()<10 ? '0'+date.getDate():date.getDate()) + ' ';
    h = (date.getHours()<10 ? '0'+date.getHours():date.getHours()) + ':';
    m = (date.getMinutes()<10 ? '0'+date.getMinutes():date.getMinutes()) + ':';
    s = date.getSeconds()<10 ? '0'+date.getSeconds():date.getSeconds();
    return !flag?Y+M+D+h+m+s:Y+M+D;
}
//币种变化
function coinChange($tar){
    $tar.css('border','1px solid #2ec3ee').find(".choose_icon").addClass("selected");
    $tar.siblings().css('border','1px solid #EBEFF0').find(".choose_icon").removeClass("selected");
}

//定制例外信息
function MyError(msg){
    this.name='MyError';
    this.message=msg;
}
MyError.prototype=new Error;

