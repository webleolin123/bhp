/**
 * Created by Administrator on 2018/7/4.
 */
    var language=window.localStorage.language;
    if(!language){
        window.localStorage.language='zh-CN';
    }
    if (language == 'zh-CN') {
        window.localStorage.styleSheet = 'css/cn.css';
        title = 'css/cn.css';
    }else{
        window.localStorage.styleSheet = 'css/en.css';
        title = 'css/en.css';
    }
    setStyleSheet(title);
    function setStyleSheet(title){
        // 找到head
        var doc_head = document.head;
        // 找到所有的link标签
        var link_list = document.getElementsByTagName("link");
        if ( link_list ){
            for ( var i=0;i<link_list.length;i++ ){
                // 找到我们需要替换的link，
                // 一般情况下有些样式是公共样式，我们可以写到功能样式文件中，不用来做替换；
                // 这样可以避免每次替换的时候样式文件都很大；可以节省加载速度；
                if ( link_list[i].getAttribute("ty") === "lang" ){
                    // 找到后将这个link标签重head中移除
                    doc_head.removeChild(link_list[i]);
                }
            }
        }
        // 创建一个新link标签
        var link_style = document.createElement("link");
        // 对link标签中的属性赋值
        link_style.setAttribute("rel","stylesheet");
        link_style.setAttribute("type","text/css");
        link_style.setAttribute("href",title);
        link_style.setAttribute("ty","lang");
        // 加载到head中最后的位置
        doc_head.appendChild(link_style);
    }
