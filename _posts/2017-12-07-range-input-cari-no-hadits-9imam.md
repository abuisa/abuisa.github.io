---
title: PHP - Cari Hadits 9 Imam menggunakan Range Input dan Js
description: PHP - Cari Hadits 9 Imam menggunakan Range Input dan Js
header: PHP - Cari Hadits 9 Imam menggunakan Range Input dan Js
categories: Programming
---
### 1. Contoh Hasil Screenshot : 

![image-title-here](img/programming/prog-2017-12-07-2-Cari-Hadits.png)

### 2. File-File sebagai Module
* File [`conn.php`](reff/programming/conn.php.txt){:target="_blank"} Untuk Konneksi Database.
* File [`conf.php`](reff/programming/conf.php.txt){:target="_blank"} Untuk Module Fungsi-Fungsi.

### 3. File [`lcari.php`](reff/programming/lcari.php.txt){:target="_blank"} Untuk Form Input 

{% highlight php linenos %}

<!DOCTYPE html>
<html>
<head>
<title>Cari Hadits</title>
<?php
/*
 * Halaman ini dugunakan untuk mencari hadits secara langsung bedasarkan Nomor Hadits
 * Link Halaman ini ada di halaman ../index.php
 * Halaman ini tidak terhubung secara langsung dengan halaman hadits9.php
 * Halaman ini hanya menggunakan file conf.php sebagai modulnya.
 *  
 */
	header('Content-Type: text/html; charset=utf-8');
	include 'conf.php';
?>
<style>
	html {
	  background-color: #FFFFFF;
	  font-size: 16px;
	  line-height: 1.5;
	  color: #333333; }
	  @media (min-width: 940px) {
		html {
		  font-size: 18px; } }
	body {
		font-family: "Roboto", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
		font-style: normal;
		font-weight: 500;
		font-size: 17px;
		color: #333; 
		margin:10px;
		padding:0px;
		width:80%;
		margin-left:auto;
		margin-right:auto;
	}
	.bx{
		//color:crimson;
		font-weight: 700;
		font-size: 22px;
		border-top:0.5px solid #C0C0C0;
		border-bottom:0.5px solid #C0C0C0;
		unicode-bidi:embed;
		//====================	
		margin-left:0px;
		margin-bottom:10px;
		background-color:#f2f2f2;
		padding:20px 18px;	
	}

	input[type='range'] {		
		height:4px;
		width:60%;
		background: #ddd;
	}
	input[type='text'] {		
		//height:20px;
		width:50px;
	}
</style>
</head>
<body>

<form name="myForm" action="lcaritmp.php" method="POST" target="main" />
	<select name="a" onchange="this.form.submit()" >
	  <option value="0">Pilih Imam !</option>
	  <option value="1" onclick="this.form.submit()">Bukhari - [<?= gtotal(1); ?>]</option>
	  <option value="2" onclick="this.form.submit()">Muslim - [<?= gtotal(2); ?>]</option>
	  <option value="3" onclick="this.form.submit()">Abu Daud - [<?= gtotal(3); ?>]</option>
	  <option value="4" onclick="this.form.submit()">Tirmidzi - [<?= gtotal(4); ?>]</option>
	  <option value="5" onclick="this.form.submit()">Nasai - [<?= gtotal(5); ?>]</option>
	  <option value="6" onclick="this.form.submit()">Ibnu Majah - [<?= gtotal(6); ?>]</option>
	  <option value="7" onclick="this.form.submit()">Ahmad - [<?= gtotal(7); ?>]</option>
	  <option value="8" onclick="this.form.submit()">Malik - [<?= gtotal(8); ?>]</option>
	  <option value="9" onclick="this.form.submit()">Darimi - [<?= gtotal(9); ?>]</option>
	</select>
&nbsp;&nbsp;
No Hadits : 
<input type="text" name="b" id="b" value="1" />

<!--
onchange vs. oninput
onchange : Perubahan setelah selesai 
oninput  : Perubahan langsung terjadi
-->

<input type="range" min="1" max="26000" step="1" value="1" id="bb" name="bb" oninput='document.getElementById("b").value =  document.getElementById("bb").value;this.form.submit()'/>
</form>
<hr />
<?php
	if (isset($_GET['a'], $_GET['b'])) 
	{
		$a = $_GET["a"];
		$b = $_GET["b"];	
?>
		<iframe name="main" src="lcaritmp.php?a=<?= $a ?>&b=<?= $b ?>" style="border: none; " width="100%" onload="this.style.height=this.contentDocument.body.scrollHeight + 30 +'px';"></iframe>
<?php
}else{
?>
		<iframe name="main" src="lcaritmp.php" style="border: none; " width="100%" onload="this.style.height=this.contentDocument.body.scrollHeight + 30 +'px';"></iframe>
<?php
}
?>
</body>
</html>

{% endhighlight %}

### 4. UpDate SCRIPT untuk Event Input Text untuk file `lcari.php`
* Tambahan Fungsi JS 

{% highlight js linenos %}
<script>
	function msg(a){
		document.getElementById('bb').value = a;
		//alert(a);
	}
</script>
{% endhighlight %}

* Perubahan Input Text 

{% highlight html linenos %}
<input type="text" name="b" id="b" value="1"  oninput="msg(document.getElementById('b').value);this.form.submit()" /> 
<!--   OR   -->
<input type="text" name="b" id="b" value="1"  oninput="msg(this.value);this.form.submit()" />
{% endhighlight %}


### 5. File [`lcaritmp.php`](reff/programming/lcaritmp.php.txt){:target="_blank"} sebagai target untuk proses dan menampikan

{% highlight php linenos %}

<!DOCTYPE html>
<html>
<head>
<title>Cari Hadits</title>
<?php
/*
 * Halaman ini dugunakan untuk mencari hadits secara langsung bedasarkan Nomor Hadits
 * Link Halaman ini ada di halaman ../index.php
 * Halaman ini tidak terhubung secara langsung dengan halaman hadits9
 * Halaman ini hanya menggunakan file conf.php sebagai modulnya.
 *  
 */
	header('Content-Type: text/html; charset=utf-8');
	include 'conf.php';

?>
<style>
	html {
	  background-color: #FFFFFF;
	  font-size: 16px;
	  line-height: 1.5;
	  color: #333333; }
	  @media (min-width: 940px) {
		html {
		  font-size: 18px; } }
	body {
		font-family: "Roboto", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
		font-style: normal;
		font-weight: 500;
		font-size: 17px;
		color: #333; 
		margin:10px;
		padding:0px;
		width:100%;
		margin-left:auto;
		margin-right:auto;
	}
	//======untuk tulisan Arab=====

	.id {
		border-top: 0.5px solid #C0C0C0;
		margin-left: 0px;
		margin-bottom: 10px;
		background-color: #eee;
		padding: 7px 16px;
		padding-top: 7px; 
	}
	.ar{
		//color:crimson;
		font-weight: 700;
		font-size: 22px;
		border-top:0.5px solid #C0C0C0;
		border-bottom:0.5px solid #C0C0C0;
		direction:RTL;
		unicode-bidi:embed;
		text-align: right;
		margin-left:0px;
		margin-bottom:2px;
		background-color:#f2f2f2;
		padding:10px 18px;
		padding-top:10px;
	}
	.bx{
		//color:crimson;
		font-weight: 700;
		font-size: 22px;
		border-top:0.5px solid #C0C0C0;
		border-bottom:0.5px solid #C0C0C0;
		unicode-bidi:embed;
		//====================	
		margin-left:0px;
		margin-bottom:10px;
		background-color:#f2f2f2;
		padding:20px 18px;	
	}
	//=====Untuk TABEL STYLE======
	table, td, th {
		border: 0px solid #ddd;
		text-align: left;
	}
	table {
		border-collapse: collapse;
		width: 100%;
	}
	th, td {
		/*padding: 12px;*/
		padding: 6px;
		vertical-align: top;
		border-bottom: 1px solid #ddd;
	}

</style>
</head>
<body>
<?php

	if (isset($_POST['a'], $_POST['b'])) # Get from POST submit
	{
		$a = $_POST['a'];
		$b = $_POST['b'];				
	}

	if (isset($_GET['a'], $_GET['b'])) # get from URL
	{
		$a = $_GET["a"];
		$b = $_GET["b"];
	}

	#if (empty($a) || empty($b)) { # Bar only work WITHOUT table selected
	if (empty($a) && empty($b)) { # Bar only work WITH table selected
		echo '<div class="bx">Hasil Random, Isi No Hadits yang mau dicari !</div>';
		$a = rand(1,9);
		$b = rand(1,1500);		
	}
	$tt = gtotal($a);

	if (($b > $tt) && ($a != "0")){
		echo '<div class="bx">Nomor Hadits hanya sampai '.$tt.' !</div>';		
	}

	$ax = ga($a);
	langsungcari($ax,$b);

	$actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]<b> ?a=$a&b=$b </b>";
	echo "Note : Gunakan URL, Contoh :: ".$actual_link."</br> "; 

?>
</body>
</html>

{% endhighlight %}


<hr />
Post by : admin.
