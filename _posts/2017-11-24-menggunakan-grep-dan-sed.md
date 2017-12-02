---
layout: post
title: Praktek menggunakan FIND dan SED dan 
description: Praktek menggunakan FIND dan SED
header: Praktek menggunakan FIND dan SED
categories: Linux
---
### Cari dan Replace String
> find . -type f -exec sed -i 's/\/css/css/g' {} + 

* Perintah diatas `find . -type f ` adalah perintah untuk mencari file dengan hanya mencari file tanpa directory.
* Sedangkan perintah `sed -i 's/\/css/css/g'` diatas untuk mencari string `/css` untuk di-replace dengan string `css`, atau menghapus `backslash` pada string `/css`.

### Praktek FIND dan SED dalam bash_script

* Berikut contoh bash script untuk mencari beberap string yang akan di-replace dengan string lainnya : 

{% highlight bash linenos %}

#!/bin/bash
echo -e "Start to Copy......"
cp -r ../abuisa.github.io/_site/ ./
echo -e "Copy \t\t\t: Copy Success......"
echo -e "Start to Clear......"
find _site/ -type f -exec sed -i 's/\/css/css/g' {} + # Replace string
echo -e "css \t\t\t: Clear....."
find _site/ -type f -exec sed -i 's/https:\/\/abuisa.github.io\///g' {} + # Replace string
echo -e "remove hostname 1\t: Clear....."
find _site/ -type f -exec sed -i 's/http:\/\/0.0.0.0:4000\///g' {} + # Replace string
echo -e "remove hostname 2\t: Clear....."
find _site/ -type f -exec sed -i 's/"\/categories"/"categories.html"/g' {} + # Replace string 
echo -e "categories \t\t: Clear....."
find _site/ -type f -exec sed -i 's/"\/linkcolection"/"linkcolection.html"/g' {} + # Replace string 
echo -e "linkcolection \t\t: Clear....."
find _site/ -type f -exec sed -i 's/"\/penelitian"/"penelitian.html"/g' {} + # Replace string 
echo -e "penelitian \t\t: Clear....."
find _site/ -type f -exec sed -i 's/"\/me"/"me.html"/g' {} + # Replace string 
echo -e "me \t\t\t: Clear....."
find _site/ -type f -exec sed -i 's/src="\/js/src="js/g' {} + # Replace string
echo -e "Js \t\t\t: Clear....."
rm .fuse_hidden00*
echo -e "Remove .fuse_hidden00* \t: Clear....."
echo -e "Clear Finished !..."

{% endhighlight %}

### Buat setiap halaman web ini dapat di akses OFFLINE

* Copy folder `_site` ke lokal komputer, contoh taruh di `/home/user/Download/web_ini/_site`
* Copy Script diatas dan simpan dalam bentuk file dengan nama `web_to_offline.sh`, letakkan file ini di folder `web_ini`
* Jalankan script dari terminal dengan perintah `./web_to_offline.sh` kemudian Enter.
* Seletelah selesai, halaman sudah bisa diakses dengan tampilah yang sama sebagaimana Online.



----
Post by : admin
