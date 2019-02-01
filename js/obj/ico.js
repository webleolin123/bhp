/**
 * Created by Administrator on 2018/2/11.
 */
(function () {
    function ico() {
        this._that=this
    }
    ico.prototype.getListPurse=function () {
        var token=window.localStorage.token
        $.ajax({
            type: "post",
            url: config.domain+'/user/showAllWallet?token='+token,
            data: '',
            dataType: "json",
            success: function(res){
                if(res.code=='200'){
                    var data=res.obj
//                      type  比特币0 以太坊1
                    console.log(data)
                    for(var i=0;i<data.length;i++){
                        var type=data[i].type
                        var balance=data[i].balance
                        //初始化余额
                        var icon=getInfoByType(type)
                        $('.'+icon+' .num span').text(balance)
                        //switch (type){
                        //    case 1:
                        //        $('.BTC .num span').text(balance)
                        //        break;
                        //    case 2:
                        //        $('.ETH .num span').text(balance)
                        //        break;
                        //    default:
                        //        break
                        //
                        //}
                    }
                }
            },
            error:function () {
                alert('请求失败')
            }
        });
    }
    ico.prototype.getInfoByType=function (type) {
        var type=type
        switch (type){
            case 1:return BTC;break;
            case 2:return ETH;break;
            case 3:return ETC;break;
            case 4:return EOS;break;
            case 5:return BTH;break;
            case 6:return DASH;break;
            case 7:return ZCASH;break;
            case 8:return BHCP;break;
            default:break;
        }
    }
    ico.prototype.getList=function () {
        var token=window.localStorage.token
        $.ajax({
            type: "post",
            url: config.domain+'/user/showAllWallet?token='+token,
            data: '',
            dataType: "json",
            success: function(res){
                if(res.code=='200'){
                    var data=res.obj
                    var options=''
                    if(getUrlParam('coin')){
                        var clickCoin=getUrlParam('coin')
                    }else{
                        var clickCoin=0
                    }
                    for(var i=0;i<data.length;i++){
                        var type=data[i].type
                        var address=data[i].address
                        var balance=data[i].balance
                        var coin = this.getInfoByType(type)
                        options+='<option data-address="'+address+'" data-type="'+type+'" data-balance="'+balance+'" >'+coin+'('+balance+')</option>'

                        if(type==1){
                            $('.refresh').css('display','inline-block')
                        }
                        //获取选中
                        if(clickCoin==type){
                            //初始化
                            var code=address
                            showQrCode(code)
                            $('.jqcode-container .name').text(coin+'地址')
                            $('.jqcode-container .code').text(code)
                            $('.all-in').text('<span>'+balance+'</span>'+info+' USE ALL')

                        }

                    }
                    console.log(options)
                    $('#accountType').append(options)





                }else{
                    alert(res.msg)
                }
            },
            error:function () {
                alert('请求失败')
            }
        });
    }
    
    ico.prototype.withDraw=function () {
        var token=window.localStorage.token
        var type=$('#accountType option:checked').data('type')
        var toAddress=$('input[name=toAddress]').val()
        var amount=$('input[name=amount]').val()
        $.ajax({
            type: "post",
            url: config.domain+'/userManager/createTransaction?token='+token,
            data: {'type':type,'toAddress':toAddress,'amount':amount},
            dataType: "json",
            success: function(res){
                if(res.code=='200'){

                }
            },
            error:function () {
                alert('请求失败')
            }
        });
    }
    ico.prototype.exchange=function () {
        var token=window.localStorage.token
        var type=$('#accountType option:checked').data('type')
        var count=$('input[name=count]').val()
        var that=this._that
        if(count==''){
            that.swal('数量不能为空',1000)
            return;
        }

        switch (type){
            case 'BTC':
                var data={'bitcoinCount':count,'ethereumCount':0};
                break;
            case 'ETH':
                var data={'bitcoinCount':0,'ethereumCount':count};
                break;
            default:
                alert('请选择钱包')
                return;
                break;
        }

        $.ajax({
            type: "post",
            url: config.domain+'/user/buyBhpc?token='+token,
            data: data,
            dataType: "json",
            success: function(res){
                if(res.code=='200'){
                    that.swal('交易成功！',1500)
                }else{
                    that.swal(res.msg,2000)
                }
            },
            error:function () {
                alert('请求失败')
            }
        });
    }

    ico.prototype.getBTCBalance= function () {
        var token=window.localStorage.token
        $.ajax({
            type: "get",
            url: config.domain+'/user/bitcoinBalance?token='+token,
            data: '',
            dataType: "json",
            success: function(res){
                if(res.code=='200'){
                    var balance=res.obj
                    console.log(res)
                    $('.all-in').html('<span>'+balance+'</span> BTC USE ALL')
                }
            },
            error:function () {
                alert('请求失败')
            }
        });

    }
    ico.prototype.getETHBalance= function () {
        var token=window.localStorage.token
        $.ajax({
            type: "get",
            url: config.domain+'/user/ethereumBalance?token='+token,
            data: '',
            dataType: "json",
            success: function(res){
                if(res.code=='200'){
                    var balance=res.obj

                    $('.all-in').html('<span>'+balance+'</span> ETH USE ALL')

                }
            },
            error:function () {
                alert('请求失败')
            }
        });

    }

    ico.prototype.getBTCBalance2= function () {
        var token=window.localStorage.token
        $.ajax({
            type: "get",
            url: config.domain+'/user/bitcoinBalance?token='+token,
            data: '',
            dataType: "json",
            success: function(res){
                if(res.code=='200'){
                    var balance=res.obj
                    $('.BTC .all-in').html('<span>'+balance+'</span> BTC USE ALL')
                }
            },
            error:function () {
                alert('请求失败')
            }
        });

    }
    ico.prototype.getETHBalance2= function () {
        var token=window.localStorage.token
        $.ajax({
            type: "get",
            url: config.domain+'/user/ethereumBalance?token='+token,
            data: '',
            dataType: "json",
            success: function(res){
                if(res.code=='200'){
                    var balance=res.obj
                    $('.ETH .all-in').html('<span>'+balance+'</span> ETH USE ALL')

                }
            },
            error:function () {
                alert('请求失败')
            }
        });

    }


    ico.prototype.BTCRate= function () {
        var token=window.localStorage.token
        $.ajax({
            type: "post",
            url: config.domain+'/user/bitcoinToDollarRate?token='+token,
            data: '',
            dataType: "json",
            success: function(res){
                if(res.code=='200'){
                    window.localStorage.BTCrate=res.obj
                }
            },
            error:function () {
                alert('请求失败')
            }
        });
    }
    ico.prototype.ETHRate= function () {
        var token=window.localStorage.token
        $.ajax({
            type: "post",
            url: config.domain+'/user/ethereumToDollarRate?token='+token,
            data: '',
            dataType: "json",
            success: function(res){
                if(res.code=='200'){
                    window.localStorage.ETHrate=res.obj
                }
            },
            error:function () {
                alert('请求失败')
            }
        });
    }
    ico.prototype.BHPCRate=function () {
        var token=window.localStorage.token
        $.ajax({
            type: "post",
            url: config.domain+'/user/bhpcToDollarRate?token='+token,
            data: '',
            dataType: "json",
            success: function(res){
                if(res.code=='200'){
                    window.localStorage.BHPCrate=res.obj
                }
            },
            error:function () {
                alert($.i18n.prop('network_error'));
            }
        });
    }


    ico.prototype.applyForWhiteList=function(){
        var that =this._that
        var token=window.localStorage.token
        var data=$('form').serialize()

        $.ajax({
            type: "post",
            url: config.domain+'/user/applyForWhitelist?token='+token,
            data: data,
            dataType: "json",
            success: function(res){
                if(res.code=='200'){
                    that.swal('申请已提交',2000)
                }else{
                    that.swal(res.msg,2000)
                }
            },
            error:function () {
                alert('网络异常')
            }
        });
    }
    ico.prototype.swal=function (title,time) {
        swal({
            title: title,
            text: time/1000+"秒后自动关闭。",
            timer: time,
            showConfirmButton: false
        });
    }
    window.ico=ico
}())

function showQrCode(cont) {
    if(cont){
        $('.jqcode').children().remove()
        $('.jqcode').qrcode(cont);
    }

}
