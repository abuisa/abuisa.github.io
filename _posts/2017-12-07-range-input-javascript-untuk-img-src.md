---
title: HTML+JS - Range Input dan Javascript untuk ubah IMG SRC
description: HTML+JS - Range Input dan Javascript untuk ubah IMG SRC
header: HTML+JS - Range Input dan Javascript untuk ubah IMG SRC
categories: Programming
---

### Mengubah Image SRC menggunakan `input type="range"` dan JS

* Dalftar Images yang akan prose berada di dalam folder `img`
* Format Nama Image adalah : `1-img.jpg`

{% highlight html linenos %}

<!DOCTYPE html>
<html>
<head>
<title>Show Image</title>

<style>
	html {
	  background-color: #FFFFFF;
	  font-size: 16px;
	  line-height: 1.5;
	  color: #333333; }
	  @media (min-width: 940px) {
		html {
		  font-size: 18px; } }
	body {
		font-family: "Roboto", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
		font-style: normal;
		font-weight: 500;
		font-size: 17px;
		color: #333; 
		margin:10px;
		padding:0px;
		width:80%;
		margin-left:auto;
		margin-right:auto;
	}
	input[type='range'] {		
		height:10px;
		background: #ddd;
		width:60%;

	}
	input[type='text'] {		
		//height:20px;
		width:50px;
	}
</style>

<script>

function cimg() {
	var rval = document.getElementById('barnum').value; //a
	var itag = document.getElementById('imgtag'); //c
	var isrc = "img/" + rval + "-img.jpg"; //b

	document.getElementById('boxnum').value = " No. " + rval;
	document.getElementById('imglbl').innerHTML = "Image SRC : <b>" + isrc + "</b><br />";
  	itag.src = isrc;
}
</script>
</head>
<body>

Image No : 
<input type="text" name="boxnum" id="boxnum" value="1" />
<input type="range" min="1" max="35" step="1" value="1" id="barnum" name="barnum" oninput='cimg()'/>

<hr />
<p id="imglbl"></p>
<img id="imgtag" name="imgtag" src="img/1-img.jpg" width="80%" height="80%"> 

<!--
onchange vs. oninput
onchange : Perubahan setelah selesai 
oninput  : Perubahan langsung terjadi
-->

</body>
</html>

{% endhighlight %}

### Update untuk Input Text Event "oninput"
* Tambahan Fungsi JS di Header 

{% highlight js linenos %}
function msg(a){
	document.getElementById('barnum').value = a;
	cimg();
}
{% endhighlight %}

* Perubahan pada "input type=text" menjadi 

{% highlight html linenos %}
<input type="text" name="boxnum" id="boxnum" value="1" oninput="msg(this.value)" />
<!-- OR -->
<input type="text" name="boxnum" id="boxnum" value="1" oninput="msg(document.getElementById('boxnum').value)" />
{% endhighlight %}

### Contoh Hasil Screenshot : 

![image-title-here](img/programming/prog-2017-12-07-1.png)

<hr />
Post by : admin.
