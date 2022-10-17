function Continue(){
	location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
function L_Choice(){
	document.getElementById('Right').style.display="none";
	document.getElementById('L_Result').style.display="block";
}
function R_Choice(){
	document.getElementById('Left').style.display="none";
	document.getElementById('R_Result').style.display="block";
}
function Retry(){
	document.getElementById('Left').style.display="inline";
	document.getElementById('Right').style.display="inline";
	document.getElementById('L_Result').style.display="none";
	document.getElementById('R_Result').style.display="none";
}