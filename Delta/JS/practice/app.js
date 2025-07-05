// -- create a number variable num with some value, now print "good" if the number is divisible by 10 and print "bad" if it is not.
// let num = 20;
// if(num % 10 == 0) {
//   console.log("good");
// } else {
//   console.log("bad");
// }

// -- take the user's name & age as input using prompts. then return back the following statement to the user as an alert(by substituting their name & age): name is age years old.
// let name = prompt("please enter your name");
// let age = prompt("please enter your age");
// alert(`${name} is ${age} years old.`);

// -- write a switch statement to print the months in a quarter.
// Months in Quarter 1 : January, February, March
// Months in Quarter 2 : April, May, June
// Months in Quarter 3 : July, August, September
// Months in Quarter 4 : October, November, December
// let quarter = 1;
// switch (quarter) {
//   case 1:
//     console.log("January, February, March");
//     break;
//   case 2:
//     console.log("April, May, June");
//     break;
//   case 3:
//     console.log("July, August, September");
//     break;
//   case 4:
//     console.log("October, November, December");
//     break;
//   default:
//     console.log("NOT A QUARTER!");
// }

// -- A string is a golden String if it starts with the character 'A' or 'a' and has a total length greater than 5. for a given string print if it is golden or not.
// let str = "apples";
// if ((str[0] == "a" || str[0] == "A") && str.length > 5) {
//   console.log("golden string");
// } else {
//   console.log("not a golden string");
// }

// -- write a program to find the largest of 3 numbers.
// let a = 5;
// let b = 18;
// let c = 13;
// if (a > b) {
//   if (a > c) {
//     console.log(a, "is largest");
//   } else {
//     console.log(c, "is largest");
//   }
// } else {
//   if (b > c) {
//     console.log(b, "is largest");
//   } else {
//     console.log(c, "is largest");
//   }
// }

// -- Write a program to check if 2 numbers have the same last digit.
// let num1 = 32;
// let num2 = 478632;
// if (num1 % 10 == num2 % 10) {
//   console.log(`numbers have the same last digit which is ${num1 % 10}.`);
// } else {
//   console.log("numbers don't have the same last digit");
// }

// -- write a JavaScript program to get the first n elements of an array. [n can be any positive number].
// let arr = [7, 9, 0, -2];
// let n = 3;
// console.log(`actual array is ${arr}.`);
// let ans = arr.slice(0, n);
// console.log(`first ${n} elements of array are ${ans}.`);
// let ans1 = arr.slice(arr.length - n);
// console.log(`last ${n} elements of array are ${ans1}.`);

// -- write a JavaScript program to test whether the character at the given (character) index is lower case.
// let string = "abAAdefgggh";
// let idx = 3;
// if (string[idx] == string[idx].toLowerCase()) {
//   console.log("character is lowercase");
// } else {
//   console.log("character is not lowercase");
// }

// -- write a JavaScript program to strip leading and trailing spaces from a string.
// let str = prompt("please enter a string");
// console.log(`original string = ${str}`);
// console.log(`string without spaces = ${str.trim()}`);

// -- write a JavaScript program to check if an element exists in an array or not.
// let arr = ["hello", 'a', 23, 64, 99, -6];
// let item = 654;
// if(arr.indexOf(item) != -1) {
//   console.log("element exists in array");
// } else {
//   console.log("element doesn't exist in array");
// }

// -- Write a JS program to delete all occurrences of element 'num' in a given array.
// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == num) {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr);

// -- write a JS program to find the no. of the digis in a number.
// let number = 234567;
// let count = 0;
// let copy = number;
// while (copy > 0) {
//   count++;
//   copy = Math.floor(copy / 10);
// }
// console.log(count);

// write a JS program to find the sum of digits in a number.
// let number = 29374;
// let sum = 0;
// let copy = number;
// while(copy > 0) {
//   digit = copy % 10;
//   sum += digit;
//   copy = Math.floor(copy / 10);
// }
// console.log(sum);

// -- print the factorial of a number n.
// let n = 5;
// let factorial = 1;
// for(let i = 1; i <= n; i++) {
//   factorial *= i;
// }
// console.log(`factorial of ${n} is ${factorial}`);

// -- find the largest number in an array with only positive numbers.
// let arr = [2, 5, 10, 4, 2, 7, 1, 9];
// let largest = 0;
// for(let i = 0; i <= arr.length; i++) {
//   if(largest < arr[i]) {
//     largest = arr[i];
//   }
// }
// console.log(largest);

// -- create a program that generates a random numbers representing a dice roll.(the number should be between 1 to 6).
// let dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

// -- create an object representing a car that stores the following properties for the car: name, model, color, print the car name.
// const car = {
//   name: "Maruti Suzuki",
//   model: "Maruti Suzuki Dzire",
//   color: "white",
// };
// console.log(car.name);

// -- create an object Person with their name, age and city. Edit their city's original value to change it to "new york". add a new property country and set it to the united states.
// const Person = {
//   name: "Khushi",
//   age: "20",
//   city: "Udaipur",
// };

// -- check for odd or even ---
// function oddOrEvenFactory(request) {
//   if (request == "odd") {
//     let odd = function (n) {
//       console.log(!(n % 2 == 0));
//     };
//     return odd;
//   } else if (request == "even") {
//     let even = function (n) {
//       console.log(n % 2 == 0);
//     };
//     return even;
//   } else {
//     console.log("Wrong request");
//   }
// }
// let request = "odd";

// -- write a javascript function that returns array elements larger than a number..
// let arr = [8, 89, 10, 1, 2, 3, 4, 5, 6, 7];
// let num = 5;
// // elements larger than a number num
// function getElements(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > num) {
//       console.log(arr[i]);
//     }
//   }
// }
// getElements(arr, num);

// -- Write a JavaScript funciton to extract unique characters from a string.
// let str = "abcdabcdefgggh";
// function getUnique(str) {
//   let ans = "";
//   for (let i = 0; i < str.length; i++) {
//     let currChar = str[i];
//     if (ans.indexOf(currChar) == -1) {
//     // if current character is not added, then add it in ans. otherwise it is a duplicate.
//     ans += currChar;
//     }
//   }
//   return ans;
// }
// getUnique(str);

// -- Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// let country = ["Australia", "Germany", "United States of America"];
// function longestName(country) {
//   let ansIdx = 0;
//   for (let i = 0; i < country.length; i++) {
//     let ansLen = country[ansIdx].length;
//     let currLen = country[i].length;
//     if (currLen > ansLen) {
//       ansIdx = i;
//     }
//   }
//   return country[ansIdx];
// }
// longestName(country);

// -- Write a JavaScript funciton to count the number of vowels in a string argument..
// let str = "apnacollege";
// function countVowels(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str.charAt(i) == "a" ||
//       str.charAt(i) == "e" ||
//       str.charAt(i) == "i" ||
//       str.charAt(i) == "o" ||
//       str.charAt(i) == "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// -- Write a JavaScript function to generate a random number within a range (start, end).
// let start = 100;
// let end = 200;
// function generateRandom(start, end) {
//   let diff = end - start;
//   return Math.floor(Math.random() * diff) + start;
// }

// -- this keyword
// const student = {
//   name: "mayank",
//   age: 21,
//   eng: 98,
//   math: 98,
//   phy: 98,
//   getAvg() {
//     let avg = (this.eng + this.math + this.phy) / 3;
//     console.log(avg);
//   },
// };

// -- try and catch..
// console.log("hello");
// console.log("hello");
// console.log("hello");
// try {
//   console.log(a);
// } catch {
//   console.log("variable a doesn't exist!!");
// }
// console.log("hello2");
// console.log("hello3");
// console.log("hello4");

// -- set Timeout funciton
// console.log("Hi there!!");
// setTimeout(() => {
//   console.log("Apna College");
// }, 4000);
// console.log("welcome to");

// -- this arrow funciton --
// const student = {
//   name: "aman",
//   marks: 98,
//   prop: this,
//   getName: function () {
//     console.log(this);
//     return this.name;
//   },
//   getMarks: () => {
//     console.log(this);
//     return this.marks;
//   },
//   getInfo1: function () {
//     setTimeout(() => {
//       console.log(this);
//     }, 2000);
//   },
//   getInfo2: function () {
//     setTimeout(function () {
//       console.log(this);
//     }, 2000);
//   },
// };

// const square = (n) => n * n;
// console.log(square(4));

// let id = setInterval(() => {
//   console.log("Hello world");
// }, 2000);

// setTimeout(() => {
//   clearInterval(id);
//   console.log("clear Interval ran")
// }, 10000);

// -- Write an arrow funciton named arrayAverage that accepts an array of numbers and returns the average of those numbers.
// const arrayAverage = (arr) => {
//   let total = 0;
//   for (let number of arr) {
//     total += number;
//   }
//   return total / arr.length;
// };

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arrayAverage(arr));

// const object = {
//   message: 'Hello, world!!',

//   logMessage() {
//     console.log(this.message);
//   }
// };

// setTimeout(object.logMessage, 1000);

// let length = 4;
// function callback() {
//   console.log(this.length);
// }

// const object = {
//   length: 5,
//   method(callback) {
//     callback();
//   },
// };

// object.method(callback, 1, 2);

// let arr = [1, 2, 3, 4, 5];

// arr.forEach((el) => {
//   console.log(el);
// });

// arr.forEach(function (el) {
//   console.log(el);
// });

// let print = function (el) {
//   console.log(el);
// };

// arr.forEach(print);

// -- For Each funciton --
// let arr = [
//   {
//     name: "Khushi",
//     marks: 200,
//   },
//   {
//     name: "Mayank",
//     marks: 99,
//   },
//   {
//     name: "mmmm",
//     marks: 96,
//   },
// ];

// let gpa = arr.map((el) => {
//   return el.marks / 10;
// });

// arr.forEach((student) => {
//   console.log(student.marks);
// })

// let num = [1, 2, 3, 4];

// let double = num.map((el) => {
//   return el * el;
// });

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 11];
// let ans = nums.filter((el) => {
//   return el % 2 == 0;
// });

// -- reduction function --
// let nums = [1, 2, 3, 4];
// let finalVal = nums.reduce((res, el) => res + el);
// console.log(finalVal);

// -- maximum in Array --
// let arr = [1, 4, 5, 76, 43, 9];
// let max = -1;
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

// let max = arr.reduce((max, el) => {
//   if(max < el) {
//     return el;
//   } else {
//     return max;
//   }
// });

// console.log(max);

// -- Check if all numbers in our array are multiples of 10 or not --
// let num = [10, 20, 30, 40, 50];
// let ans = num.every((el) => el % 10 == 0);
// console.log(ans);

// -- Create a function to find the min number in an array --
// function getMin(num) {
//   let min = num.reduce((min, el) => {
//     if (min < el) {
//       return min;
//     } else {
//       return el;
//     }
//   });
//   return min;
// }
// let num = [10, 20, 30, 40, 50];

// -- rest --
// function sum(...args) {
//   for (let i = 0; i < args.length; i++) {
//     console.log("you gave us: ", args[i]);
//   }
// }

// -- Destructuring objects --
// const student = {
//   name: "mayank",
//   age: 14,
//   class: 9,
//   subjects: ["hindi", "english", "math", "science"],
//   username: "mayankkkk",
//   password: "abcdede",
// };

// let { username: user, password: secret } = student;

// -- Square and sum the array elements using the arrow function and then find the average of the array.
// let nums = [1, 2, 3, 4, 5];
// const square = nums.map((num) => num * num);
// console.log(square);
// let sum = square.reduce((acc, cur) => acc + cur, 0);
// let avg = sum / nums.length;
// console.log(avg);

// -- Create a new array using the map function whose each element is equal to the original element plus 5.
// let numbers = [2, 4, 6, 8, -2, -4];
// console.log(numbers.map((number) => number + 5));

// -- Create a new array whose elements are in uppercase of words present in the original array.
// let strings = ["adam", "kabir", "bob", "donald"];
// console.log(strings.map((strings) => strings.toUpperCase()));

// -- Write a funciton called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.
// const doubleAndReturnArgs = (arr, ...args) => [
//   ...arr,
//   ...args.map((v) => v * 2),
// ];
// doubleAndReturnArgs([1, 2, 3], 4, 4);
// doubleAndReturnArgs([2], 10, 4);

// -- Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
// const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
// mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 });

// -- Create a new input and button element on the page using JavaScript only. set the text of button to "Click me".
// let button = document.createElement("button");
// let input = document.createElement("input");
// button.innerText = "Click me";

// document.querySelector("body").append(input);
// document.querySelector("body").append(button);

// // -- change placeholder value of input to "username" -- change the id of button to "btn"
// button.setAttribute("id", "btn");
// input.setAttribute("placeholder", "username");

// // -- Access the btn using the querySelector and button id. change the button background color to blue and text color to white.
// let btn = document.querySelector("#btn");
// btn.classList.add("btnStyle");

// // -- Create an h1 element on the page and set its text to "DOM Practic" underlined. Change its color to purple.
// let h1 = document.createElement("h1");
// h1.innerHTML = "<u>DOM Practice</u>";
// document.querySelector("body").append(h1);

// // -- Create a p tag on the page and set its text to "Apna College Delta practice", where delta is bold
// let p = document.createElement("p");
// p.innerHTML = "Apna College <b>Delta</b> Practice";
// document.querySelector("body").append(p);

// -- DOM Events ---------------------------------------
// let btn = document.querySelector("button");
// console.dir(btn);
// btn.onclick = function () {
//   console.log("button was clicked");
// };
// function sayHello() {
//     alert("Hello");
// }
// btn.onclick= sayHello;

// -- callback hell --
// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange()) {
//       nextColorChange();
//     }
//   }, delay);
// }

// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("yellow", 1000);
//     });
//   });
// });

// -- callback hell --

// function savetoDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDb(
//   "apna college",
//   () => {
//     console.log("your data was saved");
//     savetoDb(
//       "Hello world",
//       () => {
//         console.log("success2 : data is saved.");
//         savetoDb(
//           "khushi",
//           () => {
//             console.log("successful3: data is saved.");
//           },
//           () => {
//             console.log("failure3: week connection");
//           }
//         );
//       },
//       () => {
//         console.log("failure2: data was not saved.");
//       }
//     );
//   },
//   () => {
//     console.log("week connection. data was not saved.");
//   }
// );

// function savetoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("successs: data was saved.");
//     } else {
//       reject("failure: weak connection.");
//     }
//   });
// }

// savetoDb("apna college")
//   .then((result) => {
//     console.log("data1 saved.");
//     console.log(result);
//     return savetoDb("helloworld");
//   })
//   .then((result) => {
//     console.log("data2 saved");
//     console.log(result);
//     return savetoDb("mayank");
//   })
//   .then((result) => {
//     console.log("data3 saved.");
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log("promise was rejected.");
//     console.log(error);
//   });

// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       resolve("color changed");
//     }, delay);
//   });
// }

// changeColor("red", 1000)
//   .then(() => {
//     console.log("red color was completed");
//     return changeColor("orange", 1000);
//   })
//   .then(() => {
//     console.log("orange color was completed");
//     return changeColor("green", 1000);
//   })
//   .then(() => {
//     console.log("green color was completed");
//     return changeColor("blue", 1000);
//   })
//   .then(() => {
//     console.log("blue color was completed");
//   });

// -- async keyword --

// async function greet() {
//   throw "weak connection";
//   return "hello!";
// }

// greet()
//   .then((result) => {
//     console.log("promise was successful");
//     console.log("result was : ", result);
//   })
//   .catch((err) => {
//     console.log("promise was rejected with err: ", err);
//   });

// let demo = async () => {
//   return 5;
// };

// -- await keyword --
// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//       console.log(num);
//       resolve();
//     }, 1000);
//   });
// }

// async function demo() {
//   await getNum();
//   await getNum();
//   getNum();
// }

// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       console.log(`color changed to ${color}!`);
//       resolve("color changed!");
//     }, delay);
//   });
// }

// async function demo() {
//     await changeColor("red", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("green", 1000);
//     await changeColor("orange", 1000);
// }

// let jsonRes =
//   '{"fact":"Approximately 1/3 of cat owners think their pets are able to read their minds.","length":78}';

//   let validRes = JSON.parse(jsonRes);
//   console.log(validRes.fact);

// -- fetchin data from url --
// let url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.fact);
//   })
//   .catch((err) => {
//     console.log("ERROR - ", err);
//   });

// let url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log("data1 = ", data.fact);
//     return fetch(url);
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data2) => {
//     console.log("data2 = ", data2.fact);
//   })
//   .catch((err) => {
//     console.log("ERROR - ", err);
//   });

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//   let res = await fetch(url);
//   let data = await res.json();
//   return data.fact;
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//   let fact = await getFacts();
//   console.log(fact);
//   let p = document.querySelector("#result");
//   p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";
// async function getFacts() {
//   try {
//     let res = await axios.get(url);
//     return res.data.fact;
//   } catch (e) {
//     console.log("error - ", e);
//     return "No fact found.";
//   }
// }

// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async () => {
//   let link = await getImage();
//   // console.log(link);
//   let img = document.querySelector("#result");
//   img.setAttribute("src", link);
// });

// async function getImage() {
//   try {
//     let res = await axios.get(url2);
//     return res.data.message;
//   } catch (e) {
//     console.log("error - ", e);
//     return "No Image found.";
//   }
// }

// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//   try {
//     const config = { headers: { Accept: "application/json" } };
//     let res = await axios.get(url, config);
//     console.log(res.data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//   let country = document.querySelector("#inp1").value;
//   console.log(country);

//   let collegeArr = await getColleges(country);
//   show(collegeArr);
// });

// function show(collegeArr) {
//   let list = document.querySelector("#list");
//   list.innerText = "";
//   for (col of collegeArr) {
//     console.log(col.name);

//     let li = document.createElement("li");
//     li.innerText = col.name;
//     list.appendChild(li);
//   }
// }

// async function getColleges(country) {
//   try {
//     let result = await axios.get(url + country);
//     return result.data;
//   } catch (e) {
//     console.log("ERROR - ", e);
//     return [];
//   }
// }

// change background on clicking specific button
// let btn1 = document.querySelector(".changeColor1");
// btn1.style.backgroundColor = "pink";
// btn1.addEventListener("click", () => {
//   document.body.style.backgroundColor = "pink";
// });

// let btn2 = document.querySelector(".changeColor2");
// btn2.style.backgroundColor = "blue";
// btn2.addEventListener("click", () => {
//   document.body.style.backgroundColor = "blue";
// });

// let btn3 = document.querySelector(".changeColor3");
// btn3.style.backgroundColor = "red";
// btn3.addEventListener("click", () => {
//   document.body.style.backgroundColor = "red";
// });

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   viewData() {
//     console.log(`student name -- ${this.name}, email -- ${this.email}`);
//   }
// }

// class Admin extends User {
//   constructor(name, email) {
//     super(name, email);
//   }
//   editData() {
    
//   }
// }
