---
title: Teknik Belajar Command Line Interpreter di Linux
description: Teknik Belajar Command Line Interpreter di Linux
header: Teknik Belajar Command Line Interpreter di Linux
categories: Linux
---

Oleh : Onno W. Purbo

Salah satu kelebihan utama, tapi juga menjadi momok bagi sebagian besar pengguna barfu di linux adalah mempelajari perintah command line (CLI). Bagi mereka yang akan memegang server di Internet, mengembangkan sistem operasi, bahkan engkonfigurasi router yang effisien mau tidak mau harus menggunakan command line di Linux.

Sebetulnya teknik mempelajari command line di linux sangat mudah. Bahkan kalau sudah biasa akan hafal dengan sendirinya. Cantiknya beroperasi dengan command line (CLI) maka komputer kita sebetulnya tidak membutuhkan mouse :) ..

Ada beberapa perintah CLI yang legendaris dan sering dipakai, yaitu, ls - untuk melihat isi folder, cd - untuk pindah ke folder lain, mkdir - membuat folder, cp - untuk mengcopy file, rm - untuk membuang / men-delete file, nano - editor text di CLI yang sederhana, vi - editor text CLI yang lebih canggih.

Sebetulnya sebagian besar command line di linux, tersimpan pada empat (4) folder saja, yaitu, /bin , /sbin , /usr/bin , dan /usr/sbin. Isi file dalam folder tersebut bisa dilihat dengan perintah "ls /bin" misalnya. Hasil "ls /bin" bisa dilihat pada gambar.

<img height="373" src="https://img.ucweb.com/o/mediana/s/we_media/upload_img/17040208570fdf09ce835b81700ae5e4999a6808cfx435x406x14.png;,70,png" width="400" />

Untuk mengetahui lebih lanjut tentang cara menggunakan masing-masing perintah, kita dapat membaca manual / help-nya dengan menggunakan switch "namaperintah -h" , "namaperintah --help" atau "man nama perintah". Hasil menjalankan perintah "snort -h" tampak pada gambar.

<img height="225" src="https://img.ucweb.com/o/mediana/s/we_media/upload_img/17040208582e0be8b3db5eace9b2cbc25fee15d67ex720x406x20.png;,70,png;3,640x,0" width="400" />

Jika kita ingin penjelasan yang lebih panjang lebar, beberapa perintah menyediakan keterangan di perintah man (singkatan dari manual). Snort adalah aplikasi yang dapat digunakan untuk mendeteksi serangan. Pada gambar selanjutnya, kita melihat hasil keluaran layar dari perintah "man snort"

<img height="243" src="https://img.ucweb.com/o/mediana/s/we_media/upload_img/17040209054f6f5b1015e034cc4777c87ab1aa68edx752x458x29.png;,70,png;3,640x,0" width="400" />

Semoga bisa bermanfaat. 

----------------------

Nb : Artikel ini di COPAS dari tulisannya Pak Onno W. Purbo di uctalks.ucweb.com
