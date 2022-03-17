


//object array holding questions answers
var allQuestions = [
     {
    q: "What color is the sky?",
    choices: ["yellow", "blue", "green", "purple"],
     },
    {
    q: "What is the earth's population?",
    choices: ["5 billion", "6 billion", "7 billion", "8 billion"],
    },
    {
    q: "What is the majority of the earth's atmosphere made of?",
    choices: ["argon", "carbon dioxide", "nitrogen", "oxygen"],
    },
]


var currentQuestion = document.querySelector(".current-question");
var answerOne = document.querySelector("#answerOne");
var answerTwo = document.querySelector("#answerTwo");
var answerThree = document.querySelector("#answerThree");
var answerFour = document.querySelector("#answerFour");
var buttonArray = [answerOne, answerTwo, answerThree, answerFour];

//setting the h3 element to the first question
currentQuestion.children[0].textContent = allQuestions[0].q;

// For each button in the button array...
for (var c=0; c < buttonArray.length; c++) {
    // Set the button content equal to that choice.
    buttonArray[c].textContent = allQuestions[0].choices[c];
}






//when the user clicks on an answer a question it will go to the next question
function nextQuestion() {
    for (var i = 0; i < allQuestions.length; i++){
        
        if (currentQuestion.children[0].textContent === allQuestions[i].q) { //if h3 already equals this question
            // Set the question
            currentQuestion.children[0].textContent = allQuestions[i+1].q; //then make h3 equals next question
            
            // Then set the answers for that question
            for (var c = 0; c < buttonArray.length; c++) {
                buttonArray[c].textContent = allQuestions[i+1].choices[c]; //...and also change the question answers
            }

            return;
        }
    }
}

//A loop that adds an event listener to each answer button and calls the nextQuestion function;
for (var i = 0; i < buttonArray.length; i++) {
   buttonArray[i].addEventListener("click", nextQuestion);
}
