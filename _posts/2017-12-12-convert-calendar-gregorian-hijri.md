---
title: HTML+JS - Gregorian-Hijri Convert Calendar
description: HTML+JS - Gregorian-Hijri Convert Calendar
header: HTML+JS - Gregorian-Hijri Convert Calendar
categories: Programming
---

<script type="text/javascript" src="js/hijri-test.js"></script>

<a onclick="tes_cal_hj();">Test Click</a>
<div id="cl1" onclick="tes1()"><a>Tanggal Sekarang</a></div><br />

<input id="gy"  onclick="" value="1" />
<input id="gm"  onclick="" value="1" />
<input id="gd"  onclick="" value="1" />
<hr />
<input id="hy" value="1" />
<input id="hm" value="1" />
<input id="hd" value="1" />


<br />
<table>
<tr>
<td width="100px">Year : </td><td width="80%"><input type="range" min="1930" max="2100" step="1" value="2017" id="cay" oninput='sr()'/></td>
</tr>
<tr>
<td>Month : </td><td><input type="range" min="1" max="12" step="1" value="1" id="cam" oninput='cimg()'/></td>
</tr>
<tr>
<td>Day : </td><td><input type="range" min="1" max="31" step="1" value="2017" id="cad"  oninput='cimg()'/></td>
</tr>
</table>


