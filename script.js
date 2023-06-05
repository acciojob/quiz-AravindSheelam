//your JS code here. If required.
const questions = [
    {
        question: 'Which language runs in a web browser?',
        options: ['Java', 'C', 'Python', 'JavaScript'],
        correctAnswer: 'JavaScript'
    },
	{
        question: 'What does CSS stand for?',
        options: ['Central Style Sheets', 'Cascading Style Sheets', 'Cascading Simple Sheets', 'Cars SUVs Sailboats'],
        correctAnswer: 'ascading Style Sheets'
    },
	{
        question: 'What does HTML stand for?',
        options: ['Hypertext Markup Language', 'Hypertext Markdown Language', 'Hyperloop Machine Language', 'Helicopters Terminals Motorboats Lamborginis'],
        correctAnswer: 'Hypertext Markup Language'
    },
	{
        question: 'What year was JavaScript launched?',
        options: ['1996', '1995', '1994', 'none of the above'],
        correctAnswer: '1995'
    },
    // Add more questions here
];
let currentQuestionIndex = 0;

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionElement = document.createElement('input');
        optionElement.type = 'radio';
        optionElement.name = 'option';
        optionElement.value = option;
        optionElement.id = `option${index}`;

        const labelElement = document.createElement('label');
        labelElement.htmlFor = `option${index}`;
        labelElement.innerText = option;

        optionsContainer.appendChild(optionElement);
        optionsContainer.appendChild(labelElement);
    });
}

displayQuestion();