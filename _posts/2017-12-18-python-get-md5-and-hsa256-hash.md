---
title: Python - Get md5 & sha256 Hash
description: Python - Get md5 & sha256 Hash
header: Python - Get md5 & sha256 Hash
categories: Programming
---

### Contoh Screenshot : 

![image-title-here](img/programming/python-get-md5-sha-hash-0.png)

### Python Script : 

{% highlight python linenos %}
from hashlib import sha256,md5
import hashlib
from sys import argv

def md5(fname):
	hash_md5 = hashlib.md5()
	with open(fname, "rb") as f:
		for chunk in iter(lambda: f.read(4096), b""):
			hash_md5.update(chunk)
	return hash_md5.hexdigest()

for fn in argv[1:]:
	if fn == '-':
		f = sys.stdin
	else:
		f = open(fn, 'rb')
	with f:
		print ('SHA256 Hash \t: %s \t%s' % (sha256(f.read()).hexdigest(), fn))
		print ('MD5 Hash \t: '+ md5(fn)+' \t\t\t\t\t' +fn )

{% endhighlight %}

### Example  : 
* Buka Terminal, arahkan pada `path` script berada, dengan perintah `python <nama_script> <nama_file>`
* Contoh : `..$ python getmd5sha.py Data.txt`

<hr />
Post by : Admin.
