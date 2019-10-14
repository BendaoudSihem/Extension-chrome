window.onload=function(){


chrome.tabs.getSelected(null,function(tab) {
/* pour recuperer l'url */
    //var url = tab.url;
/* pour recuperer le titre*/
    
   
    var titre = tab.title;
    document.write("<h2 style='color:#FF0000', align='center'; ><u>Le titre est :</u><br><h3>"+titre +"</h3></h2><br> <br> <br>");
  


  var copyBtn = document.getElementById('copyBtn');
  
  
  var content, MIME_TYPE, theBlob, a;

// What will actually be put into the file
content = titre;

// The file type
MIME_TYPE = "text/plain";
// Basically, the file itself
theBlob = new Blob([content], {type: MIME_TYPE});

// The anchor element
a = document.createElement("a");
// Set the name of the file that will be downloaded
a.download = "fichier.txt";
// Set the contents to be downloaded
a.href = window.URL.createObjectURL(theBlob);
// Anchor's text
a.textContent = "Importer";

// What's displayed as the URL of the anchor (when hovered, copied, etc.)
a.dataset.downloadurl = [MIME_TYPE, a.download, a.href].join(":");

// Add the anchor to the page

// Add the anchor to the page
document.body.appendChild(a);




});}


