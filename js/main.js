
function startQuiz() {

    pageSwitch();
}

function pageSwitch() {
    const startPage = document.getElementById('startPage');
    const quizPage = document.getElementById('quizPage');
    const resultPage = document.getElementById('resultPage');
    const errorMessage = document.getElementById('errorMessage');

    if (startPage.style.display === "block") {
        startPage.style.display = "none";
        quizPage.style.display = "block";
    }
    else if (quizPage.style.display === "block") {
        quizPage.style.display = "none";
        resultPage.style.display = "block";
    }
    else if (resultPage.style.display === "block") {
        resultPage.style.display = "none";
        startPage.style.display = "block";
    }
    else {
        errorMessage.style.display = "block";
    }
}