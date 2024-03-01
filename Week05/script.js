function showAlert() {
    // window.alert("The button was pressed");
    var element = document.getElementById('circle');
    // element.style.backgroundColor = 'blue'
    element.style.opacity = 1

}

function onLoad() {
    var element = document.getElementById('circle');
    element.style.opacity = 0.5
    var opacity = element.style.opacity
    console.log("Opacity is", opacity)
    element.addEventListener('click', showAlert);
}

document.addEventListener('DOMContentLoaded', onLoad);  