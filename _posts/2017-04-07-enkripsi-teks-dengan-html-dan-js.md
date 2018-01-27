---
layout: post
title: HTML+JS - Enkripsi teks dengan HTML dan JS
description: HTML+JS - Enkripsi teks dengan HTML dan JS
header: HTML+JS - Enkripsi teks dengan HTML dan JS
date:   2017-04-07 08:20:01 +0700
categories: Programming
---
Assalamualaikum...

Bagi anda yang hoby atau suka dengan web script, berikut saya sharing sebuah script yang bagus jika digunakan untuk meng-enkripsi teks-teks atau catatan penting yang sifatnya rahasia dan tidak ingin dibaca oleh orang lain, jika anda punya komputer dan sering digunakan bersama mungkin script ini dapat membantu anda untuk sedikit lebih aman menyembunyikan catatan-catatan penting anda, script ini merupakan hasil nemu di internet tapi lupa dari mana nemunya...

Script atau code untuk enkripsi teksnya ini merupakan perpaduan antara HTML dan JavaScript sehingga bagi yang berminat tinggal mengcopy dan paste kemudian tinggal jalankan di browser atau bisa juga di download filenya, jika anda ingin mencoba-coba bisa langsung kunjungi link berikut: [Enkripsiteks](https://abuisa.github.io/ikhwanelyas/), berikut tampilannya :

![Enkripsi Dekripsi](img/e-d-preview.png "Teeeeest")

Berikut tampak JavaScript dan HTML yang digunakan sebagai mesin dan tapilan  untuk melakukan enkripsi dan dekripsi 
* <b> JavaScript for Enc-Dec </b>
{% highlight javascript linenos %}
<script>
  'use strict';
  class Tea {
      static encrypt(plaintext, password) {
          plaintext = String(plaintext);
          password = String(password);
          if (plaintext.length == 0) return('');
          const v = Tea.strToLongs(Tea.utf8Encode(plaintext));
          const k = Tea.strToLongs(Tea.utf8Encode(password).slice(0,16));
          const cipher = Tea.encode(v, k);
          const ciphertext = Tea.longsToStr(cipher);
          const cipherbase64 = Tea.base64Encode(ciphertext);
          return cipherbase64;
      }
      static decrypt(ciphertext, password) {
          ciphertext = String(ciphertext);
          password = String(password);
          if (ciphertext.length == 0) return('');
          const v = Tea.strToLongs(Tea.base64Decode(ciphertext));
          const k = Tea.strToLongs(Tea.utf8Encode(password).slice(0,16));
          const plain = Tea.decode(v, k);
          const plaintext = Tea.longsToStr(plain);
          const plainUnicode = Tea.utf8Decode(plaintext.replace(/\0+$/,''));
          return plainUnicode;
          //return plaintext;
      }
      static encode(v, k) {
          if (v.length < 2) v[1] = 0;
          const n = v.length;
          const delta = 0x9e3779b9;
          let q = Math.floor(6 + 52/n);
          let z = v[n-1], y = v[0];
          let mx, e, sum = 0;
          while (q-- > 0) {
              sum += delta;
              e = sum>>>2 & 3;
              for (let p = 0; p < n; p++) {
                  y = v[(p+1)%n];
                  mx = (z>>>5 ^ y<<2) + (y>>>3 ^ z<<4) ^ (sum^y) + (k[p&3 ^ e] ^ z);
                  z = v[p] += mx;
              }
          }
          return v;
      }
      static decode(v, k) {
          const n = v.length;
          const delta = 0x9e3779b9;
          const q = Math.floor(6 + 52/n);
          let z = v[n-1], y = v[0];
          let mx, e, sum = q*delta;
          while (sum != 0) {
              e = sum>>>2 & 3;
              for (let p = n-1; p >= 0; p--) {
                  z = v[p>0 ? p-1 : n-1];
                  mx = (z>>>5 ^ y<<2) + (y>>>3 ^ z<<4) ^ (sum^y) + (k[p&3 ^ e] ^ z);
                  y = v[p] -= mx;
              }
              sum -= delta;
          }
          return v;
      }
      static strToLongs(s) {
          const l = new Array(Math.ceil(s.length/4));
          for (let i=0; i<l.length; i++) {
              l[i] = s.charCodeAt(i*4)        + (s.charCodeAt(i*4+1)<<8) +
                  (s.charCodeAt(i*4+2)<<16) + (s.charCodeAt(i*4+3)<<24);
          }
          return l;
      }
      static longsToStr(l) {
          let str = '';
          for (let i=0; i<l.length; i++) {
              str += String.fromCharCode(l[i] & 0xff, l[i]>>>8 & 0xff, l[i]>>>16 & 0xff, l[i]>>>24 & 0xff);
          }
          return str;
      }
      static utf8Encode(str) {
          return unescape(encodeURIComponent(str));
      }
      static utf8Decode(utf8Str) {
          try {
              return decodeURIComponent(escape(utf8Str));
          } catch (e) {
              return utf8Str;
          }
      }
      static base64Encode(str) {
          if (typeof btoa != 'undefined') return btoa(str);
          if (typeof Buffer != 'undefined') return new Buffer(str, 'binary').toString('base64');
          throw new Error('No Base64 Encode');
      }
      static base64Decode(b64Str) {
          if (typeof atob == 'undefined' && typeof Buffer == 'undefined') throw new Error('No base64 decode');
          try {
              if (typeof atob != 'undefined') return atob(b64Str);
              if (typeof Buffer != 'undefined') return new Buffer(b64Str, 'base64').toString('binary');
          } catch (e) {
              throw new Error('Invalid ciphertext');
          }
      }
  }
  /* - - - - - - - - - - - - -  */
  if (typeof module != 'undefined' && module.exports) module.exports = Tea; // ≡ export default Tea
</script>
{% endhighlight %}

* <b> HTML untuk tampilan : </b>

{% highlight html linenos %}
<body onload="clearall();isphone()">

  <div class="utama">
	<p id="jd"></p>
    <input type="submit" value="Enkripsi/Dekripsi Var* From DB" onclick="show_a('main','tes_e')"/>
    <input type="submit" value="Test Enkripsi/Dekripsi Teks " onclick="show_b('main','tes_e')"/>
    <input type="submit" value="Reload" onclick="page_r()"/><br />
    <h3 id="sj">Test Enkripsi-Dekripsi :</h3>
    Key/Pin:
    <input type="password" id="pas" size="8" value="tes123">
    <input type="submit" value="Dekripsi dan Tampilkan" onclick="show_e_str()"/><br />
    <div id="main" style="display:none" border="1"><br>
      
     <br />
      <textarea id="strmain" rows="20" cols="45" width="90%" ondblclick="clearall()">
      </textarea><br /><br />
        <input type="submit" value="Enkripsi Teks dan Printout" onclick="ETAline()"/>
        <input type="submit" value="Dekripsi Var* DB dan Printout" onclick="dw2_page()"/>
      
    </div>
    <div id="tes_e">
      <br />
      <textarea id="str1" rows="6" cols="50" ondblclick="clearall()">
      </textarea><br />
      <textarea id="str2" rows="6" cols="50">
      </textarea><br /><br />
      <input type="submit" value="Enkripsi Teks" onclick="tea_e()"/>
      <input type="submit" value="Dekripsi Teks" onclick="tea_d()"/>&nbsp;&nbsp;|&nbsp;&nbsp;
      <input type="submit" value="Enkripsi dan Printout" onclick="tea_ew()"/><br />
    </div>
  </div>
</body>
{% endhighlight %}

Berikut merupakan script pendukung untuk melengkapi penggunaan kedua script diatas yang bisa anda ekplorasi sesuai kebutuhan anda, berikut tampak scriptnya
* <b> Script Pendukung </b>
{% highlight javascript linenos %}
<script>
    function e_str(i){
        //---Tambah Var* DB/Database disini/dibawah
        //---paste hasil enkripsi diantara tanda '[' dan '];' 
      var estr = [
        "gFqUuK2p7/M=",
        "YjBcCIIgLEg=",
        "tg3xtwDYcCM=",
        "sWeZ8wZjG4A="
      ];
        if(isNaN(i)){
          return estr.length;
        } else {
          return estr[i];
        }
    }
    function clearall(){
      document.getElementById("strmain").value = '';
      document.getElementById("str1").value = '';
      document.getElementById("str2").value = '';
    }
    function show_e_str(){
      document.getElementById("strmain").value = '';
      var pas = document.getElementById("pas").value;
      for (i=0; i<e_str("N"); i++){
        var isi = document.getElementById("strmain").value;
        var estr = e_str(i);
        var str = isi + Tea.decrypt(estr, pas)+"\n";
        document.getElementById("strmain").value = str;
      }
    }
    function dw2_page(){
      var pas = document.getElementById("pas").value;
      for (i=0; i<e_str("N"); i++){
        var estr = e_str(i);
        var str = Tea.decrypt(estr, pas);
        //var str = str.replace("'","");
        //var str = str.replace(" ","&emsp;&emsp;");
        document.write(str+"<br />");
      }
      document.write("<br /><br />");
      document.write("-----<a href=''>-back-</a>-----");
      document.write("<br /><br />");
    }
    function tea_e(){
      var pas = document.getElementById("pas").value;
      var str = document.getElementById("str1").value;
      var estr = Tea.encrypt(str, pas);
      document.getElementById("str2").value = estr;
    }
    function tea_d(){
      var pas = document.getElementById("pas").value;
      var stra = document.getElementById("str1").value;
      var strb = document.getElementById("str2").value;
      if (( strb == "" ) && (stra != ""))
      {
        var dstr = Tea.decrypt(stra, pas);
        document.getElementById("str2").value = dstr;
      }else if ((stra == "") && (strb != "")){
        var dstr = Tea.decrypt(strb, pas);
        document.getElementById("str1").value = dstr;
        document.getElementById("str2").value = strb;
      }else {
        var dstr = Tea.decrypt(strb, pas);
        document.getElementById("str1").value = strb;
        document.getElementById("str2").value = dstr;
      }
    }
    function tea_ew(){
      var pas = document.getElementById("pas").value;
      var str = document.getElementById("str1").value;
      var estr = Tea.encrypt(str, pas);
      document.write('"'+estr+'",');
      document.write("<br /><br />");
      document.write("-----<a href=''>-back-</a>-----");
    }
    function page_r(){
      location.reload(true);
    }
    function show_a(a,b) {
      document.getElementById("sj").innerHTML = "Enkripsi Teks :";
      document.getElementById(a).style.display = 'block';
      document.getElementById(b).style.display = 'none';
    }
    function show_b(a,b) {
      document.getElementById("sj").innerHTML = "Test Enkripsi-Dekripsi :";
      document.getElementById(b).style.display = 'block';
      document.getElementById(a).style.display = 'none';
    }
    function ETAline(){
      var pas = document.getElementById("pas").value;
      var lines = document.getElementById("strmain").value;
      var line = lines.split('\n');
      for(var i = 0;i < line.length;i++){
          var str = line[i];
          var str = str.trim();
          var str = Tea.encrypt(str, pas);
          if ( str.length > 0 )
          { //print only non emtpy lines
            document.write('"'+str+'",<br />');
          }
      }
      document.write('<br />');
      document.write('\t-----Copy Hasil Enkripsi diatas dan Paste di dalam var DB---------<br />');
      document.write('\t-----<a href="">kembali</a>-----<br />');
      document.write('\t---------------------<br />');
    }

	function msg(a){
		alert(a);
	}
    function zoom() {
        document.body.style.zoom = "400%" 
    }
	function isphone(){
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			document.getElementById("jd").innerHTML = "<b>---Hello SmartPhone---</b>";
			show_a('main','tes_e');
			zoom();
		}else{
			document.getElementById("jd").innerHTML = "<h3>It's NOT  SmartPhone </h3>";
            show_a('main','tes_e');
		}
	}
	function zoomings(optionSel)
	{
		var OptionSelected = optionSel.selectedIndex;
		var val = optionSel.options[OptionSelected].text;
		//alert(val);
		var div = document.getElementById ("main");
		div.style.zoom = val;
	}
</script>
{% endhighlight %}

lebih mudahnya anda bisa langsung mengunjungi scripnya yang terdapat di [github](https://github.com/abuisa/ikhwanelyas/blob/master/index.html){:target="_blank"}.

______
post by : Admin
