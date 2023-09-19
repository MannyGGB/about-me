"use strict";
let userName = prompt("Welcome to my page! What's your name, stranger?");
console.log("The user's name is " + userName);
alert("Nice to meet you, " + userName);
function quiz() {
  alert(
    "Let's see how much you know about me with a quiz! Please, answer Yes (Y) or No (N)"
  );

  let myCountry = prompt("Am I from the UK?");
  if (myCountry.toLowerCase() === "yes" || myCountry.toLowerCase() === "y") {
    console.log("My country is not the UK.");
    alert("Sorry, that's incorrect.");
  } else if (
    myCountry.toLowerCase() === "no" ||
    myCountry.toLowerCase() === "n"
  ) {
    console.log("My country is Spain.");
    alert("Correct!");
  }

  let myAge = prompt("Is my age 29?");
  if (myAge.toLowerCase() === "yes" || myAge.toLowerCase() === "y") {
    console.log("My age is 29.");
    alert("Correct!");
  } else if (myAge.toLowerCase() === "no" || myAge.toLowerCase() === "n") {
    console.log("My age is 29.");
    alert("Sorry, that's incorrect!");
  }

  let myJob = prompt("Was I a translator in the past?");
  if (myJob.toLowerCase() === "yes" || myJob.toLowerCase() === "y") {
    console.log("I was a teacher.");
    alert("Sorry, that's incorrect!");
  } else if (myJob.toLowerCase() === "no" || myJob.toLowerCase() === "n") {
    console.log("I was a teacher.");
    alert("Correct!");
  }

  let myGoal = prompt("Do I want to become a Software Developer?");
  if (myGoal.toLowerCase() === "yes" || myGoal.toLowerCase() === "y") {
    console.log("Of course I do.");
    alert("Correct!");
  } else if (myGoal.toLowerCase() === "no" || myGoal.toLowerCase() === "n") {
    console.log("Of course I do.");
    alert("Sorry, that's incorrect!");
  }

  let myEducation = prompt("Did I study English at uni?");
  if (
    myEducation.toLowerCase() === "yes" ||
    myEducation.toLowerCase() === "y"
  ) {
    console.log("I did!");
    alert("Correct!");
  } else if (
    myEducation.toLowerCase() === "no" ||
    myEducation.toLowerCase() === "n"
  ) {
    console.log("I did!");
    alert("Sorry, that's incorrect!");
  }
  alert("Thank you for doing the quiz, " + userName + "!");
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
