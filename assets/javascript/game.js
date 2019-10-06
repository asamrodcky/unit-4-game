$(document).ready(function(){
// Variables for crystal values
var crystal1 = Math.floor(Math.random()*13);
var crystal2 = Math.floor(Math.random()*13);
var crystal3 = Math.floor(Math.random()*13);
var crystal4 = Math.floor(Math.random()*13);
var score = 0;

// Variable for desired value
var goal = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

//Checks
console.log(crystal1)
console.log(crystal2)
console.log(crystal3)
console.log(crystal4)
console.log(goal)

$("#crystal1").click(function(){
    score += crystal1
})

$("#crystal2").click(function(){
    score += crystal2
})

$("#crystal3").click(function(){
    score += crystal3
})

$("#crystal4").click(function(){
    score += crystal4
})

console.log("score: " + score)

})