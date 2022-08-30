// variables
var username = "John";
var x = 5;
var firstName = "John";
var isActive = true;
var fruit = null;
var person = {
    name: "John",
    age: 20,
    pets: []
};
var car1 = {
    brand: "ferrari",
    maxSpeed: 300
};
var car2 = {
    brand: "bmw",
    maxSpeed: 300
};
var car3 = {
    brand: "mercedes",
    maxSpeed: 300
};
var cars = [
    car1, car2, car3
];
// access and modify (operators)
var currentMax = 5;
var number = 6;
currentMax = number;
// number == 6
// currentMax == 6
// numbers
// add 10
number = number + 10;
// number == 16
// minus 20
number = number - 20;
// number == -4
// or
number += 10; // == number = number + 10
number -= 10; // == number = number - 10
// *, /, **..., modulo
var number2 = 12;
var result1 = number2 % 5;
// result1 == 2
var number3 = 73;
var result2 = number3 % 4;
// result2 == 1
// <, <=, >, >=, ===, !==
var result3 = result2 < result1;
// result3 == true
var isOpen = true;
isOpen = !isOpen;
// isOpen == false
// ?
// ! isOpen != isOpen
// string
// add string
var john = "John";
var johnny = john + "ny";
var johnnyTheFirst = "I. " + johnny;
// delete from string
// NO!! var resultx = johnny - "y"
// stackoverflow -> substring, splice...
function deleteFromString(str, char) {
    var res = "";
    for (var letter of str) {
        if (letter !== char) {
            res += letter;
        }
    }
    return res;
}
var resultOfFunc1 = deleteFromString(johnnyTheFirst, "h");
var starWars1 = { title: "Star Wars 1", genre: "sci-fi", lenghtInMin: 180 };
starWars1.title = "New hope";
starWars1["title"] = "Starwars I.";
// starWars1 == { title: "Starwars I.", genre: "sci-fi", lenghtInMin: 180 }
var lengthOfStarWars = starWars1.lenghtInMin; // starWars1["lenghtInMin"]
// array
var fruits = ["alma", "korte", "barack"];
var korte = fruits[1];
var person2 = {
    name: "Jack",
    age: 20,
    pets: [
        "bodri", "cirmi"
    ]
};
var cirmi = person2["pets"][1]; // person2.pets[1]
// conditionals
var userInput = 10; // not hardcoded
if (userInput < 18) {
    // code
}
if (userInput < 18) {
    // code
}
else {
}
if (userInput < 18) {
    // code
}
else if (true) {
    // code
}
else {
    // code
}
// loops
// x times (25)
for (var i = 1; i <= 25; i++) {
    var result = 5 + 6;
    console.log(result);
    console.log("debug");
}
// cars array in line 39
var count1 = 0;
for (var car of cars) {
    console.log("eppen hozzaszamolom a " + car.brand);
    count1 += 1;
}
console.log(count1);
var count2 = 0;
for (var i = 0; i < cars.length; i++) {
    console.log("eppen hozzaszamolom a " + cars[i].brand);
    count2 += 1;
}
console.log(count2);
