---
title: Python - Check If Server Up or Down
description: Python - Check If Server Up or Down
header: Python - Check If Server Up or Down
categories: Programming
---

# Python Script 

{% highlight python linenos %}

import os
import time
hostname = "google.com" # #example
response = os.system("ping -c 1 " + hostname + " > /dev/null")
msg_hostup ='''
 |-----------------------------------------|
 |---Host '''+hostname+''', IS UP !
 |-----------------------------------------|
''';
msg_hostdown ='''
 |-----------------------------------------|
 |---Host '''+hostname+''', Is DOWN !
 |-----------------------------------------|
''';
#and then check the response...
while True:			
	try:
		if response == 0:
			print msg_hostup
			os.system('zenity --display :0 --info --width=250 --height=50 --title "Server Info" --text " Host '+hostname+', is UP !"')
			break
		else:
			os.system('cls' if os.name == 'nt' else 'clear')
			#print hostname, 'is down !'
			print msg_hostdown
			time.sleep(2)
	except:
		print "Error...!"
		break

{% endhighlight %}

<br />
Post by : Admin.
