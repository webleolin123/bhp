/**
 * Created by chun on 2018/5/9.
 */
//创建common.js 存放全局变量 用于后期资源的整体替换
$(function(){
    var whitePaper_EN="pdf/BankofHashPowerwhitepaper(En)V3.1.pdf";
    var whitePaper_EN_artical="../../../pdf/BankofHashPowerwhitepaper(En)V3.1.pdf";
    var whitePaper_CN_old="pdf/算力银行白皮书V3.3.pdf";
    var whitePaper_CN_new="pdf/BHP算力链技术白皮书V1.0rc.pdf";
    var whitePaper_CN_artical_old="../../../pdf/算力银行白皮书V3.3.pdf";
    var whitePaper_CN_artical_new="../../../pdf/算力链白皮书V0.5.pdf";
    $("#whitePaper_EN").attr("href",whitePaper_EN);
    //$("#whitePaper_CN_old").data("pdf",whitePaper_CN_old);
    //$("#whitePaper_CN_new").data("pdf",whitePaper_CN_new);
    $("#whitePaper_EN_artical").attr("href",whitePaper_EN_artical);
    //$("#whitePaper_CN_artical").attr("href",whitePaper_CN_artical);
    //var mywhitePaper_CN_old=document.getElementById("whitePaper_CN_old");
    //mywhitePaper_CN_old.onclick=function(){
    //    window.open(whitePaper_CN_old);
    //};
    //var mywhitePaper_CN_new=document.getElementById("whitePaper_CN_new");
    //mywhitePaper_CN_new.onclick=function(){
    //    window.open(whitePaper_CN_new);
    //};
    //var mywhitePaper_CN_artical_old=document.getElementById("whitePaper_CN_artical_old");
    //mywhitePaper_CN_artical_old.onclick=function(){
    //    window.open(whitePaper_CN_artical_old);
    //};
    //var mywhitePaper_CN_artical_new=document.getElementById("whitePaper_CN_artical_new");
    //mywhitePaper_CN_artical_new.onclick=function(){
    //    window.open(whitePaper_CN_artical_new);
    //};
});
