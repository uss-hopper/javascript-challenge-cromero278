 window.onload = function(){
 	changeColor();
 };

function changeColor() {
	let firstParagraph = document.getElementById("change-text");
	firstParagraph.style.color = "pink";
}

 function hilightColor() {
	 let graphTwo = document.getElementById("upper");
	 graphTwo.style.backgroundColor = "pink";
 }

 function hipster() {
	let string = document.getElementById("search").innerHTML;
	let newString = string.replace(/hipster/gi, "BYE");
	document.getElementById("search").innerHTML = newString;
 }