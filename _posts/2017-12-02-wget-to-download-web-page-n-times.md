---
title: WGET for Download same webpage name to N times
description: WGET for Download same webpage name to N times
header: WGET for Download same webpage name to N times
categories: Linux
---

## WGET for Download same webpage name to N times 
Bash Script untuk mendowload halaman web yang memiliki kesamaan nama dan hanya dibedakan dengan angka, dapat menggunakan script ini untuk mendowload halaman tersebut, berikut script tersebut yang menggunakan tool wget untuk melakukannya : 

### Script use wget to download web page : 

{% highlight bash linenos %}

#!/bin/bash
for (( c=1; c<=6; c++ ))
do  
	wget http://linux-training.be/storage/pt0$c.html
	echo "http://linux-training.be/storage/pt0$c.html"
	#   echo "Welcome $c times"
done

for (( c=1; c<=9; c++ ))
do  
	wget http://linux-training.be/storage/ch0$c.html
	echo "http://linux-training.be/storage/ch0$c.html"
	#   echo "Welcome $c times"
done
for (( c=10; c<=26; c++ ))
do  
	wget http://linux-training.be/storage/ch$c.html
	echo "http://linux-training.be/storage/ch$c.html"
	#   echo "Welcome $c times"
done

{% endhighlight %}

### Contoh Hasil Screenshot : 

![image-title-here](img/linux/linux-post5-001.png)

<hr />
Post by : admin.
