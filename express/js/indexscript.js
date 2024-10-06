//effect 1 - hover over text
document.getElementById("colorPara").addEventListener("mouseover", function(){
    this.classList.add("hoverTxt");
});

document.getElementById("colorPara").addEventListener("mouseout", function(){
    this.classList.remove("hoverTxt");
});

//effect 2 - zoom in/out image
const zoomImages = document.querySelectorAll(".zoomImage");
zoomImages.forEach(function(img) {
    img.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.1)";
        this.style.transition = "transform 0.3s"; 
    });

    img.addEventListener("mouseout", function() {
        this.style.transform = "scale(1)";
    });
});

//effect 3 - change section background color
document.getElementById("tour").addEventListener("click", function() {
    this.classList.remove("w3-black");
    this.classList.add("w3-white");
});

//event condition - hide band section
const toggleButton = document.getElementById('toggleBtn');
const bandSection = document.getElementById('band');
const arrow = document.getElementById('arrow');
bandSection.style.display = 'block';

toggleButton.addEventListener('click', function() {
    if (bandSection.style.display === 'none') {
        bandSection.style.display = 'block'; 
        arrow.innerHTML = '^';
    } else {
        bandSection.style.display = 'none'; 
        arrow.innerHTML = '⌄';
    }
});

///////////////////////////////////////////////////////
// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
carousel();

function carousel() {
var i;
var x = document.getElementsByClassName("mySlides");
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
myIndex++;
if (myIndex > x.length) {myIndex = 1}    
x[myIndex-1].style.display = "block";  
setTimeout(carousel, 4000);    
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
var x = document.getElementById("navDemo");
if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
} else { 
    x.className = x.className.replace(" w3-show", "");
}
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}
