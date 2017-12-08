---
title: RM for Remove, Replace Multiple File_Name
description: RM for Remove, Replace Multiple File_Name
header: RM for Remove, Replace Multiple File_Name
categories: Linux
---

### Menggunakan tool RM untuk Rename, Remove Character pada nama file

### 1. Command Line : Replace "_" with "-" 

{% highlight bash linenos %}
for file in *.jpg; do mv "${file}" "${file/_/-}"; done 
{% endhighlight %} 


### 2. Command Line : Replace "-" with "-ID" 

{% highlight bash linenos %}
for file in *.jpg; do mv "${file}" "${file/-/-ID}"; done
{% endhighlight %} 

### 3. Command Line : Remove "-ID" 

{% highlight bash linenos %}
for file in *.jpg; do mv "${file}" "${file/-ID/}"; done
{% endhighlight %} 

### 4. Command Line : Append "-img" 

{% highlight bash linenos %}
for file in *.jpg; do mv "${file}" "${file/.jpg/-img.jpg}"; done
{% endhighlight %} 

### 5. Command Line : Replace Full "File_Name" with "Number"
* <b>EXAMPLE </b> - Replace all .jpg full file name with new file name + number
* File with name `DeepinScreenshot0611163415.jpg` change to --> `1-img.jpg` 
* Jika terdapat lebih dari 1 file maka akan menjadi --> `1-img.jpg`  ,  `2-img.jpg`  ,  `3-img.jpg` dst... 

{% highlight bash linenos %}
i=0;for file in *.jpg; do i=$((i+1));echo "$i"; mv "${file}" "${file/$file/$i-img.jpg}"; done
{% endhighlight %} 

* <b>ANOTHER EXAMPLE </b> - Full Replace and Replace + Append to file name

{% highlight bash linenos %}

i=0;for file in *.jpg; do i=$((i+1));echo "$i"; done # only show Number from 1 to n file
i=0;for file in *.jpg; do i=$((i+1));echo "$i"; mv "${file}" "${file/$file/$i-img.jpg}"; done
i=0;for file in *.jpg; do i=$((i+1));echo "$i"; mv "${file}" "${file/$file/$i.jpg}"; done
i=0;for file in *.jpg; do i=$((i+1));echo "Ke $i : $file"; done # only show file

{% endhighlight %} 


### 6. Command Line : example FROM "[CooL GuY] [[a2zRG]] (42).jpg" TO "CooLGuYa2zRG42.jpg"

{% highlight bash linenos %}
for file in *.jpg; do mv "${file}" "${file/[/}"; done
for file in *.jpg; do mv "${file}" "${file/]/}"; done
for file in *.jpg; do mv "${file}" "${file/'[['/}"; done # [[ --> maksudnya double '{'
for file in *.jpg; do mv "${file}" "${file/']]'/}"; done # ]] --> maksudnya double '}'
for file in *.jpg; do mv "${file}" "${file/'('/}"; done
for file in *.jpg; do mv "${file}" "${file/')'/}"; done
for file in *.jpg; do mv "${file}" "${file/ /}"; done
{% endhighlight %} 


### 7. Dalam bash script 

{% highlight bash linenos %}
#!/bin/bash
for file in *.jpg; do
	mv "$file" "${file/(/}" # remove character "("
	mv "$file" "${file/)/_}" # replace character "(" with "_"
done
{% endhighlight %} 

## Menggunakan MMV [ Multiple Files MV ]
### How do I use mmv command

* To convert all filenames to lowercase, enter 

{% highlight bash linenos %}
mmv "*" "#l1"
{% endhighlight %}

* To rename all *.bakz files in the current directory to *.bak 

{% highlight bash linenos %}
mmv '*.bakz' '#1.bak'
{% endhighlight %}


### Sumber : 
* [https://www.cyberciti.biz/tips/renaming-multiple-files-at-a-shell-prompt.html](https://www.cyberciti.biz/tips/renaming-multiple-files-at-a-shell-prompt.html){:target="_blank"}

<hr />
Post by : Admin
