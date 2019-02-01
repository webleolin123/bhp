/**
 * Created by Administrator on 2018/2/10.
 */
(function () {

    function Account() {
        this._that=this
    }
    Account.prototype.login=function () {
        var that=this._that
        var email=$('#email').val()
        var password=$('#password').val()
        if(email==''){
            that.message('邮箱不能为空',0,'login-message')
            return
        }

        $.ajax({
            type: "post",
            url: config.domain+'/user/login',
            data: {'email':email,'password':password},
            dataType: "json",
            success: function(res){
                if(res.code=='200'){

                    window.localStorage.token=res.obj.token
                    window.localStorage.email=res.obj.email
                    window.location='html/CN/purse.html'
                }else{
                    that.message(res.msg,0,'login-message')
                }
            },
            error:function () {
                alert('请求失败')
            }
        });
    }
    Account.prototype.login2=function () {
        var that=this._that
        var email=$('#email').val()
        var password=$('#password').val()
        if(email==''){
            that.swal('邮箱不能为空',1500)

            return
        }

        $.ajax({
            type: "post",
            url: config.domain+'/user/login',
            data: {'email':email,'password':password},
            dataType: "json",
            success: function(res){
                if(res.code=='200'){

                    window.localStorage.token=res.obj.token
                    window.localStorage.email=res.obj.email
                    window.location='html/CN/purse.html'
                }else{

                    //console.log(res.msg)
                    //console.log(word[res.msg])
                    that.swal(res.msg,2000)


                }
            },
            error:function () {
                alert('请求失败')
            }
        });
    }

    Account.prototype.regist=function () {

        var that=this._that
        var regEmail=$('#regEmail').val()
        var regPassword=$('#regPassword').val()
        var regSecPassword=$('#regSecPassword').val()
        var ischeck=$('input[type=checkbox]').prop("checked")
        if(!isEmail(regEmail)){
            that.message('请输入正确的邮箱',0,'regist-message')
            return
        }
        if(regPassword!=regSecPassword){
            that.message('两次输入的密码不一致',0,'regist-message')
            return
        }
        if(regPassword==''||regSecPassword==''){
            that.message('密码不能为空',0,'regist-message')
            return
        }
        if(regEmail==''){
            that.message('邮箱不能为空',0,'regist-message')
            return
        }


        if(ischeck){
            $('.loading').css('display','block')

            $.ajax({
                type: "post",
                url: config.domain+'/user/regist',
                data: {'email':regEmail,'password':regPassword},
                dataType: "json",
                success: function(res){
                    if(res.code=='200'){
                        that.message('注册成功!',1,'regist-message')
                        window.localStorage.token=res.obj.token
                        window.location='html/CN/purse.html'
                    }else{
                        that.message(res.msg,0,'regist-message')
                    }
                    $('.loading').css('display','none')

                },
                error:function () {
                    $('.loading').css('display','none')
                    alert('请求失败')
                }
            });
        }else{
            that.message('请阅读并同意条款和条件',0,'regist-message')
        }

    }
    Account.prototype.islogin=function () {
        var token= window.localStorage.token
        $.ajax({
            type: "get",
            url: config.domain+'/user/isLogin',
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
                    window.localStorage.ethereumBalance=res.obj.ethereumBalance
                    window.localStorage.bhpc=res.obj.bhpc

                    window.localStorage.erc20=res.obj.erc20

                    if(res.obj.whitelist){
                        var s=' <div style="text-align: center;color: white;font-size: 14px">(已成为大户)</div>'
                        $('.left-container ul').append(s)
                    }
                }else{
                    alert('重新登录')
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
        var that=this._that

        $.ajax({
            type: "get",
            url: config.domain+'/user/forgetPassword',
            data: {'email':email},
            dataType: "json",
            success: function(res){
                if(res.code=='200'){
                    that.message(res.msg,1,'forget-msg')
//                        $('#forgot').modal('hide')

                }else{
//                        $('#forgot').modal('hide')
                    that.message(res.msg,0,'forget-msg')
                }
            },
            error:function () {
                alert('请求失败')
            }
        });
    }
    Account.prototype.reset=function(){
        var that=this._that

        var password=$('#password').val()
        var sec=$('#sec').val()

        var forgetCode=getUrlParam('forgetCode')

        if(password!=sec){
            that.message(res.msg,0,'reset-msg')
        }else{
            $.ajax({
                type: "get",
                url: config.domain+'/user/resetPassword',
                data: {'password':password,'forgetCode':forgetCode},
                dataType: "json",
                success: function(res){
                    if(res.code=='200'){
                        that.message(res.msg,1,'message')
                    }else{
                        that.message(res.msg,0,'message')
                    }
                },
                error:function () {
                    alert('请求失败')
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
            that.swal('输入的密码不一致',1500)
            return
        }

        $.ajax({
            type: "post",
            url: config.domain+'/user/editPassword',
            data: {'password':password,'token':token,'oldPassword':oldPassword},
            dataType: "json",
            success: function(res){
                if(res.code=='200'){
                    that.swal('修改成功',1500)
                }else{
                    that.swal('操作异常',1500)
                }
            },
            error:function () {
                alert('请求失败')
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
                alert('请求失败')
            }
        });
    }

    Account.prototype.swal=function (title,time) {
        swal({
            title: title,
            timer: time,
            showConfirmButton: false
        });
    }

    window.Account =Account
}())