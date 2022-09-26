var readlineSync = require("readline-sync");

var score = 0;

// Welcome function
function welcome() {
  var userName = readlineSync.question("What's your name? \n");

  console.log("Welcome " + userName + "\n");
  console.log("Ok lets check your GK about World Countries...\n");
}

// array of keyboards and their object
var questions = [{
  question: "Which country has very big land in the world? \na.Russia\nb.USA \nc.China\n",
  answer: "Russia"
}, {
  question: "Which country is second highest gdp in the world? \na.China \nb.Japan \nc.India\n ",
  answer: "China"
},
{
  question: "Who is the best friend of India? \na.Russia \nb.China \nc.Pakistan\n",
  answer: "Russia"
},
{
  question: "Who is the president of russia? \na.putin \nb.biden \nc.XiJingping\n",
  answer: " Putin"
},
{
  question: "Where is dalai lama right now in 2022? \na.India \nb.Tibet \nc.USA\n",
  answer: "India"
},
{
  question: "What is the name of the longest railway of the world which is nearly 9198Km? \na.Transiberian\nb.GreatIndianPenisuila \nc.Chineeserailway\n",
  answer: "Transiberian"
},
{
  question: "Which country name is Republic of China? \na.Taiwan\nb.China \nc.AksaiChin\n",
  answer: "Taiwan"
},
{
  question: "Which country has very large network of highspeed rail network? \na.Chinaia\nb.USA \nc.Japan\n",
  answer: "China"
},
{
  question: "996 work culture of which country in which people are suffering badly? \na.China\nb.USA\nc.USA\n",
  answer: "China"
},
{
  question: "Which country is not the member of QUAD group? \na.China\nb.USA \nc.India\n",
  answer: "China"
},
{
  question: "Which country is expert in terms of sprituality in which people comes from all over the world to live in peice or to become saint,monk? \na.India\nb.North Korea \nc.USA\n",
  answer: "India"
},
];

// play function processing
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");

  }

  console.log("current score: ", score);
  console.log("------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("Result! You SCORED: ", score);
  if (score > 8) {
    console.log("Impressive! You know world very well");

  } else if (score > 5 && score < 9) {
    console.log("Nice! you know quite something world");
  } else if (score > 2 && score < 6) {
    console.log("OK! you know little bit");
  } else {
    console.log("Don't worry try next time.")
  }
}

welcome();
game();
showScores();
