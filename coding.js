

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


let currentQuestion = 0;
let score = 0;
let answerSelected = false;




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




function loadQuestion() {

    const question =
        questions[currentQuestion];


    questionElement.textContent =
        question.question;


    optionButtons.forEach((button, index) => {

        button.textContent =
            question.options[index];


        
        button.disabled = false;


        
        button.style.backgroundColor = "";


        
        button.onclick = function () {

            checkAnswer(index);

        };
    });



    feedbackElement.textContent = "";


   
    answerSelected = false;
}



function checkAnswer(selectedAnswer) {

   
    if (answerSelected) {
        return;
    }


    answerSelected = true;


    const correctAnswer =
        codingQuestions[currentQuestion].correctAnswer;



    if (selectedAnswer === correctAnswer) {

        score++;


        feedbackElement.textContent =
            "Correct!";

        feedbackElement.style.color =
            "green";


        
        optionButtons[selectedAnswer]
            .style.backgroundColor =
            "lightgreen";
    }


    

    else {

        feedbackElement.textContent =
            "Wrong!";

        feedbackElement.style.color =
            "red";


       
        optionButtons[selectedAnswer]
            .style.backgroundColor =
            "lightcoral";


       
        optionButtons[correctAnswer]
            .style.backgroundColor =
            "lightgreen";
    }


   
    optionButtons.forEach(button => {

        button.disabled = true;

    });
}



nextButton.addEventListener("click", function () {

   
    if (!answerSelected) {

        feedbackElement.textContent =
            "Please select an answer first.";

        feedbackElement.style.color =
            "orange";

        return;
    }


    
    currentQuestion++;


   
    if (
        currentQuestion <
        codingQuestions.length
    ) {

        loadQuestion();

    }

   
    else {

        showResults();

    }
});




function showResults() {

  
    document.getElementById("quiz")
        .style.display = "none";


    
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




function restartQuiz() {

  
    currentQuestion = 0;


    
    score = 0;


    
    answerSelected = false;


   
    resultElement.innerHTML = "";


  
    document.getElementById("quiz")
        .style.display = "block";


   
    loadQuestion();
}



loadQuestion();
