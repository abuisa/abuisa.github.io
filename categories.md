---
layout: page
title: All Post
description: This page displays all posts.
header: All Post
---

## Post Categories : 

<div class="wrapper" markdown="0">

	<div id="linkdiv1" class="kate1">

	<h3> Agama : </h3>

		<ul>
		{% for post in site.categories.Agama %}
			<!-- ORI 
				<li>{{ post.date | date: "%B %d, %Y" }}: <a href="{{site.url}}{{post.url}}.html">{{ post.title }}</a></li>
			-->
			<li><a href="{{site.url}}{{post.url}}.html">{{ post.title }}</a></li>
		{% endfor %}
		</ul>

	<h3> Digital Forensik : </h3>

		<ul>
		{% for post in site.categories.DigitalForensik %}
			<li><a href="{{site.url}}{{post.url}}.html">{{ post.title }}</a></li>
		{% endfor %}
		</ul>

	<h3> Just Examples : </h3>
		<ul>
		{% for post in site.categories.Examples %}
			<li><a href="{{site.url}}{{post.url}}.html">{{ post.title }}</a></li>
		{% endfor %}
		</ul>

	</div>

<!-- ================ -->
	<div id="linkdiv2" class="kate2">

	<h3> Linux : </h3>
		<ul>
		{% for post in site.categories.Linux %}
			<li><a href="{{site.url}}{{post.url}}.html">{{ post.title }}</a></li>
		{% endfor %}
		</ul>


	<h3>Programming : </h3>

		<ul>
		{% for post in site.categories.Programming %}
			<li><a href="{{site.url}}{{post.url}}.html">{{ post.title }}</a></li>
		{% endfor %}
		</ul>
	<h3>Ext : </h3>
		<ul>
			<li><a href="reff/linux/A-Z-Linux-Commands-Overview-with-Examples.html">A-Z Linux Commands</a></li>
			<li><a href="reff/linux/Tcpdump-Examples-22-Tactical-Commands _ HackerTarget.com.html">Tcpdump Examples 22 Tactical Commands </a></li>
			<li><a onclick="gos()">Get OS</a></li>
			<li><a onclick="cekosE()">CEK OS</a></li>
		</ul>
	</div>
</div>

