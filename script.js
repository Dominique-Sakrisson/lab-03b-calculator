// import functions and grab DOM elements

// initialize state
// set event listeners to update state and DOM for add functionality
const addInput = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addDisplay = document.getElementById('add-display');
// set event listeners to update state and DOM for subtract functionality
const subInput = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-button');
const subDisplay = document.getElementById('sub-display');
 // set event listeners to update state and DOM for multiply functionality
const multInput = document.getElementById('mult-input-1');
const multInput2 = document.getElementById('mult-input-2');
const multButton = document.getElementById('mult-button');
const multDisplay = document.getElementById('mult-display');
 // set event listeners to update state and DOM for divide functionality
const divideInput = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideButton = document.getElementById('divide-button');
const divideDisplay = document.getElementById('divide-display');
 

console.log(addDisplay);
//Add a button 
//when the user clicks the button, change the style an text content of the welcome element
addButton.addEventListener('click', () => {
    //post-click logic goes here
    const num1 = addInput.value;
    const num2 = addInput2.value;
    const result = Number(num1) + Number(num2);
    addDisplay.textContent = num1 + ' + ' + num2+ ' = ' + result;
    
});
subButton.addEventListener('click', () => {
    //post-click logic goes here
    const num1 = subInput.value;
    const num2 = subInput2.value;
    const result = Number(num1) - Number(num2);
    subDisplay.textContent = num1 + ' - ' + num2+ ' = ' + result;
    
});
multButton.addEventListener('click', () => {
    //post-click logic goes here
    const num1 = multInput.value;
    const num2 = multInput2.value;
    const result = Number(num1) * Number(num2);
    multDisplay.textContent = num1 + ' * ' + num2+ ' = ' + result;
});
divideButton.addEventListener('click', () => {
    //post-click logic goes here
    const num1 = divideInput.value;
    const num2 = divideInput2.value;
    const result = Number(num1) / Number(num2);
    divideDisplay.textContent = num1 + ' / ' + num2+ ' = ' + (Math.round(result).toFixed(2));
    
});
