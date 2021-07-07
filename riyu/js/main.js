var word = document.getElementsByTagName("td")
//分配音频
for (i = 0; i < word.length; i++) {
	word[i].index = i
	word[i].onclick = function () {
		if (this.innerHTML != "ーー") {
			this.innerHTML += "<audio src='audio/" + this.className.split(" ")[1] + ".mp3'></audio>"
			this.lastChild.play()
		} else
			return false
	}
	//更改字体大小
	word[i].onmouseover = function () {
		var td = this.firstElementChild
		if (this.innerHTML != "ーー") {
			if (td.innerHTML.length > 7)
				td.style.fontSize = 12 + "px"
		}
	}
}
//搜索
var btn = document.getElementById("btn"),
	text = document.getElementById("text")
btn.onclick = function () {
	for (i = 0; i < word.length; i++) {
		if (word[i].firstChild.data == text.innerHTML) {
			var color = getComputedStyle(word[i], null).backgroundColor;
			word[i].style.background = "#3ca576"
			setTimeout(function () {
				word[i].style.background = color
			}, 2000)
			break
		}
	}
}