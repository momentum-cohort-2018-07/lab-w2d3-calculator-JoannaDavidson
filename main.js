var 
  var displayDiv = document.getElementByID('calc-display');
  if (displayDiv.innerText === '') {
    displayDiv.innerText = numberPress;
  } else {
  displayDiv.innerText += numberPress;