var displayDiv = document.getElementById('calc-display');

// var inputButton = document.querySelectorAll('calc-button');

// inputButton.addEventListener('click', buttonClick);

// function buttonClick(buttonPress) {
//     var displayDiv = document.getElementByID('calc-display');
//   if (displayDiv.innerText === '') {
//     displayDiv.innerText = buttonPress;
//   } else {
//   displayDiv.innerText += buttonPress;
//   }
// }

//   if (displayDiv.innerText === '') {
//     displayDiv.innerText = numberPress;
//   } else {
//   displayDiv.innerText += numberPress;

// var operatorButton = document.querySelectorAll('calc-operator');

// Declaring the Clear button
var clearButton = document.getElementById('calc-clear');

// Changing Clear button on mouseover.
clearButton.addEventListener('mouseover', clearMouseOver);
clearButton.addEventListener('mouseout', clearMouseOut)

function clearMouseOver() {
    clearButton.style.background = "linear-gradient(rgba(255, 255, 255, .5),rgba(255, 255, 255, .5))";
}

function clearMouseOut() {
    clearButton.style.background = "";
}


//Pressing the Clear button.

clearButton.addEventListener('click', clearClick);

function clearClick() {
  displayDiv.innerText = " ";
}

// Pressing the Equals button.

var equalsButton = document.querySelector(".calc-button_equals");
equalsButton.addEventListener("click", displayEval);

function displayEval() {
    if (displayDiv.innerText === "") {
        displayDiv.innerText = "";
    } else {
        var total = eval(displayDiv.innerText);
        displayDiv.innerText = total;
    }
}
