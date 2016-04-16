function myResult()
{
	var d1, d2, d1_ms, d2_ms, diff_ms, day, day_diff;
	day = 1000*60*60*24;
	d1 = new Date(2017, 0, 10);
	d2 = new Date();
	d1_ms = d1.getTime();
	d2_ms= d2.getTime();
	diff_ms = (d1_ms-d2_ms);
	day_diff = diff_ms/day;
	document.getElementById("one").value = diff_ms;
	document.getElementById("two").value = day_diff;
	document.getElementById("three").value = Math.round(day_diff);
}
function getDateInfo()
{
	var d1, d2, d1_ms, d2_ms, diff_ms, day, day_diff;
	d1 = new Date(1993, 0, 10);
	document.getElementById("getMonth").value = d1.getMonth();
	document.getElementById("getDate").value = d1.getDate();
	document.getElementById("getDay").value = d1.getDay();
	document.getElementById("getFullYear").value = d1.getFullYear();
	document.getElementById("getTime").value = d1.getTime();
}