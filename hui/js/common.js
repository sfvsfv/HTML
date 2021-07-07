/*
 * @Author: your name
 * @Date: 2020-12-26 15:52:27
 * @LastEditTime: 2020-12-26 16:54:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \(跨年)星空3D相册\js\common.js
 */
var audio = document.getElementById("myAudio");
var currentTime = $(".mplayer_curtime");
var durationTime = $(".mplayer_durtime");
var circle = $(".m-circle .a")[0];
var circumference = 2 * Math.PI * 160;
var timer_audio;

function play() {
  if (audio.paused) {
    audio.play();
    $(".music-box").addClass("mplaying");
    timer_audio = setInterval(() => {
      if (audio.ended) {
        $(".music-box").removeClass("mplaying");
        currentTime.text("00:00");
        circle.setAttribute("stroke-dasharray", "0 999");
      } else {
        currentTime.text(formatTime(audio.currentTime));
        durationTime.text(formatTime(audio.duration));
        var step = circumference / audio.duration;
        var timeDisplay = Math.floor(audio.currentTime);
        circle.setAttribute(
          "stroke-dasharray",
          "" + timeDisplay * step + " " + circumference
        );
      }
    }, 100);
  } else {
    audio.pause();
    $(".music-box").removeClass("mplaying");
  }
}

function formatTime(time) {
  //   console.log(time);
  time = ~~time;
  var formatTime;
  if (time < 10) {
    formatTime = "00:0" + time;
  } else if (time < 60) {
    formatTime = "00:" + time;
  } else {
    var m = ~~(time / 60);
    if (m < 10) {
      m = "0" + m;
    }
    var s = time % 60;
    if (s < 10) {
      s = "0" + s;
    }
    formatTime = m + ":" + s;
  }
  return formatTime;
}
