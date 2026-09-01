//to do:
// link to our RSS feed
// read RSS feed, see where things should be appended
// onClick for the "post", we will start writing at the point mentioned
var xmlDoc;

console.log("loading");
    fetch("/rss.xml")
            .then((response) => response.text())
            .then((xmlString) => {
                const parser = new DOMParser();
                xmlDoc = parser.
                    parseFromString(xmlString, "text/xml");
            
                //

                document.getElementById("rssFeed").innerHTML = xmlString;


                
            })

// title is user defined
// category is user defined
// description is the MD the user created
// post time is based on the time when the button is clicked
// guid can be that post timestamp
function PostNewEntry(){
    //var items = xmlDoc.getElementsByTagName("item");

    let newItem = xmlDoc.createElement("item");
    let newTitle = xmlDoc.createElement("title");
    newTitle.innerHTML = document.getElementById("title").value;
    let newCategory = xmlDoc.createElement("category");
    newCategory.innerHTML = document.getElementById("category").value;
    let newLink = xmlDoc.createElement("link");
    newLink.innerHTML = document.getElementById("link").value;
    let newImage = xmlDoc.createElement("image");
    newImage.innerHTML = document.getElementById("image").value;
    let newDescription = xmlDoc.createElement("description");
        newDescription.innerHTML = document.getElementById("description").value;
    if(newImage.innerHTML != ""){
        newDescription.innerHTML += 
    "<![CDATA[<img src=\"" + newImage.innerHTML + "\"/>]]>"
    }
    
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
        }).replace(/(?:(\d),)/, '$1') + ' +0000';
    pubDate.innerHTML = dateHeader;
    let guID = xmlDoc.createElement("guid");
    guID.innerHTML = dateHeader;


    newItem.appendChild(newTitle);
    newItem.appendChild(newCategory);
    newItem.appendChild(newLink);
    newItem.appendChild(newDescription);
    newItem.appendChild(pubDate);
    newItem.appendChild(guID);



    xmlDoc.getElementsByTagName("channel")[0].appendChild(newItem);
    //xmlDoc.getElementsByTagName("item")[xmlDoc.getElementsByTagName("item").length-1].appendChild(newItem);

    var xmlNewText = new XMLSerializer().serializeToString(xmlDoc);
    document.getElementById("rssFeed").innerHTML = xmlNewText;

}

// should start by filling the textbox with the RSS feed, and THEN read from that text box
// this way we can append and add multiple entries at a time