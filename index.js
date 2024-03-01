// function showAlert() {
//     var textBox = document.getElementById("text").value;

//     alert(textBox);
// }
function showDiv() {
    var textBox = document.getElementById("text").value;
    var textDiv = document.getElementById("textDiv")
    textDiv.firstChild.nodeValue = textBox;
    

}
function onLoad() {
    var button = document.getElementById("text")
    button.addEventListener('keyup', showDiv)
    // button.addEventListener('click', showDiv)
}

document.addEventListener("DOMContentLoaded", onLoad)