function uploading(){
    var _PageHeight = $(window).height();
    var _PageWidth  = $(window).width();
    var _LoadingTop = _PageHeight > 61 ? (_PageHeight - 61) / 2 : 0;
    var _LoadingLeft = _PageWidth > 215 ? (_PageWidth - 215) / 2 : 0;
    var _LoadingHtml = '<div id="loadingDiv" style="position:absolute;left:0;width:100%;height:' +
      _PageHeight + 'px;top:0;background:#f3f8ff;opacity:0.8;filter:alpha(opacity=80);z-index:10000;"><div style="position: absolute; cursor1: wait; left: ' +
      _LoadingLeft + 'px; top:' + _LoadingTop +
      'px; width: auto; height: 57px; line-height: 57px; padding-left: 50px; padding-right: 5px; background: #fff url(/Content/loading.gif) no-repeat scroll 5px 10px; border: 2px solid #95B8E7; color: #696969; font-family:\'Microsoft YaHei\';">执行中，请等待...' +
      '</div></div>';
    document.write(_LoadingHtml);
}
//加载状态为complete时移除loading效果
function completeUpLoading() {
    $('#loadingDiv').patent().empty();
}
