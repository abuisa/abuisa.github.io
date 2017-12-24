---
layout: post
title: BackUp Web ini ke Offline dengan FIND dan SED
description: BackUp Web ini ke Offline dengan FIND dan SED
header: BackUp Web ini ke Offline dengan FIND dan SED
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


### Script Versi Terbaru : 

{% highlight bash linenos %}

#!/bin/bash
echo -e "Start to Copy......"
if cp -ru ../abuisa.github.io/_site/ ./ 
then 
	#notify-send "Copy Data Suksess" -i info
	echo -e "Copy \t\t\t: OK, Copy Success......"
else
	echo -e "Copy \t\t\t: GAGAL Copy  !"
fi

echo -e "Start to Clear......"
if find _site/*.html -type f -exec sed -i 's/\/css/css/g' {} + # Replace string
then 
	echo -e "css \t\t\t: OK, Clear....."
else
	echo -e "css \t\t\t: GAGAL Clear  !"
fi

if find _site/*.html -type f -exec sed -i 's/https:\/\/abuisa.github.io\///g' {} + # Replace string
then 
	echo -e "remove hostname 1\t: OK, Clear....."
else
	echo -e "remove hostname 1\t: GAGAL Clear  !"
fi

if find _site/*.html -type f -exec sed -i 's/http:\/\/0.0.0.0:4000\///g' {} + # Replace string
then 
	echo -e "remove hostname 2\t: OK, Clear....."
else
	echo -e "remove hostname 2\t: GAGAL Clear  !"
fi

if find _site/*.html -type f -exec sed -i 's/"\/categories"/"categories.html"/g' {} + # Replace string 
then 
	echo -e "categories \t\t: OK, Clear....."
else
	echo -e "categories \t\t: GAGAL Clear  !"
fi 
	
if find _site/*.html -type f -exec sed -i 's/"\/linkcolection"/"linkcolection.html"/g' {} + # Replace string 
then 
	echo -e "linkcolection \t\t: OK, Clear....."
else
	echo -e "linkcolection \t\t: GAGAL Clear  !"
fi

if find _site/*.html -type f -exec sed -i 's/"\/penelitian"/"penelitian.html"/g' {} + # Replace string 
then
	echo -e "penelitian \t\t: OK, Clear....."
else
	echo -e "penelitian \t\t: GAGAL Clear  !"
fi

if find _site/*.html -type f -exec sed -i 's/"\/me"/"me.html"/g' {} + # Replace string 
then
	echo -e "me \t\t\t: OK, Clear....."
else
	echo -e "me \t\t\t: GAGAL Clear  !"
fi


if find _site/*.html -type f -exec sed -i 's/src="\/js/src="js/g' {} + # Replace string
then
	echo -e "Js \t\t\t: OK, Clear....."
else
	echo -e "Js \t\t\t: GAGAL Clear  !"
fi

ix=$(find . -name ".fuse_hidden00*"|wc -l);
if [ "$ix" == "0" ]
then 
	echo -e "Remove .fuse_hidden00* \t: GAGAL, File Not Found !"
else
	echo "Aada "
	if rm .fuse_hidden00*
	then
		echo -e "Remove .fuse_hidden00* \t: OK, Clear....."
	fi
fi

if [ $1
pt=$(zenity --entry --title="Copyt File" --text="Input Destination Path : ");
if sudo cp -rfu _site/ "$pt"
then 
	echo -e "Copy \t\t\t: OK, Copy to '$pt' Success......"
else
	echo -e "Copy \t\t\t: GAGAL Copy to '$pt'  !"
fi

echo -e "Clear Finished !..."
##--- Dengan menampilkan Notifikasi di layar desktop ---
notify-send "Selesai On_Web to Off_Web !" -i text-x-script
zenity --display :0 --info --width=150 --height=100 --title "BackUp Finished !" --text "Selesai Menyalin Web_on To Web_Off" # OK,

{% endhighlight %}

- Versi terberu diatas diupload pada 22,12,2017.

<hr />
Post by : admin
