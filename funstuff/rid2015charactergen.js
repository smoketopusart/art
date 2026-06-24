
var animal = new Array(
"dinosaur",
"wolf",
"bee",
"octopus",
"squid",
"hound",
"feline",
"shark",
"orca",
"dolphin",
"whale",
"bull",
"chicken",
"bird",
"sheep",
"mantis",
"lobster",
"crab",
"spider",
"ant",
"anteater",
"snake",
"lizard",
"alpaca",
"goat",
"raccoon",
"hippo",
"turtle",
"hedgehog",
"deer",
"moose",
"scorpion",
"duck",
"crocodile",
"koala",
"squirrel",
"gorilla",
"pangolin"
);

var altMode = new Array(
"atv",
"golf cart",
"car",
"Can-Am Spyder Roadster",
"plane",
"jet",
"helicopter",
"tank",
"sports car",
"train",
"small boat",
"submarine",
"large boat",
"F-16",
"bus",
"sail boat",
"minivan",
"truck",
"semi-truck",
"motorcycle",
"bicycle",
"shuttle",
"UFO",
"scooter",
"quadcopter"
);

var personality = new Array(
"adventurous",
"trying too hard to be good at everything",
"grumpy",
"twittery",
"lazy",
"normal",
"peppy",
"buff",
"cranky",
"snooty",
"smug",
"calm",
"excitable",
"rude",
"soft-spoken",
"cunning",
"strong-willed",
"shy",
"blunt",
"sweet",
"sarcastic"
);

function generateOC() {
var pairingPhrase = "";

var animalChosen = Math.floor(Math.random() * animal.length);
pairingPhrase += "Their root mode is based on an " + animal[animalChosen];

var altModeChosen = Math.floor(Math.random() * altMode.length);
pairingPhrase += ", their alt mode is a " + altMode[altModeChosen] + ", and their personality can be described as ";

// First personality trait
var index1 = Math.floor(Math.random() * personality.length);
pairingPhrase += personality[index1] + " and ";

// Second personality trait
var index2 = index1;
while (index2 == index1) {
index2 = Math.floor(Math.random() * personality.length);
}
pairingPhrase += personality[index2];

document.getElementById("pairingText").innerHTML = pairingPhrase;

}



