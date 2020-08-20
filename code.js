var textArea = document.getElementsByName("textarea")[0];


function color() {
    textArea.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
    textArea.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
}

textArea.addEventListener("keydown", color);
textArea.focus();