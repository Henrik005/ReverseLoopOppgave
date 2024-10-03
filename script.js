//Model
let app = document.getElementById('App')
let storedText = ''
let reversedText = ''






//View
updateView();
function updateView(){
app.innerHTML = /*HTML*/ `<div>${reversedText}</div> <input onchange="storedText=this.value, reverseString()">
`
}








//Controller
function reverseString(){
    //Not entirely my own code, big suprise there, gonna use it to experiment with for() and how it works
    for(let i = storedText.length -1; i >= 0; i--){reversedText += storedText[i]}
    updateView();
}






//for (let i = original.length - 1; i >= 0; i--) { reversed += original[i]; }

