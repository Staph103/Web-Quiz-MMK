

var questionSlot = document.querySelector("#quiz-questions");
var choicesClass = document.querySelector(".Choices");
var nextButton = document.querySelector("#next");

var score = 0;
var index = 0;




questionSlot.setAttribute("style","font-size: 40px; color: red; border-bottom: 5px solid red; font-weight: 700; padding-bottom: 20px; margin-bottom: 50px");
choicesClass.setAttribute("style","font-size: 45px");

var quiz = [
    {
        question: "Who created this game",
        choices: ["Andrew", "Diego", "Mustapha", "Alisa"],
        rightAnswer: "Mustapha",
    },
    {
        question: "What programing language allows you to implement complex features on web pages?",
        choices: ["HTML", "CSS", "JavaScript", "Python"],
        rightAnswer: "JavaScript",
    },
    {
        question: "Who created this game",
        choices: ["Andrew", "Diego", "Mustapha", "Alisa"],
        rightAnswer: "Mustapha",
    },
    {
        question: "Who created this game",
        choices: ["Andrew", "Diego", "Mustapha", "Alisa"],
        rightAnswer: "Mustapha",
    },
    {
        question: "Who created this game",
        choices: ["Andrew", "Diego", "Mustapha", "Alisa"],
        rightAnswer: "Mustapha",
    }

];




// document.querySelector("#start").addEventListener("click", function (event){
//         displayQuestion();
//     })
// var answers = quiz.choices[index];
// index = 0;



var backgroundImg = document.querySelector(".back-img");
document.body.style.backgroundImage = "url('startscreen.webp')";
var gameTitle = document.querySelector("#game-title");
gameTitle.textContent= "Web API Quiz";
var startButton = document.querySelector("#start");
startButton.addEventListener("click",startGame());

function startGame(){
    index = 0;
    score = 0;

    displayQuestion();

}
function displayQuestion(){
    var currentQuestion = quiz[index];
    var questionNum = index + 1;
    questionSlot.innerHTML = questionNum + ".)" + currentQuestion.question;
    
    currentQuestion.choices.forEach(choice => {
        var button = document.createElement("button")
        button.innerHTML = currentQuestion.choices[index];
        index++;
        // choicesClass.appendChild(button)
        button.classList.add("choicesButton");
        choicesClass.appendChild(button);
        
    })
}
startGame();








































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