// function showAlert() {
//     // window.alert("The button was pressed");
//     var element = document.getElementById('circle');
//     // element.style.backgroundColor = 'blue'
//     element.style.opacity = 1

// }

// function onLoad() {
//     var element = document.getElementById('circle');
//     element.style.opacity = 0.5
//     var opacity = element.style.opacity
//     console.log("Opacity is", opacity)
//     element.addEventListener('click', showAlert);
// }

// document.addEventListener('DOMContentLoaded', onLoad);  


// Exercise # 05 
// function increaseOpacity() {
//         // window.alert("The button was pressed");
//         var element = document.getElementById('circle');
//         circleOpacity = parseFloat(element.style.opacity)
//         element.style.opacity = circleOpacity + 0.1
//         // element.style.opacity = 1
    
//     }
// function onLoad() {
//     var element = document.getElementById('circle');
//     element.style.opacity = 0.5
//     element.addEventListener('click', increaseOpacity);
// }

// document.addEventListener('DOMContentLoaded', onLoad);  

function decreaseOpacity() {
            // window.alert("The button was pressed");
            var element = document.getElementById('circle');
            circleOpacity = parseFloat(element.style.opacity)
            element.style.opacity = circleOpacity - 0.1
            // element.style.opacity = 1
        
        }
    
    function onLoad() {
        var element = document.getElementById('circle');
        element.style.opacity = 1
        element.addEventListener('click', decreaseOpacity);
    }
    
    document.addEventListener('DOMContentLoaded', onLoad);  