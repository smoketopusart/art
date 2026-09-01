//to do:
// link to our RSS feed
// read RSS feed, see where things should be appended
// onClick for the "post", we will start writing at the point mentioned
var xmlDoc;

console.log("loading");
    fetch("https://smoketopus.art/rss.xml")
            .then((response) => response.text())
            .then((xmlString) => {
                const parser = new DOMParser();
                xmlDoc = parser.
                    parseFromString(xmlString, "text/xml");
            
                //

                //document.getElementById("rssFeed").innerHTML = xmlString;


                
            })

function loadRSS(){
    
}
// title is user defined
// category is user defined
// description is the MD the user created
// post time is based on the time when the button is clicked
// guid can be that post timestamp
function PostNewEntry(){
    //var items = xmlDoc.getElementsByTagName("item");

    let newItem = xmlDoc.createElement("item");
    let newTitle = xmlDoc.createElement("title");
    newTitle.innerHTML = "testing new shit";
    let newCategory = xmlDoc.createElement("category");
    newCategory.innerHTML = "test";
    let newLink = xmlDoc.createElement("link");
    newLink.innerHTML = "https://smoketopus.art";
    let newImage = xmlDoc.createElement("image");
    newImage.innerHTML = "https://smoketopus.art/banner.png";
    let newDescription = xmlDoc.createElement("description");
    newDescription.innerHTML = "testing my setup to make sure it all works! \n";
    newDescription.innerHTML += 
    "<![CDATA[<img src=\"" + newImage + "\"/>]]>"
    let pubDate = xmlDoc.createElement("pubDate");
    const dateHeader = new Date().toLocaleString('en-GB', {
        timeZone: 'UTC',
        hour12: false,
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        }).replace(/(?:(\d),)/, '$1') + ' GMT';
    pubDate.innerHTML = dateHeader;
    let guID = xmlDoc.createElement("guid");
    guID.innerHTML = dateHeader;


    newItem.appendChild(newTitle);
    newItem.appendChild(newCategory);
    newItem.appendChild(newLink);
    newItem.appendChild(newDescription);
    newItem.appendChild(pubDate);
    newItem.appendChild(guID);



    xmlDoc.getElementsByTagName("item")[xmlDoc.getElementsByTagName("item").length-1].appendChild(newItem);

    var xmlNewText = new XMLSerializer().serializeToString(xmlDoc);
    document.getElementById("rssFeed").innerHTML = xmlNewText;

}

// should start by filling the textbox with the RSS feed, and THEN read from that text box
// this way we can append and add multiple entries at a time