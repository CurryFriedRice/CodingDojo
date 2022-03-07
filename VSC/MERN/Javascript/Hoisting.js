//1.
console.log(hello);
var hello = "world";
/**
 * console.log(hello)
 * var hello = 'world';
 * undefined
 */

//2.
console.log("-------------")
var needle = "haystack";
test();
function test() {
  var needle = "magnet";
  console.log(needle);
}
// var needle = "haystack";
// function test() {
//   var needle = "magnet";
//   console.log(needle);
// }
// test();

/**
 * so we have a global variable needle
 * Function Test gets Hoisted
 * test gets called
 * Local Variable needle is set to magnet
 * then it logs local magnet
 */

//3
console.log("-------------")
var brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan);
}
console.log(brendan);

// var brendan = "super cool";
// function print() {       //Never called so brendan is never reset
//   brendan = "only okay";
//   console.log(brendan);
// }
// console.log(brendan);    //Should output super cool

/**
 * var brenden is declared to be 'super cool' globally
 * function print is hoisted to the top
 * print is never called....
 * console will output brenden
 *  this will output super cool
 */


//4
console.log("-------------")
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}


// function eat(){ -//Hoisted to the top
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// var food 
// food = 'chicken';
// console.log(food);
// eat();

/**
 * 
 */


//5
console.log("-------------")
// mean();
// console.log(food);
// var mean = function () {
//   food = "chicken";
//   console.log(food);
//   var food = "fish";
//   console.log(food);
// };
// console.log(food);

// var mean
// mean(); 
// mean = function() { //Hoisted
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// console.log(food);

/**
 * Since mean is a var it should be hoisted to the top
 * then we try to call mean; which is is not a function... yet...
 * should be an error
 */

//6
console.log("-------------")
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// function rewind() { //Hoisted
//     var genre; // Hoisted locally
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
// }
// var genre; //  Hoisted
// console.log(genre); //Undefined
// genre = "disco";
// rewind(); 
// console.log(genre); //write original global genre

//7
console.log("-------------")
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);


// var dojo                 //Created because of declaration later
// function learn() {       //Hoisted
//     var dojo;            //Hoisted
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// dojo = "san jose";       // It sets dojo to sanjose
// console.log(dojo);       //
// learn();
// console.log(dojo);


//8
console.log("-------------")
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// function makeDojo(name, students){       //Hoisted due to function
//     const dojo = {};                     //Const OBJECT
//     dojo.name = name;                    //create a object with a name key
//     dojo.students = students;            //creates a students key with value of students
//     if(dojo.students > 50){              //
//         dojo.hiring = true;              //Creates a hiring key
//     }
//     else if(dojo.students <= 0){         //error... Dojo cannot be redefined from object due to const
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));

