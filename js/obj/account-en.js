/**
 * Created by Administrator on 2018/2/10.
 */

(function () {
    function Account() {
        this._that=this;
    }
    Account.prototype.login=function () {
        var that=this._that;
        var language=window.localStorage.language;
        var email=$('#email').val();
        var password=$('#password').val();
        $('#login_message').removeClass('hide');
        $('#regist-message').addClass('hide');
        if(email==''){
            that.message($.i18n.prop('email_cannot_be_empty'),0,'login_message');
            return
        }
        if(!isEmail(email)){
            that.message($.i18n.prop('please_input_correct_email'),0,'login_message');
            $('#email').val('');
            return
        }
        if(password==''){
            that.message($.i18n.prop('alert_password_empty'),0,'login_message');
            return
        }
        $.ajax({
            type: "post",
            url: config.domain+'/api/v2/user/login',
            data: {'email':email,'password':password,language:language},
            dataType: "json",
            success: function(res){
                if(res.code=='200'){
                    $('#login_message').addClass('hide');
                    window.localStorage.token=res.obj.userQuery.token;
                    window.localStorage.email=res.obj.userQuery.email;
                    window.location='index.html';
                }else{
                    that.message(res.msg,0,'login_message')
                }
            },
            error:function () {
               alert($.i18n.prop('network_error'));
            }
        });
    };
    Account.prototype.regist=function () {
        var that=this._that;
        var regEmail=$('#regEmail').val();
        var regPassword=$('#regPassword').val();
        var regSecPassword=$('#regSecPassword').val();
        var ischeck=$('input[type=checkbox]').prop("checked");
        var verify=$('#code').val();
        $('#login_message').addClass('hide');
        $('#regist-message').removeClass('hide');
        if(regEmail==''){
            that.message($.i18n.prop('email_cannot_be_empty'),0,'regist-message')
            return
        }
        if(!isEmail(regEmail)){
            that.message($.i18n.prop('please_input_correct_email'),0,'regist-message');
            $('#regEmail').val('');
            return
        }
        if(regPassword==''||regSecPassword==''){
            that.message($.i18n.prop('alert_password_empty'),0,'regist-message')
            return
        }
        //注册页8-15正则表达式验证
        if(!is8_15password(regPassword)){
            that.message($.i18n.prop('login_password_info'),0,'regist-message');
            $('#regPassword').val('');
            $('#regSecPassword').val('');
            return;
        }
        if(regPassword!=regSecPassword){
            that.message($.i18n.prop('twice_diff'),0,'regist-message');
            $('#regPassword').val('');
            $('#regSecPassword').val('');
            return
        }
        if(verify==''){
            that.message($.i18n.prop('login_verification_code'),0,'regist-message');
            return
        }
        if(!ischeck){
            that.message($.i18n.prop('choose_agree'),0,'regist-message');
            return;
        }
        var language=window.localStorage.language;
        $('.loading').css('display','block');
        $.ajax({
            type: "post",
            url: config.domain+'/api/v2/user/regist',
            data: {'email':regEmail,'password':regPassword,'verify':verify,language:language},
            dataType: "json",
            success: function(res){
                if(res.code=='200'){
                    $('#regist-message').addClass('hide');
                    that.swal($.i18n.prop('activate_account'),3000);
                }else{
                    that.message(res.msg,0,'regist-message');
                }
                $('.loading').css('display','none')
                $('#code').val('');
            },
            error:function () {
                alert($.i18n.prop('network_error'));
            }
        });
    };
    Account.prototype.islogin=function () {
        var token= window.localStorage.token;
        var language=window.localStorage.language;
        $.ajax({
            type: "get",
            url: config.domain+'/api/v2/user/is_login',
            data: {'token':token,language:language},
            async: false,
            dataType: "json",
            success: function(res){
                if(res.code=='200'){
                  console.log(res)
                    if(res.obj.email==null){
                        res.obj.email=''
                    }
                    if(res.obj.sureName==null){
                        res.obj.sureName=''
                    }
                    if(res.obj.name==null){
                        res.obj.name=''
                    }
                    if(res.obj.phone==null){
                        res.obj.phone=''
                    }
                    if(res.obj.birthday==null){
                        res.obj.birthday=''
                    }
                    window.localStorage.email=res.obj.email;
                    window.localStorage.sureName=res.obj.sureName;
                    window.localStorage.name=res.obj.name;
                    window.localStorage.phone=res.obj.phone;
                    window.localStorage.birthday=res.obj.birthday;

                    window.localStorage.twoauthentication=res.obj.twoauthentication;
                    window.localStorage.newsPushed=res.obj.newsPushed;
                    window.localStorage.infoStatus=res.obj.infoStatus;


                    window.localStorage.bitcoinBalance=res.obj.bitcoinBalance;
                    window.localStorage.bhpcAward =res.obj.bhpcAward;
                    window.localStorage.ethereumBalance=res.obj.ethereumBalance;
                    window.localStorage.bhpc=res.obj.bhpc;

                    window.localStorage.erc20=res.obj.erc20;

                    if(res.obj.whitelist){
                        var s=' <div style="text-align: center;color: white;font-size: 14px">(In Whitelist Now)</div>'
                        $('.left-container ul').append(s)
                    }
					var bhpcAward=res.obj.bhpcAward.toFixed(5);
                    var dividend=res.obj.dividend.toFixed(5);
                    var showString=' <a> <li style="padding-top: 20px"> <span style="width: 100%;text-align: center;display: block">BHPC Bonus</span> <span style="width: 100%;display: block;margin-top: 5px;">'
                    showString+='<span style="width: 40%;background-color: white;color: black;display: inline-block;margin-left: 20%;text-align: center">'+bhpcAward+'</span> <span style="width: 40%;">BHPC</span>'
                    showString+='   </span> </li> </a>'
                    showString+='<a> <li style="padding-top: 20px"> <span style="width: 100%;text-align: center;display: block">Dividends</span> <span style="width: 100%;display: block;margin-top: 5px;">'
                    showString+=  '<span style="width: 40%;background-color: white;color: black;display: inline-block;margin-left: 20%;text-align: center">'+dividend+'</span> <span style="width: 40%">ETH</span>'
                    showString+='   </span> </li> </a>'
                    $('.left-container ul').append(showString)

                }else{
                    alert($.i18n.prop('login_again'));
                    window.location='login.html'
                }
            },
            error:function () {
                    alert($.i18n.prop('network_error'));
            }
        });
    };
    Account.prototype.message=function (mes,type,dom) {
        if(type==1){
            var color='alert-success';
        }else{
            var color='alert-danger';
        }
        var message='<div id="message" class="alert  '+color+' alert-dismissable" ><button type="button" class="close" data-dismiss="alert" aria-hidden="true"> &times;</button>';
        message+=mes+'</div>';

        $('#'+dom).children().remove();
        $('#'+dom).append(message);
    };
    Account.prototype.forgot=function () {
        var that=this._that;
        var email=$('#forgot_email').val();
        var verify=$('#forgetCode').val();
        $('#forget-msg').removeClass('hide');
        if(email==''){
            that.message($.i18n.prop('login_Forget_tip_email'),0,'forget-msg');
            return;
        }
        if(!isEmail(email)){
            that.message($.i18n.prop('please_input_correct_email'),0,'forget-msg');
            $('#forgot_email').val('');
            return
        }
        if(verify==''){
            that.message($.i18n.prop('string_Please_input_the_verification_code'),0,'forget-msg');
            return;
        }
        that.message($.i18n.prop('login_send_reset'),1,'forget-msg');
        var language=window.localStorage.language;
        $.ajax({
            type: "POST",
            url: config.domain+'/api/v2/user/forget_password',
            data: {'email':email,'verify':verify,language:language},
            dataType: "json",
            success: function(res){
                if(res.code=='200'){
                    that.message($.i18n.prop('send_success'),1,'forget-msg');
                    var timer=setTimeout(function(){
                        $('#forget-msg').addClass('hide');
                        clearTimeout(timer);
                        timer=null;
                    },5000);
                }else{
                    that.message(res.msg,0,'forget-msg');
                }
                $('#forgetCode').val('');
            },
            error:function () {
               alert($.i18n.prop('network_error'));
            }
        });
    };
    Account.prototype.reset=function(){
        var that=this._that;
        var language=window.localStorage.language;
        var password=$('#password').val();
        var sec=$('#sec').val();

        var forgetCode=getUrlParam('forgetCode');
        if(password==''||sec==''){
            that.message($.i18n.prop('alert_password_empty'),0,'message')
            return;
        }
        if(!is8_15password(password)){
            that.message($.i18n.prop('login_password_info'),0,'message');
            $('#password').val('');
            $('#sec').val('');
            return;
        }
        if(password!=sec){
            that.message($.i18n.prop('twice_diff'),0,'message');
            $('#password').val('');
            $('#sec').val('');
            return;
        }
            $.ajax({
                type: "POST",
                url: config.domain+'/api/v2/user/reset_password',
                data: {'password':password,'forgetCode':forgetCode,language:language},
                dataType: "json",
                success: function(res){
                    if(res.code=='200'){
                        that.message($.i18n.prop('Automatic_jump'),1,'message');
                        var timer=setTimeout(function(){
                            window.localStorage.language=language;
                            window.location=config.myWeb+'/login.html';
                            clearTimeout(timer);
                            timer=null;
                        },3000);
                    }else{
                        that.message(res.msg,0,'message');
                    }
                },
                error:function () {
                   alert($.i18n.prop('network_error'));
                }
            });
    };
    Account.prototype.swal=function (title,time) {
        swal({
            title: title,
            //text: time/1000+"秒后自动关闭。",
            timer: time,
            showConfirmButton: false
        });
    };
    Account.prototype.getCode=function (type) {
        var email;
        var that=this._that;
        if(type=='login'){
            email=$('#regEmail').val();
            $('#regist-message').removeClass('hide');
            if(email==''){
                this.swal($.i18n.prop('email_cannot_be_empty'));
                return;
            }
            else {
                if(!isEmail(email)){
                that.message($.i18n.prop('please_input_correct_email'),0,'regist-message');
                $('#regEmail').val('');
                return
                }
                $('#regist-message').addClass('hide');
            }
            $('#loginCodeImg').removeClass('hide');
            $('#loginCodeImg').attr('src',config.domain+'/api/v2/user/verify?email='+email);
            $('#getLoginCode').addClass('hide');
        }
        else if(type=='forget'){
            email=$('#forgot_email').val();
            $('#forget-msg').removeClass('hide');
            if(email==''){
                this.message($.i18n.prop('email_cannot_be_empty'),0,'forget-msg');
                return;
            }
            else {
                if (!isEmail(email)) {
                    that.message($.i18n.prop('please_input_correct_email'), 0, 'forget-msg');
                    $('#forgot_email').val('');
                    return
                }
                $('#forget-msg').addClass('hide');
            }
            $('#forgetCodeImg').removeClass('hide');
            $('#forgetCodeImg').attr('src',config.domain+'/api/v2/user/verify?email='+email);
            $('#getForgetCode').addClass('hide');
        }
    };
    window.Account =Account
}());
