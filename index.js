var randomNumber1  = Math.floor(Math.random() * 6) + 1;

var randomDiceImg = "dice" + randomNumber1 + ".png";

var randomImgSource = "images/" + randomDiceImg;

var image1 = document.querySelectorAll('img')[0];

image1.setAttribute('src', randomImgSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg2 = "dice" + randomNumber2 + ".png";
var randomImgSource2 = "images/" + randomDiceImg2;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src" , randomImgSource2);

if (randomNumber1 >  randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";

}
else {
    document.querySelector("h1").innerHTML = "Game Tied Roll Again..!!";

}   

