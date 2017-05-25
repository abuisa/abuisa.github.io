---
layout: post
title:  Akses MySql dan Operasi menggunakan Python
date:   2017-05-25 08:20:01 +0700
categories: Programming
---
Berikut merupakan scrip Python untuk melakukan proses konneksi ke database mysql, melakukan operasi SELEC, dan INPUT data ke database mysql.
## Struktur Database 
Berikut ini merupakan bentuk atau struktur database yang dijadikan contoh, terdapat 3 (tiga) buah tabel didalamnya, untuk memasukkan database ke dalam mysql silahkan lakukan perintah berikut : 
> $ mysql -u root -p < tes-database-name.sql<br>
> $ masukkan password (password mysql anda): 

berikut struktur database lengkap, copy dan simpan dengan nama file tes-database-name.sql (atau menyesuaikan) : 

{% highlight sql linenos %}
-- MySQL dump 10.13  Distrib 5.7.15, for Linux (x86_64)
--
-- Host: localhost    Database: dbfilelist
-- ------------------------------------------------------
-- Server version	5.7.15-1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tfilelist`
--

DROP TABLE IF EXISTS `tfilelist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tfilelist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `flist` text NOT NULL,
  `hash` char(35) NOT NULL,
  `fsize` char(50) NOT NULL DEFAULT '',
  `addt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `ket` varchar(65) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1111112 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tflist1`
--

DROP TABLE IF EXISTS `tflist1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tflist1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `flist` text NOT NULL,
  `hash` char(35) NOT NULL,
  `addt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1156774 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tflistdata`
--

DROP TABLE IF EXISTS `tflistdata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tflistdata` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `flist` text NOT NULL,
  `hash` char(35) NOT NULL,
  `fsize` char(50) NOT NULL DEFAULT '',
  `addt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `ket` varchar(65) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=146858 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-05-25 20:53:25

{% endhighlight %}

## Python Script 
Berikut script python untuk malakukan koneksi, select, dan operasi lainnya yang bisa disesuaikan dengan kebutuhan dengan mengubah sendiri scripnya : 

{% highlight python linenos %}
#!/usr/bin/python
import os
import hashlib
import MySQLdb
from time import gmtime, strftime

#--- -----------------------------
""" 
1.SCRIPT UNTUK AMBIL DATA DARI MYSQL DATABASE DAN BENTUK MENJADI FILE A
CONTOH FILE A : 
-----------------------------
3470a43e0fa7031d413a8efdeab0d923  /bin/ping4
73a662fa1882854dcec652e2b6cb55b7  /bin/ntfsls
-----------------------------
2.SCRIPT UNTUK INPUT DATA KE TABEL MYSQL 
CONTOH DIBAWAH : masukkandata() dan masukkandata1().
"""
#--- -----------------------------
def fwrite(fl,s):
	f = open(fl, "a+")
	f.write(s)
	f.close
#--- -------------------------------

db = MySQLdb.connect(host="localhost",    # your host, usually localhost
                     user="root",         # your username
                     passwd="pass",  	  # your password
                     db="dbfilelist")     # name of the data base

# you must create a Cursor object. It will let
#  you execute all the queries you need
cur = db.cursor()
# --- ----FOR QUERY DATA -----
def strquery(sql):
	cur.execute(sql)
	cur.fetchall()
	db.commit()
	print " Suksesss Process Data..."
# --- ----END FOR QUERY DATA -----
# --- -------SHOW DATA ----- OK
def showdata():
	#cur.execute("SELECT * FROM tflist1 WHERE flist like '%TESSS%'")
	cur.execute("SELECT * FROM tflist1")
	for row in cur.fetchall():
		print row[2] +"  " + row[1]
	print "--------END---DATA-----------"
# --- ------END SHOW DATA -----

# --- ----- INSERT DATA TEST---------- OK
def tesmasukkandata():
	cur.execute("INSERT INTO `tflist1` (id, `flist`, `hash`,`addt`) VALUES (1111111, 'tes-TESSSSS.conf', 'TESSSSa5221', '2017-03-28 17:39')")
	cur.fetchall()
	db.commit()
	print " Suksesss Tes Input Data..."
# --- ------- END INSERT DATA ---------

# --- ------TES Input Data From Another Process -----
def masukkandata(d1,d2):
	d3 = strftime("%Y-%m-%d %H:%M", gmtime())
	cur.execute("INSERT INTO `tflist1` (id, `flist`, `hash`,`addt`) VALUES (null, '"+d1+"','"+d2+"','"+d3+"')")
	cur.fetchall()
	db.commit()
	#print " Suksesss Input Data..."
# --- ------END Input Data ----------


# --- -------FUNCTION VERSION LIST-DIR--------
# --- -----Fungsi untuk meng-LIST File dalam Direktori-------
def processDirectory ( args, dirname, filenames ):
    for filename in filenames:
		dirfile = dirname+"/"+filename
		if os.path.isfile(dirfile):
			md = hashlib.md5(open(dirfile,'rb').read()).hexdigest()
			#print md+" : "+dirfile
			masukkandata(dirfile,md)

def listDir(direktori):
	base_dir = direktori
	os.path.walk( base_dir, processDirectory, None )

#s = raw_input("Pilih Direktori : ")
#listDir(s)
# --- ------END FUNCTION LIST DIR-------------

print "\t 1.Tampilkan Data\n\t 2.Tes Input Data\n\t 3.Input Data Manual TES\n\t 4.Delete All Data From tflist1"
s = raw_input("Pilih No ? ")
if s == "1":
	showdata()
elif s == "2":
	tesmasukkandata()
elif s == "3":
	s = raw_input("Input Direktori (exp:/home) : ")
	if s != " " or s != "":
		listDir(s)	
		print " Selesai, Suksesss Input Data..."
else:
	dt = 'tflist1'
	strquery("TRUNCATE TABLE "+ dt)
	showdata()
	

print " -------------------------------------------------"
print " Selesai.s...."

db.close()

{% endhighlight %}


______
post by : Admin
