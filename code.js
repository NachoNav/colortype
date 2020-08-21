var textArea = document.getElementsByName("textarea")[0];
var icon = document.getElementsByClassName("github")[0];


function color() {
    textArea.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
    textArea.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    icon.setAttribute("style", "filter: invert(1) sepia() saturate(10000%) hue-rotate(" + Math.floor(Math.random()*180) + "deg)");
}

textArea.addEventListener("keydown", color);
textArea.focus();