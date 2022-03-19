//object array holding questions answers
var allQuestions = [
     {
    q: "What color is the sky?",
    choices: ["yellow", "blue", "green", "purple"],
    correct: "blue",
     },
    {
    q: "What is the earth's population?",
    choices: ["6.6 billion", "6.9 billion", "7.7 billion", "8.2 billion"],
    correct: "7.7 billion",
    },
    {
    q: "What is the majority of the earth's atmosphere made of?",
    choices: ["argon", "carbon dioxide", "nitrogen", "oxygen"],
    correct: "nitrogen",
    },
]

var currentQuestionText = document.querySelector(".currentQuestionText")
var currentQuestion = document.querySelector(".current-question");
var answerOne = document.querySelector("#answerOne");
var answerTwo = document.querySelector("#answerTwo");
var answerThree = document.querySelector("#answerThree");
var answerFour = document.querySelector("#answerFour");
var buttonArray = [answerOne, answerTwo, answerThree, answerFour];
var currentQuestionIndex = 0;



function beginGame() {
//setting the h3 element to the first question
currentQuestionText.textContent = allQuestions[0].q;

// For each button in the button array...
for (var c=0; c < buttonArray.length; c++) {
    // Set the button content equal to that choice.
    buttonArray[c].textContent = allQuestions[0].choices[c];
}
}
var highScore = document.querySelector ("#highscore");
var correctMessage = document.querySelector (".correct"); 
var wrongMessage = document.querySelector (".wrong");

function nextQuestion(event) {
    console.log(event);

    var correctAnswer = allQuestions[currentQuestionIndex].correct;
    var userChoice = event.target.innerText;

    //if the user clicks the right answer, it will say "Correct", then add ten to the score and go to the next question
    if (userChoice === correctAnswer) {
        correctMessage.setAttribute("style", "display:block");
        wrongMessage.setAttribute("style", "display:none");
        highScore.innerHTML = parseInt(highScore.innerHTML) + 10;
        currentQuestionIndex = currentQuestionIndex + 1;
    }

    //if the user clicks on the wrong answer, it will say "wrong", subtract 5 seconds, and go to the next question;
    if (userChoice != correctAnswer) {
        wrongMessage.setAttribute("style", "display:block"),
        correctMessage.setAttribute("style", "display:none")
        //subtract time if user answers wrong
        secondsLeft = secondsLeft - 5;
        if(secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timeInterval);
            sendMessage();
            return;
        }
        currentQuestionIndex = currentQuestionIndex + 1;
    }
    currentQuestionText.textContent = allQuestions[currentQuestionIndex].q;
    
    for (var c=0; c < buttonArray.length; c++) {
        // cycle through the answers
        buttonArray[c].textContent = allQuestions[currentQuestionIndex].choices[c];
    }
    
    if (currentQuestionIndex === 3) {
        console.log ("Game Over!");
        var quizContent = document.querySelector(".current-question");
        quizContent.setAttribute("style", "display:none");
    }
    }

//A loop that adds an event listener to each answer button and calls the nextQuestion function;
for (var i = 0; i < buttonArray.length; i++) {
   buttonArray[i].addEventListener("click", nextQuestion);
}

//make quiz appear when clicking start
function showQuiz() {
var quizContent = document.querySelector (".current-question");
quizContent.setAttribute("style", "display:block")
};



//when you click the start button, the timer starts
var startButton = document.querySelector (".start-button");
startButton.addEventListener("click", beginGame);
startButton.addEventListener("click", setTime);
startButton.addEventListener("click", showQuiz);


//Timer
var timeEl = document.querySelector (".time");
var secondsLeft = 30;
var timeInterval;

function setTime() {
    timeInterval = setInterval (function () {
        secondsLeft --;
    timeEl.textContent = "Only " + secondsLeft + " seconds left!";

    if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timeInterval);
        sendMessage();
        return;
}
    }, 1000);
}

// Function to send Time's Up message 
function sendMessage() {
    timeEl.textContent = "Time's Up!";  
  }

// function endGame() {
//     if (currentQuestionIndex === 3) {
//         console.log ("Game Over");
//     }
