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

function reset(){
    crystal1 = Math.floor(Math.random()*13);
    crystal2 = Math.floor(Math.random()*13);
    crystal3 = Math.floor(Math.random()*13);
    crystal4 = Math.floor(Math.random()*13);
    goal = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    score = 0;
    $("#goalValue").text(goal)
}

function check(){
    if (score < goal){
        console.log("try again")
    }

    else if (score === goal){
        alert("YOU WON!");
        win++;
        $("#winLoss").text(win+ "-"+ lose);
        reset();
    }

    else if (score > goal){
        alert("You lose :/");
        lose++;
        $("#winLoss").text(win+ "-" +lose);
        reset();
    }
}

//Checks
console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);
console.log("goal: "+ goal);

$("#goalValue").text(goal)

$('body').on('click','#crystal1',function(){
    score += crystal1
    $("#scoreValue").text(score)
    console.log("score: " + score)
    check();
})

$('body').on('click','#crystal2',function(){
    score += crystal2
    $("#scoreValue").text(score)
    console.log("score: " + score)
    check();
})

$('body').on('click','#crystal3',function(){
    score += crystal3
    $("#scoreValue").text(score)
    console.log("score: " + score)
    check();
})

$('body').on('click','#crystal4',function(){
    score += crystal4
    $("#scoreValue").text(score)
    console.log("score: " + score)
    check();
})

})