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
    //First thing you do in a For is you give a number, this can be done in many ways, in this instance, that number is aquired from the lenght of the storedText variable only that we have removed 1 from it-
    //-as seen with the "-1" as this makes the loop start at the last number and not the first.
    // You then set a condition for how long the loop will run,for an example, here it will run as long as "i" is greater or equal to 0. Then, it will subtract or add a number to "i" each time the function is run-
    //-here it is being subtracted as you can see by the "i--". When all this is said and done, this function rebuilds the inputted text in reverse, by adding the character based on the positon of [i]
    //to the reversedText variable each time the function runs.
    reversedText= ''
    for(let i = storedText.length -1; i >= 0; i--){
        reversedText += storedText[i]}
    updateView();
}






//for (let i = original.length - 1; i >= 0; i--) { reversed += original[i]; }

