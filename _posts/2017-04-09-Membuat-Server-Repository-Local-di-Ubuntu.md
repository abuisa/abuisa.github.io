---
title: Membuat Server Repository Local di Ubuntu
description: Membuat Server Repository Local di Ubuntu
header: Membuat Server Repository Local di Ubuntu
categories: Linux
---

Oleh : Onno W. Purbo*<br />
<br />
<div style="text-align: justify;">
Kalau di Windows, anda mencari software biasanya membutuhkan effort yang luar biasa, harus mencari di google, di Glodok, di toko CD dll. Berbeda dengan Windows, di Linux biasanya semua software / apps yang ada sudah terkumpul menjadi satu dalam sebuah server siap di instalasi.</div>
<div style="text-align: justify;">
<br /></div>
<div style="text-align: justify;">
Repository sering juga di singkat "repo" . Repository dalam bahasa yang sederhana adalah tempat menyimpan semua / kumpulan aplikasi. Di Debian dan Ubuntu kebetulan lumayan terstruktur dengan baik tempat penyimpanan Repository aplikasinya. Untuk menggunakan repo, kita dapat menggunakan perintah seperti, "apt update" untuk mengupdate daftar isi repo, "apt search namaaplikasi" untuk mencari aplikasi yang bernama namaaplikasi, "apt install aplikasi" untuk menginstalasi aplikasi yang kita butuhkan.</div>
<div style="text-align: justify;">
<br /></div>
<div style="text-align: justify;">
Repo Ubuntu biasanya di simpan di situs di Internet, seperti, id.archive.ubuntu.com, kambing.ui.ac.id dll. Besar repo untuk sebuah versi biasanya sekitar 120+ Gbyte untuk arsitektur 32bit &amp; 64bit.</div>
<div style="text-align: justify;">
<br /></div>
<div style="text-align: justify;">
Bagi sebuah kampus, sebuah kantor, atau mereka yang suka ngoprek maka lebih baik untuk bisa mengcopy seluruh repo ke harddisk lokal dan membuat server lokal untuk menampilkan repo tersebut. Pada kesempatan ini akan di jelaskan cara membuat server repo local di server Ubuntu 16.04.</div>
<br />
<b>Persiapan</b><br />
<b><br /></b>
<br />
<div style="text-align: justify;">
Untuk bisa membuat server repo local, anda membutuhkan semua mesin kecil dengan harddisk besar. Saya biasanya menggunakan mesin tua dengan processor atom di pasang harddisk 500Gbyte untuk bisa di operasikan 24 jam.</div>
<div style="text-align: justify;">
<br /></div>
<div style="text-align: justify;">
Mesin tersebut di instalasi OS Ubuntu 16.04. Biasanya saya membuat partisi root / hanya sekitar 20-30Gbyte saja, swap secukup-nya, sisanya sekitar 400Gbyte seluruhnya di set sebagai partisi untuk /var.</div>
<div style="text-align: justify;">
<br /></div>
<div style="text-align: justify;">
Setelah server Ubuntu 16.04 beroperasi. Aplikasi yang perlu diinstalasi untuk operasi repository local ini dapat dilakukan menggunakan perintah :</div>
<span style="font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;">$ apt install debmirror apache2</span><br />
<div style="text-align: justify;">
<br /></div>
<div style="text-align: justify;">
Bagian yang paling tricky adalah (1) membuat mengcopy mirror keyring, dan (2) membuat folder yang dibutuhkan untuk menyimpan copy repository. Membuat mirror keyring dapat menggunakan perintah :</div>
<span style="font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;">$ mkdir /var/data &amp;&amp; mkdir /var/data/mirrorkeyring</span><br />
<div style="text-align: justify;">
di lanjutkan menggunakan perintah gpg untuk membuat mirrorkeyring. Untuk jelasnya saya attach pada gambar dibawah.</div>
<br />
<img height="24" src="https://img.ucweb.com/o/mediana/s/we_media/upload_img/17040106533b4c5d265cb39eccfb8f05d4e35c0287x1058x66x4.png;,70,png;3,640x,0" width="400" />

<div style="text-align: justify;">
Jika bermasalah, silahkan ulangi lagi perintah gpg paling bawah dari gambar di atas.</div>
<div style="text-align: justify;">
<br /></div>
<div style="text-align: justify;">
Saya biasanya membuat folder repository di /var/data/repository, untuk ubuntu 16.04 di /var/data/repository/repo-16.04, sementara mirrorkeyring di /var/data/mirrorkeyring.</div>
<div style="text-align: justify;">
<br /></div>
<b>Download Repository dari Internet</b>
<b><br /></b>

<div>
<div style="text-align: justify;">
Bagian yang paling menyedihkan adalah kita harus mendownload semua repository yang dibutuhkan dari Internet. Untuk sebuah versi Ubuntu maka dibutuhkan harddisk sebesar 120-150Gbyte. Bagi anda yang membutuhkan bisa copy repo yang ada di saya, dengan cara mengirim usb harddisk ke rumah saya dan diselipkan ongkos untuk kirim kembali pakai JNE.</div>
<div style="text-align: justify;">
<br /></div>
<div style="text-align: justify;">
Bagi anda yang mempunyai banyak bandwidth dapat menggunakan shell script berikut untuk mendownload repository ubuntu 16.04 dari Internet ke /var/data/repository/repo-16.04.


</div>

<img height="57" src="https://img.ucweb.com/o/mediana/s/we_media/upload_img/1704010702348b97b7677e80d974f15068b44c7bb9x766x110x8.png;,70,png;3,640x,0" width="400" /><br />
<br />
<div style="text-align: justify;">
Script di atas akan mengambil repo ubuntu dari mesin kambing.ui.ac.id.</div>
<div style="text-align: justify;">
<br /></div>
<div style="text-align: justify;">
Saya biasanya membuat cron dari perintah untuk update repo di atas, misalnya setiap jam 11-12 malam setiap hari saat Internet tidak digunakan. Ini dapat dilakukan dengan menggunakan perintah crontab di Linux.</div>
<div style="text-align: justify;">
<br /></div>
<b>Menampilkan Repository dari Web Server Lokal</b><br />
<div style="text-align: justify;">
<br /></div>
<div style="text-align: justify;">
Langkah terakhir adalah menampilkan repository di web server lokal. Ini relatif sangat mudah, pada dasarkan hanya melakukan bind folder tempat menyimpan repo ke folder web. Misalnya, kita bisa membuat folder di web menggunakan perintah :&nbsp;</div>
<span style="font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;">$ mkdir /var/www/html/ubuntu</span><br />
<div style="text-align: justify;">
Selanjutnya untuk menampilkan folder repo, dapat di bind menggunakan perintah :</div>
<span style="font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;"></span><br />
<div style="text-align: justify;">
<span style="font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;">$ mount --bind /var/data/repository/repo-16.04 /var/www/html/ubuntu</span></div>
<span style="font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;">
</span>Selesai sudah.<br />
<br />
<b>Menggunakan Repo Lokal</b><br />
<br />
<div style="text-align: justify;">
Untuk menggunakan repo lokal tersebut, kita cukup mengedit file /etc/apt/sources.list yang pada dasarnya mengatur repo mana yang kita gunakan. Dan ubah isinya menjadi, misalnya, "deb http://192.168.0.100/ubuntu/ xenial main restricted universe multiverse" jika repo berada di mesin 192.168.0.100/ubuntu.</div>
<div style="text-align: justify;">
<br /></div>
<div style="text-align: justify;">
Kalau kebetulan repo tersebut ada di komputer itu sendiri, tentu kita tidak perlu menggunakan http, kita dapat menggunakan kalimat :</div>
<span style="font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;">deb file:///var/data/repository/repo-16.04/ xenial main restricted universe multiverse</span><br />
<div style="text-align: justify;">
dengan asumsi, repo ada di folder /var/data/repository/repo-16.04.</div>
<div style="text-align: justify;">
<br /></div>
<div style="text-align: justify;">
Semoga bisa bermanfaat untuk menghemat bandwidth bagi mereka yang suka ngoprek Linux.</div>
<br />
<br />
------------------<br />
Nb: * Materi ini di COPAS dari  <a href="https://c.uctalks.ucweb.com/detail/688d905edcdf4563ab694612fc34b68e?uc_param_str=dnvebichfrmintcpwidsudsvnwpflameefut">MembuatServerRepoLocal</a>, tulisannya mas Onno W. Purbo yang sedikit saya ubah tampilannya.</div>

