
function startQuiz() {

    pageSwitch();
}

function pageSwitch() {
    const startPage = document.getElementById('startPage');
    const quizPage = document.getElementById('quizPage');
    const resultPage = document.getElementById('resultPage');
    const errorMessage = document.getElementById('errorMessage');

    // Add this before your if statement to check the actual values
    console.log("Display value check");
    console.log('startPage display:', window.getComputedStyle(startPage).display);
    console.log('quizPage display:', window.getComputedStyle(quizPage).display);
    console.log('resultPage display:', window.getComputedStyle(resultPage).display);

    // Check the display property of each page and switch accordingly
    // !== "none" checkt voor alle mogelijke display opties i.p.v. alleen "block" met === "block"
    if (window.getComputedStyle(startPage).display !== "none") {
        startPage.style.display = "none";
        quizPage.style.display = "block";
    }   // ^^^ Check if startPageuizPage is displayed ^^^
    else if (window.getComputedStyle(quizPage).display !== "none") {
        quizPage.style.display = "none";
        resultPage.style.display = "block";
    }   // ^^^ Check if quizPage is displayed ^^^
    else if (window.getComputedStyle(resultPage).display !== "none") {
        resultPage.style.display = "none";
        startPage.style.display = "block";
    }   // ^^^ Check if resultPage is displayed ^^^
    else {
        errorMessage.style.display = "block";
    }   // ^^^ If no pages are displayed, show error message ^^^
}