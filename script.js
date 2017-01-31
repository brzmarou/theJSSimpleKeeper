//var button = document.querySelector("button");
//document.querySelector("body");
//var isPurple = false;
//button.addEventListener("click", function(){
//
//	if(isPurple){
//	 	document.body.style.background = "white";
//	 	isPurple = false;
//	} else {
//		document.body.style.background = "purple";
//		isPurple = true;
//
//	}
//})

//button.addEventListener("click", function(){
//	document.body.classList.toggle("purple");
//})

var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1score = document.getElementById("p1score");
var p2score = document.getElementById("p2score");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");
var p1wynik=0;
var p2wynik=0;
var winningScore=5;
var gameOver = false;

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1wynik+=1;
		if(p1wynik === winningScore) {
			p1score.classList.add("winner");
			gameOver = true;		
		}
 		document.getElementById("p1score").innerHTML = p1wynik; 
 	} 
 });

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2wynik+=1;
		if(p2wynik === winningScore) {
			p2score.classList.add("winner");
			gameOver = true;		
		}
 		document.getElementById("p2score").innerHTML = p2wynik; 
 	} 
 });

resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
		p1wynik = 0;
	p2wynik = 0;
	gameOver = false;
	document.getElementById("p1score").innerHTML = p1wynik; 
	document.getElementById("p2score").innerHTML = p2wynik; 
	document.getElementById("max").innerHTML = winningScore; 
	p1score.classList.remove("winner");
	p2score.classList.remove("winner");
}

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
})