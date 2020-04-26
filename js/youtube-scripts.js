! function () {
	for (var t = document.getElementsByClassName("youtube-player"), e = 0; e < t.length; e++) t[e].onclick = function () {
		var t = document.createElement("iframe");
		for (t.setAttribute("src", "//www.youtube.com/embed/" + this.dataset.id + "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&rel=" + this.dataset.related + "&controls=" + this.dataset.control + "&showinfo=" + this.dataset.info), t.setAttribute("frameborder", "0"), t.setAttribute("id", "youtube-iframe"), t.setAttribute("style", "width: 100%; height: 100%; position: absolute; top: 0; left: 0;"), 1 == this.dataset.fullscreen && t.setAttribute("allowfullscreen", ""); this.firstChild;) this.removeChild(this.firstChild);
		this.appendChild(t)
	}
}();