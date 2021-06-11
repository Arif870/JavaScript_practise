// ###### Math functions  ######

console.log(Math.E);
console.log(Math.PI);

let n = 4.6786;

console.log(Math.abs(n));
console.log(Math.floor(n));
console.log(Math.ceil(n));
console.log(Math.round(n));
console.log(Math.min(400, 200, 600));
console.log(Math.max(400, 500, 800));
console.log(Math.pow(2, 3));
console.log(Math.pow(3, 5));
console.log(Math.sqrt(9));
console.log(Math.sqrt(64));
console.log(Math.round(Math.random() * 100 + 1));

// ###### Date functions  ######

let date = new Date();
console.log(date.getMonth());
console.log(date.toString());
console.log(date.toTimeString());
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.getFullYear());
console.log(date.getSeconds());

// ###### chapter three logic and conditions  ######

let a = 30;
let b = 30;

if (a > b) {
    console.log(true);
} else {
    console.log(false);
}

let x = 10;
if (x % 2 === 0) {
    console.log(x + " is even number");
} else {
    console.log(x + " is odd number");
}

0 - sunday;
1 - monday;
2 - Tuesday;

let date = new Date();

let today = date.getDay();

switch (today) {
    case 0:
        console.log("Today is Sunday");
        break;

    case 1:
        console.log("Today is Monday");
        break;

    case 2:
        console.log("Today is Tuesday");
        break;

    case 3:
        console.log("Today is Wednesday");
        break;

    case 4:
        console.log("Today is Thursday");
        break;

    case 5:
        console.log("Today is Friday");
        break;

    case 6:
        console.log("Today is Saturday");
        break;
}

let a = 40;
let b = 20;
let c = 50;
let d = 40;

if (a > b && c > d) {
    console.log(" A is grather then B And C is grather then D");
}

if (a > b || c > d) {
    console.log(" True ");
}

let a = 10;
let str = "";
if (a % 2 === 0) {
    str = "EVEN";
} else {
    str = "ODD";
}

console.log(str);

let n = 33;
let str = n % 2 === 0 ? "EVEN" : "ODD";
console.log(str);

// ternary operator conditions ? true : false

let name = "Arif";
let fullName = name || "Arif Uz Zaman";
console.log(fullName);

for (let i = 0; i <= 10; i++) {
    console.log("Value = " + i);
}

let i = 0;
while (i <= 10) {
    console.log(" value = " + i);
    i++;
}

let val = true;

while (val) {
    let rand = Math.floor(Math.random() * 10);

    if (rand === 8) {
        console.log("Winner");
        val = false;
    } else {
        console.log("Your NUmber is " + rand);
    }
}

for (;;) {
    let rand = Math.floor(Math.random() * 10 + 1);
    if (rand === 2) {
        console.log("Congrats!");
        break;
    } else {
        console.log("Your number is " + rand);
    }
}

// ####### Escape Notation

let str = "This is \nString";
console.log(str);
let str = "This is \tString";
console.log(str);

// javascript uses the lexicographical system to compare string

// Lexical Order: z, y, x, ...a, Z, Y, X, ..B, A

let a = "abc";
let b = "def";
console.log(b < a);

let x = "a";
let y = "Z";
console.log(x > y);

let a = "I am";
let b = "Arif";
let c = a.concat(" ", b);
console.log(c.substr(5, 3));
console.log(c.toUpperCase());
console.log(c.toLowerCase());
console.log(c.startsWith("Arif"));
console.log(c.endsWith("Arif"));
console.log(c.split(" "));

// ##### String length#######

let str = "Arif";
console.log(str.length);

let length = 0;

while (true) {
    if (str.charAt(length) == "") {
        break;
    } else {
        length++;
    }
}

console.log(length);

let arr = [2, 3, 5, 6, 10];

for (let i = 0; i <= arr.length; i++) {
    arr[i] = arr[i] + 2;
}
console.log(arr);

let arr = [3, 5, 56, 78, 890, 13];

for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 === 1) {
        console.log("ODD " + arr[i]);
    } else {
        console.log("EVEN " + arr[i]);
    }
}

let arr = [10, 20, 30, 40, 50];
arr.splice(4, 1);
console.log(arr);
arr.push(60);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(5);
console.log(arr);
arr.shift();
console.log(arr);
arr.splice(1, 0, 15);
console.log(arr);

let search = 67;
let isFound = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == search) {
        console.log("Match found index number " + i);
        isFound = true;
        break;
    }
}
if (!isFound) {
    console.log("Data not found");
}

function myFun(value = "zaman") {
    console.log(`${value}`);
}

myFun();

// fucntion expression and arrow function(ES6)

// Normal Function

function myName(name) {
    console.log(`Hello ${name}`);
}
myName("Arif");

// function expression

let myName = function(name) {
    console.log(`Hello ${name}`);
};
myName("Arif");

// Arrow function

let myName = (name) => {
    console.log(`Hello ${name}`);
};
myName("Arif");

// Array itteration using forEach

let arr = ["apple", "lichu", "jackFruits", "Banana"];
// let data = function(items, index, fullArr) {
//     console.log(fullArr);
// };
// arr.forEach(data);

let val = arr.map(function(items, j, k) {
    return items;
});

console.log(val);

// ##### Object Method######

let person = {
    name: "Arif",
    job: "Developer",
    age: 24,
    fullName: function() {
        return `My name is ${this.name}, I am JavaScript ${this.job}`;
    },
};

console.log(person.fullName());

let srt = "Hello Arif";
console.log(srt.length);
console.log(srt.split());

// ##### Math function####

console.log(Math.E);
console.log(Math.PI);
let n = 4.53;
console.log(Math.abs(n));
console.log(Math.floor(n));
console.log(Math.ceil(n));
console.log(Math.round(n));
console.log(Math.max(10, 30, 60));
console.log(Math.min(10, 30, 2));
console.log(Math.pow(2, 2));
console.log(Math.sqrt(9));
console.log(Math.round(Math.random() * 10));

// ##### Date function####

let date = new Date();
console.log(date);
console.log(date.getHours());
console.log(date.getMonth());

// #### local and global Scope####

var a = 10;
a = a + 7;
var a = "Arif";
console.log(a);

let b = 10;
b = b + 10;
console.log(b);