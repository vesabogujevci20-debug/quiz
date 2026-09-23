const questions = [
  {
    question: "Which company created the Super Mario franchise?",
    options: ["Sony", "Nintendo", "Sega", "Microsoft"],
    correctAnswer: 1
  },
  {
    question: "What is the name of the main character in The Legend of Zelda?",
    options: ["Zelda", "Link", "Ganondorf", "Epona"],
    correctAnswer: 1
  },
  {
    question: "Which game features the character Master Chief?",
    options: ["Halo", "Destiny", "Doom", "Half-Life"],
    correctAnswer: 0
  },
  {
    question: "Which game is known for the term 'Victory Royale'?",
    options: ["Apex Legends", "Fortnite", "PUBG", "Overwatch"],
    correctAnswer: 1
  },
  {
    question: "Which company developed Minecraft?",
    options: ["Mojang", "Valve", "Epic Games", "Ubisoft"],
    correctAnswer: 0
  },
  {
    question: "Which character is the protagonist of the God of War series?",
    options: ["Dante", "Kratos", "Geralt", "Master Chief"],
    correctAnswer: 1
  },
  {
    question: "Which company makes the PlayStation consoles?",
    options: ["Microsoft", "Nintendo", "Sony", "Sega"],
    correctAnswer: 2
  },
  {
    question: "In Minecraft, which material is used to create a Nether Portal?",
    options: ["Diamond", "Obsidian", "Iron", "Gold"],
    correctAnswer: 1
  },
  {
    question: "Which game series features the character Link?",
    options: ["Final Fantasy", "The Legend of Zelda", "Pokémon", "Kingdom Hearts"],
    correctAnswer: 1
  },
  {
    question: "Which company developed the Sonic the Hedgehog series?",
    options: ["Sega", "Nintendo", "Capcom", "Electronic Arts"],
    correctAnswer: 0
  }
];

let currentQuestion = 0;
let score = 0;
let answerSelected = false;

const questionElement = document.getElementById("question");
const optionButtons = [
  document.getElementById("optionA"),
  document.getElementById("optionB"),
  document.getElementById("optionC"),
  document.getElementById("optionD")
];
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("nextBtn");
const resultElement = document.getElementById("result");
const darkModeBtn = document.getElementById("darkModeBtn");

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function loadQuestion() {
  const question = questions[currentQuestion];
  questionElement.textContent = question.question;

  optionButtons.forEach((button, index) => {
    button.textContent = question.options[index];
    button.disabled = false;
    button.style.backgroundColor = "";
    button.onclick = () => checkAnswer(index);
  });

  feedbackElement.textContent = "";
  answerSelected = false;
}

function checkAnswer(selectedAnswer) {
  if (answerSelected) return;
  answerSelected = true;

  const correctAnswer = questions[currentQuestion].correctAnswer;

  if (selectedAnswer === correctAnswer) {
    score++;
    feedbackElement.textContent = "Correct!";
    feedbackElement.style.color = "green";
    optionButtons[selectedAnswer].style.backgroundColor = "lightgreen";
  } else {
    feedbackElement.textContent = "Wrong!";
    feedbackElement.style.color = "red";
    optionButtons[selectedAnswer].style.backgroundColor = "lightcoral";
    optionButtons[correctAnswer].style.backgroundColor = "lightgreen";
  }

  optionButtons.forEach(button => {
    button.disabled = true;
  });
}

nextButton.addEventListener("click", () => {
  if (!answerSelected) {
    feedbackElement.textContent = "Please select an answer first.";
    feedbackElement.style.color = "orange";
    return;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
});

function showResults() {
  document.getElementById("quiz").style.display = "none";
  resultElement.innerHTML = `
    <h2>Quiz Finished!</h2>
    <p>You scored ${score} out of ${questions.length}.</p>
    <div class="result-actions">
      <button class="btn" id="restartBtn">Play Again</button>
      <a href="mainpage.html" class="btn btn-secondary">Return to Main Page</a>
    </div>
  `;
  document.getElementById("restartBtn").addEventListener("click", restartQuiz);
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  answerSelected = false;
  resultElement.innerHTML = "";
  document.getElementById("quiz").style.display = "block";
  loadQuestion();
}

if (darkModeBtn) {
  darkModeBtn.addEventListener("click", toggleDarkMode);
}

document.addEventListener("DOMContentLoaded", loadQuestion);