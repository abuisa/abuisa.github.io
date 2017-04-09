---
title:  This is the eigth test post.
description: This is the eigth test post.
header: All Programming
categories: Examples
---
Daftar Postingan Kategori Linux : 
<ul>
{% for post in site.categories.Linux %}
    <li><a href="{{site.url}}{{post.url}}">{{ post.title }}</a></li>
{% endfor %}
</ul>

Daftar Postingan Kategori Programming :
<ul>	
	{% for post in site.categories.Programming %}
		<li><a href="{{site.url}}{{post.url}}">{{ post.title }}</a></li>
	{% endfor %}
</ul>


Kategori :
{{ page.categories }}
