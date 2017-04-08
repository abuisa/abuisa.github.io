---
title:  This is the eigth test post.
description: This is the eigth test post.
header: Test Post 8
categories: Linux
---
Daftar Postingan Kategori Programming : 
<ul>
{% for post in site.categories[Linux x] %}
    <li><a href="{{site.url}}{{post.url}}">{{ post.title }}</a></li>
{% endfor %}
</ul>
Kategori :
{{ page.categories }}
