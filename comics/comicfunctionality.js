// JavaScript Document

var previousB;
var nextB;
var firstB;
var lastB;

var currentPage = 0;
var arrayP;

function Start(){
	previousB = document.getElementById("previous");
	nextB = document.getElementById("next");
	firstB = document.getElementById("first");
	lastB = document.getElementById("last");
	
	downloadCsv();
	
	if(window.location.hash){
				currentPage = window.location.hash;
				CheckPage();
				SetPage();
			}else{	
				SetButtonEnabled(previousB,false);
				SetButtonEnabled(firstB,false);
			}

}





function NextPage(){
	currentPage++;
	CheckPage();
	SetPage();
}

function PreviousPage(){
	currentPage--;
	CheckPage();
	SetPage();
}

function FirstPage(){
	currentPage = 0;
	CheckPage();
	SetPage();
}

function LastPage(){
	currentPage = arrayP.length-1;
	CheckPage();
	SetPage();
}

function SetButtonEnabled(buttonToChange,isEnabled){
	buttonToChange.disabled = !isEnabled;
}

function SetPage(){
	document.getElementById("webcomicImage").src = arrayP[currentPage].img;
	document.getElementById("webcomicFullLink").src = arrayP[currentPage].img;
	document.getElementById("pageNumber").innerHTML = arrayP[currentPage].Number;
	document.body.scrollTop = document.documentElement.scrollTop = 0;
	window.location.hash = currentPage;
}

function CheckPage(){
	//Check pages to make sure the buttons are on when they should be, and vice versa
	if(currentPage <= 0){
		currentPage = 0;
		SetButtonEnabled(previousB,false);
		SetButtonEnabled(firstB,false);
	}else if(previousB.disabled){
		SetButtonEnabled(previousB,true);
		SetButtonEnabled(firstB,true);
	}
	
	if(currentPage >= arrayP.length-1){
		currentPage = arrayP.length-1;
		SetButtonEnabled(nextB,false);
		SetButtonEnabled(lastB,false);
	}else if(nextB.disabled){
		SetButtonEnabled(nextB,true);
		SetButtonEnabled(lastB,true);
	}
}