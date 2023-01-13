
// globals 

// current question
let questionNum = 1;
// display next
let indexNum = 0;

// questions array

let quizQuestions = [

    {
        question: "What does JSON stand for ?",
        optionA: "Java Script Object Notation",
        optionB: "Javascript Standard Object Notation",
        optionC: "Javascript Sets Off Noobs",
        optionD: "Javascript Store Options Now",
        answer: "optionA"
    },

    {
        question: "How do you import a javascript file into your html ?",
        optionA: "link href= ...",
        optionB: "script url= ...",
        optionC: "script src= ...",
        optionD: "link url= ...",
        answer: "optionC"
    },

    {
        question: "Which one of these data types is NOT a primitive ?",
        optionA: "number",
        optionB: "object",
        optionC: "string",
        optionD: "undefined",
        answer: "optionB"
    },

    {
        question: "How would you write an array ?",
        optionA: "let someArray = [1,'2','three']",
        optionB: "const = array[1,2,3]",
        optionC: "let = someArray('1','2','3')",
        optionD: "let = someArray[1,2,3]",
        answer: "optionA"
    },

    {
        question: "Why would you use a function over a plain if-else ?",
        optionA: "Que?",
        optionB: "A function does something more",
        optionC: "A function can be called whenever you need it",
        optionD: "A function is immutable, thus protecting the if-else",
        answer: "optionC"
    },

    {
        question: "How do we write an if statement ?",
        optionA: "if {doThis} {else} doThat;",
        optionB: "if (someVar == someValue) { doThis; }",
        optionC: "if {(someVar != someValue) doThis; }",
        optionD: "if someVar === someValue; { doThis }",
        answer: "optionB"
    },

    {
        question: "If you were to use arrayName.length, how would you access the second item ?",
        optionA: "arrayName[1]",
        optionB: "arrayName[-1]",
        optionC: "arrayName[2]",
        optionD: "arrayName[0][2]",
        answer: "optionA"
    },

    {
        question: "If you wanted to store a variable that won't change what would you use ?",
        optionA: "concst",
        optionB: "let",
        optionC: "const",
        optionD: "var",
        answer: "optionC"
    },

    {
        question: "How would you print something in JavaScript ?",
        optionA: "console.log('print something')",
        optionB: "print.log 'this'",
        optionC: "log...this!!",
        optionD: "console.log[print me]",
        answer: "optionA"
    },

    {
        question: "If your code has a typo error, what is this called ?",
        optionA: "Logic error",
        optionB: "Bad eyesight",
        optionC: "SyntaxError",
        optionD: "The computer made me do it",
        answer: "optionC"
    },

    {
        question: "What is the purpose of a switch statement ?",
        optionA: "Saves time when switching between variables",
        optionB: "Makes functions reusable",
        optionC: "Switches variables on or off",
        optionD: "Quicker than multiple if else statements",
        answer: "optionD"
    },

    {
        question: "What's wrong with this line of code: const userGuess === Number(guessField.value); ?",
        optionA: "Incorrect assignment operator",
        optionB: "Dunno",
        optionC: "Missing {} brackets",
        optionD: "Should be let not a const",
        answer: "optionA"
    },

    {
        question: "What is a const variable ?",
        optionA: "A box of feather dusters",
        optionB: "A container that holds an immutable value",
        optionC: "A variable that changes form, like an amoeba",
        optionD: "A container with a mutable value",
        answer: "optionB"
    },

]

// shuffle feature 
let shuffledArray = [];

function startShuffle() {
    // iterate over array
    for (let i = 0; i < shuffledArray.length; i++) {
        // if array is <= 9
        if (shuffledArray.length <= 9) {
            // generate random * array length
            let r = quizQuestions[Math.floor(Math.random()
                * quizQuestions.length)]
            // add a new random question each pass 
            // if the array is empty
            if (!shuffledArray.includes(r)) {
                // push a new question to it
                shuffledArray.push(r);

            }
        }
    }
}

// display next question in DOM
function nextQuestion(i) {
    // call the shuffle
    startShuffle();
    // get current by index 
    let current =  shuffledArray[i]
    // build the html elements 
    // current Q number
    document.querySelector('.QNumber').innerHTML = questionNum;
    // the question field
    document.querySelector('.next-question').innerHTML = current.question;
    // 4 multiple choice box answers
    document.querySelector('.optionA').innerHTML = current.optionA;
    document.querySelector('.optionB').innerHTML = current.optionB;
    document.querySelector('.optionC').innerHTML = current.optionC;
    document.querySelector('.optionD').innerHTML = current.optionD;
}

// grab answer 
function grabAnswer() {
    // assign current question
    // grab current 
    let current = shuffledArray[indexNum];
    // grab correct answer 
    let currentAnswer = current.answer;
    // grab all options within html
    const possAnswer = document.querySelector('option');
    // 

}
