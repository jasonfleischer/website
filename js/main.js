function homePage(){
	window.scrollTo(0, 0);
	document.getElementById("resumeM").className = "";
	document.getElementById('personalInfo').style.display = 'block';
	document.getElementById('resume').style.display = 'none';		
}
function resumePage(){	
	window.scrollTo(0, 0);
	document.getElementById("resumeM").className = "active";
	document.getElementById('personalInfo').style.display = 'none';
	document.getElementById('resume').style.display = 'block';
}
