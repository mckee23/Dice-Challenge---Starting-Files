/*var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource = "images/" + randomNumber2 + ".png";

//var image2 = document.querySelectorAll("img")[1];

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);*/

var randomNumber1, randomNumber2, result;

result = document.querySelector('h1');

randomNumber1 = getDiceNumber();
randomNumber2 = getDiceNumber();

document.querySelector(".img1").src = "images/dice" + randomNumber1 + '.png';
document.querySelector(".img2").src = "images/dice" + randomNumber2 + '.png';



if (randomNumber1 > randomNumber2) {
    result.innerHTML = '🚩Player 1 Wins!';
} else if (randomNumber1 < randomNumber2) {
    result.innerHTML = 'Player 2 Wins! 🚩';
} else {
    result.innerHTML = 'Draw!!';
}

function getDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
}
