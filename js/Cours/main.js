var a = 3;
let b = 5;
const c = "hello";
b = "hi";

const d = 1;
const e = 1.4;
const f = "hello";
const g = false;

let h;
console.log(h);

let i = null;
console.log(i);

// Arithmetic Operators :

console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(1 / 2);
console.log(1 % 2);
console.log(1 ** 2);

// Assignment Operator :

let j = "Reda";
let k = 2;
j = k;
console.log(k);

// Comparison Operators :

console.log(1 == 1);
console.log(1 == "1");
console.log(1 === 1);
console.log(1 != 1);
console.log(1 !== 1);
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(1 < 2);

// Falsy Values (They all return true) :

console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(false));

// Logical Operators (If && it stops at the first false, if || it stops at the first true) :

console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || false);

const l = 4;
const m = 0;
console.log(l && m);
console.log(l || m);

// Strings : Concatenation - Template Literals :

const x = "Hello";
const y = "Reda";
console.log(x + " my name is" + y);

z = x + y;
console.log(z);

console.log(`${x} my name is ${y}`);

// Arrays (decaling,accessing,push,pop,shift,unshift,length) :

const array = [1, 2, 3, 4];
const array2 = new Array(5, 6, 7, 8);
console.log(array);

console.log(array.length);

console.log(array[0]);
console.log(array[1]);

array.push(5);
console.log(array);

array.pop();
console.log(array2.pop());
console.log(array2);

array.shift();
console.log(array);

array.unshift(1);
console.log(array);

// Objects (declaring,properties,methods,accessing,adding,deleting) :

const car = {
  name: "Volkswagen Golf",
  color: "white",
  power: 150,
  description: function () {
    return `This car is a ${this.color} ${this.name}`;
  },
};

console.log(car.name);
console.log(car.color);
console.log(car.description());

car.weight = 1800;

car["name"] = "BMW M3";

console.log(car.description());
console.log(car);

delete car.power;

console.log(car);

// Functions (Normal Functions, Arrow Functions, Callback Functions) :

function addition(a, b) {
  console.log("Hi there");
  return a + b;
}

const t = addition(1, 2);
console.log(t);

const soustraction = (a, b) => {
  return a - b;
};
const w = soustraction(4, 2);
console.log(w);

const r = (x) => {
  console.log("Hello");
  x();
};

r(() => {
  console.log("Callback Functions");
});

const u = () => {
  console.log("Callback Functions");
};

// Reference VS Value :

/*

Primitive types :

a=2;
b=2;
a==b ==> true

Arrays, objects and functions :

const array3=[1,2,3,4]
const array4=[1,2,3,4]

array3==array4 ==> false because not the same refference in the RAM

*/

const array3 = [1, 2, 3, 4];
const array4 = [1, 2, 3, 4];

console.log(array3 == array4);

const array5 = array3;
console.log(array5 == array3);
array3.pop();

// Conditions :

// Loops :

const arr1 = [
  { name: "Sidali", age: 21 },
  { name: "Mohamed", age: 25 },
  { name: "Yasser", age: 19 },
];

for (let index = 0; index < array.length; index++) {
  console.log(arr1[index].name);
}

const person = {
  name: "Karim",
  age: 20,
};

for (const properties in person) {
  console.log(person[properties]);
}

while (v < 10 && v > 0) {
  console.log(v);
  v--;
}

let bool = true;

do {
  console.log(v);
  bool = false;
} while (bool == true);
