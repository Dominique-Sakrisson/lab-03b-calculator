// import functions and grab DOM elements

import { myClickHandlerAdd, myClickHandlerSub, myClickHandlerMult, myClickHandlerDivide, someEventHandler} from "./handlers.js";

// initialize state
// set event listeners to update state and DOM for add functionality
const addButton = document.getElementById('add-button');
const subButton = document.getElementById('sub-button');
const multButton = document.getElementById('mult-button');
const divideButton = document.getElementById('divide-button');

//experimental calculator
const xAdd = document.getElementById('adder');
const xMin = document.getElementById('subber');
const xMult = document.getElementById('multer');
const xDiv = document.getElementById('divey');
const xRem = document.getElementById('remain');


addButton.addEventListener('click',myClickHandlerAdd );
subButton.addEventListener('click',myClickHandlerSub );
multButton.addEventListener('click',myClickHandlerMult );
divideButton.addEventListener('click',someEventHandler );

xAdd.addEventListener('click', someEventHandler);
xMin.addEventListener('click', someEventHandler);
xMult.addEventListener('click', someEventHandler);
xDiv.addEventListener('click', someEventHandler);
xRem.addEventListener('click', someEventHandler);
