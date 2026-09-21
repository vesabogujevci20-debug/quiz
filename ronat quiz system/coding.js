// ==========================================
// CODING QUESTIONS
// ==========================================

const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "Home Tool Markup Language"
        ],
        correctAnswer: 0
    },

    {
        question: "Which language is used to style web pages?",
        options: [
            "JavaScript",
            "Python",
            "CSS",
            "Java"
        ],
        correctAnswer: 2
    },

    {
        question: "Which language is primarily used to add interactivity to web pages?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        correctAnswer: 2
    },

    {
        question: "Which symbol is used for a single-line comment in JavaScript?",
        options: [
            "//",
            "##",
            "<!--",
            "**"
        ],
        correctAnswer: 0
    },

    {
        question: "Which method is commonly used to print a message to the browser console?",
        options: [
            "console.log()",
            "console.print()",
            "print.console()",
            "browser.log()"
        ],
        correctAnswer: 0
    },

    {
        question: "Which data type can contain true or false?",
        options: [
            "String",
            "Number",
            "Boolean",
            "Array"
        ],
        correctAnswer: 2
    },

    {
        question: "Which operator is used to assign a value to a variable?",
        options: [
            "==",
            "=",
            "===",
            "!="
        ],
        correctAnswer: 1
    },

    {
        question: "Which HTML tag is used to create a paragraph?",
        options: [
            "<h1>",
            "<div>",
            "<p>",
            "<paragraph>"
        ],
        correctAnswer: 2
    },

    {
        question: "Which keyword is used to declare a function in JavaScript?",
        options: [
            "function",
            "func",
            "define",
            "method"
        ],
        correctAnswer: 0
    },

    {
        question: "Which operator checks both value and type in JavaScript?",
        options: [
            "=",
            "==",
            "===",
            "!="
        ],
        correctAnswer: 2
    }
];


// ==========================================
// QUIZ VARIABLES
// ==========================================

let currentQuestion = 0;
let score = 0;
let answerSelected = false;


// ==========================================
// GET HTML ELEMENTS
// ==========================================

const questionElement =
    document.getElementById("question");

const optionButtons = [
    document.getElementById("optionA"),
    document.getElementById("optionB"),
    document.getElementById("optionC"),
    document.getElementById("optionD")
];

const feedbackElement =
    document.getElementById("feedback");

const nextButton =
    document.getElementById("nextBtn");

const resultElement =
    document.getElementById("result");


// ==========================================
// LOAD QUESTION
// ==========================================

function loadQuestion() {

    const question =
        questions[currentQuestion];


    // Display the question
    questionElement.textContent =
        question.question;


    // Display the four options
    optionButtons.forEach((button, index) => {

        button.textContent =
            question.options[index];


        // Enable button
        button.disabled = false;


        // Reset button color
        button.style.backgroundColor = "";


        // Connect button to answer function
        button.onclick = function () {

            checkAnswer(index);

        };
    });


    // Clear previous feedback
    feedbackElement.textContent = "";


    // Allow the player to answer
    answerSelected = false;
}


// ==========================================
// CHECK ANSWER
// ==========================================

function checkAnswer(selectedAnswer) {

    // Prevent multiple answers
    if (answerSelected) {
        return;
    }


    answerSelected = true;


    const correctAnswer =
        codingQuestions[currentQuestion].correctAnswer;


    // --------------------------------------
    // CORRECT
    // --------------------------------------

    if (selectedAnswer === correctAnswer) {

        score++;


        feedbackElement.textContent =
            "Correct!";

        feedbackElement.style.color =
            "green";


        // Make selected answer green
        optionButtons[selectedAnswer]
            .style.backgroundColor =
            "lightgreen";
    }


    // --------------------------------------
    // WRONG
    // --------------------------------------

    else {

        feedbackElement.textContent =
            "Wrong!";

        feedbackElement.style.color =
            "red";


        // Make selected answer red
        optionButtons[selectedAnswer]
            .style.backgroundColor =
            "lightcoral";


        // Show correct answer
        optionButtons[correctAnswer]
            .style.backgroundColor =
            "lightgreen";
    }


    // Disable all answer buttons
    optionButtons.forEach(button => {

        button.disabled = true;

    });
}


// ==========================================
// NEXT QUESTION
// ==========================================

nextButton.addEventListener("click", function () {

    // Make sure an answer was selected
    if (!answerSelected) {

        feedbackElement.textContent =
            "Please select an answer first.";

        feedbackElement.style.color =
            "orange";

        return;
    }


    // Move to the next question
    currentQuestion++;


    // Check if there are more questions
    if (
        currentQuestion <
        codingQuestions.length
    ) {

        loadQuestion();

    }

    // Quiz is finished
    else {

        showResults();

    }
});


// ==========================================
// SHOW RESULTS
// ==========================================

function showResults() {

    // Hide quiz
    document.getElementById("quiz")
        .style.display = "none";


    // Show result
    resultElement.innerHTML = `
        <h2>Quiz Finished!</h2>

        <p>
            You scored
            ${score}
            out of
            ${codingQuestions.length}.
        </p>

        <button onclick="restartQuiz()">
            Play Again
        </button>
    `;
}


// ==========================================
// RESTART QUIZ
// ==========================================

function restartQuiz() {

    // Reset question
    currentQuestion = 0;


    // Reset score
    score = 0;


    // Reset answer state
    answerSelected = false;


    // Clear result
    resultElement.innerHTML = "";


    // Show quiz
    document.getElementById("quiz")
        .style.display = "block";


    // Load first question
    loadQuestion();
}


// ==========================================
// START QUIZ
// ==========================================

loadQuestion();
