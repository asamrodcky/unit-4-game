$(document).ready(function(){
// Variables for crystal values
var crystal1 = Math.floor(Math.random()*13);
var crystal2 = Math.floor(Math.random()*13);
var crystal3 = Math.floor(Math.random()*13);
var crystal4 = Math.floor(Math.random()*13);
var score = 0;
var win = 0;
var lose = 0;

// Variable for desired value
var goal = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

//Checks
console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);
console.log(goal);

if(score < goal){
$('body').on('click','#crystal1',function(){
    score += crystal1
    console.log("score: " + score)
})

$('body').on('click','#crystal2',function(){
    score += crystal2
    console.log("score: " + score)
})

$('body').on('click','#crystal3',function(){
    score += crystal3
    console.log("score: " + score)
})

$('body').on('click','#crystal4',function(){
    score += crystal4
    console.log("score: " + score)
})
}
else if (score ===goal){
    win++
    alert("YOU WON!")
}
else{
    alert("You lose :/")
    lose++
}

})