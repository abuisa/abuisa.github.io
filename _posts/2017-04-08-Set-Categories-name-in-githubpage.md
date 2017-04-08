---
layout: default
header: Tag test list
title: Tag
categories: Programming
---


The following part extracts all the tags from your posts and sort tags, so that you do not need to manually collect your tags to a place.

{% comment %}
=======================
The following part extracts all the tags from your posts and sort tags, so that you do not need to manually collect your tags to a place.
=======================
{% endcomment %}
{% assign rawtags = "" %}
{% for post in site.posts %}
	{% assign ttags = post.tags | join:'|' | append:'|' %}
	{% assign rawtags = rawtags | append:ttags %}
{% endfor %}
{% assign rawtags = rawtags | split:'|' | sort %}

{% comment %}
=======================
The following part removes dulpicated tags and invalid tags like blank tag.
=======================
{% endcomment %}
{% assign tags = "" %}
{% for tag in rawtags %}
	{% if tag != "" %}
		{% if tags == "" %}
			{% assign tags = tag | split:'|' %}
		{% endif %}
		{% unless tags contains tag %}
			{% assign tags = tags | join:'|' | append:'|' | append:tag | split:'|' %}
		{% endunless %}
	{% endif %}
{% endfor %}

Daftar Postingan Kategori Programming : 
<ul>
{% for post in site.categories[Programming *] %}
    <li><a href="{{site.url}}{{post.url}}">{{ post.title }}</a></li>
{% endfor %}
</ul>
Kategori :
{{ page.categories }}
