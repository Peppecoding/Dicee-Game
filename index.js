// Generate a random number for Player 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
let randomDiceImage1 = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
let randomImageSource1 = "images/" + randomDiceImage1; // images/dice1.png - images/dice6.png

// Select the <img> element for Player 1 and update its "src"
document.querySelector(".img6").setAttribute("src", randomImageSource1);

// Generate a random number for Player 2 using the same method
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage2 = "dice" + randomNumber2 + ".png";
let randomImageSource2 = "images/" + randomDiceImage2;

// Select the <img> element for Player 2 and update its "src"
document.querySelector(".img2").setAttribute("src", randomImageSource2);


