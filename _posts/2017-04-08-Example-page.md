---
title:  This is the Example Page post.
description: This is the Example Page post.
header: Example Page
categories: Examples
---
## Example One ( Link )
#### Ref lain : 
- Petunjuk lain untuk jekyll how to : 
	- [Jekyll-how-to-use](https://mademistakes.com/articles/jekyll-style-guide/){:target="_blank"}
	- [Jekyll-style](https://mademistakes.com/style-guide/){:target="_blank"}
 
## Example Two ( Image )

#### Foto Cantik posisi kiri
![image-title-here](img/cantik-icon.png){: .rkiri}
<pre>










</pre>

#### Variabel : 
1. page.id 		: {{ page.id }} <br>
2. page.url		: {{ page.url }} <br>
3. page.path	: {{ page.path }} <br>
4. site.url		: {{ site.url }} <br>
5. post.url		: {{ post.url }} <br>


#### Test Image posisi kanan

![image-title-here](img/cantik-icon.png){:class="img-responsive"}{: .rkanan}
<pre>









</pre>


## Example three ( Code highlight )

To insert highlight code inside of a post, it's enough to use some specific tags, has directly described into the [Jekyll documentation](http://jekyllrb.com/docs/templates/#code-snippet-highlighting). In this way the code will be included into a ``.highlight`` CSS class and will be highlight according to the [syntax.scss](https://github.com/mojombo/tpw/blob/master/css/syntax.css) file. This is the standard style adopted by **Github** to highlight the code. 

This is a CSS example:
{% highlight css linenos %}

body {
  background-color: #fff;
}

h1 {
  color: #ffaa33;
  font-size: 1.5em;
}

{% endhighlight %}

And this is a HTML example, with a linenumber:

{% highlight html linenos %}

<html>
  <a href="example.com">Example</a>
</html>

{% endhighlight %}

Last, a Ruby example:

{% highlight ruby linenos %}

def hello
  puts "Hello World!"
end

{% endhighlight %}

## Example Four ( Blok Note )

> This is a blockquote
> ini juga bloknote

The Command for download your github repo to local : 
> Command $ git clone https://github.com/abuisa/abuisa.github.io

#### Unordered list
- list 1
- list 2
- list 3
- list 4
- a;askdf
- aksdf

#### Ordered list
1. one
2. two
3. three
4. four
5. alsjdf
6. aksjdf

## Examples Five ( loop )

#### Contoh Mengambil semua Kategori : 
<ul>
{% for post in site.categories.Linux %}
	<a href="{{site.url}}{{post.url}}">{{ post.title }}</a><br />
{% endfor %}
</ul>

#### Contoh penggunaan For

<ul>
{% for num in (1..3) %}
    {{num}} <br>
{% endfor %}
</ul>

## Examples Six  ( Video )
#### Manual Embed video from youtube : 
> https://www.youtube.com/watch?v=nN6QuNqmAwk

{% highlight html linenos %}
<iframe 
  width="560" 
  height="315" 
  src="http://www.youtube.com/embed/nN6QuNqmAwk" 
  frameborder="0" 
  allowfullscreen>
</iframe>
{% endhighlight %}

Tampak videonya  : 
<iframe 
  width="560" 
  height="315" 
  src="http://www.youtube.com/embed/nN6QuNqmAwk" 
  frameborder="0" 
  allowfullscreen>
</iframe>

#### Embed Video with jekyll style 
Materi dair [Eug](https://github.com/eug/jekyll-video-embed), tentang cara embed video youtube : 

- <b> jekyll-video-embed</b>

It provides several tags which generates a HTML snippet to embed videos, and can easily support others video websites. This plugin was heavily based on [@joelverhagen](https://gist.github.com/joelverhagen/1805814) gist example.

- <b> Installation</b>

Place the file in the `_plugins` directory.

- <b> Usage :</b>

To include a video in your jekyll post, just use the string `% tag video_id width height %` and replace by its respective `tag` and `video_id`, the `width` (default value: 640) and `height`(default value: 360) are optional.

- <b> Description :</b>

The following table shows the supported websites, their respective `tag`, and where is located the `video_id` (highlighted) in the URL of each video.

|    Website  |   Tag   |  Video ID                                                   |
|-------------|---------|-------------------------------------------------------------|
| ted.com     | ted     | ted.com/talks/**ken_robinson_says_schools_kill_creativity** |
| ustream.tv  | ustream | ustream.tv/channel/**6540154**                              |
| vimeo.com   | vimeo   | vimeo.com/**22439234**                                      |
| youtube.com | youtube | youtube.com/watch?v=**9bZkp7q19f0**                         |

#### Contoh Video : 

{% youtube nN6QuNqmAwk %}


#### Ref lain : 
- Petunjuk lain untuk jekyll how to : 
	- [Jekyll-how-to-use](https://mademistakes.com/articles/jekyll-style-guide/){:target="_blank"}
	- [Jekyll-style](https://mademistakes.com/style-guide/){:target="_blank"}
 
____
Kategori : {{ page.categories }},
Post by : admin
