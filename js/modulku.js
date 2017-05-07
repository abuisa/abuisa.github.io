
//--- FUNGSI-FUNGSI untuk linkcolection ---
//--- Fungsi dibawah merupakan fungsi untuk mendeteksi mobile phone ---
//--- Jika perangkat merupakan mobile phone maka secara otomatis ubah kolom div menjadi baris ---

	window.onload = function(){ 
	    //alert("TES PESAN-PESAN .........!");

		if( checkm() ) {
			//document.getElementById("jd").innerHTML = "<b>---Hello SmartPhone---</b>";
			//zoom();
			var d1 = document.getElementById('linkdiv1');
			var d2 = document.getElementById('linkdiv2');
			var d3 = document.getElementById('linkdiv3');
			d1.removeAttribute("class");
			d2.removeAttribute("class");
			d3.removeAttribute("class");			
		}
		else
		{			
			;

		}
	};

//--- END FUNGSI-FUNGSI untuk linkcolection ---
//--- =================================== ---
//--- FUNGSI-FUNGSI untuk Chek apakah perangkat merupakan Mobile ---

	function checkm(){
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	    	return true;
		}
	}

//--- END FUNGSI-FUNGSI untuk Chek apakah perangkat merupakan Mobile ---
//--- =================================== ---
//--- FUNGSI-FUNGSI untuk reff.html ---
	function ctrow(){
			//--- Ganti class --columnx-- dengan class --column--
			$(".column").addClass('columnb');
			//--- Hapus class --columnx-- yang terdapat pada semua --div--
			$("div").removeClass("column");
			//--- Ubah class --row-- menjadi --rowb--
			//--- Show Garis Pembatas ------------
			$(".row").addClass('rowb');
			$(".row").removeClass("row");
			//--- Hide Head of Column
			$("#ts").hide();

			//--- Show Sub Judul ------			
			$(".hd").addClass('hds');
			$(".hd").removeClass("hd");
	}
	function rowtc(){
			//--- Ganti class --columnx-- dengan class --column--
			$(".columnb").addClass('column');
			//--- Hapus class --columnx-- yang terdapat pada semua --div--
			$("div").removeClass("columnb");
			//--- Ubah class --row-- menjadi --rowb--
			//--- Show Garis Pembatas ------------
			$(".rowb").addClass('row');
			$(".rowb").removeClass("rowb");
			//--- Show Head of column ----
			$("#ts").show();

			//--- Hide sub judul ----
			$(".hds").addClass('hd');
			$(".hds").removeClass("hds");
	}

	$(document).ready(function(){
		//--- untuk hide click-link rows dan column ---
		if (checkm()){
			$("#rw").hide();}
		else{
			$("#cl").hide();}
		$("#rw").click(function(){
			$("#rw").hide();
			$("#cl").show();
		});	
		$("#cl").click(function(){
			$("#cl").hide();
			$("#rw").show();
		});	
	});
//--- END FUNGSI-FUNGSI untuk reff.html ---
//--- =================================== ---
//--- FUNGSI-FUNGSI untuk ie-url.html ---
	function openInNewTab() {
		var nor = document.getElementById("nomor").value;
		if (nor != "")
		{
			var sdurl = "http://www.sciencedirect.com.sci-hub.cc/science/article/pii/" + nor;
			var url = "http://ieeexplore.ieee.org.sci-hub.io/xpl/articleDetails.jsp?arnumber=" + nor;
			
			if(isNaN(nor) && nor.length > 7){
		    	//alert("Bukan Nomor dan > 7");
				var win = window.open(sdurl, '_blank');
				win.focus();
		    } else if (isNaN(nor) == false ) {
				var win = window.open(url, '_blank');
				win.focus();
				//alert(url); //untuk tes doang
		    	//alert("Nomor dan <= 7");
			} else{
		    	alert("Kode tidak dikenal ");
			}
		}else
		{
			alert("Paste deretan nomor pada bagian akhir URL !");
		}

	}
//--- END FUNGSI-FUNGSI untuk ie-url.html ---
//--- =================================== ---
//--- FUNGSI-FUNGSI untuk penelitian.md ---
	
	//--- fungsi ini hanya untuk tes ---
	function msg(a){
		alert(a);
	}

	//--- Funsi checkmobile ini sudah tidak digunakan lagi dalam web ini ---
	function checkmobile(a,b){
		//---Periksa jika perangkat Mobile Device maka tampilkan a dan hide b
		if( checkm() ) {
			document.getElementById(a).style.display = 'block';
			document.getElementById(b).style.display = 'none';
		}
		else
		{
			;
		}
	}

	function openpdf (fpdf){
		window.open(fpdf);
		window.title("Open-File")
	}

	function showx(a) {
		var dtag = ["bab1","i3e","reff","reff-tes"];
		for(var i = 0;i < dtag.length;i++){
			if (a == dtag[i]){
				document.getElementById(a).style.display = 'block';
				if (checkm()){ctrow()}else{rowtc();}
			}else{
				document.getElementById(dtag[i]).style.display = 'none';
			}
		}
	}
//--- END FUNGSI-FUNGSI untuk penelitian.md ---
//--- =================================== ---
//--- FUNGSI-FUNGSI untuk index.html ---
//--- Fungsi untuk tanggal masehi di halaman depan/index.html ---

	function harini(){
		var nhari = new Array("Ahad","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu");
		var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		//var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

		var d = new Date();
		var a = d.getFullYear(),b = d.getMonth(), c = d.getDay(), e = d.getDate();
		var f = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
		return( nhari[c]+' - '+e+'  '+mL[b]+' - '+a+'   -  '+f);
		//return alert(nhari[c]+' : '+e+', '+mL[b]+' : '+a);
	}
//--- END FUNGSI-FUNGSI untuk index.html ---
//--- =================================== ---

