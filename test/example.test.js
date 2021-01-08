// IMPORT MODULES under test here:
import { getSum, getSub, getMult, getDivide, getRemain } from '../utils.js';

const test = QUnit.test;

test('it should return 8 when passed 6 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 8;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSum(6,2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('it should return -6 when passed -4 and -2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -6;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSum(-4,-2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 10 when passed 90 and 80', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSub(90,80);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('it should return 1 when passed -15 and -16', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSub(-15,-16);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 30 when passed 5 and 6', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 30;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getMult(5,6);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('it should return -30 when passed -5 and 6', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -30;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getMult(-5,6);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('it should return 10 when passed 100 and 10', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getDivide(100,10);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('it should return -10 when passed -100 and 10', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getDivide(-100,10);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 10 when passed 90 and 80', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRemain(90,80);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 0 when passed 55 and 11', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRemain(55,11);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

