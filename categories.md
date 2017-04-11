---
layout: page
title: All Post
description: This page displays all posts.
header: Tag test list
---

{% include modulku.html %}

## Post Categories : 

<div class="wrapper" markdown="0">

	<div id="ktgoridiv1" class="kate1">

	<h3> Agama : </h3>

		<ul>
		{% for post in site.categories.Agama %}
			<li><a href="{{site.url}}{{post.url}}">{{ post.title }} | {{ post.date | date: "%B %d, %Y" }}</a></li>
		{% endfor %}
		</ul>

	<h3> Digital Forensik : </h3>

		<ul>
		{% for post in site.categories.DigitalForensik %}
			<li><a href="{{site.url}}{{post.url}}">{{ post.title }} | {{ post.date | date: "%B %d, %Y" }}</a></li>
		{% endfor %}
		</ul>

	<h3> Just Examples : </h3>
		<ul>
		{% for post in site.categories.Examples %}
			<li><a href="{{site.url}}{{post.url}}">{{ post.title }} | {{ post.date | date: "%B %d, %Y" }}</a></li>
		{% endfor %}
		</ul>

	</div>

<!-- ================ -->
	<div id="ktgoridiv1" class="kate2">

	<h3> Linux : </h3>
		<ul>
		{% for post in site.categories.Linux %}
			<li><a href="{{site.url}}{{post.url}}">{{ post.title }} | {{ post.date | date: "%B %d, %Y" }}</a></li>
		{% endfor %}
		</ul>


	<h3>Programming : </h3>

		<ul>
		{% for post in site.categories.Programming %}
			<li><a href="{{site.url}}{{post.url}}">{{ post.title }} | {{ post.date | date: "%B %d, %Y" }}</a></li>
		{% endfor %}
		</ul>

	</div>
</div>

