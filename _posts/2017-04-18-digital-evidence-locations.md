---
title: Lokasi-Lokasi Bukti Digital
description: Lokasi-Lokasi Bukti Digital
header: Lokasi-Lokasi Bukti Digital
categories: DigitalForensik
---

Di Dalam buku <i>Digital Forensics Digital Evidence in Criminal Investigation</i> yang ditulis oleh Angus M. Marshall, beliau mengupas secara luas tentang digital forensik secara mendalam terutama tentang digital evidence in criminal investigation atau bukti digital dalam suatu investigasi kasus kriminal, dalam pengantarnya Angus M. Marshall menjelaskan bahwa buku ini dimaksudkan untuk membantu para peneliti dalam menilai atau mengkaji potensi sumber-sumber dari bukti digital. M. Marshall juga menyarankan investigator agar selalu mengupdate dan mengevaluasi berbagai teknologi yang sebagian besar selalu berubah dari teknologi yang tersedia saat ini, dan beliau juga memperkenalkan beberapa prinsip utama dalam pemeriksaan bukti digital.

Yang akan dibahas dari buku Angus M. Marshall pada sessi kali ini adalah sub-bagian ke-4 dari tulisannya yang ada di bagian ke-4, disana penulis buku ini menjelaskan tentang evidence locations atau lokasi-lokasi dari barang bukti, secara singkat dijelaskan bahwa dalam memeriksa perangkat apapun untuk proses recover ataupun untuk kepentingan menganalisis barang bukti yang tersedia, maka terdapat empat jenis utama dari file atau data yang biasanya akan dipertimbangkan untuk dilakukan pemeriksaan. Hal ini dapat diringkas sebagai berikut :

### Live data

Live data adalah data yang terdapat pada sebuah system yang dapat secara langsung diakses oleh pengguna system secara normal ataupun menggunakan perangkat lunak.

Secara umum live data memiliki nilai tinggi dalam hal pembuktian, hal ini karena data yang didapat akam secara langsung membuktikan hubungan antara pengguna sistem dengan apa yang sedang dilakukan saat terakhir dengan sistem tersebut.

Selain itu data yang terdapat pada live data dibuat dan dikelola oleh sistem operasi menggunakan nama aplikasi, membuat timestamps atas setiap kejadian dalam sistem berdasarkan waktu yang kredible.

Timestamps, adalah cap waktu, yang dimaksud cap waktu adalah sebuah fungsi pada sistem operasi ataupun sebuah aplikasi yang berfungsi mencatan setiap kejadian, dan biasanya dalam bentuk atau format gabungan antara date dan time, dimana kejadian yang masih aktif atau baru disimpan di memori dan file log, sedangkan kejadian yang lama akan disimpan dalam file log. Timestamp secara umum memiliki 3 (tiga) catatan waktu yaitu :

* Modified, yaitu cap waktu atau catatan waktu yang dibuat oleh sistem operasi atau aplikasi saat sebuah kejadian modifikasi dilakukan pada file yang terdapat pada sebuah sistem.

* Accessed, yaitu cap waktu atau catatan waktu yang dibuat oleh sistem operasi atau aplikasi saat sebuah kejadian aksses dilakukan pada file yang terdapat pada sebuah sistem.

* Created, yaitu cap waktu atau catatan waktu yang dibuat oleh sistem operasi atau aplikasi saat sebuah kejadian created file dilakukan pada sebuah sistem.

### Deleted data

Setelah mengikuti penjelasan mengenai live data, bukti digital yang mungkin dapat dipertimbangkan dan sangat berguna berikutnya dalah data yang dihapus. Data-data ini sebelumnya merupakan data yang aktif dan biasa digunakan oleh pengguna sistem dan bisa jadi merupakan data-data penting, namun dengan alasan-alasan tertentu pengguna sistem dapat melakukan delete pada data tersebut.

Beruntungnya, proses delete yang dilakukan oleh pengguna sistem pada data oleh sistem operasi hal itu diterjemahkan hanya sebagai proses memberi tanda pada data (bahwa data telah dihapus) meski secara fisik data tersebut masih terdapat pada perangkat penyimpanan yang sewaktu-waktu data ini dapat dikembalikan kembali. Secara historis hal ini dilakukan dikarenakan proses menghapus sebuah data memerlukan waktu, hal yang paling mudah adalah menandai data yang dipus tersebut dan jika ruang penyimpanan diperlukan maka akan dilakukan proses menimpa data lama yang teleh diberi tanda hapus pada perangkat penyimpanan.

### Swap space

Swap space dalam bahasa sederhana merupakan ruang tambahan pada sebuah sistem operasi, berefungsi sebagai resource tambahan untuk menopang kinerja sistem operasi. Bagian terpenting pada sebuah sistem komputer adalah adanya memori utama atau biasa disebut sebagai RAM, sistem operasi akam menggunakan RAM sebagai tempat utama meletakkan seluruh proses yang berjalan dari saat sistem operasi mulai dihidupkan.

Penggunaan swap space biasanya diatur secara otomatis oleh sistem operasi, dimana ketika ruang tambahan itu dibutuhkan maka sistem operasi akan membuatkan ruang virtual pada harddisck yang akan digunakan sebagai swap space.

### Slack space

Slack space dapat dikatakan sebagai ruang kosong yang terdapat pada akhir sebuah file ketika file dibuat, baik file yang load atau memesan tampat di RAM maupun file yang berada di harddisk.

Besarnya ruang kosong atau slack space umumnya bergantung pada setingan seberapa besar alokasi size per unit dalam sebuah format file sistem, setingan default atau bawaan biasanya adalah 512 B, dan bisa diubah sesuai dengan kebutuhan, denangan asumsi bahwa file alocation unit sebesar 512 B maka sistem operasi akam membaca sebuah file yang terisi meskipun hanya sebesar 1 byte atau dibawah 512 Byte maka secara default sistem operasi akan menganggap file tersebut berukuran 512 karena telah menggunakan 1 unit lokasi penyimpanan dimana 1 unit penyimpanan di alokasikan sebesar 512.

DAFTAR PUSTAKA

Marshall, A. M. (2008). Digital Forensics : Digital Evidence in Criminal Investigation. Inggris: A John Wiley & Sons, Ltd.


_____
Post by: admin, @:ITS - Surabaya.

