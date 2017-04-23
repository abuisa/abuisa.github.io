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
	function show(a,b,g) {
		document.getElementById(a).style.display = 'block';
		document.getElementById(b).style.display = 'none';
		//document.getElementById(c).style.display = 'none';
		document.getElementById(g).style.display = 'block';
	}
</script>
<a href="#i3e"  onclick="show('i3e','bab1','')">ieeeExplorer</a>&nbsp;|&nbsp;
<a href="#bab1"  onclick="show('bab1','i3e','gtop')">Bab I</a>
<div id="i3e" style="display:none" border="0">
	<h4> IEEE Explorer </h4>

	{% include ie-url.html %}

</div>
<div id="bab1" style="display:none" border="0">
	<h4> BAB I </h4>

	{%include penelitian/bab1.html%}

</div>
<div id="gtop" style="display:none" border="0">
<a href="#bab1" >go-to-top</a>
</div>

