import {getSum, getSub, getMult, getDivide, getRemain} from './utils.js';

// initialize state
// set event listeners to update state and DOM for add functionality
const addInput = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addDisplay = document.getElementById('add-display');
// set event listeners to update state and DOM for subtract functionality
const subInput = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subDisplay = document.getElementById('sub-display');
 // set event listeners to update state and DOM for multiply functionality
const multInput = document.getElementById('mult-input-1');
const multInput2 = document.getElementById('mult-input-2');
const multDisplay = document.getElementById('mult-display');
 // set event listeners to update state and DOM for divide functionality
const divideInput = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideDisplay = document.getElementById('divide-display');

//experimental calculator
const xNum = document.getElementById('numbah');
const xNum2 = document.getElementById('numbah2');
const xDisplay = document.getElementById('x-display');


export function myClickHandlerAdd() {
    const input = addInput.valueAsNumber;
    const input2 = addInput2.valueAsNumber;
    const result = getSum(input, input2);
    addDisplay.textContent = result;
}
export function myClickHandlerSub() {
    const input = subInput.valueAsNumber;
    const input2 = subInput2.valueAsNumber;
    const result = getSub(input,input2);
    subDisplay.textContent = result;
}
export function myClickHandlerMult() {
    const input = multInput.valueAsNumber;
    const input2 = multInput2.valueAsNumber;
    const result = getMult(input,input2);
    multDisplay.textContent = result;
}
export function myClickHandlerDivide() {
    const input = divideInput.valueAsNumber;
    const input2 =divideInput2.valueAsNumber;
    const result = getDivide(input,input2);
    divideDisplay.textContent = result.toFixed(3);
}

export function someEventHandler(event){
    var x = event.target;
    console.log(x);
    const xId = x.getAttribute('id');
    const num1 = xNum.valueAsNumber;
    const num2 = xNum2.valueAsNumber;
   //
    if(xId === 'adder'){
        const result = getSum(num1,num2);
        xDisplay.textContent = num1 + ' + ' + num2 + ' = ' + result;
    } else if(xId === 'subber'){
        const result = getSub(num1,num2);
        xDisplay.textContent = num1 + ' - ' + num2 + ' = ' + result;
    } else if (xId === 'multer'){
        const result = getMult(num1,num2);
        xDisplay.textContent = num1 + ' * ' + num2 + ' = ' + result;
    }else if(xId === 'divey'){
        const result = getDivide(num1,num2);
        xDisplay.textContent = num1 + ' / ' + num2 + ' = ' + result.toFixed(3);
    }else if(xId === 'remain'){
        const result = getRemain(num1,num2);
        xDisplay.textContent = num1 + ' % ' + num2 + ' = ' + result;
    }
}