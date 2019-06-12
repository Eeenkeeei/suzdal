const formEl = document.querySelector('#findForm');
const findTextEl = document.querySelector('#textEl');
const resultEl = document.querySelector('#result');
const body = document.querySelector('body');
const questions = [
    {question: 'Суздаль гандон?', answer: 'да'},
    {question: 'его предмет хуйня?', answer: 'конеш'},
    {question: 'text3', answer: 'ans3'},
    {question: 'text4', answer: 'ans4'}
];

findTextEl.addEventListener('input', (evt)=>{
    const findText = findTextEl.value;
    if (findText.length < 1){
        return
    }
    let result = '';
    questions.map (question=> {
       if (question.question.toUpperCase().indexOf(findText.toUpperCase())+1){
           result += `<div style="margin-top: 1rem">Вопрос: ${question.question}, ответ: ${question.answer}</div>`
       }
    });

    resultEl.innerHTML = result
});

addEventListener("keydown", function(event) {
    if (event.which === 73) {
        if (body.className === 'invisible') {
            body.className = ''
        } else {
            body.className = 'invisible'
        }

    }
});


