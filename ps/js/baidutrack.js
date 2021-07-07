function BaiduTrack(opt) {
    this.action = opt.action || 'click';
    this.category = opt.category;
}
BaiduTrack.prototype.push = function (label) {
    window._hmt.push(['_trackEvent', this.category, this.action, label])
}
