---
title: Membuat Server Repository Local di Ubuntu NEW
description: Membuat Server Repository Local di Ubuntu
header: Membuat Server Repository Local di Ubuntu
categories: Linux
---

Oleh : Onno W. Purbo*

Kalau di Windows, anda mencari software biasanya membutuhkan effort yang luar biasa, harus mencari di google, di Glodok, di toko CD dll. Berbeda dengan Windows, di Linux biasanya semua software / apps yang ada sudah terkumpul menjadi satu dalam sebuah server siap di instalasi.

Repository sering juga di singkat "repo" . Repository dalam bahasa yang sederhana adalah tempat menyimpan semua / kumpulan aplikasi. Di Debian dan Ubuntu kebetulan lumayan terstruktur dengan baik tempat penyimpanan Repository aplikasinya. Untuk menggunakan repo, kita dapat menggunakan perintah seperti, "apt update" untuk mengupdate daftar isi repo, "apt search namaaplikasi" untuk mencari aplikasi yang bernama namaaplikasi, "apt install aplikasi" untuk menginstalasi aplikasi yang kita butuhkan.

Repo Ubuntu biasanya di simpan di situs di Internet, seperti, id.archive.ubuntu.com, kambing.ui.ac.id dll. Besar repo untuk sebuah versi biasanya sekitar 120+ Gbyte untuk arsitektur 32bit & 64bit.

Bagi sebuah kampus, sebuah kantor, atau mereka yang suka ngoprek maka lebih baik untuk bisa mengcopy seluruh repo ke harddisk lokal dan membuat server lokal untuk menampilkan repo tersebut. Pada kesempatan ini akan di jelaskan cara membuat server repo local di server Ubuntu 16.04.

#### Persiapan



Untuk bisa membuat server repo local, anda membutuhkan semua mesin kecil dengan harddisk besar. Saya biasanya menggunakan mesin tua dengan processor atom di pasang harddisk 500Gbyte untuk bisa di operasikan 24 jam.

Mesin tersebut di instalasi OS Ubuntu 16.04. Biasanya saya membuat partisi root / hanya sekitar 20-30Gbyte saja, swap secukup-nya, sisanya sekitar 400Gbyte seluruhnya di set sebagai partisi untuk /var.

Setelah server Ubuntu 16.04 beroperasi. Aplikasi yang perlu diinstalasi untuk operasi repository local ini dapat dilakukan menggunakan perintah :
{% highlight bash linenos %}
	# Bash Command 
	$ apt install debmirror apache2
{% endhighlight %}
Bagian yang paling tricky adalah (1) membuat mengcopy mirror keyring, dan (2) membuat folder yang dibutuhkan untuk menyimpan copy repository. Membuat mirror keyring dapat menggunakan perintah :
{% highlight bash linenos %}
	# Bash command
	$ mkdir /var/data && mkdir /var/data/mirrorkeyring
{% endhighlight %}
di lanjutkan menggunakan perintah gpg untuk membuat mirrorkeyring. Untuk jelasnya saya attach pada gambar dibawah.



Jika bermasalah, silahkan ulangi lagi perintah gpg paling bawah dari gambar di atas.

Saya biasanya membuat folder repository di /var/data/repository, untuk ubuntu 16.04 di /var/data/repository/repo-16.04, sementara mirrorkeyring di /var/data/mirrorkeyring.

#### Download Repository dari Internet 

Bagian yang paling menyedihkan adalah kita harus mendownload semua repository yang dibutuhkan dari Internet. Untuk sebuah versi Ubuntu maka dibutuhkan harddisk sebesar 120-150Gbyte. Bagi anda yang membutuhkan bisa copy repo yang ada di saya, dengan cara mengirim usb harddisk ke rumah saya dan diselipkan ongkos untuk kirim kembali pakai JNE.

Bagi anda yang mempunyai banyak bandwidth dapat menggunakan shell script berikut untuk mendownload repository ubuntu 16.04 dari Internet ke /var/data/repository/repo-16.04.

Script di atas akan mengambil repo ubuntu dari mesin kambing.ui.ac.id.

Saya biasanya membuat cron dari perintah untuk update repo di atas, misalnya setiap jam 11-12 malam setiap hari saat Internet tidak digunakan. Ini dapat dilakukan dengan menggunakan perintah crontab di Linux.

#### Menampilkan Repository dari Web Server Lokal

Langkah terakhir adalah menampilkan repository di web server lokal. Ini relatif sangat mudah, pada dasarkan hanya melakukan bind folder tempat menyimpan repo ke folder web. Misalnya, kita bisa membuat folder di web menggunakan perintah : 
$ mkdir /var/www/html/ubuntu
Selanjutnya untuk menampilkan folder repo, dapat di bind menggunakan perintah :
{% highlight bash linenos %}
	# Bash Command
	$ mount --bind /var/data/repository/repo-16.04 /var/www/html/ubuntu
{% endhighlight %}
Selesai sudah.

#### Menggunakan Repo Lokal

Untuk menggunakan repo lokal tersebut, kita cukup mengedit file /etc/apt/sources.list yang pada dasarnya mengatur repo mana yang kita gunakan. Dan ubah isinya menjadi, misalnya, "deb http://192.168.0.100/ubuntu/ xenial main restricted universe multiverse" jika repo berada di mesin 192.168.0.100/ubuntu.

Kalau kebetulan repo tersebut ada di komputer itu sendiri, tentu kita tidak perlu menggunakan http, kita dapat menggunakan kalimat :
deb file:///var/data/repository/repo-16.04/ xenial main restricted universe multiverse
dengan asumsi, repo ada di folder /var/data/repository/repo-16.04.

Semoga bisa bermanfaat untuk menghemat bandwidth bagi mereka yang suka ngoprek Linux
