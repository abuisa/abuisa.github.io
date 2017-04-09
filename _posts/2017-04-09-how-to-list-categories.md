---
layout: default
header: How To List Categories
title: How To List Categories
categories: Examples
---

The following part extracts all the tags from your posts and sort tags, so that you do not need to manually collect your tags to a place.

Daftar Postingan Kategori Linux : 

<ul>
{% for post in site.categories.Linux %}
	<a href="{{site.url}}{{post.url}}">{{ post.title }}</a><br />
{% endfor %}
</ul>

## Versi markdown : 


Kategori :
{{ page.categories }}


### Daftar Kategori II

<h2>Categories</h2>
<ul>
	{% assign categories_list = site.categories %}
	  {% if categories_list.first[0] == null %}
		{% for category in categories_list %}
		  <a href="#{{ category }}">{{ category | capitalize }} ({{ site.tags[category].size }})</a>
		{% endfor %}
	  {% else %}
		{% for category in categories_list %}
		  <a href="#{{ tag[0] }}">{{ category[0] | capitalize }} ({{ category[1].size }})</a>
		{% endfor %}
	  {% endif %}
	{% assign categories_list = nil %}
</ul>

{% for tag in site.categories %}
  <h3 id="{{ tag[0] }}">{{ tag[0] | capitalize }}</h3>
<ul>
    {% assign pages_list = tag[1] %}
    {% for post in pages_list %}
      {% if post.title != null %}
      {% if group == null or group == post.group %}
      <a href="{{ site.url }}{{ post.url }}">{{ post.title }} | <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date | date: "%B %d, %Y" }}</time></span></a><br>
      {% endif %}
      {% endif %}
    {% endfor %}
    {% assign pages_list = nil %}
    {% assign group = nil %}
</ul>
{% endfor %}

## Another Categories : 
<ul>
{% for num in (1..3) %}
    {{num}} <br>
{% endfor %}
</ul>

## tesss

<div class="wrapper">
    <div class="first">first</div>
    <div class="second">second</div>
</div>

