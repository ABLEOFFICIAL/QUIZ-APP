const questions = [
    {
      question: "Which is correct among these?",
      answers: ["<h1/>", "</h1>", "<h1><h1/>", "</h1><h1>"],
      correctAnswer: "</h1>",
    },
    {
      question: "Which programming language is primarily used for web development?",
      answers: ["Python", "C++", "JavaScript", "Java"],
      correctAnswer: "JavaScript",
    },
    {
      question: "What does HTML stand for?",
      answers: [
        "HyperText Markup Language",
        "HighText Machine Language",
        "Hyperlink and Text Markup Language",
        "Home Tool Markup Language",
      ],
      correctAnswer: "HyperText Markup Language",
    },
  ];
  
var quizContainer = document.getElementById("quiz-container");
var quizButton = document.getElementById("quiz-btn");
var submitButton = document.getElementById("submit-btn");

function displayQuiz(questions){
    questions.forEach((qst, index) => {
        var currentQuestion = document.createElement('div')// create a question container
        currentQuestion.classList.add('div-style');//add a class to the container

        var questionText = document.createElement('h2');
        questionText.classList.add('questions')
        questionText.innerHTML = `${index + 1}. ${qst.question}`;
        currentQuestion.appendChild(questionText);

        let answerList = document.createElement('ul');
        answerList.classList.add('answer-list');
        qst.answers.forEach(answer => {
            let answerItem = document.createElement('li');
            answerItem.classList.add('answers');
            answerItem.innerHTML = answer;
            answerList.appendChild(answerItem);
        })
        currentQuestion.appendChild(answerList);
    })
}
displayQuiz(questions);



























































/*function displayQuiz(){
    var currentQuestion = questions[questionIndexNo];
    questionIndexNo = questionIndexNo + 1;
    var questionElement = document.createElement('h2');
    questionElement.classList.add('questions');
    questionElement.textContent = questionIndexNo + ". " + currentQuestion.question;
    quizContainer.appendChild(questionElement);

    var answerList = document.createElement('ul');
    answerList.classList.add('answer-list');
    currentQuestion.answers.forEach(answer => {
        var answerElement = document.createElement('li');
        answerElement.classList.add('answers');
        answerElement.textContent = answer;
        answerList.appendChild(answerElement);
    })
    quizContainer.appendChild(answerList);
}*/

startQuiz();


















// startQuiz(questions);


















/*
    questions.forEach((q, index) => {
        // question
        var quizQuestion = document.createElement('h2');// creating a question
        quizQuestion.classList.add('questions');//add a class to question
        quizQuestion.textContent = `${index + 1}. ${q.question}`;// add text to question
        quizContainer.appendChild(quizQuestion);// add question to container

        // answers
        var answersContainer = document.createElement('ul');//creting a ul-list for answers
        answersContainer.classList.add('answer-list');
        q.answers.forEach((answer) => {
            var answerList = document.createElement('li')// creating answe list
            answerList.classList.add('answers');
            answerList.textContent = answer;
            answersContainer.appendChild(answerList);
        })
        quizContainer.appendChild(answersContainer);

    })
*/
