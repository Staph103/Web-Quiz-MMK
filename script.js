

var questionSlot = document.querySelector("#quiz-questions");
var choicesClass = document.querySelector(".Choices");
var buttonStyle = document.querySelector(".choicesButton");
var nextButton = document.getElementById("next");
var startButton = document.getElementById("start");
var backgroundImg = document.querySelector(".back-img");
var gameTitle = document.querySelector("#game-title");
var countDown = document.getElementById("Count-Down");
var yourFinalScore = document.querySelector(".yourscore");

var score = 0;
var index = 0;

let secondsLeft = 60

countDown.setAttribute("style", "font-size: 30px; color: white; text-align:right; margin:20px 0 0 0; font-weight: 700")
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
        question: "Who created this game",
        answers: [
            {choice: "Andrew", correct: false},
            {choice: "Diego", correct: false},
            {choice: "Mustapha", correct: true},
            {choice: "Alisa", correct: false},
        ]

    },
    {
        question: "Who created this game",
        answers: [
            {choice: "Andrew", correct: false},
            {choice: "Diego", correct: false},
            {choice: "Mustapha", correct: true},
            {choice: "Alisa", correct: false},
        ]

    }
]




// document.querySelector("#start").addEventListener("click", function (event){
//         displayQuestion();
//     })
// var answers = quiz.choices[index];
// index = 0;



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
function nextQuestion(){
    // renderBack();
    
    
}
function renderBack(){
    
    nextButton.classList.add("hide")
    while(choicesClass.firstChild){
        choicesClass.removeChild(choicesClass.firstChild)
    }
    
}
function rightAnswer(event){
    
    var yourSmart = event.target;
    console.log(yourSmart);
    var right = yourSmart.dataset.correct;
    console.log(right);
    if (right === "true") {
        yourSmart.classList.add("Thats-right");
        score++;
    }else{

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
    
    console.log(right);
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
}

function setTime() {
    // Sets interval in variable
    var gameTime = setInterval(function() {
        secondsLeft--;
        countDown.textContent = secondsLeft ;
        
        if(secondsLeft === 0) {
            // Stops execution of action at set interval
            questionSlot.classList.add('hide');
            choicesClass.classList.add('hide');
            yourScore();
            clearInterval(gameTime);
            // Calls function to create and append image
        }
        
    }, 1000);
}
startButton.addEventListener("click",startGame);
nextButton.addEventListener("click",nextButtonFun);






// function renderBack(){
    //     nextButton.style.display = 'none';
    //     while
    // }
    
    // startGame();
    
    




// var heading1Tag = document.querySelector("h1");

// let index = 0;

// var questions = [
//     {
//         title: "Whats your name",
//         choices: ["Mustapha", "Jake", "lisa","Justin"] ,
//         rightAnswer: "Mustapha"
//     },
//     {
//         title: "Whats your age",
//         choices: [10, 20, 50,16, 31, 64] ,
//         rightAnswer: 20,
//     },
//     {
//         title: "Whats your ",
//         choices: ["Mustapha", "Jake", "lisa","Justin"] ,
//         rightAnswer: "Mustapha"
//     },
// ];

// // //classic function
// // function myFn (a, b){
// //     return a + b
// // };
// // // Errow function
// // var myFn = (a, b) => a + b

// displayQuestion();

// document.querySelector("#next").addEventListener("click", function (event){
//     index++;

//     displayQuestion();
// })
    
// function displayQuestion(index){

//     var currentQuestion = questions[index]

//     document.querySelector("#title").innerHTML = currentQuestion.title

//     var choicesEl = document.querySelector("#choices");

   
//     if (index = 0) {
//         choicesEl.children
        
//     }

//     currentQuestion.choices.forEach(choice => {

//         var buttons = document.createElement("button")
//         buttons.innerHTML = choice
//         choicesEl.appendChild(buttons)

//     });
// }


    
    
    
    
    
    
    
    



// Stores user response in variable
// var tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "enter tag");

// if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
//   alert("please enter a valid tag");
// } else {
//   // Creates element based on tag entered by user
//   var tag = document.createElement(tagName);

//   // Adds text content to created tag
//   tag.textContent = "This was made via prompts. It's a " + tagName + ".";
  
//   // Appends tag as child of document body
//   document.body.appendChild(tag);
// }

// var nextTag = confirm("Would you like to add another tag?");

// if (nextTag === true) {
//   var secondTagName = prompt("Please enter another  HTML Tag (ex. h1, h2, p, div):", "enter tag here");
//   if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
//     alert("please enter a valid tag");
//   } else {
//     var secondTag = document.createElement(secondTagName);
//     secondTag.textContent = "This is our second tag via prompts, it's a " + secondTagName + ".";
//     document.body.appendChild(secondTag);
//   }
// }