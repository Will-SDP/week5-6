const quizForm = document.getElementById('quiz');
quizForm.addEventListener('submit', (event) => {
    event.preventDefault()    
    resetAnswers()
    userAnswer = quizForm.childNodes[3].value    
    answer = 1969
    if (userAnswer == answer){
        document.getElementById('correct').classList.remove('hide')
    } else {
        document.getElementById('incorrect').classList.remove('hide')
    }
});

function resetAnswers(){
    document.getElementById('correct').classList.add('hide')
    document.getElementById('incorrect').classList.add('hide')
}