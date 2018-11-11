
const notification = document.getElementById("notificationsID");
const close = document.getElementById("close-notificationsID");
const checkbox =  document.getElementById('disable');

function otherOperation(){
	notification.style.display = "flex";
}

close.onclick = function(){
	notification.style.display = "none";
}

checkbox.onclick = function() {
	if(checkbox.checked) localStorage.setItem('flag', "true");
	else localStorage.setItem('flag', "false");
}

if (localStorage.getItem('flag') === "true") checkbox.checked = true;
else {
	window.addEventListener("load", function () {
		setTimeout(otherOperation, 1000);
	}, false);
}

let slideIndex = 1;
function showSlide(n) {
	const slide = document.getElementsByClassName("slide");
	const cur = document.getElementsByClassName("circle");
	if (n > slide.length) slideIndex = 1; 
	if (n < 1) slideIndex = slide.length;
	for(let i = 0; i < slide.length; i++) {
		slide[i].style.display = "none";
	}
	for(let i = 0; i < cur.length; i++) {
		cur[i].style.background = "gray"; 
	}

	slide[slideIndex-1].style.display = "block";
	cur[slideIndex-1].style.background = "#009AA6";  
}

function plusDivs(n) {
	slideIndex = slideIndex + n;
	showSlide(slideIndex);
}

function currentSlide(n){
	showSlide(slideIndex = n);
}

showSlide(slideIndex = 1);

document.addEventListener('keydown', function (event){
	if(event.keyCode == 37) plusDivs(-1);
	if(event.keyCode == 39) plusDivs(1);
});
 