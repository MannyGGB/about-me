"use strict";
let userName = prompt("Welcome to my page! What's your name, stranger?");
while (!userName) {
  userName = prompt("Please, tell me your name.");
}
console.log("The user's name is " + userName);
alert("Nice to meet you, " + userName);
function quiz() {
  alert("Let's see how much you know about me with a quiz!");
  let userPoints = 0;
  let myCountry = prompt("Am I from the UK?").toLowerCase();
  while (
    myCountry !== "yes" &&
    myCountry !== "no" &&
    myCountry !== "y" &&
    myCountry !== "n"
  ) {
    myCountry = prompt("Please, answer yes or no.").toLowerCase();
  }
  if (myCountry === "yes" || myCountry === "y") {
    console.log("My country is not the UK.");
    alert("Sorry, that's incorrect.");
  } else if (myCountry === "no" || myCountry === "n") {
    console.log("My country is Spain.");
    alert("Correct!");
    userPoints++;
  }

  let myAge = prompt("Is my age 29?").toLowerCase();
  while (myAge !== "yes" && myAge !== "no" && myAge !== "y" && myAge !== "n") {
    myAge = prompt("Please, answer yes or no.").toLowerCase();
  }
  if (myAge === "yes" || myAge === "y") {
    console.log("My age is 29.");
    alert("Correct!");
    userPoints++;
  } else if (myAge === "no" || myAge === "n") {
    console.log("My age is 29.");
    alert("Sorry, that's incorrect!");
  }

  let myJob = prompt("Was I a translator in the past?").toLowerCase();
  while (myJob !== "yes" && myJob !== "no" && myJob !== "y" && myJob !== "n") {
    myJob = prompt("Please, answer yes or no.").toLowerCase();
  }
  if (myJob === "yes" || myJob === "y") {
    console.log("I was a teacher.");
    alert("Sorry, that's incorrect!");
  } else if (myJob === "no" || myJob === "n") {
    console.log("I was a teacher.");
    alert("Correct!");
    userPoints++;
  }

  let myGoal = prompt(
    "Do I want to become a Software Developer?"
  ).toLowerCase();
  while (
    myGoal !== "yes" &&
    myGoal !== "no" &&
    myGoal !== "y" &&
    myGoal !== "n"
  ) {
    myGoal = prompt("Please, answer yes or no.").toLowerCase();
  }
  if (myGoal === "yes" || myGoal === "y") {
    console.log("Of course I do.");
    alert("Correct!");
    userPoints++;
  } else if (myGoal === "no" || myGoal === "n") {
    console.log("Of course I do.");
    alert("Sorry, that's incorrect!");
  }

  let myEducation = prompt("Did I study English at uni?").toLowerCase();
  while (
    myEducation !== "yes" &&
    myEducation !== "no" &&
    myEducation !== "y" &&
    myEducation !== "n"
  ) {
    myEducation = prompt("Please, answer yes or no.").toLowerCase();
  }
  if (myEducation === "yes" || myEducation === "y") {
    console.log("I did!");
    alert("Correct!");
    userPoints++;
  } else if (myEducation === "no" || myEducation === "n") {
    console.log("I did!");
    alert("Sorry, that's incorrect!");
  }

  let numberGuess = prompt("What number am I thinking of?");
  for (let i = 1; i < 4; i++) {
    if (parseInt(numberGuess) <= 8) {
      numberGuess = prompt("Too low!");
    } else if (parseInt(numberGuess) >= 9 && numberGuess <= 11) {
      numberGuess = prompt("Getting closer...");
    } else if (parseInt(numberGuess) >= 13 && numberGuess <= 15) {
      numberGuess = prompt("Getting closer...");
    } else if (parseInt(numberGuess) == 12) {
      numberGuess = alert("Correct!");
      break;
      userPoints++;
    } else {
      numberGuess = prompt("Too high!");
    }
    if (i == 3) {
      i = alert("Sorry, the answer is 12.");
    }
  }
  let myCities = [
    "granada",
    "cordoba",
    "toledo",
    "barcelona",
    "santiago de compostela",
    "valencia",
    "salamanca",
    "palma de mallorca",
    "santander",
    "bilbao",
  ];
  let myCitiesAnswer = prompt(
    "Name one of my top 10 Spanish cities."
  ).toLowerCase();
  for (let i = 1; i < 6; i++) {
    for (let a = 0; a < myCities.length; a++) {
      if (myCitiesAnswer === myCities[a]) {
        alert("Well done! You can visit on your next holiday!");
        break;
        userPoints++;
      } else {
        myCitiesAnswer = prompt("Try again!");
      }
      if (i == 5) {
        i = alert("Sorry, the answers are " + myCities + ".");
      }
    }
  }
  alert(
    "Thank you for doing the quiz, " +
      userName +
      "! You got " +
      userPoints +
      " points."
  );
}
//switch (myCountry.toLowerCase()) {
//  case "yes":
//    console.log("My country is not the UK.");
//    alert("Sorry, that's incorrect.");
//  case "no":
//    console.log("My country is Spain.");
//    alert("Correct!");
//    break;
// }
//}
