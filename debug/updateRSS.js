//to do:
// link to our RSS feed
// read RSS feed, see where things should be appended
// onClick for the "post", we will start writing at the point mentioned


var xmlDoc;

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (xhttp.readyState == 4 && xhttp.status == 200) {

    xmlDoc = xhttp.responseXML; //important to use responseXML here
    
}
xhttp.open("GET", "/rss.xml", true);
xhttp.send();

}


function OnLoad(){
    console.log("loading");

    var serializer = new XMLSerializer();
    var xmlString = serializer.serializeToString(xmlDoc);

            document.getElementById("rssFeed").innerHTML = "test";
            document.getElementById("rssFeed").value += xmlString;

}

// title is user defined
// category is user defined
// description is the MD the user created
// post time is based on the time when the button is clicked
// guid can be that post timestamp

// should start by filling the textbox with the RSS feed, and THEN read from that text box
// this way we can append and add multiple entries at a time