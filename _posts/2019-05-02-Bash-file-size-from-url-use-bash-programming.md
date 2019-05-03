---
title: Bash - Linat Ukuran File dari URL menggunakan bash programming
description: Bash - Linat Ukuran File dari URL menggunakan bash programming
header: Bash - Linat Ukuran File dari URL menggunakan bash programming
date:   2019-05-02 01:30:01 +0700
categories: Programming
---
Terkadang kita ingin memastikan ukuran sebuah file sebelum mendownload, jika situs yang menyediakan file tidak menampilkan informasi ukuran file maka perlu tool tertentu untuk melihat ukuran filenya, script dibawah merupakan bash script untuk melihat informasi ukuran file dari url, 

{% highlight bash linenos %}

#!/bin/bash


function bytes_for_humans() {
    local -i bytes=$1;
    if [[ $bytes -lt 1024 ]]; then
        echo "${bytes} B"
    elif [[ $bytes -lt 1048576 ]]; then
        echo "$(( (bytes + 1023)/1024 )) KB"
    else
#    elif [[ $bytes -lt 1073741823 ]]; then
    	echo "$(( (bytes + 1048575)/1048576 )) MB"
#    else
#        echo "$(( (bytes + 1073741823)/1073741824 )) GB"
    fi
}



url="$1"

size=$(HEAD -u "${url}")
size=${size##*Content-Length: }
size=${size%%[[:space:]]*}

sizeh=$( bytes_for_humans $size)
echo " SIZE : $sizeh :: $url "
#echo "-----------------------------------------------"

{% endhighlight %}

Beberapa hal yang harus dilakukan untuk implementasi 
1. buat file script dengan nama contohnya `geturlfilesize.sh`
2. copy script diatas dan paste ke file yang baru dibuat `geturlfilesize.sh`
3. ubah file permision agar bisa dieksekusi menggunakan perintah `chmod +x geturlfilesize.sh`
4. sekarang cari conto url untuk uji coba script dengan perintah `./geturlfilesize.sh "URL"`

### Update Script
Update dengan menambahkan tool zenity untuk tampilan lebih menarik dan memudahkan 

{% highlight bash linenos %}
#!/bin/bash

function bytes_for_humans() {
    local -i bytes=$1;
    if [[ $bytes -lt 1024 ]]; then
        echo "${bytes} B"
    elif [[ $bytes -lt 1048576 ]]; then
        echo "$(( (bytes + 1023)/1024 )) KB"
    else
    	echo "$(( (bytes + 1048575)/1048576 )) MB"
    fi
}

while true
do
	url=$(DISPLAY=:0 zenity --entry --entry-text="$rx" --title="--- Get Url Size ---" --width=450 --text="$msg\nURL [q:exit] :")
	
	prts=("http" "https" "ftp")
	if [ "$url" = "q" ] || [ "$url" = "Q" ] || [ "$url" = "" ];
	then 
		break;
		exit 0;
	else
		for prt in "${prts[@]}"
		do			
			if [[ "$url" == *"$prt"* ]]
			then	
				function gurl(){					
					size=$(HEAD -u "${url}")
					size=${size##*Content-Length: }
					size=${size%%[[:space:]]*}
					sizeh=$(bytes_for_humans $size)	
					echo "$sizeh" > /tmp/sizeh.tmp			
				}
				gurl |zenity --progress --pulsate --auto-close --text="Get URL Size : $url" --title="--- Get Url Size ---" ;
				#===================================
				szz=$(cat /tmp/sizeh.tmp)	
				(DISPLAY=:0 zenity --info --title="--- Get Url Size ---"  --text="Hasil \nURL: $url\nSIZE: $szz" --width=450 ;)							
			else
				break;
				exit 0;
			fi
		done
	fi
done

{% endhighlight %}

sekian, selamat mencoba.


---
Post by : admin @ kost Yogyakarta.

