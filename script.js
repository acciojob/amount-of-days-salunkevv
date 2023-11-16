//your JS code here. If required.
function dayOfAYear(year) {
	let days=0;
	if(year%4==0 && year%100!=0 || year%400 ==0)
	{
		days=366;
	}
	else
	{
		days=365;
	}
	return days;
}
alert(dayOfAYear(2022));