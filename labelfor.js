/*
	Author/Copyright: javakat (javakatdesign@gmail.com)
	
	Labelfor.js
	Label-for fix for IE8. 
	In IE8, clicking a label with a for attribute that targets a particular input will never toggle that input.
	This is a bother because it means cool things like CSS3-only accordions can't exist on IE8.
*/

var labels = document.getElementsByTagName('label');
for(var x = 0; x < labels.length; x++){
	console.log(x);
	label.onclick = function () {
		toggle(this.getAttribute('for'));
	};
}

function toggle (IDfor) {
	var elem = document.getElementById(IDfor);
	elem.click();
	console.log(elem.className);
	if(elem.getAttribute("checked") == "true" || elem.getAttribute("value") == "on"){
		elem.className += " checked";
	}
	return false;
}