---
layout: default
header: Tag test list
title: Tag
categories: Programming
---


The following part extracts all the tags from your posts and sort tags, so that you do not need to manually collect your tags to a place.

Daftar Postingan Kategori Programming : 
<ul>
{% for post in site.categories[Programming *] %}
    <li><a href="{{site.url}}{{post.url}}">{{ post.title }}</a></li>
{% endfor %}
</ul>
Kategori :
{{ page.categories }}

---------------
### Daftar Kategori yang ada

{% for category in site.categories %}
<ul>
  <li><a name="{{ category | first }}">{{ category | first }}</a>
    <ul>
    {% for posts in category %}
      {% for post in posts %}
        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
      {% endfor %}
    {% endfor %}
    </ul>
  </li>
</ul>
{% endfor %}
