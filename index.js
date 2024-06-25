const questions = [
    {
        question: "JavaScript supports",
        choices: ["Functions", "XHTML", "CSS", "HTML"],
        answer: "Functions"
    },
    {
        question: "Which language is used for styling web pages?",
        choices: ["HTML", "JQuery", "CSS", "XML"],
        answer: "CSS"
    },
    {
        question: "Which is not a JavaScript Framework?",
        choices: ["Python Script", "JQuery", "Django", "NodeJS"],
        answer: "Django"
    },
    {
        question: "Which is used for Connect To Database?",
        choices: ["PHP", "HTML", "JS", "All"],
        answer: "PHP"
    },
    {
        question: "JavaScript is a",
        choices: ["Language", "Programming Language", "Development", "All"],
        answer: "Programming Language"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    document.getElementById("choice0").innerText = currentQuestion.choices[0];
    document.getElementById("choice1").innerText = currentQuestion.choices[1];
    document.getElementById("choice2").innerText = currentQuestion.choices[2];
    document.getElementById("choice3").innerText = currentQuestion.choices[3];
    document.getElementById("progress").innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

function checkAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.choices[answer] === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    loadQuestion();
}

function showResults() {
    const percentage = (score / questions.length) * 100;
    const resultsHTML = `
        <h1>Result</h1>
        <h2>Your score: ${score} out of ${questions.length}</h2>
        <h2>Percentage: ${percentage}%</h2>
    `;
    document.getElementById("quiz").innerHTML = resultsHTML;
}

document.getElementById("btn0").onclick = () => checkAnswer(0);
document.getElementById("btn1").onclick = () => checkAnswer(1);
document.getElementById("btn2").onclick = () => checkAnswer(2);
document.getElementById("btn3").onclick = () => checkAnswer(3);

loadQuestion();
