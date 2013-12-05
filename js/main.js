
function homePage(){
	document.getElementById("resumeM").className = "";
	document.getElementById("aboutM").className = "";
	document.getElementById("emailM").className = "";
	document.getElementById("fbM").className = "";
	document.getElementById('personalInfo').style.display = 'block';
	document.getElementById('resume').style.display = 'block';

	document.getElementById('bioContent').style.display = 'none';
		document.getElementById('bioHeader').innerHTML = 'Click here to learn more about myself';
}

function resumePage(){
	document.getElementById("resumeM").className = "active";
	document.getElementById("aboutM").className = "";
	document.getElementById("emailM").className = "";
	document.getElementById("fbM").className = "";
	document.getElementById('personalInfo').style.display = 'none';
	document.getElementById('resume').style.display = 'block';

}

function aboutPage(){
	document.getElementById("resumeM").className = "";
	document.getElementById("aboutM").className = "active";
	document.getElementById("emailM").className = "";
	document.getElementById("fbM").className = "";
	document.getElementById('personalInfo').style.display = 'block';
	document.getElementById('resume').style.display = 'none';

	document.getElementById('bioContent').style.display = 'block';
	document.getElementById('bioHeader').innerHTML = 'About myself:';
}

function email(){
	document.getElementById("resumeM").className = "";
	document.getElementById("aboutM").className = "";
	document.getElementById("emailM").className = "active";
	document.getElementById("fbM").className = "";
}

function openFaceBook(){
	document.getElementById("resumeM").className = "";
	document.getElementById("aboutM").className = "";
	document.getElementById("emailM").className = "";
	document.getElementById("fbM").className = "active";
}

function googleSearch(){
	if(document.getElementById('q').value.length>0)
		window.open("http://www.google.com/search?q="+document.getElementById('q').value);
}

function toggleBio(){
	if(document.getElementById('bioContent').style.display != 'none'){
		document.getElementById('bioContent').style.display = 'none';
		document.getElementById('bioHeader').innerHTML = 'Click here to learn more about myself';
	}else{
		document.getElementById('bioContent').style.display = 'block';
		document.getElementById('bioHeader').innerHTML = 'About myself:';	
	}
}



