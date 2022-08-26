
//Functions for hamburger click
//-----------------------------

function setup() {
    unfade(document.getElementById("hamburger"));
    document.getElementById("hamburger").style.display = "block";
    document.getElementById("close").style.display = "none";
    document.getElementById("nav-box").style.display = "none";
}

function hamburgerClick() {
    document.getElementById("hamburger").style.display = "none";
    document.getElementById("close").style.display = "block";
    unfade(document.getElementById("close"));
    document.getElementById("nav-box").style.display = "block";
    
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 35);
}

function closeClick() {
    unfade(document.getElementById("hamburger"));
    unfade(document.getElementById("nav-box"));
    document.getElementById("hamburger").style.display = "block";
    document.getElementById("close").style.display = "none";
    document.getElementById("nav-box").style.display = "none";
}
//--------------------------------

