const quizData=
[
  {
    question:"What is the capital of France?",
    options: [
      "London",
      "Paris",
      "Berlin",
      "Rome",
    ],
    correct:1 ,
  },

  {
    question:"In which year did World War II end?",
    options: [
      "1940",
      "1945",
      "1950",
      "1939",
    ],
    correct: 1,
  },

  {
    question:" What is the chemical symbol for gold?",
    options: [
      "Ag",
      "Au",
      "Fe",
      "Hg",
    ],
    correct: 1,
  },

  {
    question:"Which planet is known as the Red Planet?",
    options: [
      "Venus",
      "Mars",
      "Jupiter",
      "saturn",
    ],
    correct: 1,
  },

  {
    question:"What is the largest mammal in the world?",
    options: [
      "Elephant",
      "Blue Whale",
      "Giraffe",
      "Gorilla",
    ],
    correct: 1,
  },
];
const quiz = document.querySelector('.quiz');
const btnElm = document.querySelectorAll('.btn');
const questionElm = document.getElementById('question');
const nextBtn = document.getElementById('next-btn');
let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
  const { question, options } = quizData[currentQuiz];
  questionElm.innerHTML = question;
  options.forEach((curOption, index) => (btnElm[index].innerHTML = curOption));
  deselectedAnswer();
};

const getSelectedOption = () => {
  return Array.from(btnElm).findIndex((curElm) => curElm.checked);
};

const deselectedAnswer = () => {
  btnElm.forEach((curElm) => (curElm.checked = false));
};

const updateScore = () => {
  const selectedOptionIndex = getSelectedOption();
  if (selectedOptionIndex === quizData[currentQuiz].correct) {
    score = score + 1;
  }
};



nextBtn.addEventListener('click', () => {
  updateScore();
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `
    <div class='result'>
      <h2> 🏆 Your Score ${score}/${quizData.length} Correct Answers</h2>
      <p>Congratulations on completing the quiz</p>
      <br>
      <button class="reload-button" onclick="location.reload()" style="background-color: #4CAF50; /* Green */
      border: none;
      color: white;
      padding: 10px 25px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 2px 1px;
      cursor: pointer;
      display: block;
      border-radius: 8px;">Play Again 🔃</button>
    </div>
  
    `;
  }
});

// Event listener for highlighting the selected option
btnElm.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    deselectedAnswer();
    btn.checked = true;
  });
});

loadQuiz();
