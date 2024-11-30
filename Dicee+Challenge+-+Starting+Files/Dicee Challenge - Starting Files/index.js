/*var randomNumber1 = Math.random();
n = randomNumber1 * 6;
n = Math.floor(n);

var x = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

            
function randomImg1(x) {
        return(x[n]);
    }
    
document.querySelector(".img1").setAttribute("src", randomImg1(x));


var randomNumber2 = Math.random();
f = randomNumber2 * 6;
f = Math.floor(f);

var y = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

            
function randomImg2(y) {
        return(y[f]);
    }
    
    
document.querySelector(".img2").setAttribute("src", randomImg2(y));

if (n > f) {
    document.getElementsByTagName("h1")[0].textContent = "Player 1 Wins!";
}
if (n < f) {
    document.getElementsByTagName("h1")[0].textContent = "Player 2 Wins!";
}
if (n == f) {
    document.getElementsByTagName("h1")[0].textContent = "Draw!";
}
*/

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImg1 = "./images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomImg1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImg2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomImg2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
}

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
}

else (randomNumber1 == randomNumber2) {
    document.querySelector("h1").textContent = "Draw!";
}



