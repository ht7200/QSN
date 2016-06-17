function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    
    alert(document.location);
    
    var r = window.location.search.substr(1).match(reg);

    if (r != null) return unescape(r[2]); return null;
}

var adaptUILayout = function(uiWidth){
    var 
    appVersion,
    isI9100G,
    deviceWidth,
    devicePixelRatio,
    targetDensitydpi,
    meta,
    initialContent;
    
    //获取设备信息,并矫正参数值
    appVersion       = window.navigator.appVersion;
    isI9100G         = appVersion.indexOf('GT-I9100G') > -1;
    devicePixelRatio = window.devicePixelRatio;
    deviceWidth      = isI9100G ? 480 : window.screen.width; //在三星 I9100G上, screen.width值不不一定等于屏幕分辨率
    //alert(appVersion);
    //获取最终dpi
    targetDensitydpi = uiWidth / deviceWidth * devicePixelRatio * 160;
    initialContent   = 'target-densitydpi=' + targetDensitydpi + ', width=device-width, user-scalable=no';
    
    //添加到meta viewport
    meta             = document.getElementsByName('viewport')[0];
    meta.setAttribute( 'content', initialContent );
};
