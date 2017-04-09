---
layout: default
header: Tag test list
title: Tag
categories: Examples
---

The following part extracts all the tags from your posts and sort tags, so that you do not need to manually collect your tags to a place.

Daftar Postingan Kategori Programming : 
<ul>
	{% for post in site.categories.Programming %}
		<li><a href="{{site.url}}{{post.url}}">{{ post.title }}</a></li>
	{% endfor %}
</ul>

Kategori :
{{ page.categories }}


{% comment %}
---------------
### Daftar Kategori yang ada
<ul>
	{% for category in site.categories %}
	  <a name="{{ category | first }}">{{ category | first }}</a>
		<ul>
			{% for posts in category %}
			  {% for post in posts %}
				<li><a href="{{site.url}}{{ post.url }}">{{ post.title }}</a></li>
			  {% endfor %}
			{% endfor %}
		</ul>

	{% endfor %}
</ul>

{% endcomment %}


### Daftar Kategori II

<h2>Categories</h2>
<ul>
	{% assign categories_list = site.categories %}
	  {% if categories_list.first[0] == null %}
		{% for category in categories_list %}
		  <li><a href="#{{ category }}">{{ category | capitalize }} ({{ site.tags[category].size }})</a></li>
		{% endfor %}
	  {% else %}
		{% for category in categories_list %}
		  <li><a href="#{{ tag[0] }}">{{ category[0] | capitalize }} ({{ category[1].size }})</a></li>
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
      <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }} | <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date | date: "%B %d, %Y" }}</time></span></a></li>
      {% endif %}
      {% endif %}
    {% endfor %}
    {% assign pages_list = nil %}
    {% assign group = nil %}
  </ul>
{% endfor %}

## Another Categories : 
<ul>
{% for num in site.posts.size %}
    {{num}}<br>
{% endfor %}
</ul>

##  tesss

<ul class="tag-box inline">
  {% for category in site.categories %}
    <div><a href="{{ site.baseurl }}/category/{{ category[0] }}">{{ category[0] | capitalize }} <span> ({{ category[1].size }}) </span></a></div>
  {% endfor %}
</ul>




