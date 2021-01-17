const formEl = document.querySelector('#findForm');
const findTextEl = document.querySelector('#textEl');
const resultEl = document.querySelector('#result');
const body = document.querySelector('body');
const questions = [
    {question: 'Какие процедуры обработки данных могут отображаться в схеме технологического процесса?', answer: 'Автоматизированная процедура, Процедура, выполняемая без средств автоматизации, Автоматическая процедура'},
    {question: 'Задана схема отношения «Расписание экзаменов одной сессии» «Номер группы» (НГ)\n' +
            '«Наименование дисциплины» (НД)\n' +
            '«Дата экзамена» (ДЭ)\n' +
            'Какие вторичные ключи необходимо использовать при навигации, если в оперативной памяти содержатся значения НД и ДЭ?',
        answer: 'НД, ДЭ'},
    {question: 'Укажите свойства И-ИЛИ графа', answer: 'Внутренней вершине всегда соответствует сложный шаг диалога \n Дуги определяют состав действий шага диалога'},
    {question: 'Рекомендуется входные данные указывать', answer: 'Слева от процедуры'},
    {question: 'Для каждой информационной процедуры в схеме обязательно указываются', answer: 'Выходные данные, Входные данные, Носители информации'},
    {question: 'Укажите свойства И-ИЛИ графа', answer: ' Корень и каждая внутренняя вершина помечается символами И либо ИЛИ\n' +
            ' Терминальные вершины (стоки сети) – простые шаги диалога\n Вершина помечается И, если все действия шага должны успешно\n' +
            '  выполниться\n' +
            ' Вершина помечается ИЛИ, если для завершения шага может выполниться\n' +
            '  любая комбинация составляющих шаг действий'},
    {question: 'Какой диаметр символа соединителя в схеме технологического процесса является допустимым, если размер а равен 20 мм и b равен 30 мм?', answer: '10'},
    {question: 'Укажите свойства И-ИЛИ графа, определяющего структуру диалога',
        answer: 'Сеть с одним корнем\n' +
            ' Граф И-ИЛИ ориентированным \n' +
            ' Один или несколько стоков, терминальных вершин\n'},
    {question: 'В течение начальной фазы диалога выполняются следующие действия', answer: 'Определяется тип решаемой задачи\n' +
            ' Определяется имя участника'},
    {question: 'Какое минимальное расстояние в мм должно быть между стрелками и символами в соответствии со стандартами в схеме технологического процесса?', answer: '5'},
    {question: 'Задана схема отношения «Расписание экзаменов одной сессии» «Номер группы» (НГ)\n' +
            '«Наименование дисциплины» (НД)\n' +
            '«Дата экзамена» (ДЭ)\n' +
            'Какие вторичные ключи необходимо использовать при навигации?',
        answer: 'НД\n' +
            ' ДЭ\n' +
            ' НГ'},
    {question: 'Какая ширина начального и конечного символа в схеме технологического процесса является допустимым, если размер а равен 20 мм и b равен 30 мм?',
        answer: '30'},
    {question: 'Какая высота начального и конечного символа в схеме технологического процесса является допустимым, если размер а равен 20 мм и b равен 30 мм?',
        answer: '10'},
    {question: 'Укажите порядок этапов проектирования пользовательского интерфейса',
        answer: '7 - Оценка пользовательского интерфейса\n' +
            ' 6 - Размещение графических объектов представления информации\n' +
            ' 5 - Выбор и проектирование графических объектов представления информации\n' +
            ' 4 - Определение содержания сообщений и отображаемой информации\n' +
            ' 1 - Определение функций выполняемых пользователем\n' +
            ' 3 - Определение сценария диалога\n' +
            ' 2 - Разработка структуры диалога\n'},
    {question: 'Какая последовательность в определении способов доступа',
        answer: 'Доступ по ПК \n Доступ по ВК\n' +
            'Последовательный доступ'},
    {question: 'Каждый фрагмент, расположенный на отдельной схеме технологического процесса, может иметь', answer: 'Только один символ начала процесса\n' +
            ' Один или несколько символов завершения процесса'},
    {question: '.В течение заключительно фазы диалога выполняются следующие действия',
        answer: 'Сообщаются о ресурсах, затраченных на решение задачи \n Сообщаются причины прерывания решения задачи'},
    {question: 'Кратные какому количеству мм должны быть базовые размеры а и b в соответствии со стандартами в схеме технологического процесса?',
        answer: '5'},
    {question: 'Диаметр соед', answer: ''},
    {question: 'Охарактеризуйте содержание документа "постановка задачи ведения бд"', answer: '' +
            '1. Название задачи.\n' +
            '2. Список событий и частоты их наступления.\n' +
            '3. Функции задачи (с выполнением каждой функции связано наступление отдельного события).\n' +
            '4. Список отношений логической модели базы данных затрагиваемых задачей (подсхема базы данных).\n' +
            '5. Список документов с исходных данными изменений БД (по каждой функции задачи).\n' +
            '6. Источники документов с исходными данными изменений БД.\n' +
            '7. Частоты выполнения задачи и отдельных функций.\n' +
            '8. Трудоемкости выполнения отдельных функций задачи и выполнения задачи в течение заданного периода времени.'}
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


