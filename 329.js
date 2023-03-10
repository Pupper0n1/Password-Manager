// Changes the trashcan image from closed trash can image to the open trash can image 
function hover(img) {
 img.src = "images/open-trash-can.png";
}


// Changes the trashcan image from open trash can image to the closed trashcan image
function hoverOut(img) {
    img.src = "images/closed-trash-can.png"
   }


// Button that copys to clipboard
// Used to copy the username/password in gallery.html
function copy() {
    var copyText = document.getElementById("copyText");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("COPIED");
}


