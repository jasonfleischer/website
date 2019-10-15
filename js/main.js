//Jason Fleischer
function homePage(){
	window.scrollTo(0, 0);
	document.getElementById("resumeM").className = "";
	document.getElementById("git").className = "";
	//document.getElementById("fbM").className = "";
	document.getElementById('personalInfo').style.display = 'block';
	document.getElementById('resume').style.display = '';
	document.getElementById('bioHeader').innerHTML = 'About myself:';		
	document.getElementById('bioContent').style.display = 'block';	
}
function resumePage(){	
	window.scrollTo(0, 0);
	document.getElementById("resumeM").className = "active";
	document.getElementById("git").className = "";
	//document.getElementById("fbM").className = "";
	document.getElementById('personalInfo').style.display = 'none';
	document.getElementById('resume').style.display = 'block';
}
function git(){
	//document.getElementById("resumeM").className = "";
	//document.getElementById("git").className = "active";
	//document.getElementById("fbM").className = "";
}
function openFaceBook(){
	document.getElementById("resumeM").className = "";
	document.getElementById("git").className = "";
	//document.getElementById("fbM").className = "active";
}
