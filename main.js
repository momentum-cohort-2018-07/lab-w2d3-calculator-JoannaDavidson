var displayDiv = document.getElementById('calc-display');

// Using event bubbling to input into the display. 
// This adds innerText of each button to the calc display

document.addEventListener('click', function (event) {
    if ( event.target.classList.contains( 'calc-button' ) ) {
        displayDiv.innerText += event.target.innerText;;
    }
}, false)

// Using event bubbling to change font color of related operator buttons during mouse over/out.

document.addEventListener('mouseover', function (event) {
    if ( event.target.classList.contains( 'calc-operator' ) ) {
        event.target.style.color = "#ffffff";
    }
}, false);

document.addEventListener('mouseout', function (event) {
    if ( event.target.classList.contains( 'calc-operator' ) ) {
        event.target.style.color = "#000000";
    }
}, false);


// Using event bubbling to change background color of related function buttons during mouse over/out.

document.addEventListener('mouseover', function (event) {
    if ( event.target.classList.contains( 'calc-fn' ) ) {
        event.target.style.background = "linear-gradient(rgba(255, 255, 255, .5),rgba(255, 255, 255, .5))";
    }
}, false);

document.addEventListener('mouseout', function (event) {
    if ( event.target.classList.contains( 'calc-fn' ) ) {
        event.target.style.background = "";
    }
}, false);

// Declaring the Clear button
var clearButton = document.getElementById('calc-clear');

//Pressing the Clear button.

clearButton.addEventListener('click', clearClick);

function clearClick() {
  displayDiv.innerText = " ";
}

// Pressing the Equals button. Uses eval to read the string in display box as an expression to be evaluated.

var equalsButton = document.querySelector(".calc-button_equals");
equalsButton.addEventListener("click", displayEval);

function displayEval() {
    if (displayDiv.innerText === "") {
        displayDiv.innerText = "";
    } else {
        var displayString = displayDiv.innerText;
        var changedMultiplier = displayString.replace("x", "*");
        var total = eval(changedMultiplier);
        displayDiv.innerText = total;
    }
}
