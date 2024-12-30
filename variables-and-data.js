/*
 * Variables, Data Types, and Typing
 */
let wordData;
wordData = "Word list";
console.log(wordData);

let subTotal = 100;
let tax = subTotal * 0.07;
let totalWithTax = tax + subTotal;
console.log(totalWithTax);

let obj = {
  key1: "Value 1",
  key2: 4,
  boolean: true,
  obj2: {
      obj2Key1: "value of inner object"
  },
};
console.log(obj.obj2.obj2Key1);

/*
* result is 25 - be careful of types and what you wish for
* */
let var1 = "2";
let var2 = 5;
let result = var1 + var2;
console.log(result);

let add = 1 + 2; // 3
console.log(add);
let sub = 2 - 1; // 1
console.log(sub);
let mult = 2 * 4; // 8
console.log(mult);
let division = 4 / 2; // 2
console.log(division);
let mod = 5 % 2; // 1
console.log(mod);

let string = "String 1" + " " + "String 2";
console.log(string);