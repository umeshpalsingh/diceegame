if (performance.getEntriesByType("navigation")[0].type === "reload") {
    rollDice();
}

function rollDice() {
  
  // PICK RANDOM IMAGE 1
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  var randomImage1 = "images/dice" + randomNumber1 + ".png";

  var image1 = document.querySelector(".img1").setAttribute("src", randomImage1);

  //PICK RANDOM IMAGE 2

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImage2 = "images/dice" + randomNumber2 + ".png";

  var image2 = document.querySelector(".img2").setAttribute("src", randomImage2);


  // CHANGE TITLE ACCORDING TO WINNER


  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}





//
// if (window.performance.navigation.type === 1) {
//   rollDice();
// }
//
// function rollDice() {
//   var randomNumber1 = `images/dice${Math.floor(Math.random() * 6) + 1}.png`;
//   var randomNumber2 = `images/dice${Math.floor(Math.random() * 6) + 1}.png`;
//
//   document.querySelector(".img1").setAttribute("src", randomNumber1);
//   document.querySelector(".img2").setAttribute("src", randomNumber2);
//
//   changeTitle(randomNumber1, randomNumber2);
// }
//
// function changeTitle(num1, num2) {
//   if (num1 === num2) {
//     document.querySelector("h1").innerHTML = "Draw!";
//   } else if (num1 > num2) {
//     document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
//   } else {
//     document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
//   }
// }
