---
layout: page
title: Penelitian
description: Penelitian
---

<!-- BODY -->

<div class="tocContainer">
	<a href="#"  onclick="showx('i3e')">Links Utama</a>
	&nbsp;|&nbsp;<a href="#"  onclick="showx('bab1')">Bab I</a>
	&nbsp;|&nbsp;<a href="#"  onclick="showx('reff')">Refferensi</a>

</div>

<div id="i3e" style="display:block" border="0" class="tocContainer">
	<b>
	 	<a href="https://www.scopus.com/home.uri" target="_blank">Scopus.com</a>&nbsp;|&nbsp;
	 	<a href="http://www.sciencedirect.com/" target="_blank">Sciencedirect.com</a>&nbsp;|&nbsp;
	 	<a href="http://ieeexplore.ieee.org/Xplore/home.jsp" target="_blank">Ieeexplore.ieee.org</a>&nbsp;|&nbsp;
	 	<a href="https://www.mendeley.com/" target="_blank">Mendeley.com</a>
	</b>
	<h4> IEEE Explorer dan Sciendirec untuk Download PDF </h4>

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
