const { questions } = require("./questions");

let readlineSync = require("readline-sync");

let name = readlineSync.question("What's you name? ");
console.log(
  `Welcome ${name} to Mark Two's Fandom quiz. let's see how much you know about Dragon Ball.`,
);

let score = 0;
let wrongAnswers = 0;

function play(question, answer) {
  let flag = true;

  while (flag) {
    let usersAns = readlineSync.question(question);
    if (usersAns.toLowerCase() == answer.toLowerCase()) {
      score += 5;
      console.log("Correct answer");
      console.log("Your current score :", score);
      flag = false;
    } else {
      wrongAnswers++;
      let ans = readlineSync.question("Try Again ? Y/N   ");
      if (ans.toLowerCase() != "y") {
        flag = false;
      }
    }
  }
}

for (let i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}

console.log("Total Wrong Answers : ", wrongAnswers);
console.log("Final Score is : ", score);
