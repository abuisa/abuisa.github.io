---
title: Bash - Alarm menggunakan bash programming
description: Bash - Alarm menggunakan bash programming
header: Bash - Alarm menggunakan bash programming
date:   2019-05-01 22:30:01 +0700
categories: Programming
---
Linux mempunyai banyak cara untuk melakukan suatu perintah secara terjadwal, tersedia tool ataupun bash script yang dapat ditulis sendiri, contoh adalah ketika suatu perintah perlu untuk dijalankan pada waktu tertentu, bash script dapat digunakan  untuk menjadwalkan suatu perintah, berikut contoh bash script untuk menjadwalkan perintah yang akan dieksekusi pada waktu tertentu, fungsinya kurang lebih seperti alarm, script berikut merupakan contoh untuk menjalankan aplikasi `audacious` yang akan menjalankan file `TvQuran_athan.mp3` dengan volume yang diatur sesuai dengan jadwal yang ada pada file `~/.bdir/.alarm.scdl`.

Dalam script ini ada beberapa file dan applikasi yang digunakan yaitu : 
1. File `~/.bdir/.alarm.scdl`, yang berisi daftar Jadwal dalam Format waktu dan keterangan
2. Aplikasi `leafpad` untuk membuka file `~/.bdir/.alarm.scdl` jika ingin mengedit jadwal
3. Aplikasi `audacious`, adalah aplikasi yang akan dieksekusi sesuai jadwal
4. File `TvQuran_athan.mp3` yang akan dijalankan menggunakan aplikasi `audacious`.

{% highlight bash linenos %}

#!/bin/bash

fload(){
	cek=$(cat ~/.bdir/.alarm.scdl |wc -w)
	if [ "$cek" == "0" ]
	then 
		echo " No Schedule Found !"
	else
		IFS=$'\n';i=0;for fl in $(cat ~/.bdir/.alarm.scdl|sort);do i=$((i+1)); echo -e "  $i.\t $fl"; done ;
		echo "-------------------------------------------------"
	fi	
}

fopen(){
	leafpad ~/.bdir/.alarm.scdl &
}

fclear(){
	read -p " Clear All Schedule ? [y/Y] [q:exit] : " clall
	if [ "$clall" == "y" ] || [ "$clall" == "Y" ]
	then
		if echo "" > ~/.bdir/.alarm.scdl;then echo " Suksess Clear All Schedule in .alarm.scdl file ";fi
	else
		echo ' CANCEL Clear All Schedule...'
	fi
}
fadd(){
	while : 
	do
		echo " Time Now : "$(date +%H:%M)
		read -p " Add Time, exp: 05:00 msg [q:exit] : " tm
		if [ "$tm" = "q" ] || [ "$tm" = "Q" ]
		then
			break
		else
			if echo "$tm" >> ~/.bdir/.alarm.scdl;then echo " Suksess Addd $tm to .alarm.scdl file ";fi
		fi
	#	echo "$tm"
	done
}
falarm(){
    while : 
	do
		clear;
		IFS=$'\n';
		i=0;
		for fl in $(cat ~/.bdir/.alarm.scdl)
		do
			stime=$(awk '{print $1}' <<< $fl);
			smesg=$(awk '{print $2}' <<< $fl);
#			echo -e " Time : $stime, Message : $smesg"
#			echo -e " $i.\t $fl"; 
			jam=$(date +%H:%M)
			sjam=$(date +%H:%M:%S)
			if [ "$stime" == $jam ]
			then 
				clear
				pactl set-sink-volume 0 150% # tambah volume sound maksimal 150%
#				audacious ~/Music/adzan.mp3& 
				audacious ~/Music/TvQuran_athan.mp3&
				echo "--------------------------------------"
				fload
				echo "--------------------------------------"
				sleep 25
				killall audacious
				sleep 55
			else			
				clear
				echo "--------------------------------------"
				fload
				echo "--------------------------------------"
				echo "Sekarang Menunjukan Jam : $sjam"
				sleep 3

			fi
		done
	done

}
fhlp(){
	echo "-------------------------------------------------"
	echo " Time Now : "$(date +%H:%M)
    echo "-------------------------------------------------"

    echo " Command : a  --> Add time to Schedules"
	echo "              --> Format   Exp   : [time] [message]"
	echo "              --> Add Time Exp 1 : 05:00 Bangun_Sholat_Subuh"
    echo "           c  --> Clear All Schedule"
    echo "           h  --> Help "
    echo "           l  --> List times Schedules"
    echo "           o  --> Open file .alarm.scdl in leafpad app"
    echo "           s  --> Start Alarm If Schedules Exists"
    echo "           q  --> EXIT"
    echo "-------------------------------------------------"
}

tes(){
	IFS=$'\n';
	for fl in $(cat ~/.bdir/.alarm.scdl)
	do
		stime=$(awk '{print $1}' <<< $fl);
		smesg=$(awk '{$1="";print}' <<< $fl);
#		stris="$stime --> $smesg"
		echo "Hasil : $stime --> $smesg"
	done
}

fhlp;
while : 
do
#	fhlp;
	read -n1 -r -p " Command ? [q/Q to exit] : " cmd
	echo -e "\n-------------------------------------------------"
    if [ "$cmd" = "q" ] || [ "$cmd" = "Q" ] 
    then
        fhlp;break                
    fi
	if [ "$cmd" = "" ]
	then
		fhlp
	fi
    case "$cmd" in
		o|O) fopen;;
		l|L) fload;;
		a|A) fadd ;; 
		c|C) fclear;;
		s|S) falarm;;
		h|H) fhlp;;
		t|T) tes;;
	esac
done


{% endhighlight %}


---
Post by : admin @ kost Yogyakarta.
