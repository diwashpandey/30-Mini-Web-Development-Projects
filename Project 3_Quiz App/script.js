var DATA = {
    "question0": {
        "question": "What is the closest planet to the sun?",
        "options": {
            "option 0": "Mercury",
            "option 1": "Earth",
            "option 2": "Satrun",
            "option 3": "All of the above"
        }
    },
    "question1": {
        "question": "What is 100 + 100 equales to",
        "options": {
            "option 0": "500",
            "option 1": "200",
            "option 2": "800",
            "option 3": "-50000"
        }
    },
    "question2": {
        "question": "Which programming language is widely used for Font-End Web Development?",
        "options": {
            "option 0": "Python",
            "option 1": "English Language",
            "option 2": "Java Script",
            "option 3": "HTML"
        }
    },
    "question3": {
        "question": "Which programming language has the most libraries for Aritficial Intelligence?",
        "options": {
            "option 0": "JavaScript",
            "option 1": "Python",
            "option 2": "C++",
            "option 3": "None of the above"
        }
    },
    "question4": {
        "question": "What is the widely used programming for DSA?",
        "options": {
            "option 0": "C++",
            "option 1": "Python",
            "option 2": "JavaScript",
            "option 3": "Go"
        }
    }
}

const inputs = document.querySelectorAll('input')
const questionBox = document.querySelector("h2")
const options = document.querySelectorAll("p")
const nextBtn = document.querySelector("button")

var usedNums = []
var questionNum = 0;
var capacity = 0;
var SCORE = 0;


function endgame(){
    document.querySelector("h2").style.display = "none"
    document.querySelector("ul").style.display = "none"
    document.querySelector(".results").style.display = "flex"
    document.querySelector("span").innerHTML = SCORE
    nextBtn.style.display = "none"

}

// Random Question Number generator
function getQuestionNum() {
    const randomNum = Math.floor(Math.random() * 5)

    if(capacity<5){
        if (usedNums.includes(randomNum)) {
            getQuestionNum();
        }
        else {
            usedNums.push(randomNum)
            questionNum = randomNum;
            capacity = capacity + 1;

        }
    }
    else(
        endgame()
    )
}

function resetElements(){
    for (let input of inputs) {
        input.removeAttribute("disabled")
        input.parentElement.style.backgroundColor = "rgb(240, 240, 240)"
    }
}

// Will updata question in HTML
function builter() {
    resetElements()
    getQuestionNum()
    const data = DATA[`question${questionNum}`]
    questionBox.innerHTML = data.question;

    for (let i = 0; i < 4; i++) {
        options[i].innerHTML = data.options[`option ${i}`]
    }
}

function checkAnswer(selected) {
    switch (questionNum) {
        case 0:
            if (selected == 'option_0') {
                return true
            }
            else {
                return false
            }

        case 1:
            if (selected == 'option_1') {
                return true
            }
            else {
                return false
            }

        case 2:
            if (selected == 'option_2') {
                return true
            }
            else {
                return false
            }

        case 3:
            if (selected == 'option_1') {
                return true
            }
            else {
                return false
            }
        case 4:
            if (selected == 'option_0') {
                return true
            }
            else {
                return false
            }
        default:
            alert("Sorry! Some error Occured")
            break;

    }
}

// Will be called when user selects the answer
function getSelected() {
    const selectedValue = document.querySelector('input:checked');
    const selectedOptionNum = document.querySelector('input:checked+p').className;
    nextBtn.style.display = "block"


    for (input of inputs) {
        input.setAttribute("disabled", true)
    }

    if (checkAnswer(selectedOptionNum)) {
        SCORE = SCORE+1;
        selectedValue.parentElement.style.backgroundColor = "rgb(99, 206, 0)"
    }
    else {
        selectedValue.parentElement.style.backgroundColor = "rgb(206, 58, 0)"
    }

}



function start() {
    document.querySelector("h2").style.display = "block"
    document.querySelector("ul").style.display = "block"
    document.querySelector(".start").remove()
    builter()
}
