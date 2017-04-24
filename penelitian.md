---
layout: page
title: Penelitian
description: Penelitian 
---

<!--
{% include ie-url.html %}
-->
<script>
	function msg(){
		alert("tessssssssssss bab 1");
	}
	function show_a(a,b,c,d,e) {
		document.getElementById(a).style.display = 'block';
		document.getElementById(b).style.display = 'none';
		document.getElementById(c).style.display = 'none';
		document.getElementById(d).style.display = 'none';
		document.getElementById(e).style.display = 'none';
	}
	function show(a,b,c,d,g) {
		document.getElementById(a).style.display = 'block';
		document.getElementById(b).style.display = 'none';
		document.getElementById(c).style.display = 'none';
		document.getElementById(d).style.display = 'none';
		document.getElementById(g).style.display = 'block';
	}
	function checkmobile(a,b){
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

</script>
<div id="top"></div>
<a href="#i3e"  onclick="show('i3e','bab1','reff','mreff','')">ieeeExplorer</a>&nbsp;|&nbsp;
<a href="#bab1"  onclick="show('bab1','i3e','reff','mreff','gtop')">Bab I</a>&nbsp;|&nbsp;
<a href="#reff"  onclick="show('reff','i3e','bab1','mreff','gtop');checkmobile('mreff','reff')">Refferensi</a>&nbsp;|&nbsp;
<a href="#reff"  onclick="show('reff','i3e','bab1','mreff','gtop');showinrows('mreff','reff')">Ref-in-rows</a>
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

<div id="gtop" style="display:none" border="0">
<a href="#top" >go-to-top</a>
</div>

