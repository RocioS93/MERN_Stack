// --------1------------------------------------------------------
// console.log(hello);
// var hello = "world";

//Prediction:
var hello = "world";
console.log(hello); //logs undefined
example = "world";

// OUTPUT:
var hello = "world";
console.log(hello); //logs undefined
example = "world";

// -------2-------------------------------------------------------
// var needle = "haystack";
// test();
// function test() {
//   var needle = "magnet";
//   console.log(needle);
// }

//Prediction:
var needle = "haystack";
var needle = "magnet";
test();
function test() {
  console.log(needle); // magnet
}

// OUTPUT:
var needle = "haystack";
var needle = "magnet";
test();
function test() {
  console.log(needle); // magnet
}
// ------3--------------------------------------------------------
// var brendan = "super cool";
// function print() {
//   brendan = "only okay";
//   console.log(brendan);
// }
// console.log(brendan);

//Prediction:
var brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan);
}
console.log(brendan); //super cool

// OUTPUT:
var brendan = "super cool";
console.log(brendan); //super cool

// -----4---------------------------------------------------------
// var food = "chicken";
// console.log(food);
// eat();
// function eat() {
//   food = "half-chicken";
//   console.log(food);
//   var food = "gone";
// }

//Prediction:
var food = "chicken";
eat();
console.log(food); //chicken
function eat() {
  food = "half-chicken";
  console.log(food); //half-chicken
  var food = "gone";
}

// OUTPUT:
var food = "chicken";
console.log(food); // chicken
eat();
food = "half-chicken";
console.log(food); // half-chicken

// ----5----------------------------------------------------------
mean();
console.log(food);
var mean = function () {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
};
console.log(food);

//Prediction:
mean();
console.log(food);
var mean = funcion (){
    food = "chicken";
    console.log(food); //chicken
    var food = "fish";
    console.log(food); //fish
};
console.log(food);

// OUTPUT:
TypeError: mean is not a function

// ------6--------------------------------------------------------
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//   genre = "rock";
//   console.log(genre);
//   var genre = "r&b";
//   console.log(genre);
// }
// console.log(genre);

//Prediction:
console.log(genre); // not defined
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre); //rock 
  var genre = "r&b";
  console.log(genre); //r%b
}
console.log(genre); //disco

// OUTPUT:
console.log(genre); //undefined
console.log(genre); //rock 
console.log(genre); //r%b
console.log(genre); //disco

// -------7-------------------------------------------------------
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//   dojo = "seattle";
//   console.log(dojo);
//   var dojo = "burbank";
//   console.log(dojo);
// }
// console.log(dojo);

//Prediction:
dojo = "san jose";
console.log(dojo); //san jose
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo); //seattle
  var dojo = "burbank";
  console.log(dojo); //burbank
}
console.log(dojo); //san jose

// OUTPUT:
san jose
seattle
burbank
san jose

// ------8 - Bonus ES6: const--------------------------------------------------------
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}

//Prediction:
console.log(makeDojo("Chicago", 65)); //{chicago, students:65, hiring:true}
console.log(makeDojo("Berkeley", 0));// dojo = closed for now
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}

// OUTPUT:
{ name: 'Chicago', students: 65, hiring: true }
dojo = "closed for now";
     ^

     TypeError: Assignment to constant variable.