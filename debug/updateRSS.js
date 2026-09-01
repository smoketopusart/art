//to do:
// link to our RSS feed
// read RSS feed, see where things should be appended
// onClick for the "post", we will start writing at the point mentioned

function loadRSS(){
    console.log("loading");
    var xhttp = new XMLHttpRequest();
    xhttp.onloadstart = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log("acceptable");

            console.log("xmldoc is " + xmlDoc);
            var xmlDoc = xhttp.responseXML; //important to use responseXML here
            var serializer = new XMLSerializer();
            //var xmlString = serializer.serializeToString(xmlDoc);
            document.getElementById("rssFeed").value += xmlDoc;        
        }else{
            console.log("Hitting errors" + xhttp.statusText);
            document.getElementById("rssFeed").innerHTML = "test";

        }
        xhttp.open("GET", "https://smoketopus.art/rss.xml", true);
        xhttp.send();

    }
}
// title is user defined
// category is user defined
// description is the MD the user created
// post time is based on the time when the button is clicked
// guid can be that post timestamp

// should start by filling the textbox with the RSS feed, and THEN read from that text box
// this way we can append and add multiple entries at a time