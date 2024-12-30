/*
 * Conditionals, Functions, Scope, and Loops
 */

/*
// Equals
let equals = 1 === 1; // strictly true
let looseEquals = 1 == '1' // coercion
console.log(equals);
console.log(looseEquals);

// Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10;

// Greater than or Equals
let greaterThanEq = 5 >= 5;

// Less than or Equals
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;
*/

/*
// let storeA = 25.40;
// let storeB = 4.40;



function compareStorePrices(storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
        console.log("Store A has a lower price")
    } else if (storeA > storeB) {
        console.log("Store B has a lower price")
    } else {
        console.log("Their prices are equal.")
    }
}

compareStorePrices(10, 5);
compareStorePrices(7, 10);

function squareNum (number) {
    return number * number;
}

let squaredNumber = squareNum(11);
console.log(squaredNumber);

*/

/*
let x = 10;

function addNumbers (n,m,x) {
    console.log(x);
    let b;
    if (1===1) {
        b = 8;
    }
    console.log(b);
    return n + m;

}

addNumbers(1, 2, 10);
*/

/*
//              0  1  2  3  4
let ourArray = [1, 2, 3, 4, ['a', 'b', 'c']];
console.log(ourArray[4][0]);
// above is same as:
newArray = ourArray[4];
console.log(newArray[0]);

let ourArray2 = [1, 2, 3, 4, 5]

// may be worth considering assignment first before using length
//let arrLen = ourArray2.length;
for (let i=0; i<ourArray2.length; i++) {
    // console.log('i is equal to: ' + i);
    // console.log(`i is equal to: ${i}`);
    console.log(ourArray2[i]);
    for (let j = 0; j<10; j++) {
        console.log(`j is equal to: ${j}`);
    }
}
*/

let x = 0;
while (x < 10) {
    console.log('Ran');
    x++;
}