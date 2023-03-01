// Comments can make code readable

/* Comments can make code readable,
   easy to reuse and informative*/

// Exo1

/*

const a = "Comments can make code readable";
const b = true;
const c = undefined;
const d = null;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

console.log(a);

let e;
let f;
let g;
let h;

const first_name = "Mohamed Reda";
const last_name = "LEKAM";
const isOnline = true;
const country = "Algeria";
const age = 22;

const myAge = 25;
const yourAge = 30;

console.log("I am", myAge, "years old");
console.log("You are", yourAge, "years old");

*/

// Exo2

/*
4>3 : true
4>=3 : true
4<3 : false
4<=3 : false
4==4 : true
4!=4 : false
4!==4 : false
4=='4' : true
4!='4' : false
4==='4' : false
4!=='4' : true
(4>3) && (10<12) : true
(4>3) && (10>12) : false
(4>3) || (10<12) : true
(4>3) || (10<12) : true
!(4>3) : false
!(4<3) : true
!(false) : true
!((4>3) && (10<12)) : false
!((4>3) && (10>12)) : true
!(4==='4') : true
*/

/*

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 == "4");
console.log(4 != "4");
console.log(4 === "4");
console.log(4 !== "4");
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 < 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));

*/

// Exo3

/*
let base = prompt("Enter the base of the triangle :");
let height = prompt("Enter the height of the triangle :");

function area(b, h) {
  return 0.5 * b * h;
}

console.log("The area of the triangle is :", area(base, height));

let a1 = prompt("Enter the lenght of the first side of the triangle :");
let a2 = prompt("Enter the lenght of the second side of the triangle :");
let a3 = prompt("Enter the lenght of the first side of the triangle :");

function perimeter(a, b, c) {
  return a + b + c;
}

console.log("The perimeter of the triangle is :", perimeter(a1, a2, a3));

let length = prompt("Enter the length of the rectangle :");
let width = prompt("Enter the width of the rectangle :");

function area2(a, b) {
  return a * b;
}

function perimeter2(a, b, c) {
  return 2 * (a + b);
}

console.log("The area of the rectangle is :", area2(length, width));
console.log("The perimeter of the rectangle is :", perimeter2(length, width));

let radius = prompt("Enter the radius of the circle :");

function area3(r) {
  return 3.14 * r ** 2;
}

function circumference(r) {
  return 2 * 3.14 * r;
}

console.log("The area of the circle is :", area3(radius));
console.log("The circumference of the circle is :", circumference(radius));
*/

// Exo4

/*

let x = prompt("Enter your age :");

if (x >= 18 && x < 130) {
  console.log("You are old enough to drive");
} else if (0 <= x && x < 18) {
  console.log("You'll have to wait for", 18 - x, "years to be able to drive");
} else {
  console.log("Please enter a realistic age");
}

if (myAge > yourAge) {
  console.log("I am older than you");
} else if (myAge < yourAge) {
  console.log("You are older than me");
} else {
  console.log("You and I are the same age");
}

let y = parseFloat(prompt("Enter an integer :"));

if (Number.isInteger(y) == true) {
  if (y % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
} else {
  console.log("The number you just entered is not an integer");
}

//parseInt()//

let z = parseInt(prompt("Enter the student's score :"));
console.log(z);
if (90 <= z && z <= 100) {
  console.log("Your grade is A");
} else if (80 <= z && z <= 89) {
  console.log("Your grade is B");
} else if (70 <= z && z <= 79) {
  console.log("Your grade is C");
} else if (60 <= z && z <= 69) {
  console.log("Your grade is D");
} else if (50 <= z && z <= 59) {
  console.log("Your grade is E");
} else if (0 <= z && z <= 49) {
  console.log("Your grade is F");
} else {
  console.log("The score must be between 0 and 100");
}

let s = prompt("Enter the name of the month :");

if (s == "September" || s == "October" || s == "November") {
  console.log("The season is autumn");
} else if (s == "December" || s == "January" || s == "February") {
  console.log("The season is winter");
} else if (s == "March" || s == "April" || s == "May") {
  console.log("The season is spring");
} else if (s == "June" || s == "July" || s == "August") {
  console.log("The season is summer");
} else {
  console.log(
    "Incorrect month name. Maybe you should check wether the first letter is in uppercase or not"
  );
}

*/

// Exo5

/*

let array1 = [];

let array2 = [1, 2, 3, 4, 5, 6];

console.log(array1.length);
console.log(array2.length);

console.log("The first element is", array2[0]);

if (array2.length % 2 == 0) {
  console.log(
    "Since the array's length is even then we should show its two middle elements which are",
    array2[array2.length / 2 - 1],
    "and",
    array2[array2.length / 2]
  );
} else {
  console.log("The middle element is", array2[Math.trunc(array2.length / 2)]);
}

console.log("The last element is", array2[array2.length - 1]);

mixedDataTypes = [1, "Book", { name: "Ahmed", age: 39 }, true, "a", 2.3];

console.log("The length of mixedDataTypes is :", mixedDataTypes.length);

itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log(itCompanies);

console.log("The number of companies in the array is :", itCompanies.length);

console.log("The first element is", itCompanies[0]);

if (itCompanies.length % 2 == 0) {
  console.log(
    "Since the array's length is even then we should show its two middle elements which are",
    itCompanies[itCompanies.length / 2 - 1],
    "and",
    itCompanies[itCompanies.length / 2]
  );
} else {
  console.log(
    "The middle element is",
    itCompanies[Math.trunc(itCompanies.length / 2)]
  );
}

console.log("The last element is", itCompanies[itCompanies.length - 1]);

const array4 = [1, 4, 9, 16];

const map1 = array4.map((x) => x ** 2);

console.log(map1);

const result = array4.filter((number) => number % 2 == 0);

console.log(result);

const initialValue = 0;
const sumWithInitial = array4.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);

function compareFn(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

let array5 = [1, -2, 3, -9, 2];

console.log(array5.sort(compareFn));

let array6 = [1, -2, 3, -9, 2];

const found = array6.find((element) => element > 1);

console.log(found);

*/

// Exo6

/*

for (let i = 0; i < 11; i++) {
  console.log(i);
}

let i = 0;

while (i < 11) {
  console.log(i);
  i++;
}

let j = 0;

do {
  console.log(j);
  j++;
} while (j < 11);

for (let i = 0; i < 11; i++) {
  console.log(i * i);
}

for (let i = 0; i < 101; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

for (let i = 0; i < 101; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

sum = 0;

for (let i = 0; i < 101; i++) {
  sum = sum + i;
}

console.log(sum);

sum2 = 0;

for (let i = 0; i < 101; i++) {
  if (i % 2 == 0) {
    sum2 = sum2 + i;
  }
}

console.log(sum2);

sum3 = 0;

for (let i = 0; i < 101; i++) {
  if (i % 2 == 1) {
    sum3 = sum3 + i;
  }
}

console.log(sum3);

countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

lengths = [];

for (let i = 0; i < countries.length; i++) {
  lengths.push(countries[i].length);
}

console.log(lengths);

// short = [];

// for (let i = 0; i < countries.length; i++) {
//   short.push(countries[i].slice(0, 3).toUpperCase());
// }

// console.log(short);

// matrix = [countries[0], short[0], lengths[0]];

// for (let i = 0; i < countries.length; j++) {
//   matrix.push(countries[i], short[i], lengths[i]);
// }

// console.log(matrix);

const array9 = countries.map((item) => {
  return [item, item.substring(0, 2).toUpperCase(), item.length];
});

console.log(array9);

*/

// Exo7

/*

const dog = {};

console.log(dog);

dog.name = "Badeau";
dog.legs = "Idk";
dog.color = "Brown";
dog.age = 2;

console.log(dog);

console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);

dog.breed = "Bulldog";

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

/*const array10 = users.map((item) => {
  return [item, item.substring(0, 2).toUpperCase(), item.length];
});

console.log(array10);

let maxSkills = 0;
let mostSkillUser = users.Alex;
for (const user in users) {
  if (users[user].skills.length > maxSkills) {
    maxSkills = users[user].skills.length;
    mostSkillUser = users[user];
  }
}

console.log("The most skilled user is :", mostSkillUser);

*/

// Exo8

/*

function FullName(YourName) {
  return YourName;
}

let YourName = prompt("Enter your name :");

console.log("Your name is : ", FullName(YourName));

function FullName(firstname, lastname) {
  return firstname + " " + lastname;
}

let firstname = prompt("Enter your first name :");
let lastname = prompt("Enter your last name :");

console.log("Your name is : ", FullName(firstname, lastname));

function addNumbers(a,b) {
  return a+b
}

*/

// Initializing a gimli object

function isPositiveDominant(a) {
  pos = [];
  neg = [];
  for (i = 0; i < a.length; i++) {
    if (a[i] > 0 && pos.includes(a[i]) == false) {
      pos.push(a[i]);
    } else if (a[i] < 0 && neg.includes(a[i]) == false) {
      neg.push(a[i]);
    }
  }
  if (pos.length > neg.length) {
    return true;
  } else {
    return false;
  }
}

arr = [50, -41, 50, -100, 13, 4, -2];

console.log(isPositiveDominant(arr));
