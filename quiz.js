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
  
let quizContainer = document.getElementById("quiz-container");
let qst = document.getElementById('questions');
let answerList = document.getElementById('answer-list');
// let quizButton = document.getElementById("quiz-btn");

//init values
let currentQuestionIndex = 0;
let score = 0;

let onLoad = () => {
  score = 0;
  currentQuestionIndex = 0
  let quizButton = document.createElement('button');
  quizButton.classList.add('quiz-btn');
  quizButton.innerHTML = 'Next';
  displayQuizQst();
}

let displayQuizQst = () => {
  let currentQuestionIndex = currentQuestionIndex + 1;
  let currentQuestion = questions[currentQuestionIndex];
  qst.innerHTML = currentQuestionIndex +'. '+ currentQuestion;
}

onLoad();