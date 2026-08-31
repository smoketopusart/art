
/*function Start(){
    jsonData = JSON.parse(data);

}*/

function LoadArt(){
    for (var i=0; i < data.length; i++){
        CreateCard(data[i]);
    }
}

function CreateCard(arrayElement){
	var card = document.createElement("figure");
	card.className = "card";
	
	var a = document.createElement("a");
	a.href = arrayElement.link;
	
	var img = document.createElement("img");
	img.src = arrayElement.link;
	/*if(arrayElement.Alt != ""){
	}else{
	}*/
	img.alt = arrayElement.description;
	img.loading = "lazy";
	
	var description = document.createElement("div");
	description.className = "container";
	description.innerHTML = arrayElement.description;
	
	
	a.appendChild(img);
	card.appendChild(a);
	card.appendChild(description);
	document.getElementById("artex").appendChild(card);
	
}