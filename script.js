const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions ;
let currentQuestionIndex ;

startButton.addEventListener('click', startGame);
// starts  function startGame upon click
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame() {

    startButton.classList.add('hide') ;
    // adds a new class 'hide' to start button upon start game 
    //which is started by clicking the add event listner click 
    shuffledQuestions = questions.sort( function() {
          Math.random() - .5 
    });
    // The sort() method sorts the items of an array.
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
     resetState()
    // resets state of everything related to questions 
    // function on line 47
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
 questionElement.innerText = question.question;
 question.answers.forEach(answer => {
     const button = document.createElement('button')
     button.innerText = answer.text
     button.classList.add('btn')
     if (answer.correct) {
        button.dataset.correct = answer.correct
     }
     button.addEventListener('click', selectAnswer)
     answerButtonsElement.appendChild(button)
 })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){ // answerButtonsElement HTML id = 'answer-buttons'
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    } // while there is a firstChild it will get removed thus removing all unnecesarry unrelated questions
    
}
// new function for resetState() on line 27

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button  => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
  }

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct){
        
        element.classList.add('correct')
    } else {

  
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
       question: "what is Shari and Logan's birthday?",
       answers: [
           { text: 'Janurary 8', correct: true},
           {text: 'November 13', correct: false },
           {text: 'April 1', correct: false }
       ]
    },
    {
        question: 'what is 10 plus 2',
        answers: [
            { text: '12', correct: true},
            { text: '22', correct: false },
            { text: '14', correct: false }
        ]
     },
     {
        question: "What is Peyton's favorite color?",
        answers: [
            
            {text: 'Red', correct: false },
            {text: 'Yellow', correct: false },
            { text: 'Blue', correct: true}
        ]
     },
     {
        question: 'what grade is Taylor in?',
        answers: [
            {text: '6th', correct: false },
            { text: '9th', correct: true},
            { text: 'She already graduated', correct: false}
            
        ]
     },
     {
        question: "When did XXXtentacion pass",
        answers: [
            {text: '2017', correct: false },
            { text: '2018', correct: true},
            {text: '2009', correct: false },
            {text: '2020', correct: false }
        ]
     },
     {
        question: "how many national parks are in the U.S.A.",
        answers: [
            {text: '57', correct: false },
            { text: '419', correct: true},
            {text: '88', correct: false },
            {text: '666', correct: false }
        ]
     },
]