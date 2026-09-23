

const questions = [
    {
        questiona: "What is the capital city of France?",
        options: [
            "Paris",
            "Madrid",
            "Rome",
            "Berlin"
        ],
        correctAnswer: 0
    },

    {
        question: "Which is the largest continent by area?",
        options: [
            "Africa",
            "Asia",
            "Europe",
            "North America"
        ],
        correctAnswer: 1
    },

    {
        question: "Which ocean is the largest in the world?",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Pacific Ocean",
            "Arctic Ocean"
        ],
        correctAnswer: 2
    },

    {
        question: "What is the capital of Japan?",
        options: [
            "Kyoto",
            "Osaka",
            "Tokyo",
            "Hiroshima"
        ],
        correctAnswer: 2
    },

    {
        question: "Which country has the largest land area?",
        options: [
            "Canada",
            "China",
            "Russia",
            "United States"
        ],
        correctAnswer: 2
    },

    {
        question: "Which desert is the largest hot desert in the world?",
        options: [
            "Gobi Desert",
            "Sahara Desert",
            "Kalahari Desert",
            "Atacama Desert"
        ],
        correctAnswer: 1
    },

    {
        question: "What is the capital of Australia?",
        options: [
            "Sydney",
            "Melbourne",
            "Canberra",
            "Brisbane"
        ],
        correctAnswer: 2
    },

    {
        question: "Which mountain is the highest above sea level?",
        options: [
            "Mount Kilimanjaro",
            "Mount Everest",
            "K2",
            "Mount Elbrus"
        ],
        correctAnswer: 1
    },

    {
        question: "Which country is home to the city of Barcelona?",
        options: [
            "Portugal",
            "Italy",
            "Spain",
            "France"
        ],
        correctAnswer: 2
    },

    {
        question: "Which continent is Egypt primarily located in?",
        options: [
            "Asia",
            "Europe",
            "Africa",
            "South America"
        ],
        correctAnswer: 2
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

  
    if (answerSelected) {
        return;
    }

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
        feedbackElement.textContent = "Please select an answer.";
        feedbackElement.style.color = "orange";
        return;
    }

    currentQuestion++;

   
    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        showResult();
    }
});




function showResult() {

    document.getElementById("quiz").style.display = "none";

    resultElement.innerHTML = `
        <h2>Quiz Finished!</h2>
        <p>You scored ${score} out of ${questions.length}.</p>
        <button onclick="restartQuiz()">Restart Quiz</button>
    `;
}




function restartQuiz() {

    currentQuestion = 0;
    score = 0;

    resultElement.innerHTML = "";

    document.getElementById("quiz").style.display = "block";

    loadQuestion();
}



loadQuestion();
