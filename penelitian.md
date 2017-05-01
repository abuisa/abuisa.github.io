---
layout: page
title: Penelitian
description: Penelitian 
---
{% include modulku.html %}
<!--
	modulku.html berisi javascript untuk cek mobile device, 
	jika perangkat mobile device maka ubah div-kolom menjadi div-rows
-->
<script>

	function msg(a){
		alert(a);
	}

	function checkmobile(a,b){
		//---Periksa jika perangkat Mobile Device maka tampilkan a dan hide b
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			document.getElementById(a).style.display = 'block';
			document.getElementById(b).style.display = 'none';
		}
		else
		{
			;
		}
	}

	function showinrows(a,b){
			document.getElementById(a).style.display = 'block';
			document.getElementById(b).style.display = 'none';
	}

	window.onload = function(){ 

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			var d4 = document.getElementById('sir');
			d4.style.visibility = "hidden";
			//alert("TES PESAN-PESAN .........!");
		}
	};
	function openpdf (fpdf){
		window.open(fpdf);
		window.title("Open-File")
	}

	function showx(a) {
		var dtag = ["bab1","i3e","reff","reff-ts"];
		for(var i = 0;i < dtag.length;i++){
			if (a == dtag[i]){
				document.getElementById(a).style.display = 'block';
			}else{
				document.getElementById(dtag[i]).style.display = 'none';
			}
		}

	}

</script>

<div class="tocContainer">
	<a href="#i3e"  onclick="showx('i3e')">ieeeExplorer</a>
	&nbsp;|&nbsp;<a href="#bab1"  onclick="showx('bab1')">Bab I</a>
	&nbsp;|&nbsp;<a href="#reff"  onclick="showx('reff');checkmobile('mreff','reff')">Refferensi</a>

</div>

<div id="i3e" style="display:block" border="0">
	<h4> IEEE Explorer </h4>

	{% include ie-url.html %}

</div>
<div id="bab1" style="display:none" border="0">
	<h4> BAB I </h4>

	{%include penelitian/bab1.html%}

</div>
<div id="reff" style="display:none" border="0">
	<h4> Referensi Papers | <a href="#" id="cl" onclick="rowtc()">Column</a><a href="#" id="rw" onclick="ctrow()">Rows</a>
</h4>

	{%include penelitian/reff-ts.html%}

</div>

<!--



<button onclick="topFunction()" id="myBtn" title="Go to top">xxx-Top</button>
-->

