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

var score = 0;
var index = 0;
var scoreToShow;

let secondsLeft = 60;

countDown.setAttribute("style", "font-size: 50px; color: red; text-align:right; margin:0px 60px 0 0; font-weight: 800;")
questionSlot.setAttribute("style","font-size: 40px; color: rgb(1, 1, 121); border-bottom: 5px solid rgb(1, 1, 121); font-weight: 700; padding-bottom: 20px; margin-bottom: 50px");
// buttonStyle.setAttribute("style","font-size: 30px");

var quiz = [
    {
        question: "Who created this game",
        answers: [
            {choice: "Andrew", correct: false},
            {choice: "Diego", correct: false},
            {choice: "Mustapha", correct: true},
            {choice: "Alisa", correct: false},
        ]

    },
    {
        question: "How tall is Mustapha",
        answers: [
            {choice: "6'3", correct: true},
            {choice: "5'9", correct: false},
            {choice: "4'11", correct: false},
            {choice: "6'7", correct: false},
        ]

    },
    {
        question: "Where am is Mustapha from",
        answers: [
            {choice: "Spain", correct: false},
            {choice: "Haiti", correct: false},
            {choice: "France", correct: false},
            {choice: "Africa", correct: true},
        ]

    },
    {
        question: "Who is Mustapha's instructor",
        answers: [
            {choice: "Chris", correct: false},
            {choice: "Meg", correct: false},
            {choice: "Diego", correct: true},
            {choice: "Bill", correct: false},
        ]

    },
    {
        question: "Whats is Mustapha's zodiac sign",
        answers: [
            {choice: "Cancer", correct: false},
            {choice: "Aries", correct: true},
            {choice: "Pisces", correct: false},
            {choice: "Leo", correct: false},
        ]

    }
]


document.body.style.backgroundImage = "url('startscreen.webp')";
gameTitle.textContent= "Web API Quiz";



function startGame(){
    index = 0;
    score = 0;
    secondsLeft = 60;
    startButton.classList.add('hide');
    questionSlot.classList.remove('hide');
    choicesClass.classList.remove("hide");
    gameTitle.classList.add("hide")
    yourFinalScore.classList.add("hide")
    countDown.classList.remove("hide")
    
    setTime()
    
    displayQuestion();
    
}



function displayQuestion(options){
    renderBack();
    currentQuestion = quiz[index];
    questionSlot.innerText = currentQuestion.question;
    
    currentQuestion.answers.forEach(option => {
        var button = document.createElement("button")
        button.innerText = option.choice;
        button.classList.add("choicesButton");
        choicesClass.appendChild(button);
        
        button.setAttribute("data-correct",option.correct)
        
        
        button.addEventListener("click",rightAnswer);
        
        
    })
}

function renderBack(){
    
    nextButton.classList.add("hide")
    while(choicesClass.firstChild){
        choicesClass.removeChild(choicesClass.firstChild)
    }
    
}
function rightAnswer(event){
    
    var yourSmart = event.target;
    
    var right = yourSmart.dataset.correct;
    console.log(right);
    if (right === "true") {
        yourSmart.classList.add("Thats-right");
        score++;
    }else if(secondsLeft){

        secondsLeft = secondsLeft - 10;
        yourSmart.classList.add("Thats-wrong");
        
    }
    Array.from(choicesClass.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("Thats-right");
        }
        button.disabled = true;
    });
    nextButton.classList.remove("hide");
    
    
}
function nextButtonFun(){
    console.log("hit");
    nextButton.classList.add('hide');
    if(index < quiz.length){
        loadNext();
    }
    
    
}
function loadNext(){
    index++;
    if(index < quiz.length){
        displayQuestion();
    }else{
        questionSlot.classList.add('hide');
        choicesClass.classList.add('hide');
        yourScore();
    }
}
function yourScore(){
    
    yourFinalScore.classList.remove("hide");
    countDown.classList.add("hide");
    document.getElementById("score").textContent = score;
    document.getElementById('submit').onclick = saveScore;

}

function saveScore(){
var highScores = JSON.parse(localStorage.getItem("scores")) || [];
var newScore = {
    initials: document.getElementById("ranking").value,
    score: score,
}
highScores.push(newScore);
localStorage.setItem("scores",JSON.stringify(highScores));

var lastScore = JSON.parse(localStorage.getItem("score"));
document.querySelector(".scorelast").textContent = newScore.initials + newScore.score;

console.log(lastScore);

}

function setTime() {
    // Sets interval in variable
    var gameTime = setInterval(function() {
        secondsLeft--;
        countDown.textContent = secondsLeft ;
        
        if(secondsLeft < 0|| secondsLeft == 0) {
            // Stops execution of action at set interval
            clearInterval(gameTime);
            questionSlot.classList.add('hide');
            choicesClass.classList.add('hide');
            nextButton.classList.add("hide");
            yourScore();
           
        }
        
    }, 1000);
}
function showScore(){
    questionSlot.classList.add('hide');
    choicesClass.classList.add('hide');
    nextButton.classList.add("hide");
    countDown.classList.add("hide");

  
}
var goBack = document.getElementById("goBack");
goBack.addEventListener("click",startGame);
startButton.addEventListener("click",startGame);
nextButton.addEventListener("click",nextButtonFun);
viewHighScore.addEventListener("click",showScore);

