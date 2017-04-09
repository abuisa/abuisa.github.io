---
layout: default
header: How To List Categories
title: How To List Categories
categories: Linux
---

The following part extracts all the tags from your posts and sort tags, so that you do not need to manually collect your tags to a place.

Daftar Postingan Kategori Linux : 

<ul>
{% for post in site.categories.Linux %}
<li>
	<a href="{{site.url}}{{post.url}}">{{ post.title }}</a>
</li>
{% endfor %}
</ul>

Kategori :
{{ page.categories }}


{% comment %}
---------------
### Daftar Kategori yang ada

{% for category in site.categories %}
  <a name="{{ category | first }}">{{ category | first }}</a>
		{% for posts in category %}
		  {% for post in posts %}
			<a href="{{site.url}}{{ post.url }}">{{ post.title }}</a>
		  {% endfor %}
		{% endfor %}
{% endfor %}


{% endcomment %}


### Daftar Kategori II

<h2>Categories</h2>

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

<ul>
{% for tag in site.categories %}
  <h3 id="{{ tag[0] }}">{{ tag[0] | capitalize }}</h3>

    {% assign pages_list = tag[1] %}
    {% for post in pages_list %}
      {% if post.title != null %}
      {% if group == null or group == post.group %}
      <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }} | <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date | date: "%B %d, %Y" }}</time></span></a></li>
      {% endif %}
      {% endif %}
    {% endfor %}
    {% assign pages_list = nil %}
    {% assign group = nil %}

{% endfor %}
</ul>

## Another Categories : 

{% for num in site.posts.size %}
    {{num}}<br>
{% endfor %}


##  tesss

<ul class="tag-box inline">
  {% for category in site.categories %}
    <div><a href="{{ site.baseurl }}/category/{{ category[0] }}">{{ category[0] | capitalize }} <span> ({{ category[1].size }}) </span></a></div>
  {% endfor %}
</ul>




