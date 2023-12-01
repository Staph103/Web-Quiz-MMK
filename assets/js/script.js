





//Variable declerations or HTML Class and IDs

var questionSlot = document.querySelector("#quiz-questions");
var choicesClass = document.querySelector(".Choices");
var buttonStyle = document.querySelector(".choicesButton");
var nextButton = document.getElementById("next");
var startButton = document.getElementById("start");
var backgroundImg = document.querySelector(".back-img");
var gameTitle = document.querySelector("#game-title");
var countDown = document.getElementById("Count-Down");
var yourFinalScore = document.querySelector(".yourscore");
var viewHighScore = document.querySelector(".viewhighscore");
var scoreLastLast = document.querySelector(".scorelast")
var score = 0;
var index = 0;
var scoreToShow;
var secondsLeft = 0;

//Sets the style for the question text in HTML
questionSlot.setAttribute("style", "font-size: 40px; color: rgb(1, 1, 121); border-bottom: 5px solid rgb(1, 1, 121); font-weight: 700; padding-bottom: 20px; margin-bottom: 50px");

//Questions and asnwers object array 
var quiz = [
    {
        question: "Who created this game",
        answers: [
            { choice: "Andrew", correct: false },
            { choice: "Diego", correct: false },
            { choice: "Mustapha", correct: true },
            { choice: "Alisa", correct: false },
        ]

    },
    {
        question: "How tall is Mustapha",
        answers: [
            { choice: "6'3", correct: true },
            { choice: "5'9", correct: false },
            { choice: "4'11", correct: false },
            { choice: "6'7", correct: false },
        ]

    },
    {
        question: "Where am is Mustapha from",
        answers: [
            { choice: "Spain", correct: false },
            { choice: "Haiti", correct: false },
            { choice: "France", correct: false },
            { choice: "Africa", correct: true },
        ]

    },
    {
        question: "Who is Mustapha's instructor",
        answers: [
            { choice: "Chris", correct: false },
            { choice: "Meg", correct: false },
            { choice: "Diego", correct: true },
            { choice: "Bill", correct: false },
        ]

    },
    {
        question: "Whats is Mustapha's zodiac sign",
        answers: [
            { choice: "Cancer", correct: false },
            { choice: "Aries", correct: true },
            { choice: "Pisces", correct: false },
            { choice: "Leo", correct: false },
        ]

    }
]

//sets the background for the body of the page and adds the game title text from javascript to the HTML
document.body.style.backgroundImage = "url('./Images/startscreen.webp')";
gameTitle.textContent = "Guess Who Quiz";


//starts the game with begining parameters and adds and removes content on screen
function startGame() {
    index = 0;
    score = 0;
    secondsLeft = 40;
    questionSlot.classList.remove('hide');
    choicesClass.classList.remove("hide");
    gameTitle.classList.add("hide");
    startButton.classList.add('hide');
    yourFinalScore.classList.add("hide");
    countDown.classList.remove("hide");
   

    setTime();

    displayQuestion();

}


//creates buttons for each "option" of answers available in my object array, calls a function to delete previous buttons displayed
function displayQuestion(options) {
    renderBack();
    currentQuestion = quiz[index];
    questionSlot.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(option => {
        var button = document.createElement("button")
        button.innerText = option.choice;
        button.classList.add("choicesButton");
        choicesClass.appendChild(button);

        button.setAttribute("data-correct", option.correct)


        button.addEventListener("click", rightAnswer);


    })
}
//hides next button and removes the children of the class chioce which are the previous buttons created
function renderBack() {

    nextButton.classList.add("hide")
    while (choicesClass.firstChild) {
        choicesClass.removeChild(choicesClass.firstChild)
    }

}
//Changes the color of the buttons if statement is true to show right and wrong answers 
function rightAnswer(event) {

    var yourSmart = event.target;

    var right = yourSmart.dataset.correct;
    console.log(right);
    if (right === "true") {
        yourSmart.classList.add("Thats-right");
        score++;
    } else if (secondsLeft) {

        secondsLeft = secondsLeft - 10;
        yourSmart.classList.add("Thats-wrong");

    }
    Array.from(choicesClass.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("Thats-right");
        }
        button.disabled = true;
    });
    nextButton.classList.remove("hide");


}
function nextButtonFun() {

    nextButton.classList.add('hide');
    if (index < quiz.length) {
        loadNext();
    }


}
//This displays the next question and answers in my object array and increases the index by one 
function loadNext() {
    index++;
    if (index < quiz.length) {
        displayQuestion();
    } else {
        hide();
        yourScore();
    }
}

function yourScore() {

    document.getElementById("score").textContent = score;
    document.getElementById('submit').onclick = saveScore;

}
//gets the score and initials from local storage as objects and turns them into strings and console logs the results
function saveScore() {
    var highScores = JSON.parse(localStorage.getItem("scores")) || [];
    var newScore = {
        initials: document.getElementById("ranking").value,
        score: score,
    }
    highScores.push(newScore);
    localStorage.setItem("scores", JSON.stringify(highScores));

    var lastScore = JSON.parse(localStorage.getItem("score"));
    document.querySelector(".scorelast").textContent = newScore.initials + " - " + newScore.score;
    console.log(lastScore);


}

function setTime() {
    // Sets interval in variable
    var gameTime = setInterval(function () {
        secondsLeft--;
        countDown.textContent = secondsLeft;

        if (secondsLeft < 0 || secondsLeft == 0) {
            // Stops execution of action at set interval
            clearInterval(gameTime);
            hide();
            yourScore();
            yourFinalScore.classList.remove("hide");
        }
        if (secondsLeft <= 10) {
            countDown.setAttribute("style", "font-size: 50px; color: red; text-align:right; margin:0px 60px 0 0; font-weight: 800;")


        } else {
            countDown.setAttribute("style", "font-size: 50px; color: white; text-align:right; margin:0px 60px 0 0; font-weight: 800;")

        }


    }, 1000);
}
function showScore() {
    hide();
    saveScore();


}
function hide() {
    questionSlot.classList.add('hide');
    choicesClass.classList.add('hide');
    nextButton.classList.add("hide");
    countDown.classList.add("hide");
    countDown.classList.add("hide");

}
//Listeners to start call functions when clicked
var goBack = document.getElementById("goBack");
goBack.addEventListener("click", startGame);
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", nextButtonFun);
viewHighScore.addEventListener("click", showScore);

