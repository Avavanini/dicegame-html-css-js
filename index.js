var randomNumber1 = Math.floor(Math.random()*6)+1;
if(randomNumber1==1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png")
}
else if(randomNumber1==2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png")
} 
else if(randomNumber1==3){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png")
} 
else if(randomNumber1==4){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png")
} 
else if(randomNumber1==5){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png")
} 
else if(randomNumber1==6){
    document.querySelector(".img1").setAttribute("src","./images/dice6.png")
} 


// shorter method
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imagePath = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", imagePath);



// declaring the winner
if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="PLAYER1 WINS🏆";
    document.querySelector("h1").style.fontSize="5.5rem";

}
else if(randomNumber1<randomNumber2){
        document.querySelector("h1").textContent="PLAYER2 WINS🏆";
        document.querySelector("h1").style.fontSize="5.5rem";

}
else{
        document.querySelector("h1").textContent="IT'S A DRAW";
        document.querySelector("h1").style.fontSize="5.5rem";

}
