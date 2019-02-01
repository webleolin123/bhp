/**
 * Created by Administrator on 2018/2/10.
 */

(function () {
    function Account() {
        this._that=this;
        console.log('this',this)
        language=window.localStorage.language;
    }
    Account.prototype.login=function () {
        var that=this._that
        var email=$('#email').val()
        var password=$('#password').val()
        if(email==''){
            that.message($.i18n.prop('email_cannot_be_empty'),0,'login-message')
            return
        }

        $.ajax({
            type: "post",
            url: config.domain+'/api/v2/user/login',
            data: {'email':email,'password':password,language:language},
            dataType: "json",
            success: function(res){
                if(res.code=='200'){
                    window.localStorage.token=res.obj.userQuery.token
                    window.localStorage.email=res.obj.userQuery.email;
                    window.location='index.html'
                }else{
                    that.message(res.msg,0,'login-message')
                }
            },
            error:function () {
               alert($.i18n.prop('network_error'));
            }
        });
    }
    Account.prototype.regist=function () {

        var that=this._that;
        console.log(that);
        var regEmail=$('#regEmail').val()
        var regPassword=$('#regPassword').val()
        var regSecPassword=$('#regSecPassword').val()
        var ischeck=$('input[type=checkbox]').prop("checked")
        var verify=$('#code').val()
        if(!isEmail(regEmail)){
            that.message($.i18n.prop('please_input_correct_email'),0,'regist-message')
            return
        }
        if(regPassword!=regSecPassword){
            that.message($.i18n.prop('twice_diff'),0,'regist-message')
            return
        }
        if(regPassword==''||regSecPassword==''){
            that.message($.i18n.prop('email_cannot_be_empty'),0,'regist-message')
            return
        }
        if(regEmail==''){
            that.message($.i18n.prop('email_cannot_be_empty'),0,'regist-message')
            return
        }


        if(ischeck){
            $('.loading').css('display','block')

            $.ajax({
                type: "post",
                url: config.domain+'/api/v2/user/regist',
                data: {'email':regEmail,'password':regPassword,'verify':verify,language:language},
                dataType: "json",
                success: function(res){
                    if(res.code=='200'){
                        // that.message('you are successflly registered!',1,'regist-message')
                        // window.localStorage.token=res.obj.token
                        // window.location='html/EN/purse.html'
                        that.swal($.i18n.prop('activate_account'),3000);

                    }else{
                        that.message(res.msg,0,'regist-message')
                    }
                    $('.loading').css('display','none')

                },
                error:function () {
                   alert($.i18n.prop('network_error'));
                }
            });
        }else{
            that.message($.i18n.prop('choose_agree'),0,'regist-message')
        }

    }
    Account.prototype.islogin=function () {
        var token= window.localStorage.token
        $.ajax({
            type: "get",
            url: config.domain+'/api/v2/user/is_login',
            data: {'token':token},
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


                    window.localStorage.email=res.obj.email
                    window.localStorage.sureName=res.obj.sureName
                    window.localStorage.name=res.obj.name
                    window.localStorage.phone=res.obj.phone
                    window.localStorage.birthday=res.obj.birthday

                    window.localStorage.twoauthentication=res.obj.twoauthentication
                    window.localStorage.newsPushed=res.obj.newsPushed
                    window.localStorage.infoStatus=res.obj.infoStatus


                    window.localStorage.bitcoinBalance=res.obj.bitcoinBalance
                    window.localStorage.bhpcAward =res.obj.bhpcAward
                    window.localStorage.ethereumBalance=res.obj.ethereumBalance
                    window.localStorage.bhpc=res.obj.bhpc

                    window.localStorage.erc20=res.obj.erc20

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
                    alert($.i18n.prop('login_again'))
                    window.location='../../login.html'

                }
            },
            error:function () {
                //alert('请求失败')
            }
        });
    }
    Account.prototype.message=function (mes,type,dom) {
        if(type==1){
            var color='alert-success'
        }else{
            var color='alert-danger'
        }

        var message='<div id="message" class="alert  '+color+' alert-dismissable" ><button type="button" class="close" data-dismiss="alert" aria-hidden="true"> &times;</button>'
        message+=mes+'</div>'

        $('#'+dom).children().remove()
        $('#'+dom).append(message)
        
    }
    Account.prototype.forgot=function () {
        var email=$('#forgot_email').val()
        var that=this._that;
        that.message($.i18n.prop('login_send_reset'),1,'forget-msg')
        var verify=$('#forgetCode').val()
        $.ajax({
            type: "POST",
            url: config.domain+'/api/v2/user/forget_password',
            data: {'email':email,'verify':verify,language:language},
            dataType: "json",
            success: function(res){
                if(res.code=='200'){
                    that.message($.i18n.prop('send_success'),1,'forget-msg')
//                        $('#forgot').modal('hide')

                }else{
//                        $('#forgot').modal('hide')
                    that.message(res.msg,0,'forget-msg')
                }
            },
            error:function () {
               alert($.i18n.prop('network_error'));
            }
        });
    }
    Account.prototype.reset=function(){
        var that=this._that

        var password=$('#password').val()
        var sec=$('#sec').val()

        var forgetCode=getUrlParam('forgetCode')

        if(password!=sec){
            that.message($.i18n.prop('twice_diff'),0,'reset-msg')
        }else{
            $.ajax({
                type: "POST",
                url: config.domain+'/api/v2/user/reset_password',
                data: {'password':password,'forgetCode':forgetCode,language:language},
                dataType: "json",
                success: function(res){
                    if(res.code=='200'){
                        that.message($.i18n.prop('mod_success'),1,'message')
                    }else{
                        that.message(res.msg,0,'message')
                    }
                },
                error:function () {
                   alert($.i18n.prop('network_error'));
                }
            });
        }
    }
    Account.prototype.editPassword=function () {
        var that=this._that
        var token=window.localStorage.token
        var oldPassword=$('#oldPassword').val()
        var newSec =$('#newPassword').val()
        var password =$('#SecPassword').val()

        if(newSec!=password){
            that.swal($.i18n.prop('twice_diff'),1500)
            return
        }

        $.ajax({
            type: "post",
            url: config.domain+'/user/editPassword',
            data: {'password':password,'token':token,'oldPassword':oldPassword},
            dataType: "json",
            success: function(res){
                if(res.code=='200'){
                    that.swal($.i18n.prop('mod_success'),1500)
                }else{
                    that.swal(res.msg,1500)
                }
            },
            error:function () {
               alert($.i18n.prop('network_error'));
            }
        });
    }
    Account.prototype.loginOut=function(){
        var token=window.localStorage.token
        $.ajax({
            type: "get",
            url: config.domain+'/user/quit',
            data: {'token':token},
            dataType: "json",
            success: function(res){
                if(res.code=='200'){
                    //window.localStorage.token=''
                    localStorage.clear()
                    window.location='../../login.html'
                }
            },
            error:function () {
               alert($.i18n.prop('network_error'));
            }
        });
    }
    Account.prototype.swal=function (title,time) {
        swal({
            title: title,
            //text: time/1000+"秒后自动关闭。",
            timer: time,
            showConfirmButton: false
        });
    }
    Account.prototype.getCode=function (type) {
        var email;
        if(type=='login'){
            email=$('#regEmail').val()
            if(email==''){
                this.swal($.i18n.prop('email_cannot_be_empty'))
                return;
            }
            $('#loginCodeImg').css('display','block')
            $('#loginCodeImg').attr('src',config.domain+'/api/v2/user/verify?email='+email)
            $('#getLoginCode').css('display','none')
        }else if(type=='forget'){
            email=$('#forgot_email').val()
            if(email==''){
                this.message($.i18n.prop('email_cannot_be_empty'),0,'forget-msg')
                return;
            }
            $('#forgetCodeImg').css('display','block')
            $('#forgetCodeImg').attr('src',config.domain+'/api/v2/user/verify?email='+email)
            $('#getForgetCode').css('display','none')
        }else if(type=='draw'){
            $('#drawImg').css('display','block')
            $('#drawImg').attr('src',config.domain+'/api/v2/user/verify?email='+localStorage.email)
            $('#getDrawCode').css('display','none')
        }
    }
    Account.prototype.send = function(code,callback){
        var that=this._that
        $.ajax({
            type: "post",
            url: config.domain+'/api/v2/user/fetch_my_email_verify_code',
            data: {token:localStorage.token,verify:code},
            dataType: "json",
            success: function(res){
                var msg = res.msg;
                if(res.code=='200'){
                    that.swal(res.msg,1500)
                    $('#sendMessage').unbind();
                    that.countdown({callback:callback});
                }else {
                    that.swal(res.msg,1500)
                }
            },
            error:function () {
               alert($.i18n.prop('network_error'));;
            }
        });
    }
    Account.prototype.draw = function(obj){
        var that=this._that
        $.ajax({
            type: "post",
            url: config.domain+'/user/withdraw_apply',
            data: {
                token:localStorage.token,
                verify:obj.code,
                type:obj.type,
                amount:obj.amount,
                address:obj.address
            },
            dataType: "json",
            success: function(res){
                if(res.code=='200'){
                    that.swal(res.msg,1500);
                    setTimeout(function(){
                        location.reload();
                    },1500);
                }else {
                    that.swal(res.msg,1500)
                }
            },
            error:function () {
               alert($.i18n.prop('network_error'));
            }
        });
    }
    Account.prototype.countdown = function(obj){
        var curCount = 60;
        var timer = setInterval(function(){
            curCount--;
            if(curCount == 0) {
                window.clearInterval(timer); //停止计时器
                $('#sendMessage').bind('click',obj.callback); //启用按钮
                $('#sendMessage').text("email verification code");
            } else {
                $('#sendMessage').text('Retry after '+curCount+'s');
            }
        }, 1000);
    }
    window.Account =Account
}())
