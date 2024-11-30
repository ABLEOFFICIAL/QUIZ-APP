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

//init values
let currentQuestionIndex = 0;
let score = 0;

let onLoad = () => {
  score = 0;
  currentQuestionIndex = 0
  displayQuizQst();
}

let displayQuizQst = () => {
  // Clear previous content
  qst.innerHTML = "";
  answerList.innerHTML = "";
  let quizButton = document.querySelector(".quiz-btn");
  if (quizButton) quizButton.remove(); 

  //to display the questions
  let qstNo = currentQuestionIndex + 1;
  let currentQuestion = questions[currentQuestionIndex];
  qst.innerHTML = qstNo +'. '+ currentQuestion.question;

  //clearing previous output
  answerList.innerHTML = '';

  //displaying answers
  currentQuestion.answers.forEach(answer => {
    let answerElement = document.createElement('li');
    answerElement.classList.add('answers');
    answerElement.textContent = answer;
    answerList.appendChild(answerElement);

    //select answers
    answerElement.addEventListener('click', (e) => {
      e.target.style.backgroundColor = '#6dfa3e';
    //check if answer is correct
      let correctAnswer = currentQuestion.correctAnswer;
      let selectedAnswer = e.target.textContent;
      if (selectedAnswer === correctAnswer) {
        score++;
      }

      let quizButton = document.createElement('button');
      quizButton.classList.add('quiz-btn');
      quizButton.innerHTML = 'Next';
      quizContainer.appendChild(quizButton);

      //add eventListener to button
       quizButton.addEventListener('click', () => {

        //move to next question
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          displayQuizQst();
        }else{
          displayResult();
        }
      })
    })
  })

  // //add eventListener to button
  // let quizButton = document.querySelector('.quiz-btn');
  // quizButton.addEventListener('click', () => {

  //   //move to next question
    // currentQuestionIndex++;
    // if (currentQuestionIndex < questions.length) {
    //   displayQuizQst();
    // }else{
    //   displayResult();
  //   }
  // })
  function displayResult() {
    //display result
    let result = document.createElement('div');
    result.classList.add('result');
    result.innerHTML = `Your score is ${score} out of ${questions.length}`;
    quizContainer.appendChild(result);
  }
}

onLoad();