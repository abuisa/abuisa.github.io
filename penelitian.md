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
		var dtag = ["bab1","i3e","reff","mreff","tes"];
		for(var i = 0;i < dtag.length;i++){
			if (a == dtag[i]){
				document.getElementById(a).style.display = 'block';
			}else{
				document.getElementById(dtag[i]).style.display = 'none';
			}
		}

	}

</script>

<a href="#i3e"  onclick="showx('i3e')">ieeeExplorer</a>
&nbsp;|&nbsp;<a href="#bab1"  onclick="showx('bab1')">Bab I</a>
&nbsp;|&nbsp;<a href="#reff"  onclick="showx('reff');checkmobile('mreff','reff')">Refferensi</a>
&nbsp;|&nbsp;<a href="#mreff" id="sir" onclick="showx('mreff');showinrows('mreff','reff')">Ref-in-rows</a>
<!-- &nbsp;|&nbsp;<a href="#tes" id="sir" onclick="showx('tes')">TES-DIV</a> -->
&nbsp;|&nbsp;<a href="#tes" id="sir" onclick="showx('tes')">TES-DIV</a>
<div id="i3e" style="display:block" border="0">
	<h4> IEEE Explorer </h4>

	{% include ie-url.html %}

</div>
<div id="bab1" style="display:none" border="0">
	<h4> BAB I </h4>

	{%include penelitian/bab1.html%}

</div>
<div id="reff" style="display:none" border="0">
	<h4> Referensi Papers</h4>

	{%include penelitian/reff.html%}

</div>

<div id="mreff" style="display:none" border="0">
	<h4> Referensi Papers</h4>
	
	{%include penelitian/m-reff.html%}

</div>

<div id="tes" style="display:none" border="0">
	<h4> Referensi Papers</h4>
	
	{%include penelitian/reff-tes.html%}

</div>



<button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>


