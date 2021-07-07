// compatibility for IE8 at least
// Header nav
setTimeout(function() {
    if(!document.querySelectorAll) {
        return;
    }

    var currModName = location.pathname.replace(/^\/(\w+)\/.*/, '$1');
    var elems = document.querySelectorAll('.header a');
    var namesMap = {
        GIF_fenjie: 'gif',
        ex: 'simple',
        teXiao: 'simple',
        liuguangzi: 'simple',
        ps_down: 'down',
        retouch: 're'
    };

    for(var i = elems.length - 1; i >= 0; --i) {
        var elem = elems[i];

        var div = elem.parentNode;
        var className = div.className + ' ';
        var mName = namesMap[currModName] || currModName;

        elem.href = elem.href.replace('https://www.uupoop.com/', '/');

        if(className.indexOf(mName + ' ') > -1) {
            var targetClass = 'current';
            var _className = elem.className;

            if(_className) {
                if(_className.indexOf(targetClass) > -1) {
                    return;
                }
                else {
                    elem.className = _className + ' current';
                }
            }
            else {
                elem.className = targetClass;
            }
        }
    }
}, 100);


// Counts by cnzz
(function() {
    if(window.__cnzz_inited) {
        return;
    }
    window.__cnzz_inited = true;

    var s = document.getElementsByTagName('script')[0];
    var ss = document.createElement('script');
    ss.async = true;
    ss.src = 'https://s19.cnzz.com/z_stat.php?async=1&id=1267934187&web_id=1267934187';
    s.parentNode.insertBefore(ss, s);
})();

// Counts by Growing
(function() {
    if(window.__gio_inited) {
        return;
    }
    window.__gio_inited = true;

    var _vds = window._vds || (window._vds = []);

    _vds.push(['setAccountId', '8da0c1f4705a08e0']);

    (function() {
        var vds = document.createElement('script');
        vds.type = 'text/javascript';
        vds.async = true;
        vds.src = '//assets.growingio.com/vds.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(vds, s);
    })();
})();

// 百度统计
(function () {
    if (window._hmt_inited) {
        return;
    }

    window._hmt_inited = true;
    window._hmt = window._hmt || [];
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?738c4f5cb8013a12a7ea2dce598c013b";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

// Fake google ads
window.adsbygoogle = [];

// Hide ads
setTimeout(function() {
    if(!document.querySelectorAll) {
        return;
    }

    var elems = [].slice.call(document.querySelectorAll('.adsbygoogle'));

    elems.forEach(function(elem) {
        elem.style.display = 'none';
    });
}, 500);
