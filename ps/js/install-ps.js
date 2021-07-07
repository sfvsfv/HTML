(function() {
    var elemId = window.PS_SHELL_ID || 'ps-shell';
    var shellWrap = document.getElementById(elemId);
    var distURL = 'https://ps.gaoding.com/?hmsr=gaoding-uupoop';

    var isIE = /(?:MSIE|Trident.*rv:11)/i.test(navigator.userAgent);
    var isForceOld = /use_old=1/.test(location.search);

    // isIE = true;

    // 支持返回旧版
    if(isForceOld && document.querySelector) {
        var verSwitchLink = document.querySelector('.ps-btn-old');

        if(verSwitchLink) {
            verSwitchLink.className = 'ps-btn-new';
            verSwitchLink.innerHTML = '前往新版';
            verSwitchLink.href = '/';
        }
    }

    if(!isIE && !isForceOld) {
        shellWrap.innerHTML = [
            '<iframe frameborder="0" scrolling="no" id="photopea-iframe" class="ps-shell-main" width="100%" height="100%"',
            // 'style="' + styleStr + '"',
            'src="' + distURL + '"',
            '></iframe>'
        ].join(' ');

        return;
    }

    var loadScript = function(url, callback) {
        var head = document.head || document.getElementsByTagName('head')[0];
        var script = document.createElement('script');

        if(callback) {
            script.onload = callback;
        }

		script.src = url;

		head.appendChild(script);
    };

    loadScript('/_script/AC_RunActiveContent.js', function() {
        // Shim document write
        document._write = document.write;
        document.write = function(str) {
            shellWrap.innerHTML = str.replace('</embed>', '<b style="display:block;padding:4em 0;text-align:center">浏览器不支持 Flash</b></embed>');

            document.write = document._write;
        };

        window.AC_FL_RunContent(
            'codebase', 'https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0',
            'width', '100%',
            'height', '100%',
            'src', '/ps/Editor.swf',
            'quality', 'high',
            'pluginspage', 'https://www.macromedia.com/go/getflashplayer',
            'align', 'middle',
            'wmode', (navigator.appVersion.indexOf("MSIE")!=-1)?'transparent' : 'Window',
            'devicefont', 'false',
            'id', 'Editor',
            'bgcolor', '#606060',
            'name', 'Editor',
            'menu', 'false',
            'allowFullScreen', 'true',
            'allowScriptAccess','sameDomain',
            'movie', '/ps/Editor'
        );
    });
})();