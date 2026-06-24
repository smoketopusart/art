// JavaScript Document



function Start(){
	for(var i = 0; i < arrayP.length; i++){
		if(arrayP[i].Time == minYear
			|| (arrayP[i].Time >= minYear && arrayP[i].Time <= maxYear)){
			CreateCard(arrayP[i]);
		}
	}
}

function CreateCard(arrayElement){
	var card = document.createElement("figure");
	card.className = "card";
	
	var a = document.createElement("a");
	a.href = arrayElement.Link;
	
	var img = document.createElement("img");
	img.src = arrayElement.Link;
	/*if(arrayElement.Alt != ""){
	}else{
	}*/
	img.alt = arrayElement.Description;
	img.loading = "lazy";
	
	var description = document.createElement("div");
	description.className = "container";
	description.innerHTML = arrayElement.Time + " - " + arrayElement.Description;
	
	
	a.appendChild(img);
	card.appendChild(a);
	card.appendChild(description);
	document.getElementById("artex").appendChild(card);
	
}