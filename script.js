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
    for(let i = storedText.length -1; i >= 0; i--) { reversedText += storedText[i];}
    updateView();
}








