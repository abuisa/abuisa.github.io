---
title:  This is the Example Page post.
description: This is the Example Page post.
header: Example Page
categories: Examples
---
{% include modulku.html %}
<button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
## Example One ( Link )
#### Ref lain : 
- Petunjuk lain untuk jekyll how to : 
	- [Jekyll Themes](http://jekyllthemes.org/){:target="_blank"}
	- [Jekyll-how-to-use](https://mademistakes.com/articles/jekyll-style-guide/){:target="_blank"}
	- [Jekyll-style](https://mademistakes.com/style-guide/){:target="_blank"}
 
## Example Two ( Image and Var )

#### Foto Cantik posisi kiri
![image-title-here](img/cantik-icon.png){: .rkiri}
<pre>










</pre>

#### Test Image posisi kanan

![image-title-here](img/cantik-icon.png){:class="img-responsive"}{: .rkanan}
<pre>









</pre>

#### Use SPAN posisi kiri
<span class="f-left">
![image-title-here](img/cantik-icon.png)
</span>
<pre>










</pre>
#### Variabel : 
1. page.id 		: {{ page.id }} <br>
2. page.url		: {{ page.url }} <br>
3. page.path	: {{ page.path }} <br>
4. site.url		: {{ site.url }} <br>
5. site.baseurl	: {{ site.baseurl }}<br>
6. post.url		: {{ post.url }} <br>
 
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
> https://www.youtube.com/watch?v=fuS-3HSnpq4

- Scrip ini copy dan buat menjadi satu bari (menghindari error)..
{% highlight html linenos %}
<iframe allowfullscreen="" 
	class="YOUTUBE-iframe-video" 
	frameborder="0" height="400" 
	src="https://www.youtube.com/embed/fuS-3HSnpq4?feature=player_embedded" 
	width="600">
</iframe>
{% endhighlight %}

#### Tampak videonya 1 : 
<iframe allowfullscreen="" class="YOUTUBE-iframe-video" frameborder="0" height="400" src="https://www.youtube.com/embed/fuS-3HSnpq4?feature=player_embedded" width="600"></iframe>

#### Vidio dengan time start dan time end
- Video start dari detik ke : <b>100</b> s/d detik ke : <b>235</b>
{% highlight html linenos %}
<iframe allowfullscreen="" 
	class="YOUTUBE-iframe-video" 
	frameborder="0" height="400" 
	src="https://www.youtube.com/embed/fuS-3HSnpq4?start=100&end=235&feature=player_embedded" 
	width="600">
</iframe>
{% endhighlight %}

<iframe allowfullscreen="" class="YOUTUBE-iframe-video" frameborder="0" height="400" src="https://www.youtube.com/embed/fuS-3HSnpq4?start=100&end=235&feature=player_embedded" width="600"></iframe>

## Examples Seven  ( SCRIPT Jquery & HTML )

### Script untuk buat tabel dari tag div dan ubah dari kolom menjadi baris
#### HTML untuk div tabelnya : 
{% highlight html linenos %}

<a href="#" id="rtc">Column</a>&nbsp;|&nbsp;
<a href="#" id="ctr">Rows</a>&nbsp;|&nbsp;

<a href="#" onclick="rowtc()">JF-Column</a>&nbsp;|&nbsp;
<a href="#" onclick="ctrow()">JF-Rows</a>&nbsp;|&nbsp;

<div class="table">
  <div class="row" id="hdr">
	<div class="no">No. </div>
	<div class="jdpdf">JUDUL  </div>
	<div class="np">PENULIS  </div>
	<div class="abmet">ABSTRAK </div>
	<div class="abmet">METODE</div>
	<div class="jdpdf">FILE </div>
  </div>

  <div class="row">
	<div  class="column"><b class="hd">NO :		</b>1. </div>
	<div  class="column"><b class="hd">JUDUL :	</b> Judul 1  </div>
	<div  class="column"><b class="hd">PENULIS :	</b> Penulis 1 </div>
	<div  class="column"><b class="hd">ABSTRAK :	</b> Abstrak 1 </div>
	<div  class="column"><b class="hd">METODE :	</b> Metode 1 </div>
	<div  class="column"><b class="hd">FILE :	</b> File 1 </div>
  </div>
  <div class="row">
	<div  class="column"><b class="hd">NO :		</b>2. </div>
	<div  class="column"><b class="hd">JUDUL :	</b> Judul 2  </div>
	<div  class="column"><b class="hd">PENULIS :	</b> Penulis 2 </div>
	<div  class="column"><b class="hd">ABSTRAK :	</b> Abstrak 2 </div>
	<div  class="column"><b class="hd">METODE :	</b> Metode 2 </div>
	<div  class="column"><b class="hd">FILE :	</b> File 2 </div>
  </div>
  <div class="row">
	<div  class="column"><b class="hd">NO :		</b>3. </div>
	<div  class="column"><b class="hd">JUDUL :	</b> Judul 3  </div>
	<div  class="column"><b class="hd">PENULIS :	</b> Penulis 3 </div>
	<div  class="column"><b class="hd">ABSTRAK :	</b> Abstrak 3 </div>
	<div  class="column"><b class="hd">METODE :	</b> Metode 3 </div>
	<div  class="column"><b class="hd">FILE :	</b> File 3 </div>
  </div>
</div>

{% endhighlight %}

#### CSS untuk table dan column

{% highlight js linenos %}
.table {
    display: table;
}

.row {
    display: table-row;	

}
.rowb{
	border-bottom: 1px solid gray;
	padding: 4px;
}
.column, .no, .jdpdf, .np, .abmet {
    display: table-cell;
    vertical-align: top;
	border: 0px solid gray;
	padding: 4px;
	border-left:0px solid gray;
	border-bottom: 0px solid gray;		
}
.columnb {        
    vertical-align: top;
	border: 0px solid gray;
	padding: 4px;
	border-left:0px solid gray;
	border-bottom: 0px solid gray;
}
.no, .jdpdf, .np, .abmet {
	border-bottom: 1px solid gray;	
	font-weight: bold;	
}
.no{
	width: 2%;
}
.jdpdf{
	width: 18%;
}
.np{
	width: 14%;			
}
.abmet{
	width: 30%;			
}
.hd{
	display: none;
}
.hds{
	display: block;
	font-weight: bold;
}
{% endhighlight %}

#### JavaScript untuk mengubah class dari kolom menjadi baris (Fungsi js yang isinya jquery)
{% highlight js linenos %}
function ctrow(){
    	//--- Ganti class --columnx-- dengan class --column--
    	$(".column").addClass('columnb');
    	//--- Hapus class --columnx-- yang terdapat pada semua --div--
		$("div").removeClass("column");
		//--- Ubah class --row-- menjadi --rowb--
		//--- Show Garis Pembatas ------------
		$(".row").addClass('rowb');
		$(".row").removeClass("row");
		//--- Hide Head of Column
		$("#hdr").hide();

		//--- Show Sub Judul ------			
		$(".hd").addClass('hds');
		$(".hd").removeClass("hd");
}
function rowtc(){
	    //--- Ganti class --columnx-- dengan class --column--
    	$(".columnb").addClass('column');
    	//--- Hapus class --columnx-- yang terdapat pada semua --div--
		$("div").removeClass("columnb");
		//--- Ubah class --row-- menjadi --rowb--
		//--- Show Garis Pembatas ------------
		$(".rowb").addClass('row');
		$(".rowb").removeClass("rowb");
		//--- Show Head of column ----
		$("#hdr").show();

		//--- Hide sub judul ----
		$(".hds").addClass('hd');
		$(".hds").removeClass("hds");
}
{% endhighlight %}

#### JQuery untuk mengubah class dari kolom menjadi baris (bedanya dengan js diatas hanya pada fungsi untuk memanggil)
{% highlight js linenos %}
$(document).ready(function(){
    $("#rtc").click(function(){
    	//--- Ganti class --columnx-- dengan class --column--
    	$(".columnb").addClass('column');
    	//--- Hapus class --columnx-- yang terdapat pada semua --div--
		$("div").removeClass("columnb");
		//--- Ubah class --row-- menjadi --rowb--
		//--- Show Garis Pembatas ------------
		$(".rowb").addClass('row');
		$(".rowb").removeClass("rowb");
		//--- Show Head of column ----
		$("#hdr").show();

		//--- Hide sub judul ----
		$(".hds").addClass('hd');
		$(".hds").removeClass("hds");		
    });

    $("#ctr").click(function(){
    	//--- Ganti class --columnx-- dengan class --column--
    	$(".column").addClass('columnb');
    	//--- Hapus class --columnx-- yang terdapat pada semua --div--
		$("div").removeClass("column");
		//--- Ubah class --row-- menjadi --rowb--
		//--- Show Garis Pembatas ------------
		$(".row").addClass('rowb');
		$(".row").removeClass("row");
		//--- Hide Head of Column
		$("#hdr").hide();

		//--- Show Sub Judul ------			
		$(".hd").addClass('hds');
		$(".hd").removeClass("hd");
    });	

});
{% endhighlight %}

#### DEMO (ubah kolom kebaris)
<!-- STYLE UNTUK DIV KOLOM DAN ROWS -->
<style type="text/css">
        .table {
            display: table;
        }

        .row {
            display: table-row;	

        }
		.rowb{
			border-bottom: 1px solid gray;
			padding: 4px;
		}
        .column, .no, .jdpdf, .np, .abmet {
            display: table-cell;
            vertical-align: top;
			border: 0px solid gray;
			padding: 4px;
			border-left:0px solid gray;
			border-bottom: 0px solid gray;		
        }
        .columnb {        
            vertical-align: top;
			border: 0px solid gray;
			padding: 4px;
			border-left:0px solid gray;
			border-bottom: 0px solid gray;
		}
		.no, .jdpdf, .np, .abmet {
			border-bottom: 1px solid gray;	
			font-weight: bold;	
		}
		.no{
			width: 2%;
		}
		.jdpdf{
			width: 18%;
		}
		.np{
			width: 14%;			
		}
		.abmet{
			width: 30%;			
		}
		.hd{
			display: none;
		}
		.hds{
			display: block;
			font-weight: bold;s
		}
</style>
<div>

<a href="#" id="rtc">Column</a>&nbsp;|&nbsp;
<a href="#" id="ctr">Rows</a>&nbsp;|&nbsp;

<a href="#" onclick="rowtc()">JF-Column</a>&nbsp;|&nbsp;
<a href="#" onclick="ctrow()">JF-Rows</a>&nbsp;|&nbsp;

<div class="table">
  <div class="row" id="hdr">
	<div class="no">No. </div>
	<div class="jdpdf">JUDUL  </div>
	<div class="np">PENULIS  </div>
	<div class="abmet">ABSTRAK </div>
	<div class="abmet">METODE</div>
	<div class="jdpdf">FILE </div>
  </div>

   <div class="row">
	<div  class="column"><b class="hd">NO :		</b>1. </div>
	<div  class="column"><b class="hd">JUDUL :	</b> Judul 1  </div>
	<div  class="column"><b class="hd">PENULIS :	</b> Penulis 1 </div>
	<div  class="column"><b class="hd">ABSTRAK :	</b> Abstrak 1 </div>
	<div  class="column"><b class="hd">METODE :	</b> Metode 1 </div>
	<div  class="column"><b class="hd">FILE :	</b> File 1 </div>
  </div>
  <div class="row">
	<div  class="column"><b class="hd">NO :		</b>2. </div>
	<div  class="column"><b class="hd">JUDUL :	</b> Judul 2  </div>
	<div  class="column"><b class="hd">PENULIS :	</b> Penulis 2 </div>
	<div  class="column"><b class="hd">ABSTRAK :	</b> Abstrak 2 </div>
	<div  class="column"><b class="hd">METODE :	</b> Metode 2 </div>
	<div  class="column"><b class="hd">FILE :	</b> File 2 </div>
  </div>
  <div class="row">
	<div  class="column"><b class="hd">NO :		</b>3. </div>
	<div  class="column"><b class="hd">JUDUL :	</b> Judul 3  </div>
	<div  class="column"><b class="hd">PENULIS :	</b> Penulis 3 </div>
	<div  class="column"><b class="hd">ABSTRAK :	</b> Abstrak 3 </div>
	<div  class="column"><b class="hd">METODE :	</b> Metode 3 </div>
	<div  class="column"><b class="hd">FILE :	</b> File 3 </div>
  </div>
</div>

<br>


<script>
function ctrow(){
    	//--- Ganti class --columnx-- dengan class --column--
    	$(".column").addClass('columnb');
    	//--- Hapus class --columnx-- yang terdapat pada semua --div--
		$("div").removeClass("column");
		//--- Ubah class --row-- menjadi --rowb--
		//--- Show Garis Pembatas ------------
		$(".row").addClass('rowb');
		$(".row").removeClass("row");
		//--- Hide Head of Column
		$("#hdr").hide();

		//--- Show Sub Judul ------			
		$(".hd").addClass('hds');
		$(".hd").removeClass("hd");
}
function rowtc(){
	    //--- Ganti class --columnx-- dengan class --column--
    	$(".columnb").addClass('column');
    	//--- Hapus class --columnx-- yang terdapat pada semua --div--
		$("div").removeClass("columnb");
		//--- Ubah class --row-- menjadi --rowb--
		//--- Show Garis Pembatas ------------
		$(".rowb").addClass('row');
		$(".rowb").removeClass("rowb");
		//--- Show Head of column ----
		$("#hdr").show();

		//--- Hide sub judul ----
		$(".hds").addClass('hd');
		$(".hds").removeClass("hds");
}

$(document).ready(function(){
    $("#rtc").click(function(){
    	//--- Ganti class --columnx-- dengan class --column--
    	$(".columnb").addClass('column');
    	//--- Hapus class --columnx-- yang terdapat pada semua --div--
		$("div").removeClass("columnb");
		//--- Ubah class --row-- menjadi --rowb--
		//--- Show Garis Pembatas ------------
		$(".rowb").addClass('row');
		$(".rowb").removeClass("rowb");
		//--- Show Head of column ----
		$("#hdr").show();

		//--- Hide sub judul ----
		$(".hds").addClass('hd');
		$(".hds").removeClass("hds");		
    });

    $("#ctr").click(function(){
    	//--- Ganti class --columnx-- dengan class --column--
    	$(".column").addClass('columnb');
    	//--- Hapus class --columnx-- yang terdapat pada semua --div--
		$("div").removeClass("column");
		//--- Ubah class --row-- menjadi --rowb--
		//--- Show Garis Pembatas ------------
		$(".row").addClass('rowb');
		$(".row").removeClass("row");
		//--- Hide Head of Column
		$("#hdr").hide();

		//--- Show Sub Judul ------			
		$(".hd").addClass('hds');
		$(".hd").removeClass("hd");
    });	

});
</script>

</div>

## Examples Eight  ( Arabic Style )

#### Contoh untuk style arabic : 
<b>Al-Allamah Ubaid Al-Jabiry hafizhahullah berkata:</b>
<div  class="ar">
ﺇﺫَﺍ ﻛﺎﻥ ﻓﻲ ﺍﻟﻤَﺴﺠﺪ ﻣﺼَﺎﺣﻒ ﻓﻼ ﺗﻨْﺒﻐﻲ ﺍﻟﻘﺮَﺍﺀﺓ ﺑﺎﻟﻬَﺎﺗﻒ ﻭﺃَﻧﺎ ﺃﻛْﺮﻩ ﺫﻟﻚ ﻷَﻥ ﺍﻟﻤﺼﺤﻒ ﻳﺘﻌﺒﺪ ﺑِﺤﻤﻠِﻪ ﻭﺍﻟﻨﻈَﺮ فيه ﻭﺍﻟﻬَﺎﺗﻒ ﻟﻴْﺲ ﻛَﺬﻟﻚ ﻭﻗَﺪ ﻳُﺘﺮﺗّﺐ ﻋﻠﻰ ﺫَﻟﻚ ﻫُﺠﺮﺍﻥ ﺍﻟﻤَﺼﺎﺣﻒ ﻭﺍﻟﺰّﻫﺪ ﻓِﻴﻬﺎ .
</div>
<div class="id">
Jika di masjid ada mushaf-mushaf al-Qur'an maka tidak sepantasnya membaca al-Qur'an dengan HP. Dan aku membenci hal itu, karena mushaf itu, membawanya dan melihat kepadanya itu termasuk ibadah, sementara HP itu tidak demikian.
Dan terkadang hal itu akan berakibat mushaf-mushaf ditinggalkan dan tidak dimanfaatkan.
</div>
<!--
<div  class="ar">
هُ
</div>
<div class="id">

</div>
-->
## Examples Nine ( Video Local)

### Contoh untuk memainkan video MP4 local dengan html : 
#### SCRIPT : 
{% highlight html linenos %}
<video width="600" controls>
  <source src="reff/Lightning-Exclusive-Nasheed-By_ Ahmad-Al-Muqit.mp4" type="video/mp4">
</video>
{% endhighlight %}

#### DEMO : 
<video width="600" controls>
  <source src="reff/Lightning-Exclusive-Nasheed-By_ Ahmad-Al-Muqit.mp4" type="video/mp4">
</video>


### Contoh untuk memainkan video WEBM local dengan html : 
#### SCRIPT : 
{% highlight html linenos %}
<video width="600" controls>
	<source src="reff/nasheed--amaman-junod-alfeda.webm" type="video/webm">
</video>
{% endhighlight %}

#### DEMO : 
<video width="600" controls>
  <source src="reff/nasheed--amaman-junod-alfeda.webm" type="video/webm">
</video>





____
Kategori : {{ page.categories }},
Post by : admin
